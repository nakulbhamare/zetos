import type { CaseStudy, Offer, CorePillar, Founder, Testimonial, FAQItem, BentoCapability } from '../types';

export const CLIENT_LOGOS = [
  'THE PATCH',
  'TIP',
  'DOUBLES',
  'MON EMPLOI DIRECT',
  'DO YOUR FOOTBALL',
  'NOTADOO',
  'MORIARTY',
  'HUUDI',
  'MULINK',
  'ZW LOGISTIC',
  'ALPHA CREDIT',
  'OPTIVEST',
  'SEIKI',
  'GOODYEAR',
  'MEERIAD',
  'HUMOON'
];

export const CORE_PILLARS: CorePillar[] = [
  {
    number: '01',
    tag: 'Expérience entrepreneur',
    tagEn: 'Entrepreneurial DNA',
    title: 'On a été à votre place.',
    titleEn: 'We have walked in your shoes.',
    description: '10 ans à lancer, rater, pivoter et scaler nos propres produits SaaS et mobiles. On connaît tous les pièges du marché — et comment les éviter dès le premier sprint.',
    descriptionEn: '10 years launching, failing, pivoting, and scaling our own SaaS & mobile products. We know every single pitfall — and how to avoid them from sprint zero.',
    stat: '10+ ans',
    statLabel: "d'expérience fondateurs",
    statLabelEn: 'founder track record',
    icon: 'Compass'
  },
  {
    number: '02',
    tag: 'Exécution sans tunnel',
    tagEn: 'Zero-Friction Execution',
    title: 'Un seul interlocuteur, zéro friction.',
    titleEn: 'Direct access to builders, zero fluff.',
    description: 'Vous parlez directement à ceux qui conçoivent l’architecture et écrivent le code. Cycles itératifs d’1 à 2 semaines, décisions prises en jours — pas en mois.',
    descriptionEn: 'You communicate directly with senior leads who architect and write your code. 1-to-2 week rapid release cycles, decisions made in days — not months.',
    stat: '1-2 sem',
    statLabel: 'par cycle de livraison',
    statLabelEn: 'per delivery sprint',
    icon: 'Gauge'
  },
  {
    number: '03',
    tag: 'Obsession du résultat',
    tagEn: 'Outcome Obsessed',
    title: 'On mesure ce qui compte.',
    titleEn: 'We measure what truly matters.',
    description: 'Taux de conversion, activation, rétention, NPS. Pas de "ça a l’air joli" — des indicateurs chiffrés et testés qui prouvent l’impact business réel de votre produit.',
    descriptionEn: 'Conversion rate, activation, user retention, NPS. No vague claims — hard metrics that prove the tangible business impact of your product.',
    stat: '100%',
    statLabel: 'axé sur la conversion',
    statLabelEn: 'conversion-driven',
    icon: 'Target'
  },
  {
    number: '04',
    tag: 'Engagement au forfait & Agréé CII',
    tagEn: 'Fixed Price & CII Accredited',
    title: 'Prix ferme et jusqu’à 20% financés.',
    titleEn: 'Fixed deliverables + 20% tax credit.',
    description: 'Fini les factures en régie qui dérivent. Nous nous engageons sur un prix et des livrables fermes. En plus, Zetos est agréé Crédit d’Impôt Innovation (CII).',
    descriptionEn: 'No creeping hourly TJM invoices. We commit to a firm price and deliverables. Furthermore, Zetos is accredited for the French Innovation Tax Credit (CII).',
    stat: '-20%',
    statLabel: 'remboursé par le CII',
    statLabelEn: 'funded via French CII',
    icon: 'ShieldCheck'
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'validation',
    step: 'Étape 01',
    stepEn: 'Stage 01',
    emoji: '💡',
    title: 'Valider votre idée',
    titleEn: 'Validate Your Idea',
    headline: 'De l’idée au concept validé par le marché',
    headlineEn: 'From Idea to Market-Validated Concept',
    description: 'On teste votre vision avec des maquettes interactives haute fidélité, des tests utilisateurs réels et un cadrage technique complet avant d’écrire la première ligne de code.',
    descriptionEn: 'Validate your concept with interactive high-fidelity clickable prototypes, user tests, and technical scoping before writing a single line of code.',
    startingPrice: '995 €',
    priceNote: 'Forfait fixe · Sans engagement',
    priceNoteEn: 'Fixed price · No commitment',
    timeline: '5 à 7 jours',
    timelineEn: '5 to 7 days',
    deliverables: [
      'Prototype interactif Figma & UI Design System',
      'Cahier des charges fonctionnel & technique',
      'Architecture logicielle & estimation de stack',
      'Rapport d’interviews et tests utilisateurs'
    ],
    deliverablesEn: [
      'Interactive Figma Prototype & Design Tokens',
      'Functional & Technical Specifications Spec',
      'Software Architecture & Stack Roadmap',
      'User Testing & Market Validation Insights'
    ],
    badgeColor: '#8a2be2'
  },
  {
    id: 'build',
    step: 'Étape 02',
    stepEn: 'Stage 02',
    emoji: '🚀',
    title: 'Construire votre produit',
    titleEn: 'Build Your Product',
    headline: 'Votre MVP Web & Mobile prêt pour la production',
    headlineEn: 'Your Production-Ready Web & Mobile MVP',
    description: 'Conception UI/UX, développement fullstack réactif, intégration Stripe/Auth, et déploiement CI/CD. Vous obtenez un produit robuste, sécurisé et prêt à accueillir vos premiers clients payants.',
    descriptionEn: 'End-to-end UI/UX, modern full-stack development, Stripe & Auth integration, and CI/CD pipelines. A rock-solid product ready for paying users.',
    startingPrice: '6 500 €',
    priceNote: 'Forfait livrable · Agréé CII (-20%)',
    priceNoteEn: 'Fixed scope · CII Tax Credit (-20%)',
    timeline: '3 à 6 semaines',
    timelineEn: '3 to 6 weeks',
    deliverables: [
      'Application Web & Mobile (iOS / Android / PWA)',
      'Backend scalable & API REST / GraphQL',
      'Tunnel d’onboarding & paiements automatisés',
      'Code source 100% cédé sans verrouillage technique'
    ],
    deliverablesEn: [
      'Web & Native Mobile App (iOS / Android / PWA)',
      'Scalable Backend & REST / GraphQL API',
      'Automated Onboarding & Subscription Billing',
      '100% IP & Source Code Ownership Transfer'
    ],
    badgeColor: '#9333ea'
  },
  {
    id: 'scale',
    step: 'Étape 03',
    stepEn: 'Stage 03',
    emoji: '🤖',
    title: 'Scaler avec l’IA',
    titleEn: 'Scale with AI',
    headline: 'Agents intelligents et automatisation métier',
    headlineEn: 'Autonomous AI Agents & Deep Workflows',
    description: 'Intégrez des pipelines LLM de pointe, des agents autonomes et des modèles personnalisés pour démultiplier la valeur de votre produit et automatiser vos opérations.',
    descriptionEn: 'Embed state-of-the-art LLM pipelines, autonomous multi-agent systems, and customized AI models to automate workflows and supercharge product value.',
    startingPrice: '4 800 €',
    priceNote: 'Sur-mesure · Agréé CII (-20%)',
    priceNoteEn: 'Custom Scope · CII Accredited (-20%)',
    timeline: '3 à 8 semaines',
    timelineEn: '3 to 8 weeks',
    deliverables: [
      'Agents IA autonomes connectés à vos API métier',
      'Pipelines RAG & bases de connaissances vectorielles',
      'Fine-tuning & guardrails de sécurité stricts',
      'Monitoring temps-réel des coûts et latence'
    ],
    deliverablesEn: [
      'Autonomous AI Agents integrated with your business APIs',
      'RAG Pipelines & Enterprise Vector Knowledge Bases',
      'Fine-Tuning & Production Safety Guardrails',
      'Real-time Token Cost & Latency Observability'
    ],
    badgeColor: '#a855f7'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'the-patch',
    title: 'The Patch',
    category: 'EdTech & HRTech',
    categoryEn: 'EdTech & HRTech',
    badge: 'SaaS',
    summary: 'Plateforme SaaS d’upskilling et de gestion dynamique des compétences en entreprise.',
    summaryEn: 'B2B SaaS upskilling platform and real-time enterprise competency matrix.',
    description: 'Conception et développement complet de la plateforme SaaS The Patch : cartographie granulaire des compétences collaborateurs, recommandations de parcours alimentées par des algorithmes d’apprentissage et tableau de bord RH temps-réel.',
    descriptionEn: 'End-to-end architecture and development of The Patch SaaS platform: skills matrix mapping, adaptive learning pathways, and real-time enterprise HR intelligence.',
    client: 'The Patch HQ',
    metrics: [
      { label: 'Déploiement MVP', labelEn: 'MVP Delivery', value: '4 sem.' },
      { label: 'Utilisateurs actifs', labelEn: 'Active Learners', value: '15k+' },
      { label: 'Gain de productivité RH', labelEn: 'HR Admin Savings', value: '+42%' }
    ],
    deliverables: [
      'Architecture Multi-tenant SaaS',
      'Dashboard RH temps-réel',
      'Intégration SSO Entreprise',
      'Générateur de matrices de compétences'
    ],
    deliverablesEn: [
      'Multi-tenant SaaS Architecture',
      'Real-time HR Analytics Dashboard',
      'Enterprise SSO & RBAC Security',
      'Dynamic Competency Matrix Generator'
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    gradientTheme: 'from-purple-900/40 via-[#0d0915] to-[#050308]',
    iconType: 'GraduationCap'
  },
  {
    id: 'tip',
    title: 'Tip',
    category: 'TravelTech & IA',
    categoryEn: 'TravelTech & AI',
    badge: 'Mobile App',
    summary: 'Application mobile de recommandation de voyage personnalisée par intelligence artificielle.',
    summaryEn: 'AI-driven native mobile travel guide and hyper-personalized city discovery companion.',
    description: 'Développement d’une application mobile iOS/Android ultra-fluide générant des itinéraires de voyage sur-mesure en fonction des préférences de l’utilisateur, de la météo et de l’affluence en temps-réel.',
    descriptionEn: 'Engineered an ultra-fast native mobile iOS/Android app generating bespoke travel itineraries tailored to user lifestyle, live weather, and real-time crowd data.',
    client: 'Tip Technologies',
    metrics: [
      { label: 'Note App Store', labelEn: 'App Store Rating', value: '4.9 ★' },
      { label: 'Téléchargements', labelEn: 'Total Downloads', value: '80k+' },
      { label: 'Temps de génération', labelEn: 'Itinerary Speed', value: '< 1.2s' }
    ],
    deliverables: [
      'Application Mobile Cross-Platform',
      'Moteur de recommandation IA hybride',
      'Mode hors-ligne synchronisé',
      'Cartographie interactive vectorielle'
    ],
    deliverablesEn: [
      'Cross-Platform Native Mobile App',
      'Hybrid AI Recommendation Engine',
      'Offline-First Local Sync Engine',
      'Vector Interactive Map Engine'
    ],
    stack: ['React Native', 'FastAPI', 'OpenAI API', 'Redis', 'PostgreSQL'],
    gradientTheme: 'from-purple-800/40 via-[#0d0915] to-[#050308]',
    iconType: 'Plane'
  },
  {
    id: 'doubles',
    title: 'Doubles',
    category: 'SportsTech',
    categoryEn: 'SportsTech',
    badge: 'Mobile App',
    summary: 'La communauté mobile de référence pour les joueurs de Tennis et de Padel.',
    summaryEn: 'The go-to mobile matchmaking and ranking platform for Tennis and Padel enthusiasts.',
    description: 'Création d’un réseau sportif complet permettant aux passionnés de trouver des partenaires de niveau équivalent, réserver des créneaux de club et suivre leur progression ELO.',
    descriptionEn: 'Built a full sports social matchmaking network enabling players to find matching partners, book club courts, and track their competitive ELO progress.',
    client: 'Doubles Club',
    metrics: [
      { label: 'Matchs organisés', labelEn: 'Matches Played', value: '120k+' },
      { label: 'Temps de matching', labelEn: 'Matchmaking Time', value: '< 3 min' },
      { label: 'Rétention M3', labelEn: 'Month-3 Retention', value: '64%' }
    ],
    deliverables: [
      'Système d’algorithme de matching ELO',
      'Module de réservation & paiement in-app',
      'Messagerie instantanée chiffrée',
      'Interface club manager web'
    ],
    deliverablesEn: [
      'Automated ELO Matchmaking Algorithm',
      'In-App Court Booking & Payment Flow',
      'Encrypted Real-Time Chat',
      'Club Management Web Portal'
    ],
    stack: ['React Native', 'Node.js', 'WebSockets', 'Stripe', 'Supabase'],
    gradientTheme: 'from-violet-900/40 via-[#0d0915] to-[#050308]',
    iconType: 'Trophy'
  },
  {
    id: 'seiki',
    title: 'Seiki',
    category: 'AdTech & OOH Media',
    categoryEn: 'AdTech & OOH Media',
    badge: 'SaaS',
    summary: 'SaaS de programmation et diffusion publicitaire automatisée sur écrans urbains digitaux.',
    summaryEn: 'Automated DOOH ad scheduling and programmatic broadcast platform for digital screens.',
    description: 'Plateforme haute disponibilité permettant aux agences et régies publicitaires de planifier, cibler et diffuser des campagnes vidéo sur des parcs d’écrans connectés en temps réel.',
    descriptionEn: 'High-availability SaaS enabling media agencies to plan, target, and broadcast dynamic video ad campaigns across physical digital billboard networks in real time.',
    client: 'Seiki Media',
    metrics: [
      { label: 'Écrans connectés', labelEn: 'Connected Screens', value: '4 500+' },
      { label: 'Disponibilité', labelEn: 'Platform Uptime', value: '99.98%' },
      { label: 'Temps de synchronisation', labelEn: 'Sync Latency', value: '< 500ms' }
    ],
    deliverables: [
      'Lecteur d’affichage dynamique edge IoT',
      'Console de gestion média & planning',
      'Rapports d’impressions certifiés',
      'API programmatique temps-réel'
    ],
    deliverablesEn: [
      'Edge IoT Dynamic Video Player',
      'Media Asset & Flight Planning Portal',
      'Certified Proof-of-Play Analytics',
      'Real-Time Programmatic Broadcast API'
    ],
    stack: ['Vue/React', 'Go', 'Docker', 'AWS IoT Core', 'TimescaleDB'],
    gradientTheme: 'from-purple-900/40 via-[#0d0915] to-[#050308]',
    iconType: 'MonitorPlay'
  },
  {
    id: 'mulink',
    title: 'Mulink',
    category: 'Telecom & MusicTech',
    categoryEn: 'Telecom & MusicTech',
    badge: 'Mobile App',
    summary: 'Expérience mobile de synchronisation et streaming audio multi-utilisateurs en direct.',
    summaryEn: 'Real-time multi-device synchronous audio streaming and social listening platform.',
    description: 'Architecture audio à faible latence permettant à plusieurs smartphones de se connecter en cluster pour diffuser simultanément le même flux musical avec une synchronisation à la milliseconde près.',
    descriptionEn: 'Ultra-low latency audio architecture synchronizing mobile smartphone clusters for synchronized group music broadcasting with sub-millisecond precision.',
    client: 'Mulink Sound',
    metrics: [
      { label: 'Précision de synchronisation', labelEn: 'Audio Sync Precision', value: '< 2ms' },
      { label: 'Sessions simultanées', labelEn: 'Peak Concurrency', value: '50k+' },
      { label: 'Note utilisateur', labelEn: 'User Rating', value: '4.8 ★' }
    ],
    deliverables: [
      'Moteur audio WebAudio & C++ DSP',
      'Synchronisation peer-to-peer P2P',
      'Connecteurs Spotify & Apple Music',
      'Design UI néon-dark immersif'
    ],
    deliverablesEn: [
      'WebAudio & C++ Native DSP Engine',
      'Low-Overhead P2P Clock Sync',
      'Spotify & Apple Music Integrations',
      'Immersive Dark-Violet UI/UX'
    ],
    stack: ['Swift', 'Kotlin', 'WebRTC', 'WebSockets', 'Node.js'],
    gradientTheme: 'from-indigo-900/40 via-[#0d0915] to-[#050308]',
    iconType: 'Radio'
  },
  {
    id: 'fepem',
    title: 'Mon Emploi Direct',
    category: 'Gig Economy & Public',
    categoryEn: 'Gig Economy & Gov/Public',
    badge: 'Web App',
    summary: 'Plateforme nationale de mise en relation et de simplification de l’emploi à domicile.',
    summaryEn: 'National direct-employment matchmaking portal simplifying homecare services & payroll.',
    description: 'Conception d’un service public et privé fluide pour la Fédération des Particuliers Employeurs (FEPEM), intégrant simulateurs de salaire, contrats types et gestion administrative simplifiée.',
    descriptionEn: 'Built a streamlined public-private platform for France’s Home Employment Federation, featuring real-time wage calculators, legally compliant contracts, and automated workflows.',
    client: 'FEPEM / MED',
    metrics: [
      { label: 'Mises en relation', labelEn: 'Job Matches Made', value: '250k+' },
      { label: 'Taux de conformité', labelEn: 'Legal Compliance', value: '100%' },
      { label: 'Réduction de friction', labelEn: 'Workflow Acceleration', value: '3x plus rapide' }
    ],
    deliverables: [
      'Portail candidat & employeur',
      'Calculateur Urssaf & CESU temps-réel',
      'Générateur dynamique de contrats de travail',
      'Accessibilité RGAA niveau AA'
    ],
    deliverablesEn: [
      'Candidate & Employer Dual Portal',
      'Real-Time Tax Credit Calculator',
      'Dynamic Contract Drafting Wizard',
      'Full RGAA Accessibility Compliance'
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    gradientTheme: 'from-purple-900/40 via-[#0d0915] to-[#050308]',
    iconType: 'Users'
  }
];

export const BENTO_CAPABILITIES: BentoCapability[] = [
  {
    id: 'web-mobile',
    title: 'Web & Mobile Apps',
    titleEn: 'Web & Mobile Apps',
    subtitle: 'De l’idée aux stores iOS / Android',
    subtitleEn: 'From initial concept to App Stores',
    description: 'Applications web ultra-réactives et apps mobiles natives codées avec React Native, Next.js et TypeScript. Zéro compromis sur la fluidité et le design.',
    descriptionEn: 'High-performance web apps and native mobile experiences built with React Native, Next.js, and TypeScript. Zero compromise on 60fps fluidity.',
    tags: ['React Native', 'Next.js', 'TypeScript', 'iOS & Android'],
    icon: 'Smartphone'
  },
  {
    id: 'saas-architecture',
    title: 'SaaS B2B & Scalabilité',
    titleEn: 'B2B SaaS & Scaling',
    subtitle: '10+ plateformes SaaS lancées',
    subtitleEn: '10+ successful SaaS launches',
    description: 'Gestion des abonnements Stripe, architecture multi-tenant, permissions granulaires, onboarding optimisé et taux de churn maîtrisé dès le lancement.',
    descriptionEn: 'Stripe subscription engines, multi-tenant database partitioning, role-based security, seamless onboarding, and metrics built for high LTV.',
    tags: ['Multi-Tenant', 'Stripe Billing', 'PostgreSQL', 'Auth RBAC'],
    icon: 'Layers'
  },
  {
    id: 'ai-agents',
    title: 'Agents IA & Automatisation',
    titleEn: 'Autonomous AI Agents',
    subtitle: 'L’IA directement dans vos processus',
    subtitleEn: 'Embedding AI into core business workflows',
    description: 'Conception d’agents IA sur-mesure connectés à vos bases de données et API pour automatiser la qualification, le traitement de documents et l’analyse prédictive.',
    descriptionEn: 'Custom AI agents connected to your proprietary data pipelines to automate customer intelligence, document processing, and automated workflows.',
    tags: ['LLM Orchestration', 'RAG Vectors', 'Claude / OpenAI', 'Automation'],
    icon: 'Bot'
  },
  {
    id: 'rapid-sprints',
    title: 'Sprints & Engagement Forfait',
    titleEn: 'Fixed Sprints & Certainty',
    subtitle: 'Délais tenus, budget respecté',
    subtitleEn: 'On time, on budget, zero surprises',
    description: 'Nous refusons la facturation floue en régie horaire. Nous nous engageons sur un prix ferme, des livrables datés, et jusqu’à 20% remboursés via le Crédit Impôt Innovation.',
    descriptionEn: 'We reject drifting hourly billing. We commit to a firm fixed price, strict milestones, and up to 20% funded via the French Innovation Tax Credit.',
    tags: ['Forfait ferme', 'Agrément CII -20%', 'Cycles 2 sem.', '100% IP'],
    icon: 'Sparkles'
  }
];

export const FOUNDERS: Founder[] = [
  {
    id: 'anthony',
    name: 'Anthony Muñoz Cifuentes',
    role: 'Cofondateur & Président',
    roleEn: 'Co-Founder & President',
    bio: 'Ancien trader en finance de marché, Anthony est un entrepreneur tech chevronné ayant créé et développé plusieurs sociétés SaaS. Expert des stratégies « land and expand », il insuffle la vision produit, l’alignement marché et la rigueur d’exécution commerciale au sein de chaque projet Zetos.',
    bioEn: 'Former financial markets trader turned serial tech founder. Anthony has founded and scaled multiple SaaS businesses, mastering the "land and expand" GTM framework. He brings sharp strategic clarity, product-market alignment, and relentless execution to every project.',
    specialties: ['Stratégie Produit & GTM', 'Architecture SaaS', 'Modèles Économiques', 'Finance & Levée'],
    specialtiesEn: ['Product Strategy & GTM', 'SaaS Architecture', 'Business Models', 'Fundraising & Growth'],
    linkedin: 'https://www.linkedin.com/in/anthony-munoz-cifuentes-6598376a/',
    imageAlt: 'Anthony Muñoz Cifuentes — Cofondateur Zetos'
  },
  {
    id: 'theo',
    name: 'Théo Pascard',
    role: 'Cofondateur & Directeur Général',
    roleEn: 'Co-Founder & Managing Director',
    bio: 'Entrepreneur passionné par l’innovation d’usage et la création d’expériences digitales marquantes. Théo a notamment cofondé Meeriad (santé mentale en entreprise). LinkedIn Top Voice et membre Choiseul Sport & Business, il pilote le delivery et l’excellence opérationnelle.',
    bioEn: 'Serial entrepreneur passionate about high-impact digital experiences. Co-founder of Meeriad (enterprise mental health platform). LinkedIn Top Voice and Choiseul Sport & Business laureate, Théo leads operations, user craft, and delivery excellence.',
    specialties: ['Product Delivery', 'Expérience Utilisateur', 'Croissance & Partenariats', 'Scale Opérationnel'],
    specialtiesEn: ['Product Delivery', 'User Experience & Craft', 'Ecosystem Growth', 'Operational Scale'],
    linkedin: 'https://www.linkedin.com/in/theo-pascard/',
    imageAlt: 'Théo Pascard — Cofondateur Zetos'
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    num: '01',
    title: 'Nous prenons des risques',
    titleEn: 'We take shared risks',
    body: 'C’est l’essence même de l’entrepreneuriat. Quand nous nous engageons sur un projet, nous le livrons quoi qu’il en coûte. Notre modèle au forfait aligne nos intérêts directs sur vos résultats.',
    bodyEn: 'True entrepreneurship is about conviction. When we commit to a scope, we deliver no matter what. Our fixed-price model directly aligns our success with yours.'
  },
  {
    num: '02',
    title: 'Nous délivrons',
    titleEn: 'We ship relentlessly',
    body: 'Chaque client est notre vitrine. Nous ne croyons qu’aux résultats tangibles et mesurables. Les demi-mesures, les délais élastiques et les approximations ne font pas partie de notre ADN.',
    bodyEn: 'Every client is our showcase. We believe only in shipped code and measurable outcomes. Half-measures and vague deadlines have no place in our DNA.'
  },
  {
    num: '03',
    title: 'Vous gardez 100% de l’ownership',
    titleEn: 'You retain 100% IP ownership',
    body: 'Votre code source, vos bases de données, vos accès et votre propriété intellectuelle restent intégralement les vôtres. Aucun verrouillage technologique, aucune dépendance forcée.',
    bodyEn: 'Your source code, databases, environments, and IP are 100% yours. No vendor lock-in, no proprietary traps — clean standard stacks ready for internal handover.'
  },
  {
    num: '04',
    title: 'Nous sommes intenses',
    titleEn: 'We work with surgical intensity',
    body: 'Notre équipe est constituée d’ingénieurs et designers seniors. Nous cultivons notre savoir-faire au quotidien pour livrer avec une précision chirurgicale et une vélocité sans égale.',
    bodyEn: 'Our team is exclusively composed of senior engineers and product designers. We master our craft daily to deliver with surgical precision and exceptional velocity.'
  },
  {
    num: '05',
    title: 'Nous sommes comme vous',
    titleEn: 'We are founders just like you',
    body: 'Nous parlons votre langage opérationnel, comprenons les arbitrages de trésorerie et résolvons les blocages au lieu d’empiler des réunions. Des fondateurs au service de fondateurs.',
    bodyEn: 'We speak the operational language of founders. We understand cash flow trade-offs and solve blockers instead of scheduling endless meetings. Founders building for founders.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'humoon',
    quote: 'Merci à Zetos qui nous a permis de faire changer notre produit de dimension à une étape cruciale de notre développement. L’équipe était très réactive et à l’écoute de nos besoins. On est super contents du résultat et on continue de leur faire confiance pour la maintenance et l’optimisation continue.',
    quoteEn: 'Huge thanks to Zetos who took our digital product to the next level at a pivotal stage of our company growth. The team was extremely responsive, proactive, and technically sharp. We couldn’t be happier with the outcome and continue to partner with them.',
    author: 'Alexandre Darbois',
    role: 'Co-fondateur',
    company: 'Humoon',
    metric: 'x3',
    metricLabel: "d'accélération produit",
    metricLabelEn: 'faster product velocity'
  },
  {
    id: 'patch',
    quote: 'Lancer un MVP en 4 semaines tout en garantissant un niveau de finition digne d’un produit de scale-up semblait impossible. Zetos a tenu le calendrier au jour près et le budget au centime près.',
    quoteEn: 'Shipping an enterprise-grade MVP in 4 weeks while keeping top-tier craft seemed impossible. Zetos delivered exactly on schedule to the day, and strictly on budget.',
    author: 'Marc V.',
    role: 'Fondateur & CEO',
    company: 'The Patch',
    metric: '4 sem.',
    metricLabel: 'du brief à la prod',
    metricLabelEn: 'from brief to live production'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Tarifs & Modèle',
    question: 'Pourquoi un engagement au forfait plutôt qu’en régie (TJM) ?',
    questionEn: 'Why fixed-price engagements over daily rate (TJM) billing?',
    answer: 'En régie classique, plus l’agence met de temps ou rencontre des difficultés, plus votre facture augmente — le risque repose entièrement sur vous. Au forfait, nous nous engageons sur un livrable précis et un montant fixe. Notre intérêt devient identique au vôtre : livrer avec un niveau de qualité irréprochable et le plus rapidement possible.',
    answerEn: 'In typical daily-rate billing, when problems occur or timelines slip, you pay more — you absorb the entire risk. With our fixed-price model, we commit to concrete deliverables and a guaranteed price. Our incentive is 100% aligned with yours: deliver world-class quality as fast as possible.'
  },
  {
    id: 'faq-2',
    category: 'Agrément CII',
    question: 'Vous êtes agréés CII (Crédit d’Impôt Innovation), qu’est-ce que cela change pour nous ?',
    questionEn: 'What does your French CII (Innovation Tax Credit) accreditation mean for us?',
    answer: 'En tant qu’entreprise cliente, vous pouvez récupérer jusqu’à 20 % du montant de vos dépenses de conception et développement éligibles sous forme de crédit d’impôt remboursé directement par l’État. Nous vous fournissons tous les justificatifs et attestations agréées pour votre dossier fiscal.',
    answerEn: 'As our client, you can claim up to 20% of your eligible product design and development spend back as a direct cash tax credit from the French government. We provide all the certified paperwork and documentation for your accountant.'
  },
  {
    id: 'faq-3',
    category: 'Gestion de projet',
    question: 'Que se passe-t-il si les besoins ou le périmètre fonctionnel évoluent en cours de route ?',
    questionEn: 'What happens if our project scope evolves during development?',
    answer: 'L’agilité fait partie de notre ADN. Si vous souhaitez modifier ou ajouter une fonctionnalité, nous chiffrons l’écart en toute transparence avant de toucher à la moindre ligne de code. Aucune mauvaise surprise en fin de sprint.',
    answerEn: 'Agility is in our blood. If you decide to add or adjust features, we transparently scope and quote the delta before touching a single line of code. No surprises, no hidden line items.'
  },
  {
    id: 'faq-4',
    category: 'Équipe & Expertise',
    question: 'Qui conçoit et développe réellement notre produit ?',
    questionEn: 'Who actually designs and codes our product?',
    answer: 'Une équipe senior dédiée basée à Paris. Aucun intermédiaire, aucun junior livré à lui-même et aucun offshore caché. Vous échangez directement au quotidien avec le lead qui écrit le code de votre application.',
    answerEn: 'A senior engineering & design team based in Paris. Zero middlemen, no outsourced unmonitored juniors, and no hidden offshore developers. You speak directly to the technical leads building your product.'
  },
  {
    id: 'faq-5',
    category: 'Propriété Intellectuelle',
    question: 'À qui appartient le code source et la propriété intellectuelle ?',
    questionEn: 'Who owns the intellectual property and source code?',
    answer: 'À vous, à 100%. Dès la livraison et le règlement, vous devenez propriétaire exclusif de l’intégralité des maquettes, du code source, des bases de données et des accès cloud. Le code est documenté et prêt pour une reprise par votre future équipe interne si vous le souhaitez.',
    answerEn: 'You do, 100%. Upon delivery and payment, you hold complete and exclusive ownership of all design files, source repositories, databases, and infrastructure. The code is structured to clean modern industry standards for easy future in-house handover.'
  }
];
