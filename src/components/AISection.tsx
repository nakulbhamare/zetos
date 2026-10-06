import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AI_AGENT_SCENARIOS } from '../data/content';
import {
  Bot,
  Database,
  Brain,
  Zap,
  CheckCircle2,
  Play,
  Terminal
} from 'lucide-react';

interface AISectionProps {
  onOpenContactModal: () => void;
}

export const AISection: React.FC<AISectionProps> = ({ onOpenContactModal }) => {
  const { language, t } = useLanguage();
  const [selectedAgentId, setSelectedAgentId] = useState<string>('qualification');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);

  const scenario = AI_AGENT_SCENARIOS.find((s) => s.id === selectedAgentId) || AI_AGENT_SCENARIOS[0];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulationStep(1);

    setTimeout(() => setSimulationStep(2), 700);
    setTimeout(() => setSimulationStep(3), 1400);
    setTimeout(() => setSimulationStep(4), 2100);
    setTimeout(() => {
      setIsSimulating(false);
    }, 2800);
  };

  return (
    <section id="ia" className="relative py-24 md:py-32 bg-[#050308] border-b border-white/5 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#8a2be2]/12 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#a855f7]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160c28] border border-[#8a2be2]/30 text-xs font-bold uppercase tracking-widest text-[#c084fc] mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>{t('Intelligence Artificielle & Automatisation', 'Artificial Intelligence & Automation')}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-white tracking-tight mb-6">
            <span className="block">Data.</span>
            <span className="block text-gradient-purple">Intelligence.</span>
            <span className="block">Action.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#dedae9] leading-relaxed">
            {t(
              'L’IA ne doit pas être un gadget marketing. Nous intégrons des agents autonomes et des modèles personnalisés directement connectés à vos données pour automatiser vos opérations.',
              'AI should not be a superficial gimmick. We embed autonomous agents and customized models directly into your business pipelines to automate real work.'
            )}
          </p>
        </div>

        {/* 3-Step AI Pipeline Architecture Visual (Input -> AI Reasoning -> Action) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Step 1: DATA */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#11091e] to-[#07040d] border border-white/10 relative overflow-hidden group hover:border-[#8a2be2]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#8a2be2]/20 border border-[#8a2be2]/40 flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-[#c084fc]" />
            </div>
            <span className="text-xs font-mono font-bold text-[#c084fc] uppercase tracking-wider block mb-2">
              01 / ENTRÉE & DONNÉES
            </span>
            <h3 className="text-xl font-bold font-heading text-white mb-3">
              {t('Données & Règles Métier', 'Proprietary Data & Context')}
            </h3>
            <p className="text-xs sm:text-sm text-[#dedae9] leading-relaxed mb-6">
              {t(
                'Bases PostgreSQL, documents PDF, index vectoriels pgvector, APIs d’entreprises et règles de gestion.',
                'PostgreSQL databases, documents, pgvector embeddings, enterprise APIs, and business rules.'
              )}
            </p>
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#9890a8]">RAG Vector</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#9890a8]">PostgreSQL</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#9890a8]">APIs</span>
            </div>
          </div>

          {/* Step 2: INTELLIGENCE */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#180c30] to-[#0c0617] border border-[#8a2be2]/60 shadow-[0_0_30px_rgba(138,43,226,0.25)] relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-[#8a2be2] flex items-center justify-center mb-6 shadow-[0_0_20px_#8a2be2]">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-mono font-bold text-[#e9d5ff] uppercase tracking-wider block mb-2">
              02 / RAISONNEMENT IA
            </span>
            <h3 className="text-xl font-bold font-heading text-white mb-3">
              {t('Agents & LLM Orchestrés', 'Autonomous Agents & LLMs')}
            </h3>
            <p className="text-xs sm:text-sm text-[#dedae9] leading-relaxed mb-6">
              {t(
                'Modèles Claude 3.5, OpenAI et open-source avec boucles de raisonnement ReAct, guardrails de sécurité et mémoire.',
                'Claude 3.5, OpenAI, and open-source models with ReAct loops, safety guardrails, and persistent memory.'
              )}
            </p>
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-[#e9d5ff]">ReAct Loop</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-[#e9d5ff]">Claude 3.5</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-[#e9d5ff]">Tool Use</span>
            </div>
          </div>

          {/* Step 3: ACTION */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#11091e] to-[#07040d] border border-white/10 relative overflow-hidden group hover:border-[#8a2be2]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#8a2be2]/20 border border-[#8a2be2]/40 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-[#c084fc]" />
            </div>
            <span className="text-xs font-mono font-bold text-[#c084fc] uppercase tracking-wider block mb-2">
              03 / EXÉCUTION & ACTION
            </span>
            <h3 className="text-xl font-bold font-heading text-white mb-3">
              {t('Automatisation & Résultats', 'Execution & Business ROI')}
            </h3>
            <p className="text-xs sm:text-sm text-[#dedae9] leading-relaxed mb-6">
              {t(
                'Envoi automatique d’emails personnalisés, mise à jour de bases de données, alertes Slack et déclenchement de webhooks.',
                'Automated personalized emails, live database updates, Slack alerts, and webhook triggers.'
              )}
            </p>
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#9890a8]">Webhooks</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#9890a8]">CRM Sync</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#9890a8]">Actions API</span>
            </div>
          </div>
        </div>

        {/* Interactive Live AI Agent Simulator */}
        <div className="rounded-3xl bg-[#090510] border border-[#8a2be2]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8a2be2]/15 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#9890a8]">
                  {t('SIMULATEUR D’AGENT IA EN TEMPS RÉEL', 'LIVE AI AGENT WORKFLOW SIMULATOR')}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                {language === 'fr' ? scenario.title : scenario.titleEn}
              </h3>
            </div>

            {/* Agent Scenario Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {AI_AGENT_SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => {
                    setSelectedAgentId(sc.id);
                    setSimulationStep(0);
                    setIsSimulating(false);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedAgentId === sc.id
                      ? 'bg-[#8a2be2] text-white shadow-[0_0_15px_rgba(138,43,226,0.5)]'
                      : 'bg-white/5 text-[#9890a8] hover:text-white'
                  }`}
                >
                  {sc.id === 'qualification' ? 'Qualification' : sc.id === 'documents' ? 'Documents' : 'Rétention'}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Agent Step Simulation Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Step 1: Trigger */}
            <div
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                simulationStep >= 1
                  ? 'bg-[#180c2e] border-[#8a2be2] shadow-[0_0_15px_rgba(138,43,226,0.3)]'
                  : 'bg-[#0d0718] border-white/5'
              }`}
            >
              <span className="text-[10px] font-mono text-[#c084fc] font-bold block mb-1">
                1. DÉCLENCHEUR
              </span>
              <p className="text-xs text-white font-medium mb-2">
                {language === 'fr' ? scenario.trigger : scenario.triggerEn}
              </p>
              {simulationStep >= 1 && (
                <span className="text-[10px] font-mono text-[#34d399] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Reçu
                </span>
              )}
            </div>

            {/* Step 2: Reasoning */}
            <div
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                simulationStep >= 2
                  ? 'bg-[#180c2e] border-[#8a2be2] shadow-[0_0_15px_rgba(138,43,226,0.3)]'
                  : 'bg-[#0d0718] border-white/5'
              }`}
            >
              <span className="text-[10px] font-mono text-[#c084fc] font-bold block mb-1">
                2. RAISONNEMENT IA
              </span>
              <p className="text-xs text-white font-medium mb-2">
                {language === 'fr' ? scenario.reasoning : scenario.reasoningEn}
              </p>
              {simulationStep >= 2 && (
                <span className="text-[10px] font-mono text-[#34d399] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Analysé
                </span>
              )}
            </div>

            {/* Step 3: Action */}
            <div
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                simulationStep >= 3
                  ? 'bg-[#180c2e] border-[#8a2be2] shadow-[0_0_15px_rgba(138,43,226,0.3)]'
                  : 'bg-[#0d0718] border-white/5'
              }`}
            >
              <span className="text-[10px] font-mono text-[#c084fc] font-bold block mb-1">
                3. EXÉCUTION D’OUTIL
              </span>
              <p className="text-xs text-white font-medium mb-2">
                {language === 'fr' ? scenario.action : scenario.actionEn}
              </p>
              {simulationStep >= 3 && (
                <span className="text-[10px] font-mono text-[#34d399] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Exécuté
                </span>
              )}
            </div>

            {/* Step 4: Outcome */}
            <div
              className={`p-4 rounded-2xl border transition-all duration-300 ${
                simulationStep >= 4
                  ? 'bg-[#10b981]/20 border-[#10b981]/60 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'bg-[#0d0718] border-white/5'
              }`}
            >
              <span className="text-[10px] font-mono text-[#34d399] font-bold block mb-1">
                4. RÉSULTAT BUSINESS
              </span>
              <p className="text-xs text-white font-bold mb-2">
                {language === 'fr' ? scenario.outcome : scenario.outcomeEn}
              </p>
              {simulationStep >= 4 && (
                <span className="text-[10px] font-mono text-[#34d399] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Succès ROI
                </span>
              )}
            </div>
          </div>

          {/* Trigger Button & Code Snippet Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Button & Explanation (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <button
                type="button"
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className="btn-primary w-full py-3.5 text-xs sm:text-sm shadow-[0_0_25px_rgba(138,43,226,0.5)]"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>
                  {isSimulating
                    ? t('Exécution de l’agent en cours...', 'Running Agent Workflow...')
                    : t('Lancer la simulation de l’agent', 'Test Agent Simulation')}
                </span>
              </button>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="text-xs text-[#c084fc] font-bold hover:text-white transition-colors"
                >
                  {t('Intégrer une IA similaire →', 'Deploy similar AI pipeline →')}
                </button>
              </div>
            </div>

            {/* Right Terminal Code Snippet (7 cols) */}
            <div className="lg:col-span-7 p-4 rounded-2xl bg-[#060309] border border-white/10 font-mono text-xs overflow-x-auto text-left">
              <div className="flex items-center justify-between text-[#9890a8] text-[11px] mb-2 pb-2 border-b border-white/10">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#c084fc]" />
                  workflow.ts
                </span>
                <span className="text-[#34d399]">● AGENT ENGINE: ONLINE</span>
              </div>
              <pre className="text-[#dedae9] leading-relaxed text-[11px]">
                <code>{scenario.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
