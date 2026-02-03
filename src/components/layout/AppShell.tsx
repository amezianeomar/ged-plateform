import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../lib/utils'; // Not strictly needed here but good practice

interface AppShellProps {
    children: ReactNode;
    activeView: string;
    onNavigate: (view: string) => void;
}

export function AppShell({ children, activeView, onNavigate }: AppShellProps) {
    const { theme } = useTheme();

    return (
        <div className={cn("flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300", theme)}>
            <Sidebar activeView={activeView} onNavigate={onNavigate} />

            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                <Topbar />

                <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 relative z-0 scroll-smooth">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
