import { STATS } from '../data/mock';
import { StatCard } from '../components/ui/StatCard';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, FileText, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export function Dashboard() {
    return (
        <div className="space-y-8 pb-10">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Tableau de bord</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Vue d'ensemble du projet Résidence Les Oliviers (Bloc A)</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {STATS.map((stat, index) => (
                    <StatCard
                        key={index}
                        label={stat.label}
                        value={stat.value}
                        trend={stat.trend as any}
                        delay={index * 0.1}
                    />
                ))}
            </div>

            {/* Main Content Area: Chart + Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Chart Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-2 bg-white dark:bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 flex flex-col shadow-sm"
                >
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-slate-800 dark:text-slate-200 font-semibold">Aperçu du Projet</h3>
                        <select className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1 focus:outline-none">
                            <option>Main selection</option>
                        </select>
                    </div>

                    {/* Mock Graph using pure CSS/SVG */}
                    <div className="relative h-64 w-full mt-4 flex items-end justify-between gap-2 px-2">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            {[100, 80, 60, 40, 20, 0].map(val => (
                                <div key={val} className="w-full border-t border-slate-100 dark:border-slate-800 text-xs text-slate-400 dark:text-slate-600 relative">
                                    <span className="absolute -top-3 left-0">{val}</span>
                                </div>
                            ))}
                        </div>

                        {/* Bezier Curve (Mock) */}
                        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0,250 C50,200 100,150 150,220 C200,280 250,100 300,150 C350,200 400,100 450,80 C500,60 550,120 600,100 C650,80 700,50 800,20"
                                fill="url(#gradient)"
                                stroke="#d4af37"
                                strokeWidth="2"
                                className="drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                            />
                            {/* Dots */}
                            <circle cx="150" cy="220" r="3" className="fill-white dark:fill-white stroke-slate-200 dark:stroke-none" />
                            <circle cx="300" cy="150" r="3" className="fill-white dark:fill-white stroke-slate-200 dark:stroke-none" />
                            <circle cx="450" cy="80" r="3" className="fill-white dark:fill-white stroke-slate-200 dark:stroke-none" />
                            <circle cx="600" cy="100" r="3" className="fill-white dark:fill-white stroke-slate-200 dark:stroke-none" />
                        </svg>

                        <div className="absolute bottom-[-25px] w-full flex justify-between text-xs text-slate-400 dark:text-slate-500">
                            {['Jan', 'Fév', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Dec'].map(m => (
                                <span key={m}>{m}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Activity Feed */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white dark:bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700/50 p-6 shadow-sm"
                >
                    <h3 className="text-slate-800 dark:text-slate-200 font-semibold mb-6">Activités Récentes</h3>
                    <div className="space-y-6">
                        {[
                            { icon: ArrowUpRight, text: 'Nouvelle soumission', time: '18 h', color: 'text-emerald-500 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
                            { icon: MessageSquare, text: 'Commentaire ajouté', time: '13 h', color: 'text-blue-500 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10' },
                            { icon: FileText, text: 'Document approuvé', time: '12 h', color: 'text-amber-500 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-500/10' },
                            { icon: CheckCircle, text: 'Validation technique', time: '12 h', color: 'text-emerald-500 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
                            { icon: XCircle, text: 'Document refusé', time: '13 h', color: 'text-rose-500 dark:text-rose-400', bg: 'bg-rose-50 dark:bg-rose-500/10' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className={cn("p-2 rounded-lg", item.bg, item.color)}>
                                    <item.icon size={16} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.text}</p>
                                    <p className="text-xs text-slate-400 dark:text-slate-500">{item.time} sep</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
