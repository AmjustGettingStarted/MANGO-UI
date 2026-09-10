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

    // Scroll spy: automatically sync active TOC item based on visible section
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
                // Top margin offsets sticky headers; bottom margin triggers early detection
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
            npm: 'npx shadcn@latest add https://registry.watermelon.sh/r/card-split-accordian.json',
            pnpm: 'pnpm dlx shadcn@latest add https://registry.watermelon.sh/r/card-split-accordian.json',
            yarn: 'yarn dlx shadcn@latest add https://registry.watermelon.sh/r/card-split-accordian.json',
            bun: 'bunx --bun shadcn@latest add https://registry.watermelon.sh/r/card-split-accordian.json',
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
        <div className="flex w-full items-start justify-between gap-12 px-6 py-8 md:px-12">
            {/* Main Content Area */}
            <div className="max-w-3xl flex-1 space-y-12">
                {/* Header */}
                <header className="space-y-3">
                    <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        Docs
                    </span>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Installation
                    </h1>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        Build modern, responsive, and customizable interfaces with ease. Follow these
                        steps to get started with a new project or add Watermelon UI to your existing setup.
                    </p>
                </header>

                <hr className="border-border/40" />

                {/* Section 1: Start a New Project */}
                <section id="start-a-new-project" className="space-y-8 scroll-mt-24">
                    <div className="space-y-2">
                        <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                            Getting Started
                        </span>
                        <h2 className="text-xl font-bold text-foreground">Start a New Project</h2>
                        <p className="text-sm text-muted-foreground">
                            Initialize a new project using the shadcn CLI, then add Watermelon components.
                        </p>
                    </div>

                    {/* Step 1 */}
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <span className="text-xs font-bold tracking-wider text-primary uppercase">
                                Step 1
                            </span>
                            <h3 className="text-sm font-semibold text-foreground">
                                Initialize your project
                            </h3>
                            <p className="text-xs text-muted-foreground">
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
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <span className="text-xs font-bold tracking-wider text-primary uppercase">
                                Step 2
                            </span>
                            <h3 className="text-sm font-semibold text-foreground">
                                Add a Watermelon component
                            </h3>
                            <p className="text-xs text-muted-foreground">
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
                <section id="add-to-existing-project" className="space-y-8 scroll-mt-24">
                    <div className="space-y-2">
                        <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                            Existing Codebase
                        </span>
                        <h2 className="text-xl font-bold text-foreground">Add to Existing Project</h2>
                        <p className="text-sm text-muted-foreground">
                            Already have a project? Ensure you have{' '}
                            <strong className="text-foreground">Tailwind CSS v4</strong> and{' '}
                            <strong className="text-foreground">shadcn-ui</strong> initialized, then:
                        </p>
                    </div>

                    {/* Step 1 */}
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <span className="text-xs font-bold tracking-wider text-primary uppercase">
                                Step 1
                            </span>
                            <h3 className="text-sm font-semibold text-foreground">
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
                <section id="usage-example" className="space-y-6 scroll-mt-24">
                    <div className="space-y-2">
                        <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                            Usage
                        </span>
                        <h2 className="text-xl font-bold text-foreground">Usage Example</h2>
                        <p className="text-sm text-muted-foreground">
                            Once installed, import and use the component like any other shadcn component.
                        </p>
                    </div>

                    {/* Code Snippet Box */}
                    <div className="overflow-hidden rounded-xl border border-border/40 bg-zinc-950/80 shadow-md backdrop-blur">
                        <div className="flex items-center justify-between border-b border-border/40 px-4 py-2.5">
                            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                <Code2 className="size-3.5" />
                                <span>USAGE EXAMPLE</span>
                            </div>
                            <CopyButton text={codeSnippets.usage} />
                        </div>
                        <div className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-zinc-300">
                            <pre className="table">
                                {codeSnippets.usage.split('\n').map((line, idx) => (
                                    <div key={idx} className="table-row">
                                        <span className="table-cell select-none pr-5 text-right text-zinc-600">
                                            {idx + 1}
                                        </span>
                                        <span className="table-cell">{line}</span>
                                    </div>
                                ))}
                            </pre>
                        </div>
                    </div>
                </section>
            </div>

            {/* Right Side - On This Page TOC */}
            <aside className="sticky top-20 hidden w-52 shrink-0 space-y-4 xl:block">
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
        <div className="overflow-hidden rounded-xl border border-border/40 bg-zinc-950/80 shadow-md">
            <div className="flex items-center justify-between border-b border-border/30 px-3 py-2">
                <div className="flex items-center gap-1">
                    {managers.map((pm) => (
                        <button
                            key={pm}
                            onClick={() => onSelectPm(pm)}
                            className={`rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors ${selectedPm === pm
                                    ? 'bg-lime-500 text-black'
                                    : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {pm}
                        </button>
                    ))}
                </div>
                <CopyButton text={command} />
            </div>

            <div className="flex items-center gap-3 p-4 font-mono text-xs text-zinc-300">
                <span className="select-none text-zinc-500">$</span>
                <code className="overflow-x-auto whitespace-nowrap">{command}</code>
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