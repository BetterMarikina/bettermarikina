'use client';

interface PrintButtonProps {
  label?: string;
}

export default function PrintButton({ label = 'Print checklist' }: PrintButtonProps): JSX.Element {
  return (
    <button type="button" className="btn btn-primary no-print" onClick={() => window.print()}>
      <i className="bi bi-printer" aria-hidden="true"></i> {label}
    </button>
  );
}
