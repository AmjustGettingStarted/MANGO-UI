'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, Terminal, Code2 } from 'lucide-react';

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

const TOC_ITEMS = [
    { id: 'start-a-new-project', label: 'Start a New Project' },
    { id: 'add-to-existing-project', label: 'Add to Existing Project' },
    { id: 'usage-example', label: 'Usage Example' },
];

export default function InstallationPage() {
    const [selectedFramework, setSelectedFramework] = useState<'next' | 'vite'>('next');
    const [pmStep1, setPmStep1] = useState<PackageManager>('npm');
    const [pmStep2, setPmStep2] = useState<PackageManager>('npm');
    const [pmExisting, setPmExisting] = useState<PackageManager>('npm');
    const [activeSection, setActiveSection] = useState('start-a-new-project');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -60% 0px',
                threshold: 0,
            }
        );

        TOC_ITEMS.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const codeSnippets = {
        init: {
            npm: 'npx shadcn@latest init --preset [CODE] --template next',
            pnpm: 'pnpm dlx shadcn@latest init --preset [CODE] --template next',
            yarn: 'yarn dlx shadcn@latest init --preset [CODE] --template next',
            bun: 'bunx --bun shadcn@latest init --preset [CODE] --template next',
        },
        addComponent: {
            npm: 'npx shadcn@latest add https://registry.mango.sh/r/card-split-accordian.json',
            pnpm: 'pnpm dlx shadcn@latest add https://registry.mango.sh/r/card-split-accordian.json',
            yarn: 'yarn dlx shadcn@latest add https://registry.mango.sh/r/card-split-accordian.json',
            bun: 'bunx --bun shadcn@latest add https://registry.mango.sh/r/card-split-accordian.json',
        },
        usage: `import { CardSplitAccordion } from "@/components/ui/card-split-accordian";

export default function App() {
  return (
    <div className="p-8">
      <CardSplitAccordion />
    </div>
  );
}`,
    };

    return (
        <div className="mx-auto flex w-full max-w-7xl items-start justify-between gap-8 px-4 py-6 sm:px-6 md:gap-12 md:py-8 lg:px-8">
            {/* Main Content Area: min-w-0 prevents flex items from blowing past mobile screen width */}
            <div className="min-w-0 max-w-3xl flex-1 space-y-10 md:space-y-12">
                {/* Header */}
                <header className="space-y-2 sm:space-y-3">
                    <span className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase sm:text-xs">
                        Docs
                    </span>
                    <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                        Installation
                    </h1>
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        Build modern, responsive, and customizable interfaces with ease. Follow these
                        steps to get started with a new project or add Mango UI to your existing setup.
                    </p>
                </header>

                <hr className="border-border/40" />

                {/* Section 1: Start a New Project */}
                <section id="start-a-new-project" className="space-y-6 scroll-mt-24 sm:space-y-8">
                    <div className="space-y-1.5 sm:space-y-2">
                        <span className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase sm:text-xs">
                            Getting Started
                        </span>
                        <h2 className="text-lg font-bold text-foreground sm:text-xl">
                            Start a New Project
                        </h2>
                        <p className="text-xs text-muted-foreground sm:text-sm">
                            Initialize a new project using the shadcn CLI, then add Mango components.
                        </p>
                    </div>

                    {/* Step 1 */}
                    <div className="space-y-3 sm:space-y-4">
                        <div className="space-y-1">
                            <span className="text-[11px] font-bold tracking-wider text-primary uppercase sm:text-xs">
                                Step 1
                            </span>
                            <h3 className="text-xs font-semibold text-foreground sm:text-sm">
                                Initialize your project
                            </h3>
                            <p className="text-[11px] text-muted-foreground sm:text-xs">
                                Choose your framework and run the init command.
                            </p>
                        </div>

                        {/* Framework selection */}
                        <div className="inline-flex rounded-lg bg-muted/60 p-1">
                            <button
                                onClick={() => setSelectedFramework('next')}
                                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${selectedFramework === 'next'
                                        ? 'bg-background text-foreground shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                Next.js
                            </button>
                            <button
                                onClick={() => setSelectedFramework('vite')}
                                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${selectedFramework === 'vite'
                                        ? 'bg-background text-foreground shadow-sm'
                                        : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                Vite
                            </button>
                        </div>

                        {/* Command Box */}
                        <CodeBox
                            command={codeSnippets.init[pmStep1]}
                            selectedPm={pmStep1}
                            onSelectPm={setPmStep1}
                        />
                    </div>

                    {/* Step 2 */}
                    <div className="space-y-3 sm:space-y-4">
                        <div className="space-y-1">
                            <span className="text-[11px] font-bold tracking-wider text-primary uppercase sm:text-xs">
                                Step 2
                            </span>
                            <h3 className="text-xs font-semibold text-foreground sm:text-sm">
                                Add a Mango component
                            </h3>
                            <p className="text-[11px] text-muted-foreground sm:text-xs">
                                Use the CLI to pull any component directly into your project.
                            </p>
                        </div>

                        {/* CLI / MANUAL Toggle */}
                        <div className="inline-flex rounded-lg bg-muted/60 p-1">
                            <button className="rounded-md bg-background px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                                CLI
                            </button>
                            <button className="rounded-md px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground">
                                MANUAL
                            </button>
                        </div>

                        {/* Command Box */}
                        <CodeBox
                            command={codeSnippets.addComponent[pmStep2]}
                            selectedPm={pmStep2}
                            onSelectPm={setPmStep2}
                        />
                    </div>
                </section>

                <hr className="border-border/40" />

                {/* Section 2: Add to Existing Project */}
                <section id="add-to-existing-project" className="space-y-6 scroll-mt-24 sm:space-y-8">
                    <div className="space-y-1.5 sm:space-y-2">
                        <span className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase sm:text-xs">
                            Existing Codebase
                        </span>
                        <h2 className="text-lg font-bold text-foreground sm:text-xl">
                            Add to Existing Project
                        </h2>
                        <p className="text-xs text-muted-foreground sm:text-sm">
                            Already have a project? Ensure you have{' '}
                            <strong className="text-foreground">Tailwind CSS v4</strong> and{' '}
                            <strong className="text-foreground">shadcn-ui</strong> initialized, then:
                        </p>
                    </div>

                    {/* Step 1 */}
                    <div className="space-y-3 sm:space-y-4">
                        <div className="space-y-1">
                            <span className="text-[11px] font-bold tracking-wider text-primary uppercase sm:text-xs">
                                Step 1
                            </span>
                            <h3 className="text-xs font-semibold text-foreground sm:text-sm">
                                Add any component
                            </h3>
                        </div>

                        {/* CLI / MANUAL Toggle */}
                        <div className="inline-flex rounded-lg bg-muted/60 p-1">
                            <button className="rounded-md bg-background px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                                CLI
                            </button>
                            <button className="rounded-md px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground">
                                MANUAL
                            </button>
                        </div>

                        {/* Command Box */}
                        <CodeBox
                            command={codeSnippets.addComponent[pmExisting]}
                            selectedPm={pmExisting}
                            onSelectPm={setPmExisting}
                        />
                    </div>
                </section>

                <hr className="border-border/40" />

                {/* Section 3: Usage Example */}
                <section id="usage-example" className="space-y-4 scroll-mt-24 sm:space-y-6">
                    <div className="space-y-1.5 sm:space-y-2">
                        <span className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase sm:text-xs">
                            Usage
                        </span>
                        <h2 className="text-lg font-bold text-foreground sm:text-xl">Usage Example</h2>
                        <p className="text-xs text-muted-foreground sm:text-sm">
                            Once installed, import and use the component like any other shadcn component.
                        </p>
                    </div>

                    {/* Code Snippet Box */}
                    <div className="w-full min-w-0 overflow-hidden rounded-xl border border-border/40 bg-zinc-950/80 shadow-md backdrop-blur">
                        <div className="flex items-center justify-between border-b border-border/40 px-3.5 py-2 sm:px-4 sm:py-2.5">
                            <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground sm:text-xs">
                                <Code2 className="size-3.5 shrink-0" />
                                <span>USAGE EXAMPLE</span>
                            </div>
                            <CopyButton text={codeSnippets.usage} />
                        </div>
                        <div className="w-full overflow-x-auto p-3 font-mono text-[11px] leading-relaxed text-zinc-300 sm:p-4 sm:text-xs">
                            <pre className="table min-w-full">
                                {codeSnippets.usage.split('\n').map((line, idx) => (
                                    <div key={idx} className="table-row">
                                        <span className="table-cell select-none pr-3 text-right text-zinc-600 sm:pr-5">
                                            {idx + 1}
                                        </span>
                                        <span className="table-cell whitespace-pre">{line}</span>
                                    </div>
                                ))}
                            </pre>
                        </div>
                    </div>
                </section>
            </div>

            {/* Right Side - On This Page TOC (hidden on small/medium screens, shows on xl) */}
            <aside className="sticky top-20 hidden w-48 shrink-0 space-y-4 xl:block">
                <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                    <Terminal className="size-3.5" />
                    <span>On this page</span>
                </div>
                <nav className="border-l border-border/40 text-xs">
                    {TOC_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => scrollToSection(e, item.id)}
                            className={`-ml-[1px] block border-l-2 py-1.5 pl-3 transition-all duration-150 ${activeSection === item.id
                                    ? 'border-foreground font-semibold text-foreground'
                                    : 'border-transparent text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </aside>
        </div>
    );
}

/* ---------------- Reusable Components ---------------- */

function CodeBox({
    command,
    selectedPm,
    onSelectPm,
}: {
    command: string;
    selectedPm: PackageManager;
    onSelectPm: (pm: PackageManager) => void;
}) {
    const managers: PackageManager[] = ['npm', 'pnpm', 'yarn', 'bun'];

    return (
        <div className="w-full min-w-0 overflow-hidden rounded-xl border border-border/40 bg-zinc-950/80 shadow-md">
            {/* Header with scrollable tabs for tiny screens */}
            <div className="flex items-center justify-between border-b border-border/30 px-2.5 py-1.5 sm:px-3 sm:py-2">
                <div className="flex items-center gap-1 overflow-x-auto py-0.5 scrollbar-none">
                    {managers.map((pm) => (
                        <button
                            key={pm}
                            onClick={() => onSelectPm(pm)}
                            className={`rounded-md px-2 py-0.5 text-[11px] font-semibold transition-colors sm:px-2.5 sm:text-xs ${selectedPm === pm
                                    ? 'bg-lime-500 text-black'
                                    : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {pm}
                        </button>
                    ))}
                </div>
                <div className="pl-2 shrink-0">
                    <CopyButton text={command} />
                </div>
            </div>

            {/* Inner command with overflow-x-auto and min-w-0 */}
            <div className="flex items-center gap-2.5 overflow-x-auto p-3 font-mono text-[11px] text-zinc-300 sm:gap-3 sm:p-4 sm:text-xs">
                <span className="select-none text-zinc-500 shrink-0">$</span>
                <code className="whitespace-nowrap">{command}</code>
            </div>
        </div>
    );
}

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="rounded p-1 text-muted-foreground transition-colors hover:bg-zinc-800 hover:text-foreground"
            aria-label="Copy to clipboard"
        >
            {copied ? <Check className="size-3.5 text-lime-400" /> : <Copy className="size-3.5" />}
        </button>
    );
}