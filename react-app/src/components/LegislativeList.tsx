'use client';

import { useMemo, useState } from 'react';
import type { OrdinanceRecord } from '@/types';

interface LegislativeListProps {
  items: OrdinanceRecord[];
  noun: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  finance: 'Finance & taxation',
  business: 'Business & trade',
  'traffic-transport': 'Traffic & transport',
  environment: 'Environment',
  health: 'Health',
  'social-welfare': 'Social welfare',
  'peace-order-safety': 'Peace, order & safety',
  'education-culture': 'Education & culture',
  'land-use-zoning': 'Land use & zoning',
  governance: 'Governance',
  other: 'Other',
};

export default function LegislativeList({ items, noun }: LegislativeListProps): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('all');

  const categories = useMemo(() => Array.from(new Set(items.map((item) => item.category))).sort(), [items]);
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return items
      .filter((item) => category === 'all' || item.category === category)
      .filter((item) => !needle || item.title.toLowerCase().includes(needle) || item.number.includes(needle) || String(item.series).includes(needle))
      .sort((a, b) => b.series - a.series || b.number.localeCompare(a.number));
  }, [items, query, category]);

  return (
    <div>
      <div className="legislative-filters">
        <label htmlFor="legislative-search">Search {noun}s</label>
        <input id="legislative-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Title, number or year" />
        <label htmlFor="legislative-category">Topic</label>
        <select id="legislative-category" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="all">All topics</option>
          {categories.map((value) => (
            <option key={value} value={value}>{CATEGORY_LABELS[value] ?? value}</option>
          ))}
        </select>
      </div>
      <p role="status">{filtered.length} of {items.length} {noun}s</p>
      <ul className="legislative-items">
        {filtered.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <strong>{noun === 'ordinance' ? 'Ordinance' : 'Resolution'} No. {item.number}, Series of {item.series}</strong>
            </a>
            <span className="legislative-topic">{CATEGORY_LABELS[item.category] ?? item.category}</span>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .legislative-filters { display: grid; gap: 6px; grid-template-columns: 1fr; max-width: 520px; margin-bottom: var(--spacing-sm); }
        .legislative-filters input, .legislative-filters select { padding: 8px 10px; border: 1px solid rgba(0,0,0,0.2); border-radius: 6px; font: inherit; }
        .legislative-items { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
        .legislative-items li { border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; padding: 12px 14px; }
        .legislative-items p { margin: 4px 0 0; font-size: 0.875rem; }
        .legislative-topic { margin-left: 8px; font-size: 0.75rem; color: var(--color-text-light); }
      `}</style>
    </div>
  );
}
