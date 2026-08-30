'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Sun, Moon, Palette } from 'lucide-react';
import { SidebarLeftIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useSidebar } from '@/components/dashboard/sidebar-context';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function Header() {
    const pathname = usePathname();
    const { isOpen, toggleSidebar } = useSidebar();
    const { theme, setTheme } = useTheme();

    // Convert pathname like "/blocks/team" or "/installation" to array ["Blocks", "Team"]
    const pathSegments = pathname
        .split('/')
        .filter(Boolean)
        .map((segment) => {
            const formatted = segment.replace(/-/g, ' ');
            return formatted.charAt(0).toUpperCase() + formatted.slice(1);
        });

    return (
        <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b border-border/40 bg-background/95 px-6 backdrop-blur font-mono text-xs">
            {/* Left: Sidebar Toggle (fixed width slot) + Dynamic Breadcrumbs */}
            <div className="flex items-center gap-3">
                {!isOpen ? (
                    <button
                        onClick={toggleSidebar}
                        className="flex size-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95"
                        aria-label="Expand Sidebar"
                    >
                        <HugeiconsIcon icon={SidebarLeftIcon} className="size-5" />
                    </button>
                ) : null}

                <nav aria-label="Breadcrumb" className="flex items-center gap-2">
                    {pathSegments.length === 0 ? (
                        <span className="font-bold text-foreground">Overview</span>
                    ) : (
                        pathSegments.map((segment, index) => {
                            const isLast = index === pathSegments.length - 1;
                            return (
                                <React.Fragment key={index}>
                                    <span
                                        className={
                                            isLast
                                                ? 'font-bold text-foreground text-sm'
                                                : 'text-muted-foreground hover:text-foreground transition-colors'
                                        }
                                    >
                                        {segment}
                                    </span>
                                    {!isLast && <span className="text-muted-foreground/60">/</span>}
                                </React.Fragment>
                            );
                        })
                    )}
                </nav>
            </div>

            {/* Center: Command Search Bar */}
            <div className="flex flex-1 justify-center max-w-md mx-4">
                <button
                    className="flex h-9 w-full items-center justify-between rounded-full border border-border/50 bg-muted/30 px-4 text-xs text-muted-foreground transition-colors hover:bg-muted/60 focus:outline-none"
                >
                    <div className="flex items-center gap-2">
                        <Search className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>Search components...</span>
                    </div>
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </button>
            </div>

            {/* Right: Custom Theme Button & Light/Dark Mode Switcher */}
            <div className="flex items-center gap-3">
                <Link
                    href="/custom-theme"
                    className="flex h-9 items-center gap-2 rounded-full bg-primary px-5 text-xs font-bold font-mono text-primary-foreground tracking-wider uppercase transition-all hover:bg-primary/90 active:scale-[0.96]"
                >
                    <Palette className="h-3.5 w-3.5" />
                    <span>Add Custom Theme</span>
                </Link>

                {/* Theme Switcher Button */}
                <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 rounded-full border-border/50 bg-muted/20 hover:bg-muted active:scale-95 transition-transform"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </header>
    );
}