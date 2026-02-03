import { CheckCircle, AlertTriangle, XCircle, Loader2, Info } from 'lucide-react';
import { cn } from '../../lib/utils';

export type StatusType = 'VSO' | 'VAO' | 'REF' | 'PENDING' | 'VPI' | 'NC';

interface StatusPillProps {
    status: StatusType;
    compact?: boolean;
}

const CONFIG = {
    VSO: {
        icon: CheckCircle,
        label: 'VSO',
        className: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]',
    },
    VAO: {
        icon: AlertTriangle,
        label: 'VAO',
        className: 'text-orange-500 bg-orange-500/10 border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.2)]',
    },
    REF: {
        icon: XCircle,
        label: 'REF',
        className: 'text-rose-500 bg-red-500/10 border-red-500/20 shadow-[0_0_10px_rgba(244,63,94,0.2)]',
    },
    VPI: {
        icon: Info,
        label: 'VPI',
        className: 'text-blue-400 bg-blue-500/10 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]',
    },
    NC: {
        icon: Info, // Or a dash icon/Minus
        label: 'NC',
        className: 'text-slate-400 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700',
    },
    PENDING: {
        icon: Loader2,
        label: 'En Cours',
        className: 'text-slate-500 bg-slate-500/10 border-slate-500/20 shadow-[0_0_10px_rgba(148,163,184,0.2)]',
    },
};

export function StatusPill({ status, compact = false }: StatusPillProps) {
    const config = CONFIG[status] || CONFIG['PENDING']; // Fallback
    const Icon = config.icon;

    if (compact) {
        return (
            <span className={cn(
                "inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold border transition-colors w-12",
                config.className.replace('shadow-[0_0_10px_', 'shadow-none') // Remove large glow for compact
            )} title={config.label}>
                {config.label}
            </span>
        );
    }

    return (
        <span className={cn(
            "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border transition-colors",
            config.className
        )}>
            <Icon size={14} className={status === 'PENDING' ? 'animate-spin' : ''} />
            {config.label}
        </span>
    );
}
