import { Bell, Search, Sun, Moon } from 'lucide-react';
import { MOCK_USER } from '../../data/mock';
import { useTheme } from '../../context/ThemeContext';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { cn } from '../../lib/utils';

export function Topbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="h-16 px-8 flex items-center justify-between bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200/50 dark:border-slate-800/50">
            {/* Search Bar */}
            <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-full w-96 border border-transparent focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <Search size={18} className="text-slate-400" />
                <input
                    type="text"
                    placeholder="Rechercher un document, un plan..."
                    className="bg-transparent border-none outline-none text-sm w-full text-slate-700 dark:text-slate-200 placeholder-slate-400"
                />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                </button>

                {/* User Dropdown */}
                <Menu as="div" className="relative ml-2">
                    <Menu.Button className="flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 p-1.5 rounded-full pr-4 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                        <img
                            src={MOCK_USER.avatar}
                            alt={MOCK_USER.name}
                            className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 object-cover"
                        />
                        <div className="text-left hidden md:block">
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-none">{MOCK_USER.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{MOCK_USER.role}</p>
                        </div>
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-slate-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-slate-100 dark:divide-slate-700">
                            <div className="p-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button className={cn("flex w-full items-center rounded-lg px-3 py-2 text-sm", active ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300')}>
                                            Profile
                                        </button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button className={cn("flex w-full items-center rounded-lg px-3 py-2 text-sm", active ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300')}>
                                            Settings
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                            <div className="p-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button className={cn("flex w-full items-center rounded-lg px-3 py-2 text-sm text-red-600 dark:text-red-400", active ? 'bg-red-50 dark:bg-red-900/20' : '')}>
                                            Logout
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </header>
    );
}
