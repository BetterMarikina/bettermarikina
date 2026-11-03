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

// A service record in services.json, transcribed from the Citizen's Charter.
export interface CharterService extends Service {
  requirements: string[];
  charter: { edition: string; ref: string };
  onlineUrl?: string;
  whoMayAvail?: string;
}

export interface CharterOffice {
  id: string;
  office: string;
  edition: string;
  pdfUrl: string;
  externalServices: string[] | null;
  externalServicesNote: string | null;
}

export interface ServicesFile {
  meta: DatasetMeta;
  services: CharterService[];
  charterIndex: CharterOffice[];
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
export interface MarikinaWeather {
  temp: number;
  feelsLike: number;
  humidity: number;
  windKph: number;
  /** WMO weather interpretation code */
  code: number;
  isDay: boolean;
  /** Local (Asia/Manila) ISO timestamp of the observation */
  observedAt: string;
  hourly: { time: string; temp: number; code: number }[];
}

// Exchange rate types
export interface UsdPhpRate {
  rate: number;
  updatedAt: string;
  source: string;
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
  facebook: string | null;
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

export interface PublicSchool {
  schoolId: string;
  name: string;
  level: string;
  ownership: string;
  barangay: string | null;
}

export interface FacilitiesData {
  publicSchools: PublicSchool[];
  higherEducation: { name: string; operator: string; source: string }[];
  healthFacilities: HealthFacility[];
}

export interface HealthFacility {
  name: string;
  type: 'hospital' | 'health-center' | 'dialysis';
  /** PhilHealth level for hospitals ("Level 1" to "Level 3", "Infirmary"); null otherwise. */
  level: string | null;
  ownership: string;
  address: string;
  barangay: string | null;
  source: string;
}

export interface RiverStationLevels {
  station: string;
  stationCode: string;
  location: string;
  alert: number;
  alarm: number;
  critical: number;
  source: string;
}

// dpwh-2027.json: BetterGov.PH Budget API snapshot (NEP vs House Bill 10858). Amounts are pesos; null = no such line.
export interface DpwhProject {
  id: string;
  title: string;
  office: string;
  program: string;
  statusLabel: string;
  group: string;
  held: boolean;
  nepPhp: number | null;
  housePhp: number | null;
  deltaPhp: number | null;
  nepPdfUrl: string | null;
  housePdfUrl: string | null;
  url: string;
}

export interface DpwhBudgetData {
  office: { name: string; tier: string; coServedDistricts: string[]; officeLedgerUrl: string };
  projects: DpwhProject[];
  disclaimers: { id: string; title: string; body: string; url: string }[];
  notice: string | null;
}

export type RiverStatus = 'normal' | 'alert' | 'alarm' | 'critical';

/** /api/river response: live PAGASA FFWS readings for the Marikina stations in drrm.json. */
export interface RiverReading {
  station: string;
  stationCode: string;
  level: number;
  /** PAGASA marked the value with "(*)"; it may be stale or not validated. */
  flagged: boolean;
  /** Level one hour earlier, for the trend; null if missing. */
  wl1h: number | null;
  status: RiverStatus;
  alert: number;
  alarm: number;
  critical: number;
}

export interface RiverResponse {
  /** PAGASA reading slot, YYYYMMDDHHmm in Asia/Manila time. */
  readingAt: string;
  stations: RiverReading[];
}

// transparency.json
export interface AuditReport {
  year: number;
  kind: 'annual' | 'compliance';
  title: string;
  url: string;
  postedOn: string | null;
  fileSize: string | null;
  source: string;
}

export type FoiStatus = 'draft' | 'sent' | 'answered' | 'denied';

export interface FoiRequest {
  id: string;
  subject: string;
  agency: string;
  status: FoiStatus;
  sentOn: string | null;
  replyDueOn: string | null;
  reference: string | null;
  source: string;
}

export interface TransparencyData {
  auditReports: AuditReport[];
  foiRequests: FoiRequest[];
}

export interface DrrmData {
  /** PAGASA FFWS station levels (EL. m), not the city's own alarm levels. */
  riverAlarmLevels: RiverStationLevels[];
  liveReadings: { label: string; url: string; source: string }[];
  evacuationCenters: null;
  /** Utility advisory pages, link only (no scraping). */
  advisories: { label: string; url: string; source: string }[];
  hazardMaps: { label: string; url: string; source: string }[];
  emergencyServices: {
    service: string;
    office: string;
    whoMayAvail: string;
    fee: string;
    processingTime: string;
    howTo: string;
    source: string;
  }[];
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
