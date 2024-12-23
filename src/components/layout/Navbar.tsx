import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Menu className="h-6 w-6" />
                        </button>
                        <span className="ml-4 text-xl font-semibold">ResearchLens</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;