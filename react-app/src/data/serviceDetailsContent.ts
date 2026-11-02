// Service Details Content Data
// Full content for each service detail page matching original HTML

export interface QuickStat {
    icon: string;
    label: string;
    value: string;
}

export interface ProcessStep {
    title: string;
    description: string;
    isFinal?: boolean;
}

export interface RequirementGroup {
    title: string;
    icon: string;
    items: string[];
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface OfficeInfo {
    name: string;
    location: string;
    phone: string;
    hours: string;
}

export interface RelatedService {
    title: string;
    link: string;
}

export interface ServiceDetail {
    id: string;
    title: string;
    fullTitle: string;
    category: string;
    categoryLink: string;
    badgeText: string;
    badgeIcon: string;
    description: string;
    quickStats: QuickStat[];
    processSteps: ProcessStep[];
    requirements: RequirementGroup[];
    faqs: FAQ[];
    office: OfficeInfo;
    relatedServices: RelatedService[];
}

export const serviceDetailsContent: ServiceDetail[] = [
    // Sprint 05 V7: the 10 most requested services. Fees, times and requirements are from the
    // per-office Citizen's Charters (Civil Registry, Treasury, CHO, OSCA 2024; BPLO 2026). Phones from directory.json.
    {
        id: 'birth-certificate',
        title: 'Birth Registration',
        fullTitle: 'Birth Registration (On-time and Late)',
        category: 'Certificates',
        categoryLink: '/services/certificates',
        badgeText: 'Certificates',
        badgeIcon: 'bi-file-earmark-text',
        description: 'Register a birth that happened in Marikina. On-time registration is within 30 days of the birth.',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: 'About 9 minutes (on-time)' },
            { icon: 'bi-cash', label: 'Fee', value: 'PHP 100.00 (on-time)' },
            { icon: 'bi-person-check', label: 'Who Can Apply', value: 'Parents, guardians, hospitals' },
            { icon: 'bi-geo-alt', label: 'Window', value: 'Civil Registry, Window 5' },
        ],
        processSteps: [
            { title: 'Submit the requirements', description: 'Bring the accomplished Certificate of Live Birth (Municipal Form 102) and attachments to Window 5. Staff check them and give you an order of payment.' },
            { title: 'Pay at the Treasury', description: 'Pay the registration fee at the City Treasurer\'s Office and keep the official receipt.' },
            { title: 'Get your claim stub', description: 'Bring the official receipt back to Window 5. You get a claim stub with the release date.', isFinal: true },
        ],
        requirements: [
            { title: 'On-time registration (within 30 days)', icon: 'bi-file-text', items: ['Municipal Form 102, 1 set, signed in black ink', 'If the parents are married: certified true copy or PSA copy of their marriage contract', 'If not married: notarized Affidavit of Admission of Paternity and Affidavit to Use the Surname of the Father (4 copies)'] },
            { title: 'Late registration (after 30 days)', icon: 'bi-hourglass-split', items: ['Municipal Form 102 and notarized Affidavit of Delayed Registration', 'Affidavit of two disinterested persons', 'Negative certification from PSA', 'Barangay clearance for late registration', 'Any 2 documents showing the date and place of birth', 'Proof of the parents\' identity (PSA records, government ID or passport)'] },
        ],
        faqs: [
            { question: 'How much is late registration?', answer: 'PHP 200.00 if 30 days up to 1 year late, and PHP 400.00 if 2 years or more. Processing time depends on the verification of your documents.' },
            { question: 'Can I get a copy of an existing birth certificate here?', answer: 'Yes. A certified true copy of a birth registered in Marikina costs PHP 150.00 per copy at Window 4. See Certified True Copies.' },
        ],
        office: { name: 'City Civil Registry Office', location: 'Marikina City Hall, Window 5', phone: '8646-0373', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Certified True Copies', link: '/service-details/civil-registry-certified-copy' },
            { title: 'Marriage License', link: '/service-details/marriage-certificate' },
            { title: 'Death Registration', link: '/service-details/death-certificate' },
        ],
    },
    {
        id: 'marriage-certificate',
        title: 'Marriage License',
        fullTitle: 'Marriage License Application',
        category: 'Certificates',
        categoryLink: '/services/certificates',
        badgeText: 'Certificates',
        badgeIcon: 'bi-heart',
        description: 'Apply for a marriage license. At least one of the applicants must be a Marikina resident.',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: '11 days' },
            { icon: 'bi-cash', label: 'Fee', value: 'PHP 400.00' },
            { icon: 'bi-person-check', label: 'Who Can Apply', value: 'Both applicants, 18 and above' },
            { icon: 'bi-geo-alt', label: 'Window', value: 'Civil Registry, Window 1' },
        ],
        processSteps: [
            { title: 'Present your IDs', description: 'Both applicants go to Window 1. Staff confirm that at least one of you lives in Marikina.' },
            { title: 'Submit the application', description: 'Submit Municipal Form 90 (Application for Marriage License) with the requirements. You get an order of payment.' },
            { title: 'Pay at the Treasury', description: 'Pay PHP 100.00 application fee and PHP 300.00 marriage license fee.' },
            { title: 'Get your claim stub', description: 'Bring the official receipt to Window 1. The license is released after 11 days; if that falls on a weekend or holiday, on the next working day.', isFinal: true },
        ],
        requirements: [
            { title: 'Both applicants', icon: 'bi-people', items: ['Municipal Form 90', 'Personal appearance', 'Valid government-issued or company ID', 'PSA or local birth certificate, or baptismal certificate', 'PSA CENOMAR', 'Community Tax Certificate (cedula)', '2x2 photo each'] },
            { title: 'If applicable', icon: 'bi-info-circle', items: ['Ages 18-25: parental consent or advice, with the parents present', 'Pre-marriage orientation and counseling', 'Foreigners: passport copy and Certificate of Legal Capacity to Marry', 'If divorced: the final divorce decree'] },
        ],
        faqs: [
            { question: 'What is the marriageable age?', answer: '18 years old. Applicants aged 18 to 25 need their parents\' consent or advice.' },
            { question: 'Can I get a copy of a marriage certificate here?', answer: 'Yes, for marriages registered in Marikina: PHP 150.00 per certified true copy at Window 4.' },
        ],
        office: { name: 'City Civil Registry Office', location: 'Marikina City Hall, Window 1', phone: '8646-0373', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Certified True Copies', link: '/service-details/civil-registry-certified-copy' },
            { title: 'Community Tax Certificate', link: '/service-details/community-tax-certificate' },
        ],
    },
    {
        id: 'death-certificate',
        title: 'Death Registration',
        fullTitle: 'Death Registration (On-time and Late)',
        category: 'Certificates',
        categoryLink: '/services/certificates',
        badgeText: 'Certificates',
        badgeIcon: 'bi-file-earmark-x',
        description: 'Register a death that happened in Marikina. On-time registration is within 30 days of the death.',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: 'About 9 minutes (on-time)' },
            { icon: 'bi-cash', label: 'Fee', value: 'PHP 250.00 (on-time)' },
            { icon: 'bi-person-check', label: 'Who Can Apply', value: 'Family, funeral parlors' },
            { icon: 'bi-geo-alt', label: 'Window', value: 'Civil Registry, Window 3' },
        ],
        processSteps: [
            { title: 'Get the burial or cremation permit', description: 'The City Health Office issues the burial, cremation or transfer permit, which the Civil Registry requires.' },
            { title: 'Submit the requirements', description: 'Bring the Certificate of Death (Municipal Form 103) and attachments to Window 3. You get an order of payment.' },
            { title: 'Pay at the Treasury', description: 'On-time: PHP 100.00 registration fee + PHP 150.00 certified true copy.' },
            { title: 'Claim the certified copy', description: 'Bring the official receipt to Window 3 to get the certified copy of the death certificate.', isFinal: true },
        ],
        requirements: [
            { title: 'On-time registration (within 30 days)', icon: 'bi-file-text', items: ['Municipal Form 103, 1 set, signed in black ink', 'Medical certificate and certification of death', 'Certification of embalmer', 'Burial, cremation or transfer permit (City Health Office)', 'Autopsy report, if applicable'] },
            { title: 'Late registration (after 30 days)', icon: 'bi-hourglass-split', items: ['All of the above', 'Negative result from PSA', 'Notarized Affidavit of Delayed Registration of Death', 'Certificate of burial (cemetery) and certificate of service (funeral parlor)'] },
        ],
        faqs: [
            { question: 'How much is late registration?', answer: 'PHP 200.00 late registration fee + PHP 150.00 certified true copy. Release is in 15 working days.' },
            { question: 'Who reports a death without medical attendance?', answer: 'The spouse or nearest relative must report it within 48 hours so the Health Officer can certify the cause of death.' },
        ],
        office: { name: 'City Civil Registry Office', location: 'Marikina City Hall, Window 3', phone: '8646-0373', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Burial and Cremation Permits', link: '/services/health' },
            { title: 'Burial Assistance', link: '/services/social-services' },
        ],
    },
    {
        id: 'civil-registry-certified-copy',
        title: 'Certified True Copies',
        fullTitle: 'Certified True Copy of Birth, Marriage or Death Certificate',
        category: 'Certificates',
        categoryLink: '/services/certificates',
        badgeText: 'Certificates',
        badgeIcon: 'bi-files',
        description: 'Get a certified true copy of a birth, marriage or death certificate registered in Marikina.',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: 'About 6 minutes' },
            { icon: 'bi-cash', label: 'Fee', value: 'PHP 150.00 per copy' },
            { icon: 'bi-person-check', label: 'Who Can Apply', value: 'General public' },
            { icon: 'bi-geo-alt', label: 'Window', value: 'Civil Registry, Window 4' },
        ],
        processSteps: [
            { title: 'Fill out the request', description: 'Get the request form at Window 4 and submit it. Staff check that the record exists and give you an order of payment.' },
            { title: 'Pay at the Treasury', description: 'Pay PHP 150.00 per copy.' },
            { title: 'Claim your copy', description: 'Bring the official receipt to Window 4.', isFinal: true },
        ],
        requirements: [
            { title: 'Requirements', icon: 'bi-file-text', items: ['Request form (Window 4)', 'Valid government-issued ID of the requester', 'If a representative: authorization letter or SPA, and the representative\'s valid ID'] },
        ],
        faqs: [
            { question: 'Is this the same as a PSA copy?', answer: 'No. This is a copy from the Marikina Civil Registry, for records registered in Marikina. PSA copies are requested from the PSA.' },
        ],
        office: { name: 'City Civil Registry Office', location: 'Marikina City Hall, Window 4', phone: '8646-0373', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Birth Registration', link: '/service-details/birth-certificate' },
            { title: 'Corrections (RA 9048 / RA 10172)', link: '/services/certificates' },
        ],
    },
    {
        id: 'real-property-tax',
        title: 'Real Property Tax',
        fullTitle: 'Payment of Real Property Tax',
        category: 'Taxation & Payments',
        categoryLink: '/services/tax-payments',
        badgeText: 'Taxation',
        badgeIcon: 'bi-house',
        description: 'Pay real property tax (amilyar) at the Treasury Office or online.',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: 'About 4 minutes' },
            { icon: 'bi-cash', label: 'Fee', value: 'Based on assessment' },
            { icon: 'bi-person-check', label: 'Who Can Apply', value: 'Property owners' },
            { icon: 'bi-globe', label: 'Online', value: 'payment.marikina.gov.ph' },
        ],
        processSteps: [
            { title: 'Get a queue number', description: 'Get a number at the Treasury Help Desk (about 30 seconds).' },
            { title: 'Present your account number or PIN', description: 'At the window, the collector pulls up your account using the PIN from your previous receipt.' },
            { title: 'Pay and get your receipt', description: 'Pay the billed amount and receive the official receipt.', isFinal: true },
        ],
        requirements: [
            { title: 'Walk-in', icon: 'bi-person', items: ['Account number or Property Identification Number (PIN), from the previous official receipt', 'Statement of account (from the teller)'] },
            { title: 'Online', icon: 'bi-globe', items: ['Create an account at payment.marikina.gov.ph', 'Register each property using its PIN', 'Compute the tax for the year and quarter, then pay', 'The Records Section prints the official receipt, which you can claim'] },
        ],
        faqs: [
            { question: 'I need proof that my property tax is paid. What do I get?', answer: 'Request a Real Property Tax Clearance: PHP 50.00, about 5 minutes, with a photocopy of your current RPT receipt and a valid ID.' },
        ],
        office: { name: 'City Treasurer\'s Office, Real Property Tax Division', location: 'Marikina City Hall', phone: '8682-9571 / 8646-1623', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Tax Declaration Transfer', link: '/services/tax-payments' },
            { title: 'Treasury Services', link: '/service-details/municipal-treasurer' },
        ],
    },
    {
        id: 'community-tax-certificate',
        title: 'Community Tax Certificate',
        fullTitle: 'Community Tax Certificate (Cedula)',
        category: 'Taxation & Payments',
        categoryLink: '/services/tax-payments',
        badgeText: 'Taxation',
        badgeIcon: 'bi-card-text',
        description: 'Get a Community Tax Certificate (cedula) at the Treasury Office.',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: 'About 2 minutes' },
            { icon: 'bi-cash', label: 'Fee', value: 'Based on income' },
            { icon: 'bi-person-check', label: 'Who Can Apply', value: 'Anyone' },
            { icon: 'bi-calendar-check', label: 'Appointment', value: 'Walk-in' },
        ],
        processSteps: [
            { title: 'Get a queue number and form', description: 'Get a number and the CTC form at the Treasury Help Desk.' },
            { title: 'Pay at the window', description: 'Present the accomplished form when your number is called. The collector computes the tax from your income and issues the cedula.', isFinal: true },
        ],
        requirements: [
            { title: 'Requirements', icon: 'bi-file-text', items: ['Duly accomplished Community Tax Certificate form (Treasury Help Desk)'] },
        ],
        faqs: [],
        office: { name: 'City Treasurer\'s Office, Business Tax Division', location: 'Marikina City Hall', phone: '8682-9571 / 8646-1623', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Marriage License', link: '/service-details/marriage-certificate' },
            { title: 'Real Property Tax', link: '/service-details/real-property-tax' },
        ],
    },
    {
        id: 'business-renewal',
        title: 'Business Permit Renewal',
        fullTitle: 'Renewal of Business Permit',
        category: 'Business',
        categoryLink: '/services/business',
        badgeText: 'Business',
        badgeIcon: 'bi-arrow-repeat',
        description: 'Renew an existing business permit at the BPLO or online.',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: 'About 30 minutes' },
            { icon: 'bi-cash', label: 'Fee', value: 'Based on the Revenue Code' },
            { icon: 'bi-calendar-check', label: 'Quarterly due', value: 'Jan 20, Apr 20, Jul 20, Oct 20' },
            { icon: 'bi-globe', label: 'Online', value: 'bplo.marikina.gov.ph' },
        ],
        processSteps: [
            { title: 'Check your eBOSS compliance', description: 'Check your Engineering, BFP, CHO and CEMO compliance status on the e-BOSS portal at bplo.marikina.gov.ph/client.' },
            { title: 'File the application', description: 'Submit the accomplished application form with the requirements. BPLO evaluates, assesses and bills it (about 15 minutes).' },
            { title: 'Pay at the Treasury', description: 'Pay the billed amount at the Treasury cashier (about 15 minutes). You can also register and pay online at payment.marikina.gov.ph.', isFinal: true },
        ],
        requirements: [
            { title: 'Requirements', icon: 'bi-file-text', items: ['eBOSS compliance (Engineering, BFP, CHO, CEMO)', 'Financial statement, quarterly VAT returns or monthly percentage tax (photocopies)', 'Public liability insurance (Ord. 32 s. 2013)'] },
            { title: 'If a representative', icon: 'bi-people', items: ['Sole proprietorship: authorization letter or SPA, and IDs of the owner and representative', 'Corporation or partnership: Secretary\'s Certificate, and IDs of the corporate secretary and representative'] },
        ],
        faqs: [
            { question: 'Where do I get the forms?', answer: 'At bplo.marikina.gov.ph/forms.' },
        ],
        office: { name: 'Business Permits and Licensing Office (BPLO)', location: 'Marikina City Hall', phone: '8244-1800 / 8646-2354', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'New Business Permit', link: '/service-details/business-permits-licensing' },
            { title: 'Sanitary Permit', link: '/service-details/sanitary-permit' },
        ],
    },
    {
        id: 'health-certificate',
        title: 'Health Certificate',
        fullTitle: 'Health Certificate (Health Card)',
        category: 'Health',
        categoryLink: '/services/health',
        badgeText: 'Health',
        badgeIcon: 'bi-file-medical',
        description: 'Get a health certificate or health card, e.g. for employment or food handling.',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: 'About 30 minutes' },
            { icon: 'bi-cash', label: 'Fee', value: 'PHP 150.00 + PHP 150.00 X-ray' },
            { icon: 'bi-person-check', label: 'Who Can Apply', value: 'Anyone who needs it' },
            { icon: 'bi-calendar-check', label: 'Appointment', value: 'Walk-in' },
        ],
        processSteps: [
            { title: 'Submit the checklist and samples', description: 'Submit the checklist form with your urine and stool samples to the laboratory.' },
            { title: 'Pay', description: 'Pay PHP 150.00 for the health card, plus PHP 150.00 for the X-ray if you need one.' },
            { title: 'Claim your health card', description: 'Submit the results to the Medical Employees Clinic and claim your health card.', isFinal: true },
        ],
        requirements: [
            { title: 'Requirements', icon: 'bi-file-text', items: ['Checklist form (laboratory clinic)', 'Urine and stool samples', 'Recent 1x1 colored photo', 'X-ray result from within the last 6 months'] },
        ],
        faqs: [],
        office: { name: 'City Health Office, Medical Employees Clinic', location: 'Marikina City Health Office', phone: '997-1108 / 942-2359', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Sanitary Permit', link: '/service-details/sanitary-permit' },
            { title: 'Clinical Laboratory', link: '/services/health' },
        ],
    },
    {
        id: 'sanitary-permit',
        title: 'Sanitary Permit',
        fullTitle: 'Sanitary Permit',
        category: 'Health',
        categoryLink: '/services/health',
        badgeText: 'Health',
        badgeIcon: 'bi-heart-pulse',
        description: 'Sanitary permit for a business, issued together with the business permit.',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: 'About 20 minutes' },
            { icon: 'bi-cash', label: 'Fee', value: 'PHP 300.00' },
            { icon: 'bi-person-check', label: 'Who Can Apply', value: 'Business owners' },
            { icon: 'bi-link-45deg', label: 'Paid with', value: 'Business permit' },
        ],
        processSteps: [
            { title: 'Submit your business permit', description: 'Present the business permit to the Environmental Sanitation section of the City Health Office.' },
            { title: 'Receive the sanitary permit', description: 'The sanitary inspector issues the permit. The PHP 300.00 fee is integrated in the business permit.', isFinal: true },
        ],
        requirements: [
            { title: 'Requirements', icon: 'bi-file-text', items: ['Business permit (BPLO)'] },
        ],
        faqs: [],
        office: { name: 'City Health Office, Environmental Sanitation', location: 'Marikina City Health Office', phone: '997-1108 / 942-2359', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Health Certificate', link: '/service-details/health-certificate' },
            { title: 'Business Permit Renewal', link: '/service-details/business-renewal' },
        ],
    },
    {
        id: 'senior-citizen-id',
        title: 'Senior Citizen ID',
        fullTitle: 'Senior Citizen ID and Booklet',
        category: 'Social Services',
        categoryLink: '/services/social-services',
        badgeText: 'Social Services',
        badgeIcon: 'bi-person-vcard',
        description: 'Get a senior citizen ID and discount booklet. For Marikina residents aged 60 and above.',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: 'About 6 minutes' },
            { icon: 'bi-cash', label: 'Fee', value: 'Free' },
            { icon: 'bi-person-check', label: 'Who Can Apply', value: 'Residents aged 60+' },
            { icon: 'bi-calendar-check', label: 'Appointment', value: 'Walk-in' },
        ],
        processSteps: [
            { title: 'Submit the form and requirements', description: 'Submit the accomplished OSCA form. Staff interview you and encode your record (about 3 minutes).' },
            { title: 'Claim your ID and booklet', description: 'Your ID is typed and released with the booklet (about 3 minutes).', isFinal: true },
        ],
        requirements: [
            { title: 'Requirements', icon: 'bi-file-text', items: ['Fully accomplished OSCA form', '3 pcs. latest 1x1 photo', 'Proof of age, any one: PhilSys national ID, UMID, voter\'s ID, PRC ID, driver\'s license, TIN ID, postal ID, birth or baptismal certificate, passport, marriage contract, or police, NBI or barangay clearance'] },
            { title: 'If a representative', icon: 'bi-people', items: ['Authorization letter signed by the applicant', 'Valid IDs of the senior and the representative'] },
        ],
        faqs: [
            { question: 'I lost my senior ID. How do I replace it?', answer: 'Submit the OSCA form, 3 pcs. 1x1 photo and an affidavit of loss. Replacement takes about 4 minutes.' },
            { question: 'Is there a birthday benefit?', answer: 'Active Marikina seniors receive PHP 2,000.00 and a grocery item on their birthday, delivered to their address. The senior must be present.' },
        ],
        office: { name: 'Office for Senior Citizens Affairs (OSCA)', location: 'Marikina City', phone: '8659-1956', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Social Services', link: '/services/social-services' },
            { title: 'CSWDO Services', link: '/service-details/mswdo-services' },
        ],
    },
    {
        id: 'municipal-civil-registrar',
        title: 'City Civil Registrar',
        fullTitle: 'City Civil Registrar Office',
        category: 'Certificates',
        categoryLink: '/services/certificates',
        badgeText: 'Office',
        badgeIcon: 'bi-building',
        description: 'Birth, death, marriage registration, corrections, and certified copies',
        quickStats: [
            { icon: 'bi-clock', label: 'Office Hours', value: 'Mon-Fri 8AM-5PM' },
            { icon: 'bi-telephone', label: 'Contact', value: '(02) 8646-0462' },
            { icon: 'bi-geo-alt', label: 'Location', value: '2nd Floor, City Hall' },
            { icon: 'bi-calendar-check', label: 'Appointment', value: 'Walk-in' },
        ],
        processSteps: [
            { title: 'Identify Service', description: 'Determine what civil registry service you need.' },
            { title: 'Prepare Documents', description: 'Gather all required documents for your transaction.' },
            { title: 'Visit Office', description: 'Go to Civil Registrar, 2nd Floor of City Hall.' },
            { title: 'Submit Application', description: 'Submit documents and pay applicable fees.' },
            { title: 'Claim Documents', description: 'Return to claim processed documents.', isFinal: true },
        ],
        requirements: [
            { title: 'General Requirements', icon: 'bi-file-text', items: ['Valid government-issued ID', 'Accomplished request form', 'Payment of applicable fees'] },
        ],
        faqs: [
            { question: 'What services are offered?', answer: 'Birth, death, marriage registration; certified copies; corrections; late registration; legitimation; and other civil registry services.' },
        ],
        office: { name: 'Local Civil Registrar', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Birth Certificate', link: '/service-details/birth-certificate' },
            { title: 'Marriage Certificate', link: '/service-details/marriage-certificate' },
            { title: 'Death Certificate', link: '/service-details/death-certificate' },
        ],
    },
    {
        id: 'business-permits-licensing',
        title: 'Business Permits & Licensing',
        fullTitle: 'Business Permits & Licensing Office',
        category: 'Business',
        categoryLink: '/services/business',
        badgeText: 'Business',
        badgeIcon: 'bi-shop',
        description: 'Business permits, Mayor\'s clearance, and licensing services',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: '1-3 Days' },
            { icon: 'bi-cash', label: 'Fee', value: 'See Citizen\'s Charter' },
            { icon: 'bi-person-check', label: 'Who Can Apply', value: 'Business Owner' },
            { icon: 'bi-calendar-check', label: 'Appointment', value: 'Walk-in' },
        ],
        processSteps: [
            { title: 'Secure Barangay Clearance', description: 'Get business clearance from the barangay where your business is located.' },
            { title: 'Prepare Documents', description: 'Gather DTI/SEC registration, lease contract, and other requirements.' },
            { title: 'Submit Application', description: 'Go to BPLO and submit application with required documents.' },
            { title: 'Pay Fees', description: 'Pay business taxes and fees at Treasurer\'s Office.' },
            { title: 'Claim Permit', description: 'Return to BPLO to claim your business permit.', isFinal: true },
        ],
        requirements: [
            { title: 'New Business', icon: 'bi-shop', items: ['DTI/SEC Registration', 'Barangay Business Clearance', 'Contract of Lease or Land Title', 'Fire Safety Certificate', 'Sanitary Permit', 'Valid ID'] },
            { title: 'Renewal', icon: 'bi-arrow-repeat', items: ['Previous Business Permit', 'Community Tax Certificate (Cedula)', 'Barangay Business Clearance', 'Updated Fire Safety Certificate'] },
        ],
        faqs: [
            { question: 'When should I renew my business permit?', answer: 'Before January 20 of each year to avoid penalties.' },
            { question: 'What are the penalties for late renewal?', answer: 'A surcharge of 25% plus 2% interest per month on unpaid taxes.' },
        ],
        office: { name: 'Business Permits & Licensing Office', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'City Treasurer', link: '/service-details/municipal-treasurer' },
            { title: 'Fire Safety Certificate', link: '/services/business' },
        ],
    },
    {
        id: 'municipal-treasurer',
        title: 'City Treasurer\'s Office',
        fullTitle: 'City Treasurer\'s Office',
        category: 'Taxation',
        categoryLink: '/services/tax-payments',
        badgeText: 'Taxation',
        badgeIcon: 'bi-cash-coin',
        description: 'Tax payments, revenue collection, and tax clearances',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: '15-30 Minutes' },
            { icon: 'bi-cash', label: 'Payment Methods', value: 'Cash/Check' },
            { icon: 'bi-calendar', label: 'Deadline', value: 'Jan 31 (RPT)' },
            { icon: 'bi-percent', label: 'Discount', value: '10% if paid early' },
        ],
        processSteps: [
            { title: 'Get Tax Bill', description: 'Request your tax bill or assessment from the office.' },
            { title: 'Verify Amount', description: 'Check the details and amount due.' },
            { title: 'Make Payment', description: 'Pay at the cashier window.' },
            { title: 'Claim Receipt', description: 'Keep official receipt for your records.', isFinal: true },
        ],
        requirements: [
            { title: 'For Real Property Tax', icon: 'bi-house', items: ['Tax Declaration Number', 'Previous Official Receipt', 'Valid ID'] },
            { title: 'For Business Tax', icon: 'bi-shop', items: ['Business Permit', 'Assessment from BPLO', 'Valid ID'] },
        ],
        faqs: [
            { question: 'Is there a discount for early payment?', answer: 'Yes, 10% discount for RPT paid in full before January 31.' },
            { question: 'Can I pay quarterly?', answer: 'Yes, RPT can be paid quarterly without discount.' },
        ],
        office: { name: 'City Treasurer\'s Office', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Property Declaration', link: '/service-details/property-declaration' },
            { title: 'City Assessor', link: '/service-details/municipal-assessor' },
        ],
    },
    {
        id: 'municipal-assessor',
        title: 'City Assessor\'s Office',
        fullTitle: 'City Assessor\'s Office',
        category: 'Taxation',
        categoryLink: '/services/tax-payments',
        badgeText: 'Taxation',
        badgeIcon: 'bi-house-door',
        description: 'Property assessment, tax declarations, and land records',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: '1-5 Days' },
            { icon: 'bi-file-text', label: 'Records', value: 'Property Info' },
            { icon: 'bi-geo-alt', label: 'Location', value: 'Ground Floor' },
            { icon: 'bi-calendar-check', label: 'Appointment', value: 'Walk-in' },
        ],
        processSteps: [
            { title: 'Identify Transaction', description: 'Determine if you need transfer, update, or new declaration.' },
            { title: 'Submit Documents', description: 'Submit deed of sale, title, or other supporting documents.' },
            { title: 'Pay Fees', description: 'Pay transfer tax and processing fees.' },
            { title: 'Wait for Processing', description: 'Allow 1-5 days for assessment and approval.' },
            { title: 'Claim Declaration', description: 'Return to claim new tax declaration.', isFinal: true },
        ],
        requirements: [
            { title: 'For Transfer', icon: 'bi-arrow-left-right', items: ['Deed of Absolute Sale', 'Transfer Certificate of Title', 'Tax Clearance', 'Previous Tax Declaration', 'Valid IDs'] },
        ],
        faqs: [
            { question: 'How long is a tax declaration valid?', answer: 'Until the property is transferred or there are changes requiring reassessment.' },
        ],
        office: { name: 'City Assessor\'s Office', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'City Treasurer', link: '/service-details/municipal-treasurer' },
            { title: 'Property Declaration', link: '/service-details/property-declaration' },
        ],
    },
    {
        id: 'property-declaration',
        title: 'Property Declaration',
        fullTitle: 'Tax Declaration & Property Records',
        category: 'Taxation',
        categoryLink: '/services/tax-payments',
        badgeText: 'Taxation',
        badgeIcon: 'bi-file-text',
        description: 'Transfer or update of property tax declaration',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: '1-3 Days' },
            { icon: 'bi-cash', label: 'Fee', value: 'See Citizen\'s Charter' },
            { icon: 'bi-geo-alt', label: 'Location', value: 'Assessor\'s Office' },
            { icon: 'bi-calendar-check', label: 'Appointment', value: 'Walk-in' },
        ],
        processSteps: [
            { title: 'Gather Documents', description: 'Prepare deed of sale, title, and previous tax declaration.' },
            { title: 'Submit to Assessor', description: 'Submit documents at the City Assessor\'s Office.' },
            { title: 'Pay Transfer Tax', description: 'Pay at Treasurer\'s Office.' },
            { title: 'Claim New Declaration', description: 'Return to claim updated tax declaration.', isFinal: true },
        ],
        requirements: [
            { title: 'Required Documents', icon: 'bi-file-text', items: ['Notarized Deed of Sale', 'Transfer Certificate of Title', 'Tax Clearance', 'Valid IDs of buyer and seller'] },
        ],
        faqs: [
            { question: 'What is the transfer tax rate?', answer: 'Usually 0.5% to 0.75% of the selling price or zonal value, whichever is higher.' },
        ],
        office: { name: 'City Assessor\'s Office', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'City Assessor', link: '/service-details/municipal-assessor' },
            { title: 'City Treasurer', link: '/service-details/municipal-treasurer' },
        ],
    },
    {
        id: 'tricycle-franchising',
        title: 'Tricycle Franchising',
        fullTitle: 'Tricycle Franchise Application',
        category: 'Business',
        categoryLink: '/services/business',
        badgeText: 'Business',
        badgeIcon: 'bi-bicycle',
        description: 'Application for tricycle-for-hire franchise',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: '3-5 Days' },
            { icon: 'bi-cash', label: 'Fee', value: 'See Citizen\'s Charter' },
            { icon: 'bi-person-check', label: 'Who Can Apply', value: 'Owner/Operator' },
            { icon: 'bi-calendar-check', label: 'Appointment', value: 'Walk-in' },
        ],
        processSteps: [
            { title: 'Prepare Requirements', description: 'Gather vehicle registration, driver\'s license, and barangay clearance.' },
            { title: 'Submit Application', description: 'File application at the City Traffic Office.' },
            { title: 'Vehicle Inspection', description: 'Have your tricycle inspected for safety compliance.' },
            { title: 'Pay Fees', description: 'Pay franchise fee at Treasurer\'s Office.' },
            { title: 'Claim Franchise', description: 'Return to claim franchise certificate.', isFinal: true },
        ],
        requirements: [
            { title: 'Required Documents', icon: 'bi-file-text', items: ['OR/CR of tricycle motorcycle', 'Valid driver\'s license', 'Barangay clearance', 'Police clearance', 'NBI clearance', '2x2 ID pictures'] },
        ],
        faqs: [
            { question: 'How long is the franchise valid?', answer: 'Usually 3 years, subject to annual renewal of registration.' },
        ],
        office: { name: 'City Traffic Office', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Business Permits', link: '/service-details/business-permits-licensing' },
        ],
    },
    {
        id: 'mswdo-services',
        title: 'CSWDO Services',
        fullTitle: 'City Social Welfare & Development Office',
        category: 'Social Services',
        categoryLink: '/services/social-services',
        badgeText: 'Social Services',
        badgeIcon: 'bi-people',
        description: 'Social welfare programs, IDs, and financial assistance',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: 'Varies' },
            { icon: 'bi-cash', label: 'Fee', value: 'See Citizen\'s Charter' },
            { icon: 'bi-telephone', label: 'Hotline', value: '(02) 8646-0462' },
            { icon: 'bi-calendar-check', label: 'Appointment', value: 'Walk-in' },
        ],
        processSteps: [
            { title: 'Identify Program', description: 'Determine which social welfare program you need.' },
            { title: 'Prepare Documents', description: 'Gather required documents for the specific program.' },
            { title: 'Visit CSWDO', description: 'Go to CSWDO office at the City Hall.' },
            { title: 'Submit Application', description: 'Submit application and documents for assessment.' },
            { title: 'Receive Assistance', description: 'If approved, receive the corresponding benefit or service.', isFinal: true },
        ],
        requirements: [
            { title: 'For Senior Citizen ID', icon: 'bi-person-vcard', items: ['Proof of age (birth certificate or valid ID)', 'Barangay certification', '1x1 ID picture'] },
            { title: 'For PWD ID', icon: 'bi-universal-access', items: ['Medical certificate of disability', 'Barangay certification', '1x1 ID picture'] },
            { title: 'For Financial Assistance', icon: 'bi-wallet2', items: ['Barangay certification of indigency', 'Valid ID', 'Case study/assessment by CSWDO'] },
        ],
        faqs: [
            { question: 'What assistance programs are available?', answer: 'Senior Citizen ID, PWD ID, Solo Parent ID, financial assistance, burial assistance, medical assistance, educational assistance, and various social welfare programs.' },
            { question: 'Who can apply for financial assistance?', answer: 'Indigent families and individuals in crisis situations.' },
        ],
        office: { name: 'CSWDO', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Senior Citizen Services', link: '/services/social-services' },
            { title: 'PWD Services', link: '/services/social-services' },
        ],
    },
    {
        id: 'mswdo',
        title: 'CSWDO',
        fullTitle: 'City Social Welfare & Development Office',
        category: 'Social Services',
        categoryLink: '/services/social-services',
        badgeText: 'Office',
        badgeIcon: 'bi-building',
        description: 'Social welfare programs and community development',
        quickStats: [
            { icon: 'bi-clock', label: 'Office Hours', value: 'Mon-Fri 8AM-5PM' },
            { icon: 'bi-telephone', label: 'Hotline', value: '(02) 8646-0462' },
            { icon: 'bi-geo-alt', label: 'Location', value: 'Ground Floor' },
            { icon: 'bi-cash', label: 'Services', value: 'Free' },
        ],
        processSteps: [
            { title: 'Visit Office', description: 'Go to CSWDO at City Hall ground floor.' },
            { title: 'State Your Concern', description: 'Inform staff of the assistance or service you need.' },
            { title: 'Assessment', description: 'CSWDO staff will assess your situation.' },
            { title: 'Receive Assistance', description: 'Get appropriate assistance based on assessment.', isFinal: true },
        ],
        requirements: [
            { title: 'General Requirements', icon: 'bi-file-text', items: ['Valid ID', 'Barangay certification', 'Supporting documents based on program'] },
        ],
        faqs: [
            { question: 'What are the office hours?', answer: 'Monday to Friday, 8:00 AM to 5:00 PM.' },
        ],
        office: { name: 'CSWDO', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'CSWDO Services', link: '/service-details/mswdo-services' },
        ],
    },
    {
        id: 'municipal-agriculture',
        title: 'City Agriculture Office',
        fullTitle: 'City Agriculture Office (MAGRO)',
        category: 'Agriculture',
        categoryLink: '/services/agriculture',
        badgeText: 'Agriculture',
        badgeIcon: 'bi-tree',
        description: 'Agricultural programs, farmer registration, and assistance',
        quickStats: [
            { icon: 'bi-clock', label: 'Office Hours', value: 'Mon-Fri 8AM-5PM' },
            { icon: 'bi-telephone', label: 'Contact', value: '(02) 8646-0462' },
            { icon: 'bi-geo-alt', label: 'Location', value: 'City Hall' },
            { icon: 'bi-cash', label: 'Programs', value: 'Free/Subsidized' },
        ],
        processSteps: [
            { title: 'Visit MAGRO', description: 'Go to City Agriculture Office at City Hall.' },
            { title: 'Farmer Registration', description: 'Register under RSBSA if not yet registered.' },
            { title: 'Identify Program', description: 'Inquire about available programs and assistance.' },
            { title: 'Submit Requirements', description: 'Submit documents for the program you are applying for.' },
            { title: 'Receive Assistance', description: 'Get subsidized inputs, training, or other assistance.', isFinal: true },
        ],
        requirements: [
            { title: 'For RSBSA Registration', icon: 'bi-card-list', items: ['Valid ID', 'Barangay certification of farmer status', 'Proof of land ownership or tenant agreement', '1x1 ID picture'] },
        ],
        faqs: [
            { question: 'What is RSBSA?', answer: 'Registry System for Basic Sectors in Agriculture - a prerequisite for accessing government agricultural programs.' },
            { question: 'What assistance is available?', answer: 'Fertilizer subsidy, seeds distribution, livestock dispersal, crop insurance, and technical training.' },
        ],
        office: { name: 'City Agriculture Office', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Fertilizer Assistance', link: '/services/agriculture' },
            { title: 'Crop Insurance', link: '/services/agriculture' },
        ],
    },
    {
        id: 'municipal-engineering',
        title: 'City Engineering Office',
        fullTitle: 'City Engineering Office',
        category: 'Infrastructure',
        categoryLink: '/services/infrastructure',
        badgeText: 'Infrastructure',
        badgeIcon: 'bi-building-gear',
        description: 'Building permits, construction, and infrastructure projects',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: '5-10 Days' },
            { icon: 'bi-cash', label: 'Fee', value: 'See Citizen\'s Charter' },
            { icon: 'bi-geo-alt', label: 'Location', value: 'City Hall' },
            { icon: 'bi-calendar-check', label: 'Appointment', value: 'Walk-in' },
        ],
        processSteps: [
            { title: 'Secure Zoning Clearance', description: 'Get zoning clearance from Planning Office.' },
            { title: 'Prepare Plans', description: 'Prepare building plans signed by licensed engineer/architect.' },
            { title: 'Submit Application', description: 'File building permit application with requirements.' },
            { title: 'Site Inspection', description: 'City engineer conducts site inspection.' },
            { title: 'Pay Fees', description: 'Pay permit fees at Treasurer\'s Office.' },
            { title: 'Claim Permit', description: 'Return to Engineering to claim building permit.', isFinal: true },
        ],
        requirements: [
            { title: 'Building Permit', icon: 'bi-building', items: ['Zoning clearance', 'Building plans (5 sets) signed by licensed professional', 'Land title or deed of sale', 'Barangay clearance', 'Fire safety evaluation clearance', 'Structural analysis (for 2+ storeys)'] },
        ],
        faqs: [
            { question: 'How long is a building permit valid?', answer: 'Usually 1 year, extendable upon request.' },
            { question: 'Do I need a permit for renovations?', answer: 'Yes, any structural modification requires a building permit.' },
        ],
        office: { name: 'City Engineering Office', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'City Planning', link: '/service-details/municipal-planning' },
            { title: 'Fire Safety Certificate', link: '/services/infrastructure' },
        ],
    },
    {
        id: 'municipal-planning',
        title: 'City Planning & Development',
        fullTitle: 'City Planning & Development Office',
        category: 'Infrastructure',
        categoryLink: '/services/infrastructure',
        badgeText: 'Infrastructure',
        badgeIcon: 'bi-clipboard-data',
        description: 'Zoning, land use, and development planning',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: '3-5 Days' },
            { icon: 'bi-cash', label: 'Fee', value: 'See Citizen\'s Charter' },
            { icon: 'bi-geo-alt', label: 'Location', value: 'City Hall' },
            { icon: 'bi-calendar-check', label: 'Appointment', value: 'Walk-in' },
        ],
        processSteps: [
            { title: 'Submit Request', description: 'File zoning clearance request with location details.' },
            { title: 'Document Review', description: 'Planning office reviews land use compatibility.' },
            { title: 'Site Verification', description: 'Staff may conduct site visit if needed.' },
            { title: 'Pay Fees', description: 'Pay at Treasurer\'s Office.' },
            { title: 'Claim Clearance', description: 'Return to claim zoning clearance.', isFinal: true },
        ],
        requirements: [
            { title: 'Zoning Clearance', icon: 'bi-map', items: ['Tax declaration of property', 'Lot plan or sketch of location', 'Valid ID of applicant', 'Purpose of application'] },
        ],
        faqs: [
            { question: 'What is zoning clearance?', answer: 'A document certifying that your proposed use of the property is compatible with the zonal classification.' },
        ],
        office: { name: 'City Planning & Development Office', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'City Engineering', link: '/service-details/municipal-engineering' },
        ],
    },
    {
        id: 'municipal-budget',
        title: 'City Budget Office',
        fullTitle: 'City Budget Office',
        category: 'Budget',
        categoryLink: '/budget',
        badgeText: 'Budget',
        badgeIcon: 'bi-wallet2',
        description: 'Budget preparation, appropriation, and financial management',
        quickStats: [
            { icon: 'bi-clock', label: 'Office Hours', value: 'Mon-Fri 8AM-5PM' },
            { icon: 'bi-telephone', label: 'Contact', value: '(02) 8646-0462' },
            { icon: 'bi-geo-alt', label: 'Location', value: 'City Hall' },
            { icon: 'bi-file-text', label: 'Reports', value: 'Public Access' },
        ],
        processSteps: [
            { title: 'Public Inquiry', description: 'For budget-related inquiries, visit the Budget Office.' },
            { title: 'Submit Request', description: 'Submit written request for specific budget information.' },
            { title: 'Processing', description: 'Office processes request and prepares information.' },
            { title: 'Receive Information', description: 'Receive requested budget documents.', isFinal: true },
        ],
        requirements: [
            { title: 'For Information Request', icon: 'bi-info-circle', items: ['Written request letter', 'Valid ID', 'Purpose of request'] },
        ],
        faqs: [
            { question: 'Is budget information available to the public?', answer: 'Yes, city budget documents are public records accessible under the Freedom of Information.' },
        ],
        office: { name: 'City Budget Office', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'City Accounting', link: '/service-details/municipal-accounting' },
            { title: 'Budget Transparency', link: '/budget' },
        ],
    },
    {
        id: 'municipal-accounting',
        title: 'City Accounting Office',
        fullTitle: 'City Accounting Office',
        category: 'Budget',
        categoryLink: '/budget',
        badgeText: 'Budget',
        badgeIcon: 'bi-calculator',
        description: 'Financial transactions, payroll, and accounting records',
        quickStats: [
            { icon: 'bi-clock', label: 'Office Hours', value: 'Mon-Fri 8AM-5PM' },
            { icon: 'bi-telephone', label: 'Contact', value: '(02) 8646-0462' },
            { icon: 'bi-geo-alt', label: 'Location', value: 'City Hall' },
            { icon: 'bi-file-text', label: 'Records', value: 'Financial' },
        ],
        processSteps: [
            { title: 'Identify Transaction', description: 'Determine what accounting service you need.' },
            { title: 'Submit Documents', description: 'Submit required documents for processing.' },
            { title: 'Verification', description: 'Accounting staff verifies and processes documents.' },
            { title: 'Completion', description: 'Receive processed documents or certificates.', isFinal: true },
        ],
        requirements: [
            { title: 'General Requirements', icon: 'bi-file-text', items: ['Official request letter', 'Supporting documents', 'Valid ID'] },
        ],
        faqs: [
            { question: 'What services are offered?', answer: 'Financial statement verification, supplier payment processing, payroll services for LGU employees.' },
        ],
        office: { name: 'City Accounting Office', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'City Budget', link: '/service-details/municipal-budget' },
            { title: 'City Treasurer', link: '/service-details/municipal-treasurer' },
        ],
    },
    {
        id: 'human-resource-management',
        title: 'Human Resource Management',
        fullTitle: 'Human Resource Management Office',
        category: 'Certificates',
        categoryLink: '/services/certificates',
        badgeText: 'HR',
        badgeIcon: 'bi-people',
        description: 'Service records, employment certificates, and HR services for LGU employees',
        quickStats: [
            { icon: 'bi-clock', label: 'Processing', value: '1-3 Days' },
            { icon: 'bi-cash', label: 'Fee', value: 'See Citizen\'s Charter' },
            { icon: 'bi-person-check', label: 'For', value: 'LGU Employees' },
            { icon: 'bi-calendar-check', label: 'Appointment', value: 'Walk-in' },
        ],
        processSteps: [
            { title: 'Submit Request', description: 'File request for the service record or certificate you need.' },
            { title: 'Verification', description: 'HRMO verifies employment records.' },
            { title: 'Processing', description: 'Staff prepares the requested document.' },
            { title: 'Claim Document', description: 'Return to claim service record or certificate.', isFinal: true },
        ],
        requirements: [
            { title: 'For Service Record', icon: 'bi-file-text', items: ['Request form', 'Valid ID', 'Previous service record (if available)'] },
        ],
        faqs: [
            { question: 'Who can request service records?', answer: 'Current and former LGU employees for their own records.' },
        ],
        office: { name: 'HRMO', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Employment Certification', link: '/services/certificates' },
        ],
    },
    {
        id: 'municipal-general-services',
        title: 'City General Services',
        fullTitle: 'City General Services Office',
        category: 'Infrastructure',
        categoryLink: '/services/infrastructure',
        badgeText: 'Services',
        badgeIcon: 'bi-tools',
        description: 'Equipment rental, vehicle use, and general services',
        quickStats: [
            { icon: 'bi-clock', label: 'Office Hours', value: 'Mon-Fri 8AM-5PM' },
            { icon: 'bi-telephone', label: 'Contact', value: '(02) 8646-0462' },
            { icon: 'bi-geo-alt', label: 'Location', value: 'City Hall' },
            { icon: 'bi-cash', label: 'Rental', value: 'Varies' },
        ],
        processSteps: [
            { title: 'Submit Request', description: 'File equipment or vehicle use request.' },
            { title: 'Approval', description: 'Wait for approval from GSO.' },
            { title: 'Pay Fees', description: 'Pay rental fees if applicable.' },
            { title: 'Use Equipment', description: 'Use equipment/vehicle as scheduled.', isFinal: true },
        ],
        requirements: [
            { title: 'Equipment Request', icon: 'bi-file-text', items: ['Request letter', 'Purpose of use', 'Valid ID', 'Payment (if applicable)'] },
        ],
        faqs: [
            { question: 'What equipment is available?', answer: 'Heavy equipment, service vehicles, and other city assets for public use.' },
        ],
        office: { name: 'General Services Office', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'Infrastructure', link: '/services/infrastructure' },
        ],
    },
    {
        id: 'general-services',
        title: 'General Services',
        fullTitle: 'General City Services',
        category: 'Services',
        categoryLink: '/services',
        badgeText: 'Services',
        badgeIcon: 'bi-grid',
        description: 'General public services and information',
        quickStats: [
            { icon: 'bi-clock', label: 'Office Hours', value: 'Mon-Fri 8AM-5PM' },
            { icon: 'bi-telephone', label: 'Contact', value: '(02) 8646-0462' },
            { icon: 'bi-geo-alt', label: 'Location', value: 'City Hall' },
            { icon: 'bi-info-circle', label: 'Info Desk', value: 'Ground Floor' },
        ],
        processSteps: [
            { title: 'Visit Information Desk', description: 'Go to the ground floor information desk.' },
            { title: 'State Your Concern', description: 'Tell the staff what service you need.' },
            { title: 'Get Directions', description: 'Staff will direct you to the appropriate office.', isFinal: true },
        ],
        requirements: [
            { title: 'General Visit', icon: 'bi-person', items: ['Valid ID for most transactions'] },
        ],
        faqs: [
            { question: 'Where can I get information about services?', answer: 'Visit the Information Desk at the ground floor of City Hall.' },
        ],
        office: { name: 'Information Desk', location: 'Marikina City Hall', phone: '(02) 8646-0462', hours: 'Mon-Fri: 8AM - 5PM' },
        relatedServices: [
            { title: 'All Services', link: '/services' },
        ],
    },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
    return serviceDetailsContent.find(s => s.id === slug);
}
