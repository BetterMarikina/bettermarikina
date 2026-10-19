import Link from 'next/link';
import ComingSoon from '@/components/ComingSoon';
import SourceNote from '@/components/SourceNote';
import financeData from '@/data/marikina/finance.json';
import type { Dataset, FinanceData } from '@/types';

const finance = financeData as unknown as Dataset<FinanceData>;
const peso = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 2 });
const pct = new Intl.NumberFormat('en-PH', { maximumFractionDigits: 2 });
const money = (value: number | null): string => (value === null ? 'Not read' : peso.format(value));
const sreRows = finance.data.statementOfReceiptsAndExpenditures;
const annualBudgets = finance.data.annualBudgets;
const { loans, totals: debtTotals } = finance.data.indebtedness;

export default function BudgetPage(): JSX.Element {
  return (
    <>
      <link rel="stylesheet" href="/assets/css/transparency-v2.css" />
      
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span aria-current="page">Budget &amp; Transparency</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="trans-hero-v2">
        <div className="container">
          <div className="trans-hero-content-v2">
            <span className="trans-hero-badge-v2"><i className="bi bi-shield-check"></i> Financial Transparency</span>
            <h1>Budget &amp; Financial Transparency</h1>
            <p>Tracking city finances and projects for accountability</p>
          </div>
        </div>
      </section>

      {/* SRE Section */}
      <section className="sre-section-v2">
        <div className="container">
          <div className="sre-header-v2">
            <div className="sre-title-group">
              <span className="sre-label"><i className="bi bi-graph-up-arrow"></i> Financial Report</span>
              <h2>Statement of Receipts &amp; Expenditures</h2>
            </div>
          </div>
          <p>
            The city publishes these reports as scanned PDFs. The figures below were transcribed from the page
            images and checked against each document&apos;s own totals. Each statement is cumulative from January to the
            end of the quarter shown. Amounts are in pesos; &quot;Not read&quot; means the value could not be read reliably.
          </p>

          <h3>Statement of Receipts and Expenditures (General Fund + SEF)</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <caption>Cumulative year to date, by period covered</caption>
              <thead>
                <tr>
                  <th scope="col">Period</th>
                  <th scope="col">Income target</th>
                  <th scope="col">Current operating income</th>
                  <th scope="col">of which national share</th>
                  <th scope="col">Current operating expenditures</th>
                  <th scope="col">Capital outlay</th>
                  <th scope="col">Debt principal paid</th>
                  <th scope="col">Ending cash balance</th>
                </tr>
              </thead>
              <tbody>
                {sreRows.map((r) => (
                  <tr key={`${r.year}-${r.quarter}`}>
                    <th scope="row">{r.quarter} {r.year}</th>
                    <td>{money(r.incomeTarget)}</td>
                    <td>{money(r.totalCurrentOperatingIncome.total)}</td>
                    <td>{money(r.externalSources.total)}</td>
                    <td>{money(r.totalCurrentOperatingExpenditures.total)}</td>
                    <td>{money(r.capitalOutlay.total)}</td>
                    <td>{money(r.debtServicePrincipal.total)}</td>
                    <td>{money(r.endingCashBalance.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Annual budget</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <caption>Ordinance amount where read; otherwise the income lines of LBP Form 7</caption>
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Annual budget ordinance</th>
                  <th scope="col">Total income (Form 7)</th>
                  <th scope="col">Tax revenue</th>
                  <th scope="col">Beginning cash balance</th>
                </tr>
              </thead>
              <tbody>
                {annualBudgets.map((b) => (
                  <tr key={b.year}>
                    <th scope="row">{b.year}</th>
                    <td>{money(b.ordinanceAmount)}</td>
                    <td>{money(b.totalIncome)}</td>
                    <td>{money(b.taxRevenue)}</td>
                    <td>{money(b.beginningCashBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Indebtedness</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <caption>Outstanding principal after payments, by loan</caption>
              <thead>
                <tr>
                  <th scope="col">Loan</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Maturity</th>
                  {debtTotals.map((t) => (
                    <th scope="col" key={`${t.year}-${t.quarter}`}>{t.quarter} {t.year}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loans.map((l) => (
                  <tr key={l.loanReference}>
                    <th scope="row">{l.creditor} ({l.loanReference})</th>
                    <td>{pct.format(l.interestRatePct)}%</td>
                    <td>{l.maturityDate}</td>
                    {l.reports.map((r) => (
                      <td key={`${r.year}-${r.quarter}`}>{money(r.outstandingPrincipal)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" colSpan={3}>Total outstanding principal</th>
                  {debtTotals.map((t) => (
                    <td key={`${t.year}-${t.quarter}`}>{money(t.outstandingPrincipal)}</td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>

          <h3>Special Education Fund, 2025</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Quarter</th>
                  <th scope="col">Net receipts</th>
                  <th scope="col">Operating expenses</th>
                  <th scope="col">Capital outlay</th>
                  <th scope="col">Total disbursements</th>
                  <th scope="col">Balance for the quarter</th>
                </tr>
              </thead>
              <tbody>
                {finance.data.specialEducationFund.map((q) => (
                  <tr key={q.quarter}>
                    <th scope="row">{q.quarter}</th>
                    <td>{money(q.netReceipts)}</td>
                    <td>{money(q.maintenanceAndOtherOperatingExpenses)}</td>
                    <td>{money(q.capitalOutlay)}</td>
                    <td>{money(q.totalDisbursements)}</td>
                    <td>{money(q.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>20% Development Fund (National Tax Allotment), 2025</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <caption>Cost incurred to date, by quarter report</caption>
              <thead>
                <tr>
                  <th scope="col">Program or project</th>
                  <th scope="col">Total cost</th>
                  {finance.data.twentyPercentNta.map((q) => (
                    <th scope="col" key={q.quarter}>{q.quarter}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {finance.data.twentyPercentNta[3].items.map((item) => (
                  <tr key={item.item}>
                    <th scope="row">{item.item}{item.location ? ` (${item.location})` : ''}</th>
                    <td>{money(item.totalCost)}</td>
                    {finance.data.twentyPercentNta.map((q) => {
                      const found = q.items.find((i) => i.item === item.item);
                      return (
                        <td key={q.quarter}>
                          {found ? money(found.costIncurredToDate) : 'Not yet reported'}
                          {found && found.percentCompletion !== null && <small> ({pct.format(found.percentCompletion)}% complete)</small>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Local Disaster Risk Reduction and Management Fund, 2025</h3>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <caption>Monthly reports, January to September (later months are not on the portal)</caption>
              <thead>
                <tr>
                  <th scope="col">Month</th>
                  <th scope="col">Total funds available</th>
                  <th scope="col">Utilization for the month</th>
                  <th scope="col">Unutilized balance</th>
                </tr>
              </thead>
              <tbody>
                {finance.data.ldrrmf.map((m) => (
                  <tr key={m.month}>
                    <th scope="row">{m.month}</th>
                    <td>{money(m.totalFundsAvailable)}</td>
                    <td>{money(m.totalUtilization)}</td>
                    <td>{money(m.unutilizedBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SourceNote meta={finance.meta} />
          <p className="sre-source"><i className="bi bi-box-arrow-up-right"></i> <a href="https://fdpp.marikina.gov.ph/full-disclosure" target="_blank" rel="noopener noreferrer">Original scans on the Marikina Full Disclosure Portal</a></p>
        </div>
      </section>

      {/* DPWH Projects Section */}
      <section className="infra-section-v5 infra-section-alt">
        <div className="container">
          <div className="infra-header-v5">
            <span className="infra-label-v5"><i className="bi bi-building"></i> National Government Projects</span>
            <h2>DPWH Infrastructure Projects in Marikina</h2>
          </div>
          <ComingSoon title="Project list not yet available" message="Search results indicate that DPWH's Metro Manila 1st District Engineering Office covers Marikina, but we have not been able to read DPWH's project listings, so no projects are shown." />
          <p className="sre-source dpwh-source-margin"><i className="bi bi-info-circle"></i> Source: <a href="https://transparency.dpwh.gov.ph/" target="_blank" rel="noopener noreferrer">DPWH Transparency Portal</a></p>
        </div>
      </section>
    </>
  );
}
