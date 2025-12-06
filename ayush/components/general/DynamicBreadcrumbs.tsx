"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DynamicBreadcrumbs = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment);

    const breadcrumbs = [
        { label: 'AutoGuru', href: '/' },
        ...pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const label = segment
                .replace(/-/g, ' ')
                .replace(/\b\w/g, char => char.toUpperCase());
            return { label, href };
        })
    ];

    // Don't show on home page if it was included in pathSegments (it's not, but good safety)
    if (pathname === '/') return null;

    return (
        <nav className="flex text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                        <li key={index} className="inline-flex items-center">
                            {index > 0 && (
                                <span className="mx-2 text-gray-400">/</span>
                            )}
                            {isLast ? (
                                <span className="text-gray-900 font-medium">{item.label}</span>
                            ) : (
                                <Link href={item.href} className="hover:text-blue-600 hover:underline transition-colors">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default DynamicBreadcrumbs;
