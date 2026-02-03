import { useState } from 'react';
import { VisaTable } from '../components/ui/VisaTable';
import { DetailSheet } from '../components/ui/DetailSheet';
import { MOCK_DOCUMENTS } from '../data/mock';
import type { Document } from '../data/mock';
import { Filter, Download } from 'lucide-react';

export function Documents() {
    const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
                        Documents & Visas
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">
                        Gérez les soumissions et suivez l'état des validations.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                        <Filter size={18} />
                        <span>Filtrer</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md shadow-blue-500/20">
                        <Download size={18} />
                        <span>Exporter</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <VisaTable documents={MOCK_DOCUMENTS} />

            {/* Detail Modal */}
            <DetailSheet
                isOpen={!!selectedDoc}
                onClose={() => setSelectedDoc(null)}
                document={selectedDoc}
            />
        </div>
    );
}
