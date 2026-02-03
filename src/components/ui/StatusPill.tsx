import { CheckCircle, AlertTriangle, XCircle, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export type StatusType = 'VSO' | 'VAO' | 'REF' | 'PENDING';

interface StatusPillProps {
    status: StatusType;
}

const CONFIG = {
    VSO: {
        icon: CheckCircle,
        label: 'VSO',
        className: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]',
    },
    VAO: {
        icon: AlertTriangle,
        label: 'VAO',
        className: 'text-orange-400 bg-orange-500/10 border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.2)]',
    },
    REF: {
        icon: XCircle,
        label: 'REF',
        className: 'text-rose-400 bg-rose-500/10 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.2)]',
    },
    PENDING: {
        icon: Loader2,
        label: 'En Cours',
        className: 'text-blue-400 bg-blue-500/10 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]',
    },
};

export function StatusPill({ status }: StatusPillProps) {
    const config = CONFIG[status];
    const Icon = config.icon;

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
