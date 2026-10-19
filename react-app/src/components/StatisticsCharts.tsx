'use client';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import type { StatisticsData } from '@/types';

ChartJS.register(BarElement, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

interface StatisticsChartsProps {
  data: StatisticsData;
}

const PRIMARY = '#0032a0';
const NUMBER_FORMAT = new Intl.NumberFormat('en-PH');

export default function StatisticsCharts({ data }: StatisticsChartsProps): JSX.Element {
  const cmci = [...data.cmci].sort((a, b) => a.year - b.year);
  const business = data.businessByNature;
  const lastIndex = business.years.length - 1;
  const topNatures = [...business.rows].sort((a, b) => b.counts[lastIndex] - a.counts[lastIndex]);
  const footwear = data.footwearManufacturers.filter((row): row is { year: number; value: number } => row.value !== null);

  return (
    <div className="stats-charts">
      <figure>
        <figcaption>Population of Marikina City (PSA census counts)</figcaption>
        <Bar
          aria-label="Population by census year"
          data={{ labels: data.population.map((row) => String(row.year)), datasets: [{ label: 'Population', data: data.population.map((row) => row.count), backgroundColor: PRIMARY }] }}
          options={{ responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }}
        />
      </figure>

      <figure>
        <figcaption>DTI CMCI overall rank among Highly Urbanized Cities (lower is better)</figcaption>
        <Line
          aria-label="CMCI overall rank by year"
          data={{ labels: cmci.map((row) => String(row.year)), datasets: [{ label: 'Overall rank', data: cmci.map((row) => row.overallRank), borderColor: PRIMARY, backgroundColor: PRIMARY }] }}
          options={{ responsive: true, plugins: { legend: { display: false } }, scales: { y: { reverse: true, min: 1 } } }}
        />
      </figure>

      <figure>
        <figcaption>Registered businesses by nature, {business.years[lastIndex]} (BPLO)</figcaption>
        <Bar
          aria-label="Registered businesses by nature"
          data={{ labels: topNatures.map((row) => row.nature), datasets: [{ label: String(business.years[lastIndex]), data: topNatures.map((row) => row.counts[lastIndex]), backgroundColor: PRIMARY }] }}
          options={{ indexAxis: 'y', responsive: true, plugins: { legend: { display: false } } }}
        />
        <p>Total establishments: {business.years.map((year, index) => `${year}: ${NUMBER_FORMAT.format(business.total[index])}`).join(' · ')}</p>
      </figure>

      <figure>
        <figcaption>Registered footwear manufacturers, {footwear[0].year} to {footwear[footwear.length - 1].year} (BPLO)</figcaption>
        <Line
          aria-label="Registered footwear manufacturers by year"
          data={{ labels: footwear.map((row) => String(row.year)), datasets: [{ label: 'Manufacturers', data: footwear.map((row) => row.value), borderColor: PRIMARY, backgroundColor: PRIMARY }] }}
          options={{ responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }}
        />
      </figure>

      <style jsx>{`
        .stats-charts { display: grid; gap: var(--spacing-lg); grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
        figure { margin: 0; padding: 16px; border: 1px solid rgba(0,0,0,0.08); border-radius: 10px; background: var(--color-bg); }
        figcaption { font-weight: 600; margin-bottom: 8px; }
        p { font-size: 0.8125rem; color: var(--color-text-light); }
      `}</style>
    </div>
  );
}
