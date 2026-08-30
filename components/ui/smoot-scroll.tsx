'use client';

import { ReactLenis } from 'lenis/react';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1, // Lower = smoother/slower momentum (default: 0.1)
                duration: 1.2, // Scroll animation duration in seconds
                smoothWheel: true,
            }}
        >
            {children}
        </ReactLenis>
    );
}