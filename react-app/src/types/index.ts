// Service types
export interface Service {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  description: string;
  keywords: string[];
  fee: string;
  processingTime: string;
  office: string;
  url: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// Officials types
export interface Official {
  id: string;
  name: string;
  position: string;
  title: string;
  image?: string;
  term?: string;
}

// Translation types
export type Language = 'en' | 'fil';

export interface TranslationKeys {
  [key: string]: string;
}

// Weather types
export interface WeatherData {
  temp: number;
  description: string;
  icon: string;
  location: string;
}

// Exchange rate types
export interface ExchangeRate {
  currency: string;
  rate: number;
}

// Ordinance/Resolution types
export interface LegislativeItem {
  id: string;
  number: string;
  title: string;
  date: string;
  status: 'pending' | 'approved' | 'enacted';
  category?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  i18nKey: string;
  children?: NavItem[];
}

// Hotline types
export interface Hotline {
  name: string;
  number: string;
  icon: string;
}

// Sourced dataset envelope (see docs/data/README.md)
export interface DatasetSource {
  id: string;
  tier: 1 | 2 | 3;
  url: string;
  retrievedAt: string;
  covers: string;
}

export interface DatasetMeta {
  title: string;
  sources: DatasetSource[];
  asOf: string;
  notes?: string;
}

export interface Dataset<T> {
  meta: DatasetMeta;
  data: T;
}

// Marikina datasets (react-app/src/data/marikina/*.json)
export interface CityProfile {
  name: string;
  psgc: string;
  region: string;
  classification: string;
  incomeClass: string | null;
  legislativeDistricts: number;
  barangayCount: number;
  landAreaHa: number;
  landAreaSqKm: number;
  landAreaBasis: string;
  population: { year: number; count: number; asOfDate: string; source: string }[];
  households2020: { households: number; householdPopulation: number; source: string };
  densityPerHa: { year: number; value: number; source: string }[];
  annualGrowthRate2015to2020Pct: number;
  legalBasis: { instrument: string; date?: string; year?: number; subject: string; source: string }[];
  history: { year: number; date?: string; event: string; source: string }[];
}

export interface Barangay {
  id: string;
  name: string;
  alsoKnownAs: string | null;
  district: 'I' | 'II';
  psgc: string;
  population: Record<'2010' | '2015' | '2020' | '2024', number>;
  landAreaHa: number;
  urbanRural: string | null;
  creation: { instrument: string; date: string; note: string; source: string } | null;
  officials: { punongBarangay: string; kagawad: string[] | null; skChairperson: string | null } | null;
  officePhone: string | null;
}

export interface ElectedOfficial {
  id: string;
  name: string;
  position: string;
  body: string;
  district?: 'I' | 'II';
  term: { start: string; end: string };
  image: string | null;
}

export interface OrdinanceRecord {
  id: string;
  number: string;
  series: number;
  title: string;
  approvedDate: string | null;
  category: string;
  url: string;
}

export interface DirectoryGroup {
  id: string;
  title: string;
  entries: { name: string; phones: string[] }[];
}

export interface DirectoryData {
  cityHall: { address: string; phone: string; hours: string; email: string };
  groups: DirectoryGroup[];
}

export interface CmciRow {
  year: number;
  overallRank: number;
  overallScore: number;
  pillars: Record<string, { rank: number; score: number } | null>;
}

export interface StatisticsData {
  population: { year: number; count: number }[];
  households: { year: number; households: number }[];
  cmci: CmciRow[];
  businessByNature: { years: number[]; rows: { nature: string; counts: number[] }[]; total: number[] };
  footwearManufacturers: { year: number; value: number | null }[];
}

// finance.json
export interface FundSplit {
  generalFund: number | null;
  sef: number | null;
  total: number | null;
}

export interface AnnualBudget {
  year: number;
  ordinanceAmount: number | null;
  totalIncome: number | null;
  taxRevenue: number | null;
  operatingAndMiscellaneousRevenue: number | null;
  shareFromNationalTaxAllotment: number | null;
  beginningCashBalance: number | null;
}

export interface SreStatement {
  year: number;
  quarter: string;
  sourceFile: string;
  page: number | string;
  incomeTarget: number;
  localSources: FundSplit;
  taxRevenue: FundSplit;
  nonTaxRevenue: FundSplit;
  externalSources: FundSplit;
  totalCurrentOperatingIncome: FundSplit;
  totalCurrentOperatingExpenditures: FundSplit;
  netOperatingIncome: FundSplit;
  proceedsFromLoans: FundSplit;
  otherNonIncomeReceipts: FundSplit | null;
  capitalOutlay: FundSplit;
  debtServicePrincipal: FundSplit;
  otherNonOperatingExpenditures: FundSplit | null;
  netIncreaseInFunds: FundSplit;
  beginningCashBalance: FundSplit;
  endingCashBalance: FundSplit;
  priorYearAccountsPayable: FundSplit | null;
  advancePaymentForRpt: FundSplit | null;
}

export interface LoanReport {
  year: number;
  quarter: string;
  totalAmountReleased: number;
  cumulativePrincipalPaid: number;
  outstandingPrincipal: number;
}

export interface Loan {
  loanReference: string;
  creditor: string;
  amountApproved: number;
  actualPrincipalAmount: number;
  interestRatePct: number;
  maturityDate: string;
  termYears: number;
  purpose: string | null;
  reports: LoanReport[];
}

export interface DebtTotal {
  year: number;
  quarter: string;
  outstandingPrincipal: number;
  currentAnnualBudget: number;
  budgetAllocationForDebtService: number | null;
}

export interface SefQuarter {
  year: number;
  quarter: string;
  specialEducationTax: number;
  discountOnSpecialEducationTax: number;
  interestIncome: number;
  netReceipts: number;
  maintenanceAndOtherOperatingExpenses: number;
  capitalOutlay: number;
  totalDisbursements: number;
  balance: number;
}

export interface NtaItem {
  item: string;
  category: string;
  location: string | null;
  totalCost: number;
  dateStarted: string | null;
  targetCompletionDate: string | null;
  percentCompletion: number | null;
  costIncurredToDate: number | null;
}

export interface NtaQuarter {
  year: number;
  quarter: string;
  items: NtaItem[];
}

export interface LdrrmfMonth {
  year: number;
  month: string;
  totalFundsAvailable: number;
  totalUtilization: number | null;
  unutilizedBalance: number | null;
}

export interface FinanceData {
  annualBudgets: AnnualBudget[];
  statementOfReceiptsAndExpenditures: SreStatement[];
  indebtedness: { loans: Loan[]; totals: DebtTotal[] };
  specialEducationFund: SefQuarter[];
  twentyPercentNta: NtaQuarter[];
  ldrrmf: LdrrmfMonth[];
}
