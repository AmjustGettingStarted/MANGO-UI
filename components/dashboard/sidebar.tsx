'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useSidebar } from '@/components/dashboard/sidebar-context';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    ArrowDown01Icon,
    ArrowRight01Icon,
    SidebarLeftIcon,
} from '@hugeicons/core-free-icons';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { navigationData, NavParentItem } from '@/lib/navigation';

export default function Sidebar() {
    const { isOpen, toggleSidebar } = useSidebar();
    const pathname = usePathname();

    return (
        <motion.aside
            initial={false}
            animate={{
                width: isOpen ? 240 : 0,
                opacity: isOpen ? 1 : 0,
            }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className="relative flex h-screen max-h-screen flex-col overflow-hidden border-r border-border/40 bg-card text-card-foreground font-mono text-xs select-none shrink-0"
        >
            {/* Outer Flex Container: Bound to max height */}
            <div className="flex h-full max-h-full w-full flex-col min-h-0 overflow-hidden">

                {/* Header Branding (Fixed Height) */}
                <div className="flex h-14 items-center justify-between px-4 shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary flex size-7 items-center justify-center rounded-lg font-bold text-primary-foreground">
                            M
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-bold tracking-wider text-foreground uppercase">
                                MANGO UI
                            </span>
                            <span className="text-[9px] font-semibold text-muted-foreground">
                                beta
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={toggleSidebar}
                        className="flex size-8 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95"
                        aria-label="Collapse Sidebar"
                    >
                        <HugeiconsIcon icon={SidebarLeftIcon} className="size-4" />
                    </button>
                </div>

                {/* Navigation List Container: Scrollable with hidden scrollbar */}
                <div
                    data-lenis-prevent
                    className="flex-1 min-h-0 overflow-y-auto overscroll-contain no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden p-3 space-y-6"
                >
                    {navigationData.map((group, groupIdx) => (
                        <div key={groupIdx} className="flex flex-col gap-1">
                            {group.sectionTitle && (
                                <span className="px-2 pb-1 font-bold text-foreground">
                                    {group.sectionTitle}
                                </span>
                            )}
                            {group.items.map((item) => {
                                if (item.type === 'link') {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className={`flex items-center gap-3 rounded-xl px-3 py-2 font-medium transition-colors ${isActive
                                                ? 'bg-muted text-foreground font-bold'
                                                : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                                                }`}
                                        >
                                            <HugeiconsIcon icon={item.icon} className="size-4 shrink-0" />
                                            <span>{item.title}</span>
                                        </Link>
                                    );
                                }

                                if (item.type === 'flyout') {
                                    return (
                                        <button
                                            key={item.title}
                                            className="flex w-full items-center justify-between rounded-xl px-3 py-2 font-semibold text-muted-foreground hover:bg-muted/40 hover:text-foreground transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <HugeiconsIcon icon={item.icon} className="size-4 shrink-0" />
                                                <span>{item.title}</span>
                                            </div>
                                            <HugeiconsIcon
                                                icon={ArrowRight01Icon}
                                                className="size-4 shrink-0 text-muted-foreground"
                                            />
                                        </button>
                                    );
                                }

                                return (
                                    <SidebarCollapsibleGroup
                                        key={item.title}
                                        item={item}
                                        pathname={pathname}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Footer / Social Links (Fixed Height) */}
                <div className="flex flex-col gap-3 border-t border-border/40 p-4 text-muted-foreground shrink-0">
                    <span className="font-bold text-foreground">Socials</span>
                    <div className="flex items-center gap-4 text-muted-foreground">
                        <a href="#" className="hover:text-foreground transition-colors">𝕏</a>
                        <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                    </div>
                </div>

            </div>
        </motion.aside>
    );
}

function SidebarCollapsibleGroup({
    item,
    pathname,
}: {
    item: NavParentItem;
    pathname: string;
}) {
    const isChildActive = item.children.some((child) => pathname === child.href);
    const [open, setOpen] = useState(isChildActive);

    // Auto-expand group if navigating to one of its children
    useEffect(() => {
        if (isChildActive) {
            setOpen(true);
        }
    }, [pathname, isChildActive]);

    return (
        <Collapsible open={open} onOpenChange={setOpen} className="w-full">
            <CollapsibleTrigger
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 font-semibold transition-colors ${isChildActive || open
                    ? 'bg-muted/80 text-foreground'
                    : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
                    }`}
            >
                <div className="flex items-center gap-3">
                    <HugeiconsIcon icon={item.icon} className="size-4 shrink-0" />
                    <span>{item.title}</span>
                </div>
                <HugeiconsIcon
                    icon={ArrowDown01Icon}
                    className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''
                        }`}
                />
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col gap-0.5 pl-9 pt-1">
                {item.children.map((child) => {
                    const isActive = pathname === child.href;
                    return (
                        <Link
                            key={child.href}
                            href={child.href}
                            className={`rounded-lg px-2 py-1.5 transition-colors ${isActive
                                ? 'text-foreground font-bold bg-muted/60'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                                }`}
                        >
                            {child.title}
                        </Link>
                    );
                })}
            </CollapsibleContent>
        </Collapsible>
    );
}