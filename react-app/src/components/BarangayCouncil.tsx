import type { Barangay } from '@/types';

const FOI_DRAFTS_URL = 'https://github.com/BetterMarikina/bettermarikina/blob/main/docs/data/foi-drafts.md';

interface BarangayCouncilProps {
  barangays: Barangay[];
}

function ComingSoonCell(): JSX.Element {
  return (
    <>
      <span className="badge badge-warning">Coming soon</span>
      <br />
      <small>Waiting on FOI-1 (DILG list of barangay officials)</small>
    </>
  );
}

export default function BarangayCouncil({ barangays }: BarangayCouncilProps): JSX.Element {
  const publishedCount = barangays.filter((b) => b.officials?.kagawad).length;

  return (
    <>
      <h2 className="section-title-sm">Barangay council</h2>
      <p>
        Kagawads and SK Chairpersons for {publishedCount} of {barangays.length} barangays, from council posts on
        their official Facebook pages. The rest are coming soon, from the official list we are requesting through a{' '}
        <a href={FOI_DRAFTS_URL} target="_blank" rel="noopener noreferrer">Freedom of Information request (FOI-1)</a>.
      </p>
      <div className="table-responsive">
        <table className="data-table">
          <caption className="sr-only">Sangguniang Barangay members and SK Chairperson per barangay</caption>
          <thead>
            <tr>
              <th scope="col">Barangay</th>
              <th scope="col">Kagawad</th>
              <th scope="col">SK Chairperson</th>
              <th scope="col">Official page</th>
            </tr>
          </thead>
          <tbody>
            {barangays.map((b) => {
              const kagawad = b.officials?.kagawad;
              return (
                <tr key={b.id}>
                  <td>{b.name}</td>
                  {kagawad ? (
                    <>
                      <td>
                        {kagawad.map((name, i) => (
                          <span key={name}>{i > 0 && <br />}{name}</span>
                        ))}
                      </td>
                      <td>{b.officials?.skChairperson ?? 'Not named in the post'}</td>
                    </>
                  ) : (
                    <td colSpan={2}><ComingSoonCell /></td>
                  )}
                  <td>
                    {b.facebook ? (
                      <a href={b.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                    ) : (
                      'Coming soon'
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
