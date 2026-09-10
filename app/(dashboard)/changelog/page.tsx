import React from 'react';

interface ChangeItem {
    description: string;
    tags?: string[];
}

interface Release {
    date: string;
    version: string;
    isLatest?: boolean;
    stats?: { count: number | string; label: string }[];
    sections: {
        heading: string;
        items: ChangeItem[];
    }[];
}

const RELEASES: Release[] = [
    {
        date: 'Sep 09, 2026',
        version: '2.3.0',
        isLatest: true,
        stats: [
            { count: 131, label: 'Animated components' },
            { count: 189, label: 'Blocks' },
            { count: 11, label: 'Dashboards' },
            { count: 2, label: 'Showcases' },
        ],
        sections: [
            {
                heading: 'Showcases And Contribution Flow',
                items: [
                    {
                        description:
                            'Added a dedicated showcase system so curated page compositions can be contributed through source-backed MDX files and reviewed cleanly through pull requests.',
                        tags: ['showcases', 'contributing', 'mdx'],
                    },
                    {
                        description:
                            'Expanded README and contribution guidance so community contributors can understand the platform structure, sponsorship paths, and developer entry points faster.',
                        tags: ['docs', 'community', 'sponsors'],
                    },
                ],
            },
            {
                heading: 'AI And Developer Surfaces',
                items: [
                    {
                        description:
                            'Added stronger AI discovery surfaces including `llms.txt`, a richer OpenAPI spec, public API docs, trust pages, and improved sitemap coverage.',
                        tags: ['ai', 'openapi', 'sitemap', 'developers'],
                    },
                    {
                        description:
                            'Shipped structured catalog APIs and machine-readable JSON error responses so agents and tools can query components programmatically.',
                        tags: ['api', 'json', 'agents'],
                    },
                ],
            },
        ],
    },
    {
        date: 'Sep 06, 2026',
        version: '2.2.0',
        stats: [
            { count: 5, label: 'Dashboards shipped' },
            { count: 1, label: 'Shared component cleanup' },
        ],
        sections: [
            {
                heading: 'New Dashboards',
                items: [
                    {
                        description:
                            'Added Agndex, Astrix, Tallie, Bionis, and Medesk to the dashboard collection.',
                        tags: ['dashboards', 'agndex', 'astrix', 'tallie', 'bionis', 'medesk'],
                    },
                ],
            },
            {
                heading: 'Polish And Cleanup',
                items: [
                    {
                        description:
                            'Improved copy interactions, small UI details, and general integration quality as the new dashboard set was finalized.',
                        tags: ['polish', 'copy-button', 'cleanup'],
                    },
                    {
                        description:
                            'Approved and integrated shared components used across the newer dashboard experiences.',
                        tags: ['shared-components', 'dashboards'],
                    },
                ],
            },
        ],
    },
    {
        date: 'Sep 03, 2026',
        version: '2.1.2',
        stats: [
            { count: 5, label: 'Dashboards added' },
            { count: 1, label: 'CDN migration' },
        ],
        sections: [
            {
                heading: 'Dashboard Expansion',
                items: [
                    {
                        description:
                            'Added Supademo, DemoStack, Librar, Jobtracker, and Gridline as new dashboard experiences.',
                        tags: ['dashboards', 'supademo', 'demostack', 'librar', 'jobtracker', 'gridline'],
                    },
                ],
            },
            {
                heading: 'Sharing And Delivery',
                items: [
                    {
                        description:
                            'Added Open Graph image generation for richer social previews and link sharing.',
                        tags: ['og-image', 'sharing'],
                    },
                    {
                        description:
                            'Moved static media assets to the CDN to improve asset delivery and simplify platform serving.',
                        tags: ['cdn', 'assets'],
                    },
                ],
            },
            {
                heading: 'Fixes',
                items: [
                    {
                        description:
                            'Polished integration details across DemoStack, Librar, Jobtracker, and Gridline, including theme behavior, tooltips, shadows, responsive layout fixes, and mobile sidebar interactions.',
                        tags: ['fixes', 'themes', 'responsive', 'sidebar'],
                    },
                    {
                        description: 'Fixed SVG namespace errors in logo components.',
                    },
                    {
                        description: 'Converted onboarding components to use NativeWind for better consistency.',
                    },
                ],
            },
        ],
    },
    {
        date: 'Aug 30, 2026',
        version: '1.1.0',
        sections: [
            {
                heading: 'Performance',
                items: [
                    {
                        description:
                            'Optimized build performance by switching to PrismLight for syntax highlighting.',
                        tags: ['performance', 'build'],
                    },
                    {
                        description:
                            'Refined Vite manualChunks configuration to reduce main bundle size.',
                    },
                ],
            },
            {
                heading: 'Components',
                items: [
                    {
                        description:
                            'Added responsive viewer to desktop modals for device preview simulation.',
                    },
                ],
            },
        ],
    },
    {
        date: 'Aug 27, 2026',
        version: '1.0.0',
        sections: [
            {
                heading: 'Initial Launch',
                items: [
                    {
                        description:
                            'Mango UI is now live with a comprehensive collection of React components, dashboards, and blocks.',
                    },
                ],
            },
        ],
    },
];

export default function ChangelogPage() {
    return (
        <div className="w-full max-w-4xl space-y-12 px-6 py-8 md:px-12">
            {/* Header */}
            <header className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Changelog
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Latest updates and announcements for Mango UI.
                </p>
            </header>

            <hr className="border-border/40" />

            {/* Timeline Releases */}
            <div className="space-y-16">
                {RELEASES.map((release) => (
                    <div
                        key={release.version}
                        className="grid grid-cols-1 gap-6 md:grid-cols-[140px_1fr] md:gap-10"
                    >
                        {/* Timeline Date & Dot Indicator */}
                        <div className="relative md:text-left">
                            <div className="sticky top-24 flex items-center justify-between md:block">
                                <span className="text-sm font-medium text-muted-foreground">
                                    {release.date}
                                </span>
                                <span className="hidden md:block absolute -right-[25px] top-1.5 size-2 rounded-full bg-zinc-700" />
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="space-y-6 md:border-l md:border-border/40 md:pl-10">
                            {/* Version and Stats Pills */}
                            <div className="flex flex-wrap items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="rounded-md border border-border/60 bg-zinc-900/60 px-2.5 py-0.5 font-mono text-xs font-semibold text-foreground">
                                        {release.version}
                                    </span>
                                    {release.isLatest && (
                                        <span className="rounded-md border border-lime-800/50 bg-lime-950/60 px-2 py-0.5 text-[11px] font-semibold text-lime-400">
                                            Latest
                                        </span>
                                    )}
                                </div>

                                {release.stats && (
                                    <div className="flex flex-wrap items-center gap-1.5">
                                        {release.stats.map((stat, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-flex items-center gap-1 rounded-md border border-border/40 bg-card/60 px-2.5 py-0.5 text-xs text-muted-foreground"
                                            >
                                                <strong className="font-semibold text-foreground">
                                                    {stat.count}
                                                </strong>{' '}
                                                {stat.label}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Section Items */}
                            <div className="space-y-8">
                                {release.sections.map((section, sIdx) => (
                                    <div key={sIdx} className="space-y-3">
                                        <h2 className="text-base font-bold text-foreground">
                                            {section.heading}
                                        </h2>
                                        <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                                            {section.items.map((item, iIdx) => (
                                                <li key={iIdx} className="relative pl-5">
                                                    <span className="absolute left-1 top-2 size-1 rounded-full bg-muted-foreground" />
                                                    <p>{item.description}</p>
                                                    {item.tags && item.tags.length > 0 && (
                                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                                            {item.tags.map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="rounded bg-zinc-900/90 px-1.5 py-0.5 font-mono text-[11px] text-zinc-300 border border-zinc-800"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}