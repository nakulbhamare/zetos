import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeroCanvasProps {
  activeStageIndex?: number;
}

export const ThreeHeroCanvas: React.FC<ThreeHeroCanvasProps> = ({ activeStageIndex = 0 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef(activeStageIndex);

  useEffect(() => {
    stageRef.current = activeStageIndex;
  }, [activeStageIndex]);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050308, 0.07);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      42,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    currentMount.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central ZETOS Tech Prism
    const centralGeo = new THREE.OctahedronGeometry(1.2, 0);
    const centralMat = new THREE.MeshPhysicalMaterial({
      color: 0x8a2be2,
      emissive: 0x581c87,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.8,
      transmission: 0.7,
      ior: 1.6,
      transparent: true,
      opacity: 0.85,
      flatShading: true
    });
    const centralMesh = new THREE.Mesh(centralGeo, centralMat);
    rootGroup.add(centralMesh);

    // Central Wireframe Edge
    const wireGeo = new THREE.WireframeGeometry(centralGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    centralMesh.add(wireMesh);

    // 2. Orbital System Rings (representing continuous iteration & scale)
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.018, 16, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat);
    ring1.rotation.x = Math.PI / 3.2;
    rootGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.1, 0.015, 16, 120);
    const ring2 = new THREE.Mesh(ring2Geo, ringMat);
    ring2.rotation.y = Math.PI / 3.5;
    ring2.rotation.x = -Math.PI / 4;
    rootGroup.add(ring2);

    // 3. Floating 3D Product Nodes (representing Idea, UI, Code, AI, Analytics, Scale)
    const productNodesGroup = new THREE.Group();
    rootGroup.add(productNodesGroup);

    // Node Positions arranged in 3D perspective around Zetos
    const nodeConfigs = [
      { pos: new THREE.Vector3(-2.8, 1.4, 0.5), color: 0xc084fc, size: [1.2, 0.75] }, // 01 Idea
      { pos: new THREE.Vector3(2.6, 1.6, -0.4), color: 0x8a2be2, size: [0.8, 1.3] },  // 02 Mobile UI
      { pos: new THREE.Vector3(-2.6, -1.5, -0.2), color: 0x9333ea, size: [1.4, 0.85] }, // 03 Code / System
      { pos: new THREE.Vector3(2.7, -1.3, 0.6), color: 0xa855f7, size: [1.3, 0.8] },  // 04 AI Intelligence
      { pos: new THREE.Vector3(0, 2.5, -0.8), color: 0xe9d5ff, size: [1.5, 0.6] },    // 05 SaaS Dashboard
      { pos: new THREE.Vector3(0, -2.6, -0.5), color: 0x6d1bb5, size: [1.1, 0.7] }    // 06 Growth / Scale
    ];

    const nodeMeshes: THREE.Mesh[] = [];

    nodeConfigs.forEach((cfg) => {
      const planeGeo = new THREE.BoxGeometry(cfg.size[0], cfg.size[1], 0.04);
      const planeMat = new THREE.MeshPhysicalMaterial({
        color: 0x140b24,
        emissive: cfg.color,
        emissiveIntensity: 0.25,
        roughness: 0.2,
        metalness: 0.4,
        transmission: 0.5,
        transparent: true,
        opacity: 0.8,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
      });
      const nodeMesh = new THREE.Mesh(planeGeo, planeMat);
      nodeMesh.position.copy(cfg.pos);

      // Add a subtle border line to each card
      const edgeGeo = new THREE.EdgesGeometry(planeGeo);
      const edgeMat = new THREE.LineBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });
      const edgeMesh = new THREE.LineSegments(edgeGeo, edgeMat);
      nodeMesh.add(edgeMesh);

      productNodesGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);
    });

    // 4. Connecting Data Streams (Cables / laser lines between central Zetos and product nodes)
    const lineGroup = new THREE.Group();
    rootGroup.add(lineGroup);

    nodeConfigs.forEach((cfg) => {
      const points = [new THREE.Vector3(0, 0, 0), cfg.pos.clone().multiplyScalar(0.9)];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineDashedMaterial({
        color: 0xa855f7,
        dashSize: 0.2,
        gapSize: 0.15,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      const line = new THREE.Line(lineGeo, lineMaterial);
      line.computeLineDistances();
      lineGroup.add(line);
    });

    // 5. Surrounding Particle Galaxy (Active Data Tokens)
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.2 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Color variation in violet/purple/white
      const isViolet = Math.random() > 0.4;
      particleColors[i * 3] = isViolet ? 0.75 : 0.95;
      particleColors[i * 3 + 1] = isViolet ? 0.45 : 0.85;
      particleColors[i * 3 + 2] = 1.0;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x180930, 3.0);
    scene.add(ambientLight);

    const pointLightPurple = new THREE.PointLight(0x8a2be2, 6, 25);
    pointLightPurple.position.set(4, 4, 5);
    scene.add(pointLightPurple);

    const pointLightViolet = new THREE.PointLight(0xc084fc, 5, 20);
    pointLightViolet.position.set(-4, -3, 3);
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
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth lerp for mouse interaction
        targetX += (mouseX - targetX) * 0.04;
        targetY += (mouseY - targetY) * 0.04;

        // Subtle rotation & tilt of whole ecosystem
        rootGroup.rotation.y = elapsedTime * 0.12 + targetX * 0.5;
        rootGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.15 + targetY * 0.35;

        // Central Zetos Core pulse
        const pulse = 1 + Math.sin(elapsedTime * 2.2) * 0.05;
        centralMesh.scale.set(pulse, pulse, pulse);
        centralMesh.rotation.y = -elapsedTime * 0.25;
        centralMesh.rotation.z = Math.sin(elapsedTime * 0.3) * 0.15;

        // Counter-rotating rings
        ring1.rotation.z = -elapsedTime * 0.2;
        ring2.rotation.z = elapsedTime * 0.15;

        // Float each product node with subtle independent bobbing
        nodeMeshes.forEach((mesh, idx) => {
          const offset = idx * 1.1;
          mesh.position.y = nodeConfigs[idx].pos.y + Math.sin(elapsedTime * 1.5 + offset) * 0.08;
          mesh.rotation.y = Math.sin(elapsedTime * 0.8 + offset) * 0.15;
          mesh.rotation.x = Math.cos(elapsedTime * 0.6 + offset) * 0.1;

          // Highlight the active stage node if matches stageRef
          const isTarget = idx === stageRef.current;
          const scale = isTarget ? 1.25 : 1.0;
          mesh.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
        });

        // Particle subtle drift
        particles.rotation.y = -elapsedTime * 0.025;
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
      centralGeo.dispose();
      wireGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      particleGeo.dispose();
      centralMat.dispose();
      wireMat.dispose();
      ringMat.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-95 transition-opacity duration-1000"
      aria-hidden="true"
      style={{ filter: 'drop-shadow(0 0 50px rgba(138, 43, 226, 0.28))' }}
    />
  );
};
