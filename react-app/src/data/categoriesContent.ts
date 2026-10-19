// Service Categories Content Data
// Full content for each service category page matching original HTML

export interface ServiceItem {
    id: string;
    title: string;
    icon: string;
    description: string;
    fee: string;
    time: string;
    link?: string;
}

export interface OfficeCard {
    title: string;
    icon: string;
    description: string;
    link: string;
}

export interface CategoryContent {
    id: string;
    name: string;
    icon: string;
    badgeText: string;
    description: string;
    services: ServiceItem[];
    offices: OfficeCard[];
}

export const categoriesContent: CategoryContent[] = [
    {
        id: 'certificates',
        name: 'Certificates & Vital Records',
        icon: 'bi-file-earmark-text-fill',
        badgeText: 'Certificates',
        description: 'Official documents for birth, death, marriage, and other vital records',
        services: [
            { id: 'birth-cert', title: 'Birth Certificate', icon: 'bi-file-earmark-text', description: 'Get a certified copy of birth certificate registered in Marikina', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/birth-certificate' },
            { id: 'marriage-cert', title: 'Marriage Certificate', icon: 'bi-heart', description: 'Register or request certified true copy of marriage certificate', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/marriage-certificate' },
            { id: 'death-cert', title: 'Death Certificate', icon: 'bi-file-earmark-x', description: 'Register death certificate and obtain burial/transfer permit', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/death-certificate' },
            { id: 'brgy-clearance', title: 'Barangay Clearance', icon: 'bi-house-check', description: 'Certificate of residence from your barangay', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'brgy-id', title: 'Barangay ID', icon: 'bi-person-badge', description: 'Official barangay identification card', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'police-clearance', title: 'Police Clearance', icon: 'bi-shield-check', description: 'Police clearance coordination through city office', fee: 'See Citizen\'s Charter', time: 'Varies' },
        ],
        offices: [
            { title: 'City Civil Registrar', icon: 'bi-building', description: 'Birth, death, marriage registration, corrections, and certified copies', link: '/service-details/municipal-civil-registrar' },
            { title: 'Human Resource Management', icon: 'bi-people', description: 'Service records, employment certificates, leave credits for LGU employees', link: '/service-details/human-resource-management' },
        ],
    },
    {
        id: 'business',
        name: 'Business & Trade',
        icon: 'bi-shop',
        badgeText: 'Business',
        description: 'Business permits, licenses, and trade registration services',
        services: [
            { id: 'business-permit', title: 'Business Permit', icon: 'bi-shop', description: 'New business permit application for commercial operations', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/business-permits-licensing' },
            { id: 'business-renewal', title: 'Business Permit Renewal', icon: 'bi-arrow-repeat', description: 'Annual renewal of existing business permits', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/business-permits-licensing' },
            { id: 'mayors-clearance', title: "Mayor's Clearance", icon: 'bi-patch-check', description: 'Clearance from the Mayor\'s Office for business operations', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'tricycle-franchise', title: 'Tricycle Franchise', icon: 'bi-bicycle', description: 'Application for tricycle-for-hire franchise', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/tricycle-franchising' },
            { id: 'sanitary-permit', title: 'Sanitary Permit', icon: 'bi-heart-pulse', description: 'Health and sanitation permit for food establishments', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'fire-safety', title: 'Fire Safety Certificate', icon: 'bi-fire', description: 'Fire safety inspection certificate for business premises', fee: 'See Citizen\'s Charter', time: 'Varies' },
        ],
        offices: [
            { title: 'Business Permits & Licensing', icon: 'bi-shop-window', description: 'Business permits, Mayor\'s clearance, and licensing services', link: '/service-details/business-permits-licensing' },
            { title: 'City Treasurer\'s Office', icon: 'bi-cash-coin', description: 'Business tax payments and fee collection', link: '/service-details/municipal-treasurer' },
        ],
    },
    {
        id: 'tax-payments',
        name: 'Taxation & Payments',
        icon: 'bi-cash-coin',
        badgeText: 'Taxation',
        description: 'Property tax, business tax, payments, and tax clearance',
        services: [
            { id: 'rpt', title: 'Real Property Tax', icon: 'bi-house', description: 'Payment of annual real property tax for land and buildings', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-treasurer' },
            { id: 'tax-clearance', title: 'Tax Clearance', icon: 'bi-file-check', description: 'Certificate of no tax delinquency', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-treasurer' },
            { id: 'tax-declaration', title: 'Tax Declaration', icon: 'bi-file-text', description: 'Transfer or update of property tax declaration', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/property-declaration' },
            { id: 'business-tax', title: 'Business Tax', icon: 'bi-receipt', description: 'Payment of business taxes and fees', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-treasurer' },
            { id: 'cedula', title: 'Community Tax Certificate', icon: 'bi-card-text', description: 'Cedula or residence certificate', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'assessment', title: 'Property Assessment', icon: 'bi-clipboard-data', description: 'Assessment of property for taxation purposes', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-assessor' },
        ],
        offices: [
            { title: 'City Treasurer\'s Office', icon: 'bi-cash-coin', description: 'Tax payments, revenue collection, and tax clearances', link: '/service-details/municipal-treasurer' },
            { title: 'City Assessor\'s Office', icon: 'bi-house-door', description: 'Property assessment, tax declarations, and land records', link: '/service-details/municipal-assessor' },
        ],
    },
    {
        id: 'social-services',
        name: 'Social Services',
        icon: 'bi-people-fill',
        badgeText: 'Social Services',
        description: 'Welfare programs, senior citizen services, PWD benefits, and financial aid',
        services: [
            { id: 'senior-id', title: 'Senior Citizen ID', icon: 'bi-person-vcard', description: 'Registration and ID for citizens aged 60 and above', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/mswdo-services' },
            { id: 'pwd-id', title: 'PWD ID', icon: 'bi-universal-access', description: 'Registration and ID for persons with disability', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/mswdo-services' },
            { id: 'solo-parent', title: 'Solo Parent ID', icon: 'bi-person-hearts', description: 'Registration for solo parent benefits', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/mswdo-services' },
            { id: 'financial-aid', title: 'Financial Assistance', icon: 'bi-wallet2', description: 'Emergency financial assistance for indigent families', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/mswdo-services' },
            { id: 'burial-assist', title: 'Burial Assistance', icon: 'bi-flower1', description: 'Financial assistance for burial expenses', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/mswdo-services' },
            { id: 'medical-assist', title: 'Medical Assistance', icon: 'bi-hospital', description: 'Assistance for hospitalization and medical expenses', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/mswdo-services' },
        ],
        offices: [
            { title: 'CSWDO', icon: 'bi-people', description: 'Social welfare programs, IDs, and financial assistance', link: '/service-details/mswdo-services' },
        ],
    },
    {
        id: 'health',
        name: 'Health & Wellness',
        icon: 'bi-heart-pulse-fill',
        badgeText: 'Health',
        description: 'Vaccination programs, health certificates, and medical assistance',
        services: [
            { id: 'health-cert', title: 'Health Certificate', icon: 'bi-file-medical', description: 'Medical certificate for employment and food handling', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'vaccination', title: 'Vaccination Services', icon: 'bi-droplet', description: 'Routine immunization and COVID-19 vaccination', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'prenatal', title: 'Prenatal Care', icon: 'bi-heart', description: 'Prenatal checkup and monitoring for pregnant women', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'dental', title: 'Dental Services', icon: 'bi-emoji-smile', description: 'Dental checkup, extraction, and treatment', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'tb-dots', title: 'TB-DOTS Program', icon: 'bi-lungs', description: 'Tuberculosis screening, treatment, and monitoring', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'medical-consult', title: 'Medical Consultation', icon: 'bi-stethoscope', description: 'General medical consultation and treatment', fee: 'See Citizen\'s Charter', time: 'Varies' },
        ],
        offices: [
            { title: 'City Health Office', icon: 'bi-hospital', description: 'Health programs, vaccination, and medical services', link: '/services/health' },
        ],
    },
    {
        id: 'agriculture',
        name: 'Agriculture',
        icon: 'bi-tree-fill',
        badgeText: 'Agriculture',
        description: 'Agricultural loans, crop insurance, fertilizer assistance, and training',
        services: [
            { id: 'rsbsa', title: 'RSBSA Registration', icon: 'bi-card-list', description: 'Registry System for Basic Sectors in Agriculture', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-agriculture' },
            { id: 'fertilizer', title: 'Fertilizer Assistance', icon: 'bi-bag', description: 'Distribution of subsidized fertilizers to farmers', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-agriculture' },
            { id: 'seeds', title: 'Seeds Distribution', icon: 'bi-flower3', description: 'Free or subsidized seeds for registered farmers', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-agriculture' },
            { id: 'livestock', title: 'Livestock Program', icon: 'bi-piggy-bank', description: 'Livestock dispersal and veterinary services', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-agriculture' },
            { id: 'agri-training', title: 'Agricultural Training', icon: 'bi-book', description: 'Farming techniques and livelihood training', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-agriculture' },
            { id: 'crop-insurance', title: 'Crop Insurance', icon: 'bi-shield-check', description: 'Philippine Crop Insurance Corporation programs', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-agriculture' },
        ],
        offices: [
            { title: 'City Agriculture Office', icon: 'bi-tree', description: 'Agricultural programs, assistance, and registration', link: '/service-details/municipal-agriculture' },
        ],
    },
    {
        id: 'infrastructure',
        name: 'Infrastructure',
        icon: 'bi-building-fill-gear',
        badgeText: 'Infrastructure',
        description: 'Construction permits, road maintenance requests, and public facilities',
        services: [
            { id: 'building-permit', title: 'Building Permit', icon: 'bi-building', description: 'Permit for construction or renovation of buildings', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-engineering' },
            { id: 'fence-permit', title: 'Fencing Permit', icon: 'bi-bounding-box', description: 'Permit for fence construction', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-engineering' },
            { id: 'excavation', title: 'Excavation Permit', icon: 'bi-cone-striped', description: 'Permit for road/land excavation', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-engineering' },
            { id: 'occupancy', title: 'Occupancy Permit', icon: 'bi-house-check', description: 'Certificate of occupancy for completed buildings', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-engineering' },
            { id: 'road-maintenance', title: 'Road Maintenance Request', icon: 'bi-signpost-2', description: 'Request for road repair and maintenance', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-engineering' },
            { id: 'zoning', title: 'Zoning Clearance', icon: 'bi-map', description: 'Land use and zoning compliance certificate', fee: 'See Citizen\'s Charter', time: 'Varies', link: '/service-details/municipal-planning' },
        ],
        offices: [
            { title: 'City Engineering Office', icon: 'bi-building-gear', description: 'Building permits, construction, and infrastructure', link: '/service-details/municipal-engineering' },
            { title: 'City Planning & Development', icon: 'bi-clipboard-data', description: 'Zoning, land use, and development planning', link: '/service-details/municipal-planning' },
        ],
    },
    {
        id: 'education',
        name: 'Education & Scholarship',
        icon: 'bi-mortarboard-fill',
        badgeText: 'Education',
        description: 'Scholarship programs, student assistance, and educational grants',
        services: [
            { id: 'scholarship', title: 'City Scholarship', icon: 'bi-mortarboard', description: 'Scholarship program for qualified students', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'education-assist', title: 'Educational Assistance', icon: 'bi-cash-stack', description: 'One-time financial assistance for students', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'als', title: 'ALS Program', icon: 'bi-book', description: 'Alternative Learning System for out-of-school youth', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'daycare', title: 'Day Care Services', icon: 'bi-emoji-smile', description: 'Early childhood care and development program', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'tesda', title: 'TESDA Programs', icon: 'bi-tools', description: 'Technical-vocational education and training', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'library', title: 'Public Library', icon: 'bi-book-half', description: 'Access to books and learning resources', fee: 'See Citizen\'s Charter', time: 'Varies' },
        ],
        offices: [
            { title: 'Mayor\'s Office - Scholarship', icon: 'bi-building', description: 'City scholarship programs', link: '/government' },
        ],
    },
    {
        id: 'public-safety',
        name: 'Public Safety',
        icon: 'bi-shield-fill-check',
        badgeText: 'Public Safety',
        description: 'Emergency services, disaster preparedness, and community safety programs',
        services: [
            { id: 'disaster-prep', title: 'Disaster Preparedness', icon: 'bi-exclamation-triangle', description: 'Emergency preparedness training and information', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'emergency-response', title: 'Emergency Response', icon: 'bi-telephone', description: '24/7 emergency response and rescue services', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'evacuation', title: 'Evacuation Assistance', icon: 'bi-signpost', description: 'Evacuation support during disasters', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'relief', title: 'Relief Operations', icon: 'bi-box-seam', description: 'Distribution of relief goods during calamities', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'fire-prevention', title: 'Fire Prevention', icon: 'bi-fire', description: 'Fire safety inspection and prevention programs', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'peace-order', title: 'Peace & Order', icon: 'bi-shield', description: 'Community safety and crime prevention', fee: 'See Citizen\'s Charter', time: 'Varies' },
        ],
        offices: [
            { title: 'CDRRMO', icon: 'bi-exclamation-triangle', description: 'Disaster risk reduction and emergency response', link: '/services/public-safety' },
        ],
    },
    {
        id: 'environment',
        name: 'Environment',
        icon: 'bi-globe-americas',
        badgeText: 'Environment',
        description: 'Environmental permits, waste management, and conservation programs',
        services: [
            { id: 'waste-mgmt', title: 'Waste Management', icon: 'bi-trash', description: 'Garbage collection schedule and proper disposal', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'tree-cutting', title: 'Tree Cutting Permit', icon: 'bi-tree', description: 'Permit for tree cutting within city area', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'env-clearance', title: 'Environmental Clearance', icon: 'bi-patch-check', description: 'Environmental compliance certificate', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'clean-air', title: 'Clean Air Act Compliance', icon: 'bi-wind', description: 'Air quality compliance and monitoring', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'coastal', title: 'Coastal Resource Management', icon: 'bi-water', description: 'Protection of coastal and marine resources', fee: 'See Citizen\'s Charter', time: 'Varies' },
            { id: 'urban-greening', title: 'Urban Greening', icon: 'bi-flower1', description: 'Tree planting and urban greening programs', fee: 'See Citizen\'s Charter', time: 'Varies' },
        ],
        offices: [
            { title: 'City Environment & Natural Resources', icon: 'bi-globe', description: 'Environmental programs and permits', link: '/services/environment' },
        ],
    },
];

export function getCategoryContent(categoryId: string): CategoryContent | undefined {
    return categoriesContent.find(c => c.id === categoryId);
}
