"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface AuthorBadgeProps {
    label: string;
    name: string;
    url?: string;
}

export function AuthorBadge({ label, name, url }: AuthorBadgeProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const badge = (
        <div
            className="group flex items-center gap-3"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
        >
            {/* Animated avatar ring */}
            <div className="relative shrink-0 w-8 h-8">
                {/* Spinning conic-gradient border */}
                <div
                    className="absolute inset-[-2px] rounded-full"
                    style={{
                        background: "conic-gradient(from 0deg, #f88167, #fb8167, rgba(248,129,103,0.2), #f88167)",
                        animation: "author-spin 4s linear infinite",
                    }}
                />
                {/* Inner avatar */}
                <div
                    className="relative w-full h-full rounded-full flex items-center justify-center text-sm font-bold text-white z-10"
                    style={{
                        background: "linear-gradient(135deg, #f88167, #c85b45)",
                        boxShadow: "0 0 12px rgba(248,129,103,0.5)",
                    }}
                >
                    N
                </div>
                {/* Pulse ring */}
                <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                        border: "2px solid rgba(248,129,103,0.4)",
                        animation: "author-ping 2.4s ease-out infinite",
                    }}
                />
            </div>

            {/* Text block */}
            <div className="flex flex-col leading-tight">
                <span
                    className="text-[10px] font-semibold uppercase tracking-[0.15em]"
                    style={{ color: "rgba(248,129,103,0.7)" }}
                >
                    {label}
                </span>
                <span
                    className="text-sm font-bold tracking-tight"
                    style={{
                        background: "linear-gradient(90deg, #f88167, #fb8167, #f88167)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter: "drop-shadow(0 0 8px rgba(248,129,103,0.4))",
                    }}
                >
                    {name}
                </span>
            </div>

            {/* External-link arrow */}
            {url && (
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f88167"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-50 transition-[opacity,transform] duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                </svg>
            )}

            <style>{`
                @keyframes author-spin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                @keyframes author-ping {
                    0%   { transform: scale(1);   opacity: 0.6; }
                    70%  { transform: scale(1.7); opacity: 0; }
                    100% { transform: scale(1.7); opacity: 0; }
                }
            `}</style>
        </div>
    );

    if (url) {
        return (
            <Link href={url} target="_blank" rel="noopener noreferrer">
                {badge}
            </Link>
        );
    }

    return badge;
}
