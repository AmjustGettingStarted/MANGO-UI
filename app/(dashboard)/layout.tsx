'use client';

import { SidebarProvider } from '@/components/dashboard/sidebar-context';
import Sidebar from '@/components/dashboard/sidebar';
import Header from '@/components/dashboard/header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
                <Sidebar />
                <div className="flex flex-1 flex-col min-w-0 min-h-0 h-full overflow-hidden">
                    <Header />
                    <main data-lenis-prevent className="flex-1 overflow-y-auto p-6 font-mono">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}