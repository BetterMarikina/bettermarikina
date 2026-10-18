import type { DatasetMeta } from '@/types';

interface SourceNoteProps {
  meta: DatasetMeta;
}

const TIER_LABEL: Record<number, string> = { 1: 'official', 2: 'government', 3: 'secondary source' };

export default function SourceNote({ meta }: SourceNoteProps): JSX.Element {
  return (
    <div className="source-note" style={{ marginTop: 'var(--spacing-md)', fontSize: '0.8125rem', color: 'var(--color-text-light)' }}>
      <p>
        <i className="bi bi-info-circle" aria-hidden="true"></i> Sources:{' '}
        {meta.sources.map((source, index) => (
          <span key={source.id}>
            {index > 0 && ', '}
            <a href={source.url} target="_blank" rel="noopener noreferrer">{source.covers.split(';')[0]}</a>
            {source.tier === 3 && ` (${TIER_LABEL[3]})`}
          </span>
        ))}
        . Data as of {meta.asOf}.
      </p>
      {meta.notes && (
        <details>
          <summary>Notes on this data</summary>
          <p>{meta.notes}</p>
        </details>
      )}
    </div>
  );
}
