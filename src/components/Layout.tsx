import React from 'react';
import { SideNav } from './SideNav';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-slate-100 text-slate-800">
            <SideNav />
            <main className="flex-1 p-4 sm:p-6 md:p-8">
                {children}
            </main>
        </div>
    );
};