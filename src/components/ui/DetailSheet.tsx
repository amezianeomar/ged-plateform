import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, FileText } from 'lucide-react';
import { MOCK_USER } from '../../data/mock';
import type { Document } from '../../data/mock';
import { StatusPill } from './StatusPill';

interface DetailSheetProps {
    isOpen: boolean;
    onClose: () => void;
    document: Document | null;
}

export function DetailSheet({ isOpen, onClose, document }: DetailSheetProps) {
    if (!document) return null;

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                {/* Backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col bg-white dark:bg-slate-900 shadow-2xl">

                                        {/* Header */}
                                        <div className="px-6 py-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between bg-slate-50/50 dark:bg-slate-800/50">
                                            <div>
                                                <Dialog.Title className="text-lg font-bold text-slate-900 dark:text-slate-100">
                                                    {document.title}
                                                </Dialog.Title>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-mono">
                                                    {document.ref} • Indice {document.indice}
                                                </p>
                                            </div>
                                            <button
                                                onClick={onClose}
                                                className="rounded-full p-2 text-slate-400 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>

                                        {/* Content */}
                                        <div className="relative mt-6 flex-1 px-6 sm:px-6 overflow-y-auto">

                                            {/* Status Section */}
                                            <div className="mb-8">
                                                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Statut Actuel</h4>
                                                <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                                                    <StatusPill status={document.status} />
                                                    <span className="text-sm text-slate-500 dark:text-slate-400">{document.date}</span>
                                                </div>
                                            </div>

                                            {/* PDF Preview Placeholder */}
                                            <div className="mb-8">
                                                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Aperçu du document</h4>
                                                <div className="aspect-[3/4] bg-slate-100 dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 gap-4 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                                    <FileText size={48} className="text-slate-300 dark:text-slate-600 group-hover:scale-110 transition-transform duration-300" />
                                                    <p className="text-sm">Cliquer pour ouvrir le PDF</p>
                                                </div>
                                            </div>

                                            {/* Timeline */}
                                            <div>
                                                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Historique de révision</h4>
                                                <div className="space-y-6 border-l-2 border-slate-100 dark:border-slate-800 ml-2 pl-6 relative">
                                                    {/* Mock Timeline Item 1 */}
                                                    <div className="relative">
                                                        <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white dark:border-slate-900 ring-4 ring-blue-50 dark:ring-blue-900/20" />
                                                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Soumission Indice {document.indice}</p>
                                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{document.date} • {MOCK_USER.name}</p>
                                                    </div>

                                                    {/* Mock Timeline Item 0 */}
                                                    <div className="relative opacity-60">
                                                        <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-900" />
                                                        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Création initiale</p>
                                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">2023-10-01 • Admin</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        {/* Footer Actions */}
                                        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 z-10 sticky bottom-0">
                                            <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98]">
                                                Télécharger le rapport
                                            </button>
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
