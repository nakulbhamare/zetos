import type {
  CaseStudy,
  Offer,
  CorePillar,
  Founder,
  Testimonial,
  FAQItem,
  ServiceCategory,
  JourneyStage,
  AIAgentScenario
} from '../types';

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
  'HUMOON',
  'POLICE',
  'QOBIT'
];

export const TRUST_STATS = [
  {
    value: 100,
    suffix: '+',
    label: 'Projets livrés',
    labelEn: 'Products Shipped',
    detail: 'Depuis 2017 (cumul Zetos + structures fondateurs)',
    detailEn: 'Since 2017 across web, mobile & SaaS platforms'
  },
  {
    value: 30,
    suffix: '+',
    label: 'Développeurs & Experts',
    labelEn: 'Senior Engineers & Designers',
    detail: 'Équipe Zetos & partenaires techniques basés à Paris',
    detailEn: 'Internal Paris core team & technical leads'
  },
  {
    value: 96,
    suffix: '%',
    label: 'Taux de recommandation',
    labelEn: 'Recommendation Rate',
    detail: 'Enquête de satisfaction NPS clients 2024-2025',
    detailEn: 'Verified client NPS satisfaction audit'
  },
  {
    value: 20,
    prefix: '-',
    suffix: '%',
    label: 'Crédit d’Impôt Innovation (CII)',
    labelEn: 'French Innovation Tax Credit',
    detail: 'Remboursement direct par l’État pour vos dépenses R&D',
    detailEn: 'Direct government cash reimbursement on R&D spend'
  }
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: '01',
    title: 'Idée',
    titleEn: 'Idea',
    subtitle: 'Vous avez une vision.',
    subtitleEn: 'You have a vision.',
    description: 'Cadrage stratégique, identification du problème critique, analyse concurrentielle et clarification de la proposition de valeur.',
    descriptionEn: 'Strategic scoping, pinpointing the core customer pain, competitive matrix, and defining the unique value proposition.',
    outputs: ['Matrice Proposition de Valeur', 'Cadrage Problème / Solution', 'Benchmark & Opportunités'],
    outputsEn: ['Value Proposition Matrix', 'Problem / Solution Scope', 'Competitive Benchmark'],
    duration: '2 - 3 jours',
    durationEn: '2 - 3 days',
    visualType: 'concept'
  },
  {
    step: '02',
    title: 'Validation',
    titleEn: 'Validate',
    subtitle: 'On teste si elle mérite d’exister.',
    subtitleEn: 'We test if it deserves to exist.',
    description: 'Maquettes interactives cliquables, interviews de prospects cibles et tests d’intention d’achat avant d’écrire la moindre ligne de code.',
    descriptionEn: 'Interactive clickable prototypes, target customer interviews, and willingness-to-pay validation before a single line of code.',
    outputs: ['Maquettes Interactives Figma', 'Rapport d’Interviews Utilisateurs', 'Cahier des Charges Fonctionnel'],
    outputsEn: ['Figma Clickable Prototype', 'User Interview Insights', 'Functional Product Spec'],
    duration: '5 - 7 jours',
    durationEn: '5 - 7 days',
    visualType: 'wireframe'
  },
  {
    step: '03',
    title: 'Design',
    titleEn: 'Design',
    subtitle: 'On crée une expérience produit évidente.',
    subtitleEn: 'We craft an intuitive product experience.',
    description: 'Architecture de l’information, UI design haute fidélité, micro-interactions, charte graphique et Design System modulaire scalable.',
    descriptionEn: 'Information architecture, pixel-perfect high-fidelity UI, micro-interactions, and a scalable modular Design System.',
    outputs: ['Design System complet', 'Maquettes Desktop & Mobile', 'Prototypes de flux d’onboarding'],
    outputsEn: ['Modular Design System', 'Desktop & Mobile UI Flows', 'Interactive Onboarding Prototype'],
    duration: '1 - 2 semaines',
    durationEn: '1 - 2 weeks',
    visualType: 'design'
  },
  {
    step: '04',
    title: 'Build',
    titleEn: 'Build',
    subtitle: 'On développe le produit réel.',
    subtitleEn: 'We engineer the actual product.',
    description: 'Architecture logicielle moderne, code typé et documenté, intégration d’authentification, passerelles de paiement Stripe et APIs sécurisées.',
    descriptionEn: 'Modern fullstack software engineering, clean typed code, enterprise auth, Stripe billing pipelines, and secure API gateways.',
    outputs: ['Code source 100% cédé', 'Base de données PostgreSQL / Vector', 'Pipelines CI/CD automatisées'],
    outputsEn: ['100% IP & Source Code Transfer', 'PostgreSQL / Vector DB Schema', 'Automated CI/CD Workflows'],
    duration: '3 - 6 semaines',
    durationEn: '3 - 6 weeks',
    visualType: 'code'
  },
  {
    step: '05',
    title: 'Lancement',
    titleEn: 'Launch',
    subtitle: 'On le met entre les mains de vrais clients.',
    subtitleEn: 'We put it in the hands of real users.',
    description: 'Publication sur l’App Store et Google Play, déploiement cloud haute disponibilité, mise en place des analytics produit et monitoring live.',
    descriptionEn: 'App Store & Google Play publishing, high-availability cloud rollout, product analytics tracking, and live error telemetry.',
    outputs: ['Production Live sur Cloud / Stores', 'Tracking Analytics & Funnels', 'Tableau de bord de monitoring'],
    outputsEn: ['Live Cloud & Store Rollout', 'Analytics & Funnel Tracking', 'Live Uptime & Health Dashboard'],
    duration: 'Jour J',
    durationEn: 'Launch Day',
    visualType: 'launch'
  },
  {
    step: '06',
    title: 'Scale & IA',
    titleEn: 'Scale & AI',
    subtitle: 'On optimise, automatise et accélère.',
    subtitleEn: 'We improve, automate and scale.',
    description: 'Intégration d’agents IA autonomes, automatisation des workflows métier, optimisation continue de la rétention et scalabilité d’infrastructure.',
    descriptionEn: 'Autonomous AI agent workflows, business automation pipelines, continuous retention tuning, and infrastructure scaling.',
    outputs: ['Agents IA & RAG connectés', 'Automatisations Opérationnelles', 'Optimisation continue du NPS'],
    outputsEn: ['Connected AI Agents & RAG', 'Operational Workflow Automation', 'Continuous NPS & Churn Tuning'],
    duration: 'En continu',
    durationEn: 'Continuous',
    visualType: 'scale'
  }
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
    titleEn: 'Direct access to senior builders, zero fluff.',
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
    description: 'Fini les factures en régie horaire qui dérivent. Nous nous engageons sur un prix et des livrables fermes. En plus, Zetos est agréé Crédit d’Impôt Innovation (CII).',
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
    processSteps: [
      { title: '1. Cadrage & Proposition', titleEn: '1. Scoping & Value Prop', desc: 'Atelier de dérisquage et identification du flux utilisateur principal.', descEn: 'De-risking workshop and defining the core user flow.' },
      { title: '2. Prototypage Interactif', titleEn: '2. Interactive Prototype', desc: 'Création des maquettes Figma interactives complètes haute-fidélité.', descEn: 'High-fidelity clickable Figma prototype creation.' },
      { title: '3. Tests Marché & Débrief', titleEn: '3. Market Tests & Debrief', desc: 'Passation des tests avec des utilisateurs cibles et rapport de viabilité.', descEn: 'Testing with target users and delivery of actionable viability report.' }
    ],
    deliverables: [
      'Prototype interactif Figma & UI Design System',
      'Cahier des charges fonctionnel & technique complet',
      'Architecture logicielle & estimation de stack optimale',
      'Rapport d’interviews et analyse de viabilité marché'
    ],
    deliverablesEn: [
      'Interactive Figma Prototype & Design Tokens',
      'Functional & Technical Product Specifications',
      'Software Architecture & Optimal Stack Roadmap',
      'User Testing & Market Validation Viability Report'
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
    description: 'Conception UI/UX complète, développement fullstack moderne réactif, intégration Stripe/Auth, et déploiement CI/CD. Vous obtenez un produit robuste, sécurisé et prêt à accueillir vos premiers clients payants.',
    descriptionEn: 'End-to-end UI/UX, modern full-stack development, Stripe & Auth integration, and CI/CD pipelines. A rock-solid product ready for paying users.',
    startingPrice: '6 500 €',
    priceNote: 'Forfait livrable · Agréé CII (-20%)',
    priceNoteEn: 'Fixed scope · CII Tax Credit (-20%)',
    timeline: '3 à 6 semaines',
    timelineEn: '3 to 6 weeks',
    processSteps: [
      { title: '1. Architecture & Stack', titleEn: '1. Architecture & Stack', desc: 'Choix de la stack (React Native / Next.js / Supabase / Node) et schéma de données.', descEn: 'Stack selection (React Native / Next.js / Supabase / Node) and data schema.' },
      { title: '2. Sprints de Dév 2 Sem.', titleEn: '2. 2-Week Dev Sprints', desc: 'Développement itératif avec démo live hebdomadaire accessible en staging.', descEn: 'Iterative development with live weekly staging demos.' },
      { title: '3. QA, Sécurité & Déploiement', titleEn: '3. QA, Security & Launch', desc: 'Tests de charge, conformité RGPD, publication App Store et mise en ligne.', descEn: 'Load testing, GDPR compliance, App Store publishing and live launch.' }
    ],
    deliverables: [
      'Application Web & Mobile (iOS / Android / PWA)',
      'Backend scalable & API REST / GraphQL documentée',
      'Tunnel d’onboarding & paiements Stripe automatisés',
      'Code source 100% cédé sans aucun verrouillage technique'
    ],
    deliverablesEn: [
      'Web & Native Mobile App (iOS / Android / PWA)',
      'Scalable Backend & Documented REST / GraphQL API',
      'Automated Onboarding & Stripe Subscription Billing',
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
    headline: 'Agents intelligents et automatisation métier profonde',
    headlineEn: 'Autonomous AI Agents & Deep Workflows',
    description: 'Intégrez des pipelines LLM de pointe, des agents autonomes connectés à vos APIs et des modèles personnalisés pour démultiplier la valeur de votre produit et automatiser vos opérations.',
    descriptionEn: 'Embed state-of-the-art LLM pipelines, autonomous multi-agent systems, and customized AI models to automate workflows and supercharge product value.',
    startingPrice: '4 800 €',
    priceNote: 'Sur-mesure · Agréé CII (-20%)',
    priceNoteEn: 'Custom Scope · CII Accredited (-20%)',
    timeline: '3 à 8 semaines',
    timelineEn: '3 to 8 weeks',
    processSteps: [
      { title: '1. Cartographie des Flux', titleEn: '1. Workflow Mapping', desc: 'Audit des tâches à haute friction et définition des agents IA à déployer.', descEn: 'High-friction task audit and defining the AI agents to deploy.' },
      { title: '2. Pipeline RAG & Agents', titleEn: '2. RAG Pipeline & Agents', desc: 'Indexation vectorielle, orchestration LLM (Claude/OpenAI) et guardrails.', descEn: 'Vector indexing, LLM orchestration (Claude/OpenAI) and guardrails.' },
      { title: '3. Intégration & Observabilité', titleEn: '3. Integration & Telemetry', desc: 'Connexion aux bases de données internes et monitoring temps réel des tokens.', descEn: 'Connection to internal databases and real-time token cost observability.' }
    ],
    deliverables: [
      'Agents IA autonomes connectés à vos API et bases métier',
      'Pipelines RAG & bases de connaissances vectorielles sécurisées',
      'Fine-tuning & guardrails de sécurité et confidentialité stricts',
      'Monitoring temps-réel des coûts en tokens et de la latence'
    ],
    deliverablesEn: [
      'Autonomous AI Agents integrated with your business APIs',
      'Secure RAG Pipelines & Enterprise Vector Knowledge Bases',
      'Fine-Tuning & Production Safety Guardrails',
      'Real-time Token Cost & Latency Observability Dashboard'
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
    industry: 'HRTech',
    summary: 'Plateforme SaaS d’upskilling et de gestion dynamique des compétences en entreprise.',
    summaryEn: 'B2B SaaS upskilling platform and real-time enterprise competency matrix.',
    problem: 'Les directions RH perdaient des centaines d’heures à cartographier manuellement les compétences des collaborateurs sur des tableurs obsolètes.',
    problemEn: 'HR leaders were losing hundreds of hours manually tracking employee skills on outdated spreadsheets with zero real-time visibility.',
    solution: 'Architecture SaaS multi-tenant ultra-réactive avec cartographie dynamique, algorithmes de parcours personnalisés et intégration SSO entreprise.',
    solutionEn: 'High-performance multi-tenant SaaS architecture with dynamic skill matrix mapping, adaptive learning pathways, and enterprise SSO.',
    description: 'Conception et développement complet de la plateforme SaaS The Patch : cartographie granulaire des compétences collaborateurs, recommandations de parcours alimentées par des algorithmes d’apprentissage et tableau de bord RH temps-réel.',
    descriptionEn: 'End-to-end architecture and development of The Patch SaaS platform: skills matrix mapping, adaptive learning pathways, and real-time enterprise HR intelligence.',
    client: 'The Patch HQ',
    clientRole: 'Fondateur & CEO',
    quote: 'Lancer un MVP en 4 semaines tout en garantissant un niveau de finition digne d’un produit de scale-up semblait impossible. Zetos a tenu le calendrier au jour près.',
    quoteEn: 'Shipping an enterprise-grade MVP in 4 weeks while keeping top-tier craft seemed impossible. Zetos delivered exactly on schedule to the day.',
    metrics: [
      { label: 'Déploiement MVP', labelEn: 'MVP Delivery', value: '4 sem.' },
      { label: 'Utilisateurs actifs', labelEn: 'Active Learners', value: '15k+' },
      { label: 'Gain de productivité RH', labelEn: 'HR Admin Savings', value: '+42%' }
    ],
    deliverables: [
      'Architecture Multi-tenant SaaS scalable',
      'Dashboard RH temps-réel & analytiques',
      'Intégration SSO Entreprise & RBAC',
      'Générateur de matrices de compétences dynamiques'
    ],
    deliverablesEn: [
      'Scalable Multi-tenant SaaS Architecture',
      'Real-time HR Analytics Dashboard',
      'Enterprise SSO & RBAC Security',
      'Dynamic Competency Matrix Generator'
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Redis'],
    gradientTheme: 'from-purple-900/50 via-[#0d0915] to-[#050308]',
    accentColor: '#8a2be2',
    iconType: 'GraduationCap',
    liveStatus: 'LIVE',
    isInternalProduct: true
  },
  {
    id: 'tip',
    title: 'Tip',
    category: 'TravelTech & IA',
    categoryEn: 'TravelTech & AI',
    badge: 'Mobile App',
    industry: 'TravelTech',
    summary: 'Application mobile de recommandation de voyage personnalisée par intelligence artificielle.',
    summaryEn: 'AI-driven native mobile travel guide and hyper-personalized city discovery companion.',
    problem: 'Les guides de voyage traditionnels ne s’adaptent ni aux goûts personnels, ni à la météo en direct, ni à la foule touristique du moment.',
    problemEn: 'Traditional travel apps offer static, generic guides that fail to adapt to live weather, personal tastes, or real-time crowd congestion.',
    solution: 'Application mobile iOS/Android avec moteur d’IA hybride générant des itinéraires sur-mesure instantanés en fonction du contexte et de la météo.',
    solutionEn: 'Native cross-platform mobile app powered by a hybrid AI recommendation engine generating bespoke itineraries in under 1.2 seconds.',
    description: 'Développement d’une application mobile iOS/Android ultra-fluide générant des itinéraires de voyage sur-mesure en fonction des préférences de l’utilisateur, de la météo et de l’affluence en temps-réel.',
    descriptionEn: 'Engineered an ultra-fast native mobile iOS/Android app generating bespoke travel itineraries tailored to user lifestyle, live weather, and real-time crowd data.',
    client: 'Tip Technologies',
    metrics: [
      { label: 'Note App Store', labelEn: 'App Store Rating', value: '4.9 ★' },
      { label: 'Téléchargements', labelEn: 'Total Downloads', value: '80k+' },
      { label: 'Temps de génération', labelEn: 'Itinerary Speed', value: '< 1.2s' }
    ],
    deliverables: [
      'Application Mobile Cross-Platform (iOS & Android)',
      'Moteur de recommandation IA contextuel hybride',
      'Mode hors-ligne synchronisé SQLite',
      'Cartographie interactive vectorielle Mapbox'
    ],
    deliverablesEn: [
      'Cross-Platform Native Mobile App (iOS & Android)',
      'Contextual Hybrid AI Recommendation Engine',
      'Offline-First Local SQLite Sync Engine',
      'Vector Mapbox Interactive Map Engine'
    ],
    stack: ['React Native', 'FastAPI', 'OpenAI API', 'Redis', 'PostgreSQL', 'Mapbox'],
    gradientTheme: 'from-purple-800/50 via-[#0d0915] to-[#050308]',
    accentColor: '#a855f7',
    iconType: 'Plane',
    liveStatus: 'LIVE',
    isInternalProduct: true
  },
  {
    id: 'doubles',
    title: 'Doubles',
    category: 'SportsTech',
    categoryEn: 'SportsTech',
    badge: 'Mobile App',
    industry: 'SportsTech',
    summary: 'La communauté mobile de référence pour les joueurs de Tennis et de Padel en France.',
    summaryEn: 'The go-to mobile matchmaking and ranking platform for Tennis and Padel enthusiasts.',
    problem: 'Trouver un partenaire de tennis ou padel au même niveau et disponible sur le même créneau de court relevait du casse-tête.',
    problemEn: 'Finding an available tennis or padel partner of matching skill on short notice at local clubs was fragmented across messaging groups.',
    solution: 'Application sociale avec algorithme de matching ELO en temps réel, réservation de terrains intégrée et messagerie instantanée.',
    solutionEn: 'Social sports platform featuring real-time ELO matchmaking, in-app court reservation, and sub-3-minute partner finding.',
    description: 'Création d’un réseau sportif complet permettant aux passionnés de trouver des partenaires de niveau équivalent, réserver des créneaux de club et suivre leur progression ELO.',
    descriptionEn: 'Built a full sports social matchmaking network enabling players to find matching partners, book club courts, and track their competitive ELO progress.',
    client: 'Doubles Club',
    metrics: [
      { label: 'Matchs organisés', labelEn: 'Matches Played', value: '120k+' },
      { label: 'Temps de matching', labelEn: 'Matchmaking Time', value: '< 3 min' },
      { label: 'Rétention M3', labelEn: 'Month-3 Retention', value: '64%' }
    ],
    deliverables: [
      'Algorithme de calcul et classement ELO automatisé',
      'Module de réservation & paiement Stripe in-app',
      'Messagerie instantanée WebSockets chiffrée',
      'Console web de gestion pour les clubs partenaires'
    ],
    deliverablesEn: [
      'Automated ELO Matchmaking & Ranking Algorithm',
      'In-App Court Booking & Stripe Payment Flow',
      'Encrypted Real-Time WebSockets Chat',
      'Partner Club Management Web Portal'
    ],
    stack: ['React Native', 'Node.js', 'WebSockets', 'Stripe', 'Supabase', 'PostgreSQL'],
    gradientTheme: 'from-violet-900/50 via-[#0d0915] to-[#050308]',
    accentColor: '#c084fc',
    iconType: 'Trophy',
    liveStatus: 'LIVE'
  },
  {
    id: 'seiki',
    title: 'Seiki',
    category: 'AdTech & OOH Media',
    categoryEn: 'AdTech & OOH Media',
    badge: 'SaaS',
    industry: 'AdTech',
    summary: 'SaaS de programmation et diffusion publicitaire automatisée sur écrans urbains digitaux.',
    summaryEn: 'Automated DOOH ad scheduling and programmatic broadcast platform for digital screens.',
    problem: 'La planification publicitaire sur panneaux LED urbains était gérée manuellement par clé USB avec des délais de plusieurs jours.',
    problemEn: 'Digital billboard advertising was handled through manual USB updates with multi-day lead times and zero proof-of-play metrics.',
    solution: 'Plateforme cloud connectée aux boîtiers IoT edge avec synchronisation vidéo temps réel inférieure à 500ms et reporting certifié.',
    solutionEn: 'Cloud platform orchestrating edge IoT media players with sub-500ms video synchronization and certified proof-of-play auditing.',
    description: 'Plateforme haute disponibilité permettant aux agences et régies publicitaires de planifier, cibler et diffuser des campagnes vidéo sur des parcs d’écrans connectés en temps réel.',
    descriptionEn: 'High-availability SaaS enabling media agencies to plan, target, and broadcast dynamic video ad campaigns across physical digital billboard networks in real time.',
    client: 'Seiki Media',
    metrics: [
      { label: 'Écrans connectés', labelEn: 'Connected Screens', value: '4 500+' },
      { label: 'Disponibilité', labelEn: 'Platform Uptime', value: '99.98%' },
      { label: 'Temps de synchronisation', labelEn: 'Sync Latency', value: '< 500ms' }
    ],
    deliverables: [
      'Lecteur d’affichage dynamique edge IoT ultra-robuste',
      'Console de gestion média & planning des campagnes',
      'Rapports d’impressions et preuves de passage certifiées',
      'API programmatique temps-réel pour acheteurs médias'
    ],
    deliverablesEn: [
      'Edge IoT Dynamic Video Player Engine',
      'Media Asset & Flight Planning Portal',
      'Certified Proof-of-Play Audit Telemetry',
      'Real-Time Programmatic Broadcast API'
    ],
    stack: ['Vue/React', 'Go', 'Docker', 'AWS IoT Core', 'TimescaleDB', 'Redis'],
    gradientTheme: 'from-purple-900/50 via-[#0d0915] to-[#050308]',
    accentColor: '#9333ea',
    iconType: 'MonitorPlay',
    liveStatus: 'SCALING',
    isInternalProduct: true
  },
  {
    id: 'mulink',
    title: 'Mulink',
    category: 'Telecom & MusicTech',
    categoryEn: 'Telecom & MusicTech',
    badge: 'Mobile App',
    industry: 'MusicTech',
    summary: 'Expérience mobile de synchronisation et streaming audio multi-utilisateurs en direct.',
    summaryEn: 'Real-time multi-device synchronous audio streaming and social listening platform.',
    problem: 'Créer un son immersif en groupe nécessitait des enceintes connectées coûteuses et incompatibles.',
    problemEn: 'Creating powerful group sound required expensive proprietary multi-room hardware.',
    solution: 'Architecture P2P audio ultra-basse latence synchronisant plusieurs smartphones au millième de seconde pour former un système sonore unifié.',
    solutionEn: 'Ultra-low latency P2P audio architecture synchronizing mobile smartphone clusters for shared music broadcasting with sub-2ms precision.',
    description: 'Architecture audio à faible latence permettant à plusieurs smartphones de se connecter en cluster pour diffuser simultanément le même flux musical avec une synchronisation à la milliseconde près.',
    descriptionEn: 'Ultra-low latency audio architecture synchronizing mobile smartphone clusters for synchronized group music broadcasting with sub-millisecond precision.',
    client: 'Mulink Sound',
    metrics: [
      { label: 'Précision de synchronisation', labelEn: 'Audio Sync Precision', value: '< 2ms' },
      { label: 'Sessions simultanées', labelEn: 'Peak Concurrency', value: '50k+' },
      { label: 'Note utilisateur', labelEn: 'User Rating', value: '4.8 ★' }
    ],
    deliverables: [
      'Moteur audio WebAudio & C++ DSP natif',
      'Synchronisation peer-to-peer P2P ultra-précise',
      'Connecteurs Spotify & Apple Music SDK',
      'Design UI néon-dark immersif'
    ],
    deliverablesEn: [
      'WebAudio & C++ Native DSP Engine',
      'Low-Overhead P2P Clock Sync Protocol',
      'Spotify & Apple Music SDK Integrations',
      'Immersive Dark-Violet UI/UX'
    ],
    stack: ['Swift', 'Kotlin', 'WebRTC', 'WebSockets', 'Node.js', 'C++ DSP'],
    gradientTheme: 'from-indigo-900/50 via-[#0d0915] to-[#050308]',
    accentColor: '#6366f1',
    iconType: 'Radio',
    liveStatus: 'LIVE',
    isInternalProduct: true
  },
  {
    id: 'fepem',
    title: 'Mon Emploi Direct',
    category: 'Gig Economy & Public',
    categoryEn: 'Gig Economy & Gov/Public',
    badge: 'Web App',
    industry: 'GovTech',
    summary: 'Plateforme nationale de mise en relation et de simplification de l’emploi à domicile.',
    summaryEn: 'National direct-employment matchmaking portal simplifying homecare services & payroll.',
    problem: 'L’emploi à domicile en France souffrait d’une lourdeur administrative freinant les embauches directes.',
    problemEn: 'Direct home employment in France was burdened with bureaucratic friction, discouraging direct hiring.',
    solution: 'Portail web fluide certifié intégrant simulateurs de salaire Urssaf/CESU temps réel et génération automatique de contrats conformes.',
    solutionEn: 'Streamlined public-private portal featuring real-time Urssaf/CESU wage calculators and automated legally compliant contract drafting.',
    description: 'Conception d’un service public et privé fluide pour la Fédération des Particuliers Employeurs (FEPEM), intégrant simulateurs de salaire, contrats types et gestion administrative simplifiée.',
    descriptionEn: 'Built a streamlined public-private platform for France’s Home Employment Federation, featuring real-time wage calculators, legally compliant contracts, and automated workflows.',
    client: 'FEPEM / MED',
    metrics: [
      { label: 'Mises en relation', labelEn: 'Job Matches Made', value: '250k+' },
      { label: 'Taux de conformité', labelEn: 'Legal Compliance', value: '100%' },
      { label: 'Réduction de friction', labelEn: 'Workflow Acceleration', value: '3x plus rapide' }
    ],
    deliverables: [
      'Portail candidat & employeur double facette',
      'Calculateur Urssaf & CESU temps-réel',
      'Générateur dynamique de contrats de travail certifié',
      'Accessibilité RGAA niveau AA'
    ],
    deliverablesEn: [
      'Candidate & Employer Dual Portal',
      'Real-Time Urssaf Tax Credit Calculator',
      'Dynamic Legally Certified Contract Drafting Wizard',
      'Full RGAA Level AA Accessibility Compliance'
    ],
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    gradientTheme: 'from-purple-900/50 via-[#0d0915] to-[#050308]',
    accentColor: '#8a2be2',
    iconType: 'Users',
    liveStatus: 'LIVE'
  },
  {
    id: 'notadoo',
    title: 'Notadoo',
    category: 'LegalTech & SaaS',
    categoryEn: 'LegalTech & SaaS',
    badge: 'SaaS',
    industry: 'LegalTech',
    summary: 'Plateforme SaaS de gestion d’actes notariés et signature électronique sécurisée.',
    summaryEn: 'SaaS platform automating notary deeds and certified electronic signature workflows.',
    problem: 'Les études notariales accumulaient des semaines de retard dans la formalisation des actes juridiques standards.',
    problemEn: 'Notary offices faced weeks of backlog in drafting and validating recurring legal deeds.',
    solution: 'Plateforme automatisée de génération d’actes avec signature eIDAS qualifiée et archivage probatoire.',
    solutionEn: 'Automated legal deed assembly with certified eIDAS signatures and compliant long-term archival.',
    description: 'Automatisation des flux notariaux : génération de documents juridiques certifiés, signature qualifiée et intégration directe aux bases du conseil supérieur du notariat.',
    descriptionEn: 'Notary workflow automation: certified document drafting, qualified digital signatures, and regulatory integration.',
    client: 'Notadoo SAS',
    metrics: [
      { label: 'Actes générés', labelEn: 'Deeds Processed', value: '45k+' },
      { label: 'Gain de temps / acte', labelEn: 'Time Saved per Deed', value: '-70%' },
      { label: 'Conformité eIDAS', labelEn: 'Security Standard', value: '100%' }
    ],
    deliverables: [
      'Moteur d’assemblage documentaire dynamique',
      'Module de signature électronique eIDAS niveau avancé',
      'Coffre-fort numérique sécurisé',
      'Dashboard analytique de suivi des dossiers'
    ],
    deliverablesEn: [
      'Dynamic Legal Document Assembly Engine',
      'Advanced eIDAS Electronic Signature Integration',
      'Certified Digital Vault Archival',
      'Notary Case Tracking Analytics Dashboard'
    ],
    stack: ['React', 'NestJS', 'PostgreSQL', 'DocuSign API', 'AWS KMS'],
    gradientTheme: 'from-purple-950/50 via-[#0d0915] to-[#050308]',
    accentColor: '#a855f7',
    iconType: 'FileText',
    liveStatus: 'LIVE'
  },
  {
    id: 'moriarty',
    title: 'Moriarty',
    category: 'FinTech & GovTech',
    categoryEn: 'FinTech & GovTech',
    badge: 'SaaS',
    industry: 'FinTech',
    summary: 'SaaS de détection d’anomalies financières et audit automatisé de conformité fiscale.',
    summaryEn: 'Financial anomaly detection and automated tax compliance auditing SaaS platform.',
    problem: 'L’analyse des flux comptables volumineux nécessitait des semaines d’audit manuel sujet aux erreurs humaines.',
    problemEn: 'Auditing massive corporate financial transaction flows took weeks of prone-to-error manual review.',
    solution: 'Moteur d’intelligence financière analysant des millions d’écritures en quelques secondes pour isoler les incohérences.',
    solutionEn: 'Financial intelligence engine auditing millions of ledger entries in seconds to flag discrepancies.',
    description: 'Plateforme d’audit comptable et financier automatisé utilisée par des cabinets d’expertise et directions financières.',
    descriptionEn: 'Automated financial auditing and discrepancy detection platform for accounting firms and CFOs.',
    client: 'Moriarty Analytics',
    metrics: [
      { label: 'Volume audité', labelEn: 'Audited Volume', value: '€2.4B+' },
      { label: 'Précision de détection', labelEn: 'Anomaly Precision', value: '99.4%' },
      { label: 'Temps d’audit', labelEn: 'Audit Acceleration', value: '10x plus rapide' }
    ],
    deliverables: [
      'Moteur d’ingestion multi-formats FEC / XBRL',
      'Algorithmes de détection d’anomalies comptables',
      'Rapports d’audit interactifs certifiés',
      'Gestion des rôles et traçabilité RGPD'
    ],
    deliverablesEn: [
      'Multi-format FEC / XBRL Ingestion Engine',
      'Financial Anomaly Detection Algorithms',
      'Interactive Certified Audit Reports',
      'Role-based Security & Full Audit Logs'
    ],
    stack: ['React', 'Python', 'FastAPI', 'ClickHouse', 'PostgreSQL'],
    gradientTheme: 'from-purple-900/50 via-[#0d0915] to-[#050308]',
    accentColor: '#8a2be2',
    iconType: 'ShieldCheck',
    liveStatus: 'LIVE'
  },
  {
    id: 'huudi',
    title: 'Huudi',
    category: 'FinTech Platform',
    categoryEn: 'FinTech Platform',
    badge: 'Platform',
    industry: 'FinTech',
    summary: 'Plateforme de paiement séquestre et transactions sécurisées entre particuliers et pros.',
    summaryEn: 'Escrow payment platform and verified peer-to-peer high-value transactions.',
    problem: 'Les transactions de gré à gré à fort montant (véhicules, montres, objets d’art) étaient ciblées par les fraudes.',
    problemEn: 'High-value peer-to-peer transactions (luxury goods, vehicles) suffered high fraud rates.',
    solution: 'Système de compte séquestre digital avec vérification d’identité KYC automatisée et déblocage instantané sécurisé.',
    solutionEn: 'Digital escrow infrastructure with automated KYC identity verification and instant secure fund release.',
    description: 'Infrastructure de paiement et séquestre garantissant la sécurité des transactions à fort enjeu.',
    descriptionEn: 'High-trust escrow infrastructure securing high-ticket peer transactions with automated verification.',
    client: 'Huudi Pay',
    metrics: [
      { label: 'Volume sécurisé', labelEn: 'Volume Secured', value: '€40M+' },
      { label: 'Taux de fraude', labelEn: 'Fraud Rate', value: '0.00%' },
      { label: 'Temps KYC moyen', labelEn: 'Avg KYC Speed', value: '< 90s' }
    ],
    deliverables: [
      'Intégration bancaire Treezor / Stripe Custom',
      'Vérification d’identité biométrique KYC',
      'Contrats de séquestre numériques',
      'Système de notification temps réel multi-canal'
    ],
    deliverablesEn: [
      'Banking Infrastructure Integration (Treezor / Stripe)',
      'Biometric KYC Identity Verification Flow',
      'Digital Escrow Smart Agreements',
      'Multi-channel Real-time Event System'
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe Connect', 'Onfido'],
    gradientTheme: 'from-violet-950/50 via-[#0d0915] to-[#050308]',
    accentColor: '#c084fc',
    iconType: 'Lock',
    liveStatus: 'LIVE'
  },
  {
    id: 'optivest',
    title: 'Optivest',
    category: 'FinTech & AI Tool',
    categoryEn: 'FinTech & AI Tool',
    badge: 'AI Tool',
    industry: 'FinTech',
    summary: 'Outil d’optimisation de portefeuille d’investissement par intelligence artificielle générative.',
    summaryEn: 'AI-powered quantitative portfolio optimization and risk forecasting suite.',
    problem: 'Les conseillers financiers manquaient d’outils modernes pour simuler des scénarios macroéconomiques complexes en temps réel.',
    problemEn: 'Wealth managers lacked real-time tooling to model complex macroeconomic stress scenarios with clients.',
    solution: 'Suite d’analyse prédictive combinant modèles de Markov, LLM financiers et simulations Monte-Carlo interactives.',
    solutionEn: 'Predictive suite fusing Markov models, financial LLM agents, and interactive Monte-Carlo risk simulations.',
    description: 'Plateforme d’aide à la décision pour gestionnaires de patrimoine et investisseurs privés.',
    descriptionEn: 'Decision intelligence platform for wealth management advisors and private family offices.',
    client: 'Optivest Capital',
    metrics: [
      { label: 'Scénarios simulés', labelEn: 'Simulations Run', value: '500k+' },
      { label: 'Actifs sous analyse', labelEn: 'Assets Monitored', value: '€600M+' },
      { label: 'Temps de calcul', labelEn: 'Computation Latency', value: '< 300ms' }
    ],
    deliverables: [
      'Moteur de simulation Monte-Carlo temps réel',
      'Assistant IA d’analyse de rapports de gestion',
      'Visualisation financière vectorielle Canvas 2D/3D',
      'Générateur de fiches de recommandation réglementées'
    ],
    deliverablesEn: [
      'Real-time Monte-Carlo Risk Engine',
      'AI Financial Analyst Assistant',
      'High-performance 2D/3D Canvas Visualization',
      'Automated Regulatory Compliance Reports'
    ],
    stack: ['React', 'FastAPI', 'Python Quant', 'PostgreSQL', 'Three.js'],
    gradientTheme: 'from-purple-900/50 via-[#0d0915] to-[#050308]',
    accentColor: '#a855f7',
    iconType: 'LineChart',
    liveStatus: 'LIVE'
  },
  {
    id: 'goodyear',
    title: 'Goodyear Fleet',
    category: 'Industry & Logistics',
    categoryEn: 'Industry & Logistics',
    badge: 'Platform',
    industry: 'Logistics',
    summary: 'Plateforme IoT et mobile d’inspection et maintenance prédictive de flottes de poids lourds.',
    summaryEn: 'Enterprise IoT and mobile inspection platform for commercial heavy-duty fleet predictive maintenance.',
    problem: 'Les pannes de pneumatiques imprévues sur autoroute coûtaient des millions d’euros en immobilisation.',
    problemEn: 'Unscheduled tire blowouts on commercial highway fleets caused millions in unexpected downtime.',
    solution: 'Application d’inspection mobile connectée à des capteurs de pression et IA de détection d’usure par vision.',
    solutionEn: 'Mobile inspection app connected to telematics tire pressure sensors and computer vision tread analysis.',
    description: 'Outil de gestion et diagnostic terrain déployé pour les techniciens et gestionnaires de parcs poids lourds.',
    descriptionEn: 'Diagnostic field tool deployed across national logistics hubs for fleet technicians and depot managers.',
    client: 'Goodyear France',
    metrics: [
      { label: 'Véhicules inspectés', labelEn: 'Vehicles Inspected', value: '35k+' },
      { label: 'Réduction des pannes', labelEn: 'Breakdown Reduction', value: '-38%' },
      { label: 'Gain de temps relevé', labelEn: 'Inspection Speed', value: '4x plus rapide' }
    ],
    deliverables: [
      'Application mobile offline-first pour techniciens',
      'Portail de supervision pour gestionnaires de flotte',
      'Moteur d’alerte prédictive d’usure pneumatique',
      'API d’intégration ERP transport TMS'
    ],
    deliverablesEn: [
      'Offline-First Mobile Inspection App for Technicians',
      'Central Depot Fleet Operations Web Portal',
      'Predictive Tire Wear Anomaly Engine',
      'TMS / ERP Transport Systems API Integration'
    ],
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Azure IoT', 'TailwindCSS'],
    gradientTheme: 'from-blue-950/50 via-[#0d0915] to-[#050308]',
    accentColor: '#3b82f6',
    iconType: 'Truck',
    liveStatus: 'LIVE'
  },
  {
    id: 'meeriad',
    title: 'Meeriad',
    category: 'HRTech & Health',
    categoryEn: 'HRTech & Health',
    badge: 'SaaS',
    industry: 'HRTech',
    summary: 'Application mobile et SaaS B2B de santé mentale, bien-être et coaching pour salariés.',
    summaryEn: 'B2B enterprise mental health, wellbeing, and confidential coaching mobile app & platform.',
    problem: 'Le désengagement et le burn-out coûtaient des millions aux entreprises sans solution confidentielle adaptée.',
    problemEn: 'Employee burnout and mental health stigma cost companies millions with zero accessible confidential support.',
    solution: 'Écosystème complet mobile et web combinant téléconsultations sécurisées, programmes guidés et baromètre QVT anonyme.',
    solutionEn: 'Complete mobile & web ecosystem combining encrypted video consultations, guided audio programs, and anonymous pulse surveys.',
    description: 'Plateforme déployée auprès de dizaines de milliers de salariés dans de grands groupes et scale-ups.',
    descriptionEn: 'Enterprise mental health platform adopted by tens of thousands of employees across major corporations and scale-ups.',
    client: 'Meeriad HQ',
    metrics: [
      { label: 'Salariés couverts', labelEn: 'Employees Covered', value: '70k+' },
      { label: 'Note App Store', labelEn: 'App Store Rating', value: '4.9 ★' },
      { label: 'Engagement mensuel', labelEn: 'Monthly Engagement', value: '72%' }
    ],
    deliverables: [
      'Application Mobile iOS & Android ultra-fluide',
      'Module de visioconsultation chiffrée WebRTC',
      'Baromètre RH anonymisé temps réel',
      'Catalogue de contenus audio & exercices interactifs'
    ],
    deliverablesEn: [
      'High-performance iOS & Android Native Mobile App',
      'Encrypted WebRTC Teleconsultation Video Module',
      'Anonymized Real-time HR Wellness Pulse Dashboard',
      'Interactive Audio & Mindfulness Content Engine'
    ],
    stack: ['React Native', 'React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Redis'],
    gradientTheme: 'from-purple-900/50 via-[#0d0915] to-[#050308]',
    accentColor: '#8a2be2',
    iconType: 'HeartPulse',
    liveStatus: 'SCALING'
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'product',
    title: 'Produit',
    titleEn: 'Product',
    tagline: 'De l’idée initiale aux stores et en production.',
    taglineEn: 'From raw concept to live production.',
    icon: 'Layers',
    items: [
      {
        id: 'web-apps',
        title: 'Applications Web & Plateformes',
        titleEn: 'Web Applications & Platforms',
        description: 'Applications web modernes, ultra-rapides, responsives et orientées conversion bâties sur Next.js et React.',
        descriptionEn: 'High-performance, responsive web applications engineered for speed and conversion with Next.js and React.',
        deliverables: ['Architecture Next.js / React', 'SSR & Edge Caching', 'Intégration API & Auth', 'Dashboard Analytics'],
        deliverablesEn: ['Next.js / React Architecture', 'SSR & Edge Caching', 'API & Auth Integrations', 'Analytics Dashboard'],
        tag: 'Next.js · React'
      },
      {
        id: 'mobile-apps',
        title: 'Applications Mobiles iOS & Android',
        titleEn: 'Mobile Apps iOS & Android',
        description: 'Applications mobiles natives 60fps conçues avec React Native, supportant le mode hors-ligne et les notifications push.',
        descriptionEn: '60fps native mobile applications built with React Native, offline-first local sync, and rich push notifications.',
        deliverables: ['App iOS & Android unifiée', 'Publication App Store & Play Store', 'Push Notifications & Deeplinking', 'Mode Hors-ligne'],
        deliverablesEn: ['Unified iOS & Android App', 'Store Publishing & Compliance', 'Push Notifications & Deeplinking', 'Offline-First Sync'],
        tag: 'React Native · iOS · Android'
      },
      {
        id: 'saas-platforms',
        title: 'Plateformes SaaS B2B',
        titleEn: 'B2B SaaS Platforms',
        description: 'Multi-tenant, gestion des abonnements Stripe, permissions granulaires RBAC et tunnels d’onboarding sans friction.',
        descriptionEn: 'Multi-tenant databases, Stripe subscription billing, granular RBAC security, and frictionless onboarding.',
        deliverables: ['Architecture Multi-Tenant', 'Facturation Stripe & Prorata', 'Gestion des Rôles & SSO', 'Télémétrie Churn / LTV'],
        deliverablesEn: ['Multi-Tenant Architecture', 'Stripe Billing & Subscriptions', 'SSO & Role Permissions', 'Churn & LTV Telemetry'],
        tag: 'Multi-tenant · Stripe'
      },
      {
        id: 'mvp-fast-track',
        title: 'MVP Fast-Track (3-4 semaines)',
        titleEn: 'MVP Fast-Track (3-4 weeks)',
        description: 'Conception et développement commando d’un MVP solide pour valider votre marché ou réussir votre levée de fonds.',
        descriptionEn: 'Focused sprint delivery of a rock-solid MVP to validate your market or close your funding round.',
        deliverables: ['Cadrage fonctionnel strict', 'Maquettes & Dév en parallèle', 'Déploiement production live', 'Code 100% cédé'],
        deliverablesEn: ['Strict Scope Prioritization', 'Parallel Design & Build', 'Live Production Rollout', '100% IP Handover'],
        tag: '3 à 4 semaines'
      }
    ]
  },
  {
    id: 'intelligence',
    title: 'Intelligence',
    titleEn: 'Intelligence',
    tagline: 'L’IA native directement au cœur de votre produit.',
    taglineEn: 'Native AI embedded into your product core.',
    icon: 'Bot',
    items: [
      {
        id: 'ai-products',
        title: 'Produits IA Natifs',
        titleEn: 'Native AI Products',
        description: 'Produits conçus autour des modèles d’IA : assistants conversationnels, génération multimodale et recommandation.',
        descriptionEn: 'Software built with AI at its core: conversational assistants, multimodal generation, and recommendation engines.',
        deliverables: ['Orchestration LLM multi-fournisseurs', 'Prompt Engineering avancé', 'Streaming UI temps réel', 'Guardrails de modération'],
        deliverablesEn: ['Multi-provider LLM Routing', 'Advanced Prompt Systems', 'Real-time Streaming UI', 'Safety Guardrails'],
        tag: 'LLM · Claude · GPT'
      },
      {
        id: 'ai-agents',
        title: 'Agents IA Autonomes',
        titleEn: 'Autonomous AI Agents',
        description: 'Agents capables d’exécuter des séquences complexes d’actions, de requêter vos APIs et d’automatiser vos opérations.',
        descriptionEn: 'Autonomous agents capable of multi-step reasoning, executing external API calls, and automating operations.',
        deliverables: ['Boucles de raisonnement ReAct', 'Appel d’outils & API Tool Use', 'Mémoire contextuelle persistante', 'Logs d’audit & observabilité'],
        deliverablesEn: ['ReAct Reasoning Loops', 'Tool Use & Function Calling', 'Persistent Context Memory', 'Audit Logs & Telemetry'],
        tag: 'Autonomous · Tool Use'
      },
      {
        id: 'rag-vector',
        title: 'RAG & Recherche Vectorielle',
        titleEn: 'RAG & Vector Knowledge',
        description: 'Connectez l’IA à vos documents et bases de données propriétaires en toute confidentialité et sans hallucinations.',
        descriptionEn: 'Connect AI to your private enterprise databases and documents with zero data leakage and minimal hallucinations.',
        deliverables: ['Pipelines d’embeddings optimisés', 'Bases vectorielles pgvector / Pinecone', 'Reranking sémantique', 'Citations de sources exactes'],
        deliverablesEn: ['Chunking & Embeddings Pipeline', 'Vector DB (pgvector/Pinecone)', 'Semantic Reranking Layer', 'Source Attribution Engine'],
        tag: 'RAG · pgvector'
      },
      {
        id: 'automation',
        title: 'Automatisation des Workflows Métier',
        titleEn: 'Business Workflow Automation',
        description: 'Suppression des tâches manuelles répétitives : qualification de leads, extraction de documents, synchronisation ERP.',
        descriptionEn: 'Eliminate repetitive manual tasks: lead qualification, document parsing, and ERP data sync.',
        deliverables: ['Connecteurs API bidirectionnels', 'Pipelines de traitement asynchrone', 'Gestion des erreurs & retries', 'Tableaux de bord d’exécution'],
        deliverablesEn: ['Bidirectional API Connectors', 'Async Queue Processing', 'Automatic Retries & Alerts', 'Execution Dashboards'],
        tag: 'APIs · Workflows'
      }
    ]
  },
  {
    id: 'experience',
    title: 'Expérience',
    titleEn: 'Experience',
    tagline: 'Des interfaces évidentes qui maximisent la conversion.',
    taglineEn: 'Intuitive interfaces engineered to convert.',
    icon: 'Sparkles',
    items: [
      {
        id: 'product-design',
        title: 'Product Design UX/UI',
        titleEn: 'Product UX/UI Design',
        description: 'Recherche utilisateur, parcours sans friction, design d’interfaces soigné et ergonomie chirurgicale.',
        descriptionEn: 'User research, frictionless user journeys, pixel-perfect interface craft, and surgical usability.',
        deliverables: ['User Flow Maps', 'Wireframes basse-fidélité', 'Maquettes UI Figma haute-fidélité', 'Prototypes cliquables'],
        deliverablesEn: ['User Flow Maps', 'Low-fidelity Wireframes', 'High-fidelity Figma Mockups', 'Interactive Prototypes'],
        tag: 'Figma · UX/UI'
      },
      {
        id: 'design-systems',
        title: 'Design Systems Modulaires',
        titleEn: 'Modular Design Systems',
        description: 'Bibliothèque de composants UI réutilisables, tokens de design, typographie et documentation pour accélérer le build.',
        descriptionEn: 'Reusable UI component library, design tokens, typography scale, and documentation to supercharge engineering.',
        deliverables: ['Tokens de couleur et typographie', 'Composants React / Tailwind', 'Documentation Storybook', 'Accessibilité WCAG AA'],
        deliverablesEn: ['Color & Typography Tokens', 'React / Tailwind Components', 'Storybook Documentation', 'WCAG AA Accessibility'],
        tag: 'Tokens · Reusable'
      },
      {
        id: 'landing-pages',
        title: 'Landing Pages & Tunnels de Vente',
        titleEn: 'High-Converting Landing Pages',
        description: 'Pages de présentation produit et tunnels conçus pour transformer vos visiteurs en utilisateurs payants.',
        descriptionEn: 'Product landing pages and conversion funnels engineered to turn curious visitors into paying customers.',
        deliverables: ['Copywriting axé valeur', 'Micro-interactions & animations', 'Score Google PageSpeed 95+', 'SEO technique & OpenGraph'],
        deliverablesEn: ['High-impact Copywriting', 'Smooth Micro-animations', '95+ Google PageSpeed Score', 'Technical SEO & Metadata'],
        tag: 'Conversion · SEO'
      },
      {
        id: 'branding',
        title: 'Branding & Identité de Marque',
        titleEn: 'Branding & Visual Identity',
        description: 'Création d’un univers visuel fort, crédible et mémorable qui inspire confiance dès le premier coup d’œil.',
        descriptionEn: 'Crafting a distinct, credible, and memorable visual universe that commands instant trust.',
        deliverables: ['Logo & Déclinaisons vectorielles', 'Charte graphique complète', 'Iconographie & palettes', 'Templates réseaux sociaux'],
        deliverablesEn: ['Vector Logo System', 'Complete Brand Guidelines', 'Iconography & Palettes', 'Social Media Kit'],
        tag: 'Brand Identity'
      }
    ]
  },
  {
    id: 'longterm',
    title: 'Long-terme',
    titleEn: 'Long-term',
    tagline: 'On reste à vos côtés après le lancement pour faire grandir le produit.',
    taglineEn: 'We partner with you post-launch to evolve and scale.',
    icon: 'ShieldCheck',
    items: [
      {
        id: 'maintenance-evolution',
        title: 'Maintenance & Évolution Continue',
        titleEn: 'Maintenance & Continuous Evolution',
        description: 'Monitoring 24/7, mises à jour de sécurité, correctifs réactifs et ajouts réguliers de nouvelles fonctionnalités.',
        descriptionEn: '24/7 uptime monitoring, security patches, rapid bug resolution, and continuous feature shipping.',
        deliverables: ['Garantie de disponibilité SLA', 'Mises à jour de dépendances', 'Sprints d’évolutions mensuels', 'Interlocuteur senior dédié'],
        deliverablesEn: ['SLA Uptime Guarantee', 'Dependency & Security Patches', 'Monthly Feature Sprints', 'Dedicated Senior Lead'],
        tag: 'SLA · Monitoring'
      },
      {
        id: 'performance-tuning',
        title: 'Optimisation des Performances & SEO',
        titleEn: 'Performance & SEO Optimization',
        description: 'Réduction des temps de chargement, optimisation des requêtes SQL, mise en cache CDN et SEO sémantique.',
        descriptionEn: 'Lowering latencies, optimizing database queries, CDN caching strategies, and structured SEO.',
        deliverables: ['Audit Core Web Vitals', 'Indexation de base de données', 'Compression des assets', 'Structured Data Schema.org'],
        deliverablesEn: ['Core Web Vitals Audit', 'Database Index Tuning', 'Asset Pipeline Compression', 'Schema.org Structured Data'],
        tag: 'Web Vitals · Latency'
      },
      {
        id: 'cloud-infrastructure',
        title: 'Architecture Cloud & DevOps',
        titleEn: 'Cloud Infrastructure & DevOps',
        description: 'Déploiement d’infrastructures auto-scalables sur AWS, Vercel ou Supabase avec sauvegardes automatiques.',
        descriptionEn: 'Deploying auto-scaling cloud architectures on AWS, Vercel, or Supabase with automated point-in-time backups.',
        deliverables: ['Infrastructure as Code (IaC)', 'Pipelines CI/CD automatisées', 'Stratégie de sauvegardes redondantes', 'Gestion des secrets & sécurité'],
        deliverablesEn: ['Infrastructure as Code (IaC)', 'Automated CI/CD Pipelines', 'Redundant Backup Strategy', 'Secrets Management'],
        tag: 'AWS · Vercel · DevOps'
      },
      {
        id: 'team-handover',
        title: 'Passation & Structuration d’Équipe',
        titleEn: 'Team Handover & Tech Advisory',
        description: 'Documentation exhaustive du code, onboarding de vos futurs développeurs internes et conseil CTO.',
        descriptionEn: 'Thorough codebase documentation, onboarding your future in-house engineering hires, and interim CTO advisory.',
        deliverables: ['Documentation technique complète', 'Sessions de passation enregistrées', 'Support au recrutement tech', 'Audit de code tiers'],
        deliverablesEn: ['Complete Technical Docs', 'Recorded Handover Sessions', 'Tech Hiring Support', 'Codebase Audit'],
        tag: 'Handover · Documentation'
      }
    ]
  }
];

export const AI_AGENT_SCENARIOS: AIAgentScenario[] = [
  {
    id: 'qualification',
    title: 'Agent de Qualification & Onboarding B2B',
    titleEn: 'B2B Lead Qualification & Onboarding Agent',
    role: 'Qualification instantanée et routage commercial intelligent',
    roleEn: 'Instant lead scoring and automated sales routing',
    trigger: 'Un visiteur remplit le formulaire ou pose une question sur la landing page',
    triggerEn: 'A prospect submits a form or asks a question on the landing page',
    reasoning: 'Analyse sémantique du profil de l’entreprise, vérification Sirene/LinkedIn et scoring du budget',
    reasoningEn: 'Semantic parsing of company profile, enrichment via public databases, and budget fit scoring',
    action: 'Génération du brief personnalisé, synchronisation CRM (HubSpot/Slack) et envoi d’un lien Calendly adapté',
    actionEn: 'Generates tailored project brief, syncs CRM (HubSpot/Slack), and suggests tailored Calendly slots',
    outcome: 'Temps de réponse réduit de 4h à 8 secondes · Taux de conversion démo +35%',
    outcomeEn: 'Lead response time reduced from 4h to 8 seconds · Demo booking rate +35%',
    codeSnippet: `// Autonomous Lead Scoring Flow
const analysis = await ai.agents.run({
  model: 'claude-3-5-sonnet',
  tools: [tools.enrichCompany, tools.calculateFitScore],
  input: { leadData, requirementContext }
});
if (analysis.fitScore >= 85) {
  await tools.notifyTeamSlack({ priority: 'HIGH', analysis });
  await tools.scheduleMeeting({ calendar: 'founder', lead: leadData.email });
}`
  },
  {
    id: 'documents',
    title: 'Agent d’Extraction & Audit Documentaire',
    titleEn: 'Document Intelligence & Compliance Agent',
    role: 'Lecture, extraction structurée et détection d’incohérences contractuelles',
    roleEn: 'Automated document parsing, data structuring, and risk auditing',
    trigger: 'Upload d’un contrat PDF ou facture scannée par un utilisateur',
    triggerEn: 'User uploads a PDF legal contract or scanned invoice',
    reasoning: 'Extraction OCR multimodale, normalisation des clauses et vérification des critères réglementaires',
    reasoningEn: 'Multimodal OCR extraction, legal clause normalization, and regulatory compliance check',
    action: 'Insertion des données structurées en base SQL et signalement des clauses à risque au juriste',
    actionEn: 'Inserts clean typed records into PostgreSQL and flags high-risk clauses for legal review',
    outcome: 'Traitement de 50 pages en 4.2s · 0 erreur de saisie manuelle · Audit 100% conforme',
    outcomeEn: '50-page document parsed in 4.2s · Zero manual data entry errors · 100% compliance audit',
    codeSnippet: `// Document Ingestion & Regulatory Extraction
const extraction = await ai.extractStructured({
  schema: ContractSchema,
  document: pdfBuffer,
  guardrails: { strictCompliance: true }
});
await db.contracts.create({ data: extraction.data });
if (extraction.risks.length > 0) {
  await alerts.dispatchLegalReview({ risks: extraction.risks });
}`
  },
  {
    id: 'retention',
    title: 'Agent d’Optimisation Rétention & Churn',
    titleEn: 'SaaS Churn Intervention & Retention Agent',
    role: 'Détection prédictive de désengagement et actions de rétention proactives',
    roleEn: 'Predictive drop-off detection and proactive user re-engagement',
    trigger: 'Baisse d’activité d’un utilisateur SaaS sous le seuil d’usage habituel',
    triggerEn: 'Active user activity drops below historical usage threshold',
    reasoning: 'Analyse des fonctionnalités bloquantes rencontrées et historique de tickets',
    reasoningEn: 'Correlates friction events, failed exports, and support ticket history',
    action: 'Déclenchement d’une aide contextuelle in-app ciblée ou proposition d’un appel support prioritaire',
    actionEn: 'Triggers targeted in-app micro-walkthrough or schedules high-priority founder check-in',
    outcome: 'Réduction du taux de churn de -28% · Taux d’activation réactivée 44%',
    outcomeEn: 'Churn rate reduced by -28% · Re-activation rate of lapsed users 44%',
    codeSnippet: `// Proactive Retention Engine
const riskVector = await telemetry.calculateChurnRisk(userId);
if (riskVector.score > 0.70) {
  const customIntervention = await ai.generatePersonalizedHelp({
    userPainPoint: riskVector.lastStalledAction,
    tier: user.subscriptionTier
  });
  await inAppNotification.push({ userId, message: customIntervention });
}`
  }
];

export const FOUNDERS: Founder[] = [
  {
    id: 'anthony',
    name: 'Anthony Muñoz Cifuentes',
    role: 'Cofondateur & Président',
    roleEn: 'Co-Founder & President',
    bio: 'Ancien trader en finance de marché, Anthony est un entrepreneur tech chevronné ayant créé et développé plusieurs sociétés SaaS avec passion. Maître de la stratégie « land and expand », il insuffle la vision produit, l’alignement stratégique au marché et l’obsession de la conversion au sein de chaque projet Zetos.',
    bioEn: 'Former financial markets trader turned serial tech entrepreneur. Anthony has founded and scaled multiple SaaS businesses, mastering the "land and expand" GTM framework. He brings sharp strategic clarity, market validation, and relentless execution to every single Zetos project.',
    specialties: ['Stratégie Produit & GTM', 'Architecture SaaS', 'Modèles Économiques', 'Finance & Levée de Fonds'],
    specialtiesEn: ['Product Strategy & GTM', 'SaaS Architecture', 'Business Models', 'Fundraising & Unit Economics'],
    trackRecord: '10+ SaaS lancés · Ancien trader marchés financiers · Multi-fondateur',
    trackRecordEn: '10+ SaaS launched · Former financial trader · Serial founder',
    linkedin: 'https://www.linkedin.com/in/anthony-munoz-cifuentes-6598376a/',
    imageAlt: 'Anthony Muñoz Cifuentes — Cofondateur & Président Zetos'
  },
  {
    id: 'theo',
    name: 'Théo Pascard',
    role: 'Cofondateur & Directeur Général',
    roleEn: 'Co-Founder & Managing Director',
    bio: 'Entrepreneur passionné par l’innovation d’usage et la création d’expériences digitales de haut niveau. Théo a notamment cofondé Meeriad (plateforme de santé mentale en entreprise). LinkedIn Top Voice et lauréat Choiseul Sport & Business, il pilote le delivery, la précision produit et l’excellence opérationnelle.',
    bioEn: 'Serial founder passionate about high-impact digital experiences. Co-founder of Meeriad (enterprise mental health platform). LinkedIn Top Voice and Choiseul Sport & Business laureate, Théo oversees delivery velocity, product craft, and operational excellence.',
    specialties: ['Product Delivery & Craft', 'Expérience Utilisateur UX', 'Partenariats & Écosystème', 'Scale Opérationnel'],
    specialtiesEn: ['Product Delivery & Craft', 'User Experience UX', 'Ecosystem Partnerships', 'Operational Scaling'],
    trackRecord: 'Cofondateur Meeriad · Choiseul Sport & Business · LinkedIn Top Voice',
    trackRecordEn: 'Co-founder Meeriad · Choiseul Sport & Business · LinkedIn Top Voice',
    linkedin: 'https://www.linkedin.com/in/theo-pascard/',
    imageAlt: 'Théo Pascard — Cofondateur & Directeur Général Zetos'
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    num: '01',
    title: 'Nous prenons des risques',
    titleEn: 'We take shared risks',
    body: 'C’est l’essence même de l’entrepreneuriat. Quand nous nous engageons sur un projet, nous le livrons quoi qu’il en coûte. Notre modèle au forfait aligne nos intérêts directs sur vos résultats : nous absorbons le risque d’exécution.',
    bodyEn: 'True entrepreneurship is about conviction. When we commit to a scope, we deliver no matter what. Our fixed-price model directly aligns our success with yours: we absorb execution risk.'
  },
  {
    num: '02',
    title: 'Nous délivrons',
    titleEn: 'We ship relentlessly',
    body: 'Chaque client est notre combat pour dépasser les attentes. Nous ne croyons qu’aux résultats tangibles et mesurables. Les demi-mesures, les délais élastiques et les approximations ne font pas partie de notre vocabulaire.',
    bodyEn: 'Every client is our battle to exceed expectations. We believe only in shipped code and measurable outcomes. Half-measures, creeping deadlines, and vague scopes have no place in our vocabulary.'
  },
  {
    num: '03',
    title: 'Vous gardez 100% de l’ownership',
    titleEn: 'You retain 100% IP ownership',
    body: 'Votre produit, votre code source, vos bases de données, vos accès et votre propriété intellectuelle restent intégralement les vôtres. Aucun verrouillage technologique, aucune dépendance forcée. Vous êtes libres.',
    bodyEn: 'Your product, source code, databases, cloud credentials, and intellectual property are 100% yours. Zero vendor lock-in, no proprietary traps — clean standard modern stacks ready for internal handover.'
  },
  {
    num: '04',
    title: 'Nous sommes intenses',
    titleEn: 'We work with surgical intensity',
    body: 'Notre équipe est constituée d’ingénieurs et designers seniors. Nous maîtrisons notre art, cultivons notre expertise en permanence et livrons avec une précision chirurgicale. L’intensité est notre standard quotidien.',
    bodyEn: 'Our team is exclusively composed of senior engineers and product designers. We master our craft daily to deliver with surgical precision and exceptional velocity. Intensity is our daily standard.'
  },
  {
    num: '05',
    title: 'Nous sommes comme vous',
    titleEn: 'We are founders just like you',
    body: 'Nous parlons votre langage opérationnel, comprenons vos défis de trésorerie et vos arbitrages de roadmap. Nous résolvons les problèmes plutôt que d’empiler des réunions. Des entrepreneurs au service d’entrepreneurs.',
    bodyEn: 'We speak the operational language of founders. We understand cash flow realities, launch pressure, and solve blockers instead of scheduling endless meetings. Founders building for founders.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'humoon',
    quote: 'Merci à Zetos qui nous a permis de faire changer notre produit de dimension à une étape cruciale de notre développement. L’équipe était très réactive et à l’écoute de nos besoins. On est super contents du résultat et on continue de leur faire confiance pour la maintenance et l’optimisation continue.',
    quoteEn: 'Huge thanks to Zetos who took our digital product to the next level at a pivotal stage of our company growth. The team was extremely responsive, proactive, and technically sharp. We couldn’t be happier with the outcome and continue to partner with them for continuous product scaling.',
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

export const INDUSTRIES = [
  { name: 'SaaS B2B', count: '10+ projets' },
  { name: 'FinTech', count: '6 projets' },
  { name: 'TravelTech', count: '4 projets' },
  { name: 'SportsTech', count: '5 projets' },
  { name: 'HRTech', count: '8 projets' },
  { name: 'LegalTech', count: '3 projets' },
  { name: 'GovTech', count: '4 projets' },
  { name: 'AdTech & OOH', count: '3 projets' },
  { name: 'MusicTech', count: '2 projets' },
  { name: 'Logistics', count: '3 projets' }
];
