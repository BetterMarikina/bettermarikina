interface ComingSoonProps {
  title?: string;
  message?: string;
}

export default function ComingSoon({
  title = 'Data coming soon',
  message = 'We are gathering verified, publicly available data for Marikina City. Check back soon.',
}: ComingSoonProps): JSX.Element {
  return (
    <div className="info-box coming-soon" role="status">
      <i className="bi bi-hourglass-split" aria-hidden="true"></i>
      <h4>{title}</h4>
      <small>{message}</small>
    </div>
  );
}
