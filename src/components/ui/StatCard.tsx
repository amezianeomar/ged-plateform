import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Clock, CheckCircle, XCircle, FileText } from 'lucide-react';
import { cn } from '../../lib/utils';

interface StatCardProps {
    label: string;
    value: string;
    trend?: 'up' | 'down' | 'neutral' | 'warning';
    delay?: number;
    icon?: any;
}

export function StatCard({ label, value, trend = 'neutral', delay = 0 }: StatCardProps) {
    // Determine colors based on trend/type for that "mockup match" feel
    const isWarning = trend === 'warning';
    const isSuccess = trend === 'up'; // Using 'up' for VSO/Success in this context
    const isError = trend === 'down'; // Using 'down' for Refused

    // Status color configurations
    const statusColor = isWarning ? 'text-orange-500' : isSuccess ? 'text-emerald-500' : isError ? 'text-rose-500' : 'text-slate-100';
    const glowColor = isWarning ? 'shadow-orange-500/20' : isSuccess ? 'shadow-emerald-500/20' : isError ? 'shadow-rose-500/20' : 'shadow-blue-500/10';
    const borderColor = isWarning ? 'border-orange-500/30' : isSuccess ? 'border-emerald-500/30' : isError ? 'border-rose-500/30' : 'border-slate-700';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={cn(
                "relative overflow-hidden rounded-2xl p-6",
                "bg-white dark:bg-slate-900/50 backdrop-blur-md", // Adapted for Light/Dark
                "border hover:border-opacity-100 transition-colors duration-300",
                "border-slate-200 dark:border-transparent", // Light mode border
                borderColor, // This brings in the colored borders
                glowColor, // Glow effect
                "shadow-lg dark:shadow-none"
            )}
        >
            {/* Top Gradient Line for "Glass" feel - Dark mode only */}
            <div className={cn("absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 dark:opacity-50")} />

            <div className="relative z-10 flex flex-col h-full justify-between min-h-[140px]">
                <div className="flex justify-between items-start">
                    <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
                        {label}
                    </h3>
                    {/* Icon based on trend */}
                    <div className={cn("p-2 rounded-lg bg-opacity-10",
                        isWarning ? "bg-orange-500 text-orange-600 dark:text-orange-500" :
                            isSuccess ? "bg-emerald-500 text-emerald-600 dark:text-emerald-500" :
                                isError ? "bg-rose-500 text-rose-600 dark:text-rose-500" : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                    )}>
                        {isWarning ? <Clock size={16} /> :
                            isSuccess ? <CheckCircle size={16} /> :
                                isError ? <XCircle size={16} /> : <FileText size={16} />}
                    </div>
                </div>

                <div>
                    <div className="flex items-baseline gap-2">
                        <span className={cn("text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100",
                            // Override for specific trends if needed, but slate-900 is usually best for light mode text
                            isWarning && "text-slate-900 dark:text-orange-500",
                            isSuccess && "text-slate-900 dark:text-emerald-500",
                            isError && "text-slate-900 dark:text-rose-500"
                        )}>
                            {value}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        {isWarning && <span className="text-xs text-orange-600 dark:text-orange-400 font-medium px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20">À réviser</span>}
                        {isSuccess && <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">Validé</span>}
                        {isError && <span className="text-xs text-rose-600 dark:text-rose-400 font-medium px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20">Action requise</span>}
                        {!isWarning && !isSuccess && !isError && <span className="text-xs text-slate-500">Total documents</span>}
                    </div>
                </div>

                {/* Progress Bar Visual */}
                <div className="w-full bg-slate-100 dark:bg-slate-800/50 h-1.5 rounded-full mt-4 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isWarning ? '30%' : isSuccess ? '85%' : isError ? '5%' : '60%' }}
                        transition={{ duration: 1, delay: delay + 0.3 }}
                        className={cn("h-full rounded-full",
                            isWarning ? "bg-gradient-to-r from-orange-500 to-orange-300 dark:from-orange-600 dark:to-orange-400" :
                                isSuccess ? "bg-gradient-to-r from-emerald-500 to-emerald-300 dark:from-emerald-600 dark:to-emerald-400" :
                                    isError ? "bg-gradient-to-r from-rose-500 to-rose-300 dark:from-rose-600 dark:to-rose-400" : "bg-slate-400 dark:bg-slate-600"
                        )}
                    />
                </div>
            </div>
        </motion.div>
    );
}
