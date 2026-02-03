import { motion } from 'framer-motion';
import { Eye, FileText } from 'lucide-react';
import { StatusPill } from './StatusPill';
import type { Document } from '../../data/mock';

interface VisaTableProps {
    documents: Document[];
    onViewDetail: (doc: Document) => void;
}

export function VisaTable({ documents, onViewDetail }: VisaTableProps) {
    return (
        <div className="bg-white dark:bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                            {/* Fixed Columns */}
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 sticky left-0 z-10 bg-slate-50 dark:bg-slate-800/50 min-w-[200px]">Réf</th>
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 min-w-[250px]">Titre</th>
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center w-20">Lot</th>
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center w-16">Indice</th>
                            <th className="py-4 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-24">Date</th>

                            {/* Hardcoded Stakeholder Columns (The Matrix) */}
                            <th className="py-4 px-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 text-center border-l border-slate-100 dark:border-slate-700/50 min-w-[100px] w-28">OJ Control</th>
                            <th className="py-4 px-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 text-center border-l border-slate-100 dark:border-slate-700/50 min-w-[100px] w-28">LAK</th>
                            <th className="py-4 px-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 text-center border-l border-slate-100 dark:border-slate-700/50 min-w-[100px] w-28">Carbo3S</th>
                            <th className="py-4 px-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 text-center border-l border-slate-100 dark:border-slate-700/50 min-w-[100px] w-28">Joule</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {documents.map((doc, index) => (
                            <motion.tr
                                key={doc.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors"
                            >
                                {/* Ref */}
                                <td className="py-3 px-4 text-xs font-mono text-slate-600 dark:text-slate-400 sticky left-0 z-10 bg-white dark:bg-slate-900/50 group-hover:bg-slate-50 dark:group-hover:bg-slate-700/30">
                                    {doc.ref}
                                </td>

                                {/* Titre */}
                                <td className="py-3 px-4 text-sm font-medium text-slate-800 dark:text-slate-200 truncate max-w-[250px]" title={doc.title}>
                                    {doc.title}
                                </td>

                                {/* Lot */}
                                <td className="py-3 px-4 text-xs text-center text-slate-500 dark:text-slate-400">
                                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[10px] font-medium border border-slate-200 dark:border-slate-700">{doc.lot}</span>
                                </td>

                                {/* Indice */}
                                <td className="py-3 px-4 text-center">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold">
                                        {doc.indice}
                                    </span>
                                </td>

                                {/* Date */}
                                <td className="py-3 px-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                                    {doc.date}
                                </td>

                                {/* --- MATRIX CELLS --- */}

                                {/* OJ Control */}
                                <td className="py-3 px-2 text-center border-l border-slate-100 dark:border-slate-800">
                                    {doc.visas.oj_control ? (
                                        <div className="flex justify-center"><StatusPill status={doc.visas.oj_control} compact /></div>
                                    ) : <span className="text-slate-300 text-xs">-</span>}
                                </td>

                                {/* LAK */}
                                <td className="py-3 px-2 text-center border-l border-slate-100 dark:border-slate-800">
                                    {doc.visas.lak ? (
                                        <div className="flex justify-center"><StatusPill status={doc.visas.lak} compact /></div>
                                    ) : <span className="text-slate-300 text-xs">-</span>}
                                </td>

                                {/* Carbo3S */}
                                <td className="py-3 px-2 text-center border-l border-slate-100 dark:border-slate-800">
                                    {doc.visas.carbo3s ? (
                                        <div className="flex justify-center"><StatusPill status={doc.visas.carbo3s} compact /></div>
                                    ) : <span className="text-slate-300 text-xs">-</span>}
                                </td>

                                {/* Joule */}
                                <td className="py-3 px-2 text-center border-l border-slate-100 dark:border-slate-800">
                                    {doc.visas.joule ? (
                                        <div className="flex justify-center"><StatusPill status={doc.visas.joule} compact /></div>
                                    ) : <span className="text-slate-300 text-xs">-</span>}
                                </td>

                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
