'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Clock, Hammer, Sparkles, BookOpen } from 'lucide-react';
import { navigationData } from '@/lib/navigation';

function formatSlugSegment(segment: string): string {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function InDevelopmentCatchAllPage() {
  const params = useParams();
  const slugParam = params?.slug;

  const segments: string[] = Array.isArray(slugParam)
    ? slugParam
    : typeof slugParam === 'string'
      ? [slugParam]
      : [];

  const currentPath = '/' + segments.join('/');

  // Find exact title & category from navigation config if present
  let matchedCategory: string | null = null;
  let componentTitle = '';

  for (const group of navigationData) {
    for (const item of group.items) {
      if (item.type === 'link' && item.href === currentPath) {
        componentTitle = item.title;
        matchedCategory = group.sectionTitle ?? null;
        break;
      }
      if (item.type === 'collapsible') {
        const found = item.children.find((child) => child.href === currentPath);
        if (found) {
          componentTitle = found.title;
          matchedCategory = item.title;
          break;
        }
      }
    }
    if (componentTitle) break;
  }

  // Fallback slug transformation (e.g., "choice-chips" -> "Choice Chips")
  if (!componentTitle) {
    if (segments.length > 0) {
      componentTitle = formatSlugSegment(segments[segments.length - 1]);
      if (segments.length > 1) {
        matchedCategory = formatSlugSegment(segments[0]);
      }
    } else {
      componentTitle = 'Component';
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] w-full items-center justify-center px-4 py-12">
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-8 shadow-2xl backdrop-blur-xl md:p-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Top badges & status */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {matchedCategory && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                <Sparkles className="size-3 text-muted-foreground" />
                {matchedCategory}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              In Progress
            </span>
          </div>

          {/* Component Title & Path */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {componentTitle}
            </h1>
            <p className="font-mono text-xs text-muted-foreground">
              Route: <span className="text-foreground/80">{currentPath}</span>
            </p>
          </div>

          {/* Graphical placeholder illustration */}
          <div className="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/20 px-6 py-8">
            <div className="mb-3 flex size-12 items-center justify-center rounded-xl border border-border/60 bg-background/80 shadow-inner">
              <Hammer className="size-5 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-foreground">
              Component Under Construction
            </p>
            <p className="mt-1 max-w-sm text-xs leading-relaxed text-muted-foreground">
              We are actively developing and polishing the <strong className="text-foreground">{componentTitle}</strong> component. Preview examples, source code, and docs will be available in an upcoming release.
            </p>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/installation"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow active:scale-95"
            >
              <ArrowLeft className="size-3.5" />
              Back to Installation
            </Link>
            <Link
              href="/changelog"
              className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-muted/30 px-4 py-2.5 text-xs font-medium text-foreground transition-all hover:bg-muted hover:text-foreground active:scale-95"
            >
              <BookOpen className="size-3.5 text-muted-foreground" />
              View Changelog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
