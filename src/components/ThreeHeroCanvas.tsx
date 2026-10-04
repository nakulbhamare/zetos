import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050308, 0.08);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 6.5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    currentMount.appendChild(renderer.domElement);

    // Group for all rotating objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Outer Icosahedron Wireframe Structure (Tech mesh)
    const outerGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const wireframeGeo = new THREE.WireframeGeometry(outerGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x9333ea,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const wireframeMesh = new THREE.LineSegments(wireframeGeo, lineMat);
    mainGroup.add(wireframeMesh);

    // 2. Translucent Glass-like Faceted Hull
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x2e0854,
      emissive: 0x18052e,
      emissiveIntensity: 0.4,
      roughness: 0.15,
      metalness: 0.2,
      transmission: 0.6,
      ior: 1.5,
      transparent: true,
      opacity: 0.35,
      flatShading: true,
      side: THREE.DoubleSide
    });
    const glassMesh = new THREE.Mesh(outerGeo, glassMat);
    mainGroup.add(glassMesh);

    // 3. Inner Glowing Energetic Core (Data Core)
    const coreGeo = new THREE.OctahedronGeometry(0.85, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x8a2be2,
      emissive: 0xc084fc,
      emissiveIntensity: 0.8,
      wireframe: false,
      roughness: 0.3,
      metalness: 0.8
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 4. Orbital Tech Rings
    const ringGeo = new THREE.TorusGeometry(2.3, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 4;
    ring2.scale.set(1.15, 1.15, 1.15);
    mainGroup.add(ring2);

    // 5. Surrounding Floating Particle Galaxy
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      scales[i] = Math.random() * 0.04 + 0.01;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xc084fc,
      size: 0.04,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x1a0933, 2.5);
    scene.add(ambientLight);

    const pointLightPurple = new THREE.PointLight(0x8a2be2, 5, 20);
    pointLightPurple.position.set(3, 4, 4);
    scene.add(pointLightPurple);

    const pointLightViolet = new THREE.PointLight(0xc084fc, 4, 15);
    pointLightViolet.position.set(-4, -3, 2);
    scene.add(pointLightViolet);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!currentMount) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth lerp for mouse interaction
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Subtle rotation & tilt
        mainGroup.rotation.y = elapsedTime * 0.15 + targetX * 0.6;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.2 + targetY * 0.4;
        mainGroup.rotation.z = Math.cos(elapsedTime * 0.12) * 0.1;

        // Pulse core
        const pulse = 1 + Math.sin(elapsedTime * 2) * 0.06;
        coreMesh.scale.set(pulse, pulse, pulse);

        // Counter-rotate rings
        ring1.rotation.z = -elapsedTime * 0.25;
        ring2.rotation.z = elapsedTime * 0.2;

        // Particle subtle drift
        particles.rotation.y = -elapsedTime * 0.03;
        particles.rotation.x = Math.sin(elapsedTime * 0.05) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }

      // Dispose Three.js objects
      outerGeo.dispose();
      wireframeGeo.dispose();
      coreGeo.dispose();
      ringGeo.dispose();
      particleGeo.dispose();
      lineMat.dispose();
      glassMat.dispose();
      coreMat.dispose();
      ringMat.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90 transition-opacity duration-1000"
      aria-hidden="true"
      style={{ filter: 'drop-shadow(0 0 45px rgba(138, 43, 226, 0.25))' }}
    />
  );
};
