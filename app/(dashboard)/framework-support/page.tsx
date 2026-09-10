import React from 'react';
import { Check } from 'lucide-react';

interface FrameworkItem {
    framework: string;
    version: string;
    status: string;
    notes: string;
}

const FRAMEWORKS: FrameworkItem[] = [
    {
        framework: 'Next.js',
        version: '14+',
        status: 'Full Support',
        notes: 'Full support including App Router and Server Components.',
    },
    {
        framework: 'Vite + React',
        version: '5+',
        status: 'Full Support',
        notes: 'Recommended setup — this is what Watermelon UI is built with.',
    },
];

const REQUIREMENTS = [
    {
        category: 'REACT',
        value: '18 or 19',
        description: 'Hooks & Suspense required',
    },
    {
        category: 'TAILWIND CSS',
        value: 'v4',
        description: 'CSS-first config via @import',
    },
    {
        category: 'SHADCN/UI',
        value: 'Latest',
        description: 'Component primitives layer',
    },
];

export default function FrameworkSupportPage() {
    return (
        <div className="w-full max-w-4xl space-y-12 px-6 py-8 md:px-12">
            {/* Header */}
            <header className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Framework Support
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Watermelon UI components work with any React-based framework that supports{' '}
                    <span className="text-foreground">Tailwind CSS v4</span>.
                </p>
            </header>

            {/* Supported Frameworks Section */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">Supported Frameworks</h2>

                {/* Frameworks Table */}
                <div className="overflow-hidden rounded-xl border border-border/40 bg-card shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left text-sm">
                            <thead>
                                <tr className="border-b border-border/40 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                                    <th className="px-6 py-3.5">Framework</th>
                                    <th className="px-6 py-3.5">Version</th>
                                    <th className="px-6 py-3.5">Status</th>
                                    <th className="px-6 py-3.5">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/30 text-xs">
                                {FRAMEWORKS.map((item) => (
                                    <tr key={item.framework} className="transition-colors hover:bg-muted/20">
                                        <td className="px-6 py-4 font-semibold text-foreground">
                                            {item.framework}
                                        </td>
                                        <td className="px-6 py-4 text-muted-foreground">
                                            {item.version}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/60 px-2.5 py-1 text-[11px] font-medium text-emerald-400 border border-emerald-800/40">
                                                <Check className="size-3" />
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-muted-foreground">
                                            {item.notes}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">Requirements</h2>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {REQUIREMENTS.map((req) => (
                        <div
                            key={req.category}
                            className="rounded-xl border border-border/40 bg-card/60 p-5 shadow-sm backdrop-blur"
                        >
                            <span className="block text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                                {req.category}
                            </span>
                            <div className="mt-2 text-xl font-bold tracking-tight text-foreground">
                                {req.value}
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">
                                {req.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Note Banner */}
                <div className="rounded-xl border border-border/40 bg-card/40 p-4 text-xs leading-relaxed text-muted-foreground backdrop-blur">
                    <strong className="font-semibold text-foreground">Note:</strong> All components
                    are client-side React components and work with any React 18+ project. If your
                    framework uses SSR, wrap animation-heavy components in a{' '}
                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-foreground">
                        &lt;ClientOnly&gt;
                    </code>{' '}
                    boundary or use dynamic imports with{' '}
                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-foreground">
                        ssr: false
                    </code>
                    .
                </div>
            </section>
        </div>
    );
}