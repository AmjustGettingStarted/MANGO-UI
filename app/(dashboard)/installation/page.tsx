'use client';

import { useSidebar } from '@/components/dashboard/sidebar-context';

export default function DashboardTestPage() {
    const { isOpen, toggleSidebar } = useSidebar();

    return (
        <div className="font-mono">
            <div className="rounded-xl border border-border/50 bg-card p-6 shadow-sm">
                <h1 className="text-xl font-bold tracking-tight text-foreground">
                    Header & State Testing Page
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                    Testing layout synchronization and header responsiveness.
                </p>

                <div className="mt-6 flex items-center gap-4">
                    <button
                        onClick={toggleSidebar}
                        className="flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-xs font-bold uppercase text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
                    >
                        Toggle Sidebar State ({isOpen ? 'OPEN' : 'COLLAPSED'})
                    </button>
                </div>

                <div className="mt-6 rounded-lg border border-border/40 bg-muted/30 p-4 text-xs text-muted-foreground">
                    <p className="font-semibold text-foreground">What to verify:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4">
                        <li>
                            Check if the sidebar toggle button appears in the Header when `isOpen` is `false`.
                        </li>
                        <li>
                            Verify breadcrumbs update to display page paths (e.g. `Quickstart / Installation`).
                        </li>
                        <li>Test the Theme Switcher toggle between light and dark modes.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}