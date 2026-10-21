'use client';

import { useEffect, useState } from 'react';

export type LiveDataState<T> =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; data: T };

/** Fetches JSON from our own API routes and re-polls on an interval. Keeps the last good value if a refresh fails. */
export function useLiveData<T>(url: string, refreshMs: number): LiveDataState<T> {
  const [state, setState] = useState<LiveDataState<T>>({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();

    const load = async (): Promise<void> => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`${url} responded ${res.status}`);
        setState({ status: 'ready', data: (await res.json()) as T });
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error(`[useLiveData] ${url} failed:`, error);
        setState((prev) => (prev.status === 'ready' ? prev : { status: 'error' }));
      }
    };

    void load();
    const interval = setInterval(() => void load(), refreshMs);
    return () => {
      controller.abort();
      clearInterval(interval);
    };
  }, [url, refreshMs]);

  return state;
}
