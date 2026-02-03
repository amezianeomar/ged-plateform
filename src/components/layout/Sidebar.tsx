import { motion } from 'framer-motion';
import { LayoutDashboard, FileText, Stamp, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';

const MENU_ITEMS = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: FileText, label: 'Documents', id: 'documents' },
    { icon: Stamp, label: 'Visas', id: 'visas' },
    { icon: Settings, label: 'Paramètres', id: 'settings' },
];

interface SidebarProps {
    activeView: string;
    onNavigate: (view: string) => void;
}

export function Sidebar({ activeView, onNavigate }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <motion.aside
            initial={{ width: 256 }}
            animate={{ width: collapsed ? 80 : 256 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="h-screen bg-white dark:bg-[#0b1120] border-r border-slate-200 dark:border-slate-800 flex flex-col z-20 relative shadow-xl shadow-slate-200/50 dark:shadow-2xl"
        >
            {/* Header */}
            <div className="h-20 flex items-center justify-between px-4 mb-4 border-b border-slate-100 dark:border-none">
                {!collapsed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 dark:shadow-blue-900/50">
                            <span className="text-white font-bold text-xl">G</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-slate-800 dark:text-white tracking-wide text-lg leading-none">GED Pro</span>
                        </div>
                    </motion.div>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={cn(
                        "p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors",
                        collapsed ? "mx-auto" : ""
                    )}
                >
                    {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-2 mt-4">
                {MENU_ITEMS.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={cn(
                            "w-full flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-300 group relative overflow-hidden",
                            activeView === item.id
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                : "text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white"
                        )}
                        title={collapsed ? item.label : undefined}
                    >
                        <item.icon size={22} strokeWidth={activeView === item.id ? 2.5 : 2} className="relative z-10" />

                        {!collapsed && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="font-medium text-sm relative z-10"
                            >
                                {item.label}
                            </motion.span>
                        )}

                        {/* Active Glow Bar - Dark Mode Only or subtle in Light */}
                        {activeView === item.id && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/20 rounded-r-full blur-[2px]" />
                        )}
                    </button>
                ))}
            </nav>

            {/* Footer (optional) */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800">
                {!collapsed && <p className="text-xs text-slate-400 text-center">v1.0.0 Engineering Build</p>}
            </div>
        </motion.aside>
    );
}
