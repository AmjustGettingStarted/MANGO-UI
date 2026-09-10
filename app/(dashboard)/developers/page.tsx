import React from 'react';

export default function DevelopersPage() {
    return (
        <div className="w-full max-w-4xl space-y-10 px-6 py-8 md:px-12">
            {/* Header */}
            <header className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    Mango UI Developers
                </h1>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Machine-readable and contributor-facing entry points for agents, tools, and engineers.
                </p>
            </header>

            <hr className="border-border/40" />

            {/* Public Discovery Surfaces */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">
                    Public Discovery Surfaces
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Mango now exposes a small but intentional set of developer-facing discovery surfaces so both humans and AI systems can understand the project faster. Start with{' '}
                    <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                        /llms.txt
                    </code>{' '}
                    for high-signal project guidance,{' '}
                    <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                        /sitemap.xml
                    </code>{' '}
                    for crawlable public URLs,{' '}
                    <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                        /openapi.json
                    </code>{' '}
                    for the current public API contract, and{' '}
                    <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                        /api/docs
                    </code>{' '}
                    for a quick machine-readable API index. These files are meant to make the site easier to discover, cite, and integrate with.
                </p>
            </section>

            <hr className="border-border/40" />

            {/* Mango MCP */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">
                    Mango MCP
                </h2>
                <div className="rounded-xl border border-border/40 bg-zinc-950/40 p-5 text-sm leading-relaxed text-muted-foreground backdrop-blur">
                    Mango exposes both a hosted and a local MCP story for agent workflows. The hosted endpoint lives at{' '}
                    <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                        mcp.mango.sh
                    </code>
                    , and the repository also includes a local MCP server for source-aware workflows. Both are aimed at tools and assistants that need structured access to the catalog without scraping the UI manually. The current server is read-only and exposes catalog helpers so an agent can inspect components, blocks, templates, dashboards, and showcases from the source content. Run it locally with{' '}
                    <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                        bun run mcp
                    </code>{' '}
                    from the repository root.
                </div>
            </section>

            {/* How To Use MCP */}
            <section className="space-y-5">
                <h2 className="text-xl font-bold text-foreground">
                    How To Use MCP
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <p>
                        The easiest setup is to use the hosted Mango MCP server. In any MCP-compatible client, add a new remote MCP server and use{' '}
                        <code className="text-zinc-200 font-mono text-xs">
                            https://mcp.mango.sh/mcp
                        </code>{' '}
                        as the server URL. Once connected, your client should be able to call the read-only Mango catalog tools without scraping the site manually.
                    </p>
                    <p>
                        If you are using a GPT- or Claude-style client with MCP support, open that client&apos;s MCP or tools settings, create a new server connection, paste{' '}
                        <code className="text-zinc-200 font-mono text-xs">
                            https://mcp.mango.sh/mcp
                        </code>
                        , and save it. After that, ask the model to list catalog entries, fetch a specific Mango entry, or summarize the catalog structure.
                    </p>
                    <p>
                        If your client only supports local MCP servers, clone the{' '}
                        <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                            mango-platform
                        </code>{' '}
                        repository and run{' '}
                        <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                            bun run mcp
                        </code>{' '}
                        from the project root. That starts the local Mango MCP server for source-aware development workflows.
                    </p>
                </div>
            </section>

            <hr className="border-border/40" />

            {/* Named Docs */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">
                    Named Docs
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    If you are searching by name, Mango also publishes dedicated pages for{' '}
                    <code className="rounded bg-zinc-900 px-2 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                        Mango UI Auth Docs
                    </code>
                    ,{' '}
                    <code className="rounded bg-zinc-900 px-2 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                        Mango UI MCP Docs
                    </code>
                    , and{' '}
                    <code className="rounded bg-zinc-900 px-2 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                        Mango UI Status &amp; Integrations
                    </code>
                    . Those pages explain the current access model, hosted MCP endpoint, operational metadata, and how to connect from GPT- or Claude-compatible MCP clients.
                </p>
            </section>

            <hr className="border-border/40" />

            {/* What To Use For What */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">
                    What To Use For What
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Use the public website if you want visual browsing and previews. Use the OpenAPI description and{' '}
                    <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                        /api/docs
                    </code>{' '}
                    if you need the current public catalog endpoint contract. Use{' '}
                    <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-xs text-zinc-200 border border-zinc-800">
                        llms.txt
                    </code>{' '}
                    if you want a concise, citation-friendly guide to what Mango is and where the best pages live. Use MCP when you want an agent to work from the source-backed catalog and contribution model instead of navigating the front-end page by page.
                </p>
            </section>
        </div>
    );
}