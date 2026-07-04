import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import type { LinkComponentBaseProps } from '@inertiajs/core';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(
	href: NonNullable<LinkComponentBaseProps['href']> | URL,
): string {
    if (typeof href === 'string') {
        return href;
    }

    if (href instanceof URL) {
        return href.toString();
    }

    if ('url' in href && typeof href.url === 'string') {
        return href.url;
    }

    return String(href);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
