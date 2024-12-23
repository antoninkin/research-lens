import { FolderOpen, BarChart2, Settings } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { icon: FolderOpen, label: 'Projects', href: '/projects' },
        { icon: BarChart2, label: 'Analysis', href: '/analysis' },
        { icon: Settings, label: 'Settings', href: '/settings' },
    ];

    return (
        <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <nav className="p-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="flex items-center p-2 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <item.icon className="h-5 w-5 mr-3" />
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;