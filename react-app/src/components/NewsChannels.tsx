const CHANNELS = [
  { label: 'Marikina City PIO on Facebook', href: 'https://www.facebook.com/MarikinaCityPIO', icon: 'bi-facebook' },
  { label: 'Marikina City Rescue 161 on Facebook', href: 'https://www.facebook.com/MarikinaRescue161', icon: 'bi-facebook' },
  { label: 'Marikina PIO on X', href: 'https://twitter.com/MarikinaPIO', icon: 'bi-twitter-x' },
  { label: 'News releases on marikina.gov.ph', href: 'https://www.marikina.gov.ph/news', icon: 'bi-newspaper' },
];

export default function NewsChannels(): JSX.Element {
  return (
    <div className="info-box">
      <h4>Official announcement channels</h4>
      <small>We link to the city&apos;s own channels instead of copying their posts. Links are listed on the city&apos;s <a href="https://www.marikina.gov.ph/contact-us" target="_blank" rel="noopener noreferrer">contact page</a>.</small>
      <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'grid', gap: 8 }}>
        {CHANNELS.map((channel) => (
          <li key={channel.href}>
            <a href={channel.href} target="_blank" rel="noopener noreferrer">
              <i className={`bi ${channel.icon}`} aria-hidden="true"></i> {channel.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
