import { motion } from 'framer-motion';
import type { Document } from '../../data/mock';
import { StatusPill } from './StatusPill';
import { Eye } from 'lucide-react';

interface VisaTableProps {
    documents: Document[];
    onViewDetail: (doc: Document) => void;
}

export function VisaTable({ documents, onViewDetail }: VisaTableProps) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Réf</th>
                            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Titre</th>
                            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Lot</th>
                            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">Indice</th>
                            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Date</th>
                            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {documents.map((doc, index) => (
                            <motion.tr
                                key={doc.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }} // Staggered Effect
                                onClick={() => onViewDetail(doc)}
                                className="group hover:bg-slate-50 dark:hover:bg-slate-700/30 cursor-pointer transition-colors"
                            >
                                <td className="py-4 px-6 text-sm font-medium text-slate-900 dark:text-slate-200">
                                    <span className="font-mono text-xs bg-slate-100 dark:bg-slate-800/80 px-2 py-1 rounded text-slate-600 dark:text-slate-400">
                                        {doc.ref}
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-sm text-slate-700 dark:text-slate-300 font-medium">
                                    {doc.title}
                                </td>
                                <td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400">
                                    {doc.lot}
                                </td>
                                <td className="py-4 px-6 text-sm text-center">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold">
                                        {doc.indice}
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400 font-mono text-xs">
                                    {doc.date}
                                </td>
                                <td className="py-4 px-6">
                                    <StatusPill status={doc.status} />
                                </td>
                                <td className="py-4 px-6 text-right relative">
                                    <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-200">
                                        <Eye size={18} />
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
