import { NavItem, Hotline } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/', i18nKey: 'nav-home' },
  {
    label: 'Services',
    href: '/services',
    i18nKey: 'nav-services',
    children: [
      { label: 'Certificates', href: '/services/certificates', i18nKey: 'service-certificates' },
      { label: 'Business', href: '/services/business', i18nKey: 'service-business' },
      { label: 'Tax Payments', href: '/services/tax-payments', i18nKey: 'service-tax' },
      { label: 'Social Services', href: '/services/social-services', i18nKey: 'service-social' },
      { label: 'Health', href: '/services/health', i18nKey: 'service-health' },
      { label: 'Agriculture', href: '/services/agriculture', i18nKey: 'cat-agriculture' },
      { label: 'Infrastructure', href: '/services/infrastructure', i18nKey: 'cat-infrastructure' },
      { label: 'Education', href: '/services/education', i18nKey: 'cat-education' },
      { label: 'Public Safety', href: '/services/public-safety', i18nKey: 'cat-safety' },
      { label: 'Environment', href: '/services/environment', i18nKey: 'cat-environment' },
    ],
  },
  { label: 'Government', href: '/government', i18nKey: 'nav-government' },
  { label: 'Statistics', href: '/statistics', i18nKey: 'nav-statistics' },
  {
    label: 'Legislative',
    href: '/legislative',
    i18nKey: 'nav-legislative',
    children: [
      { label: 'Ordinance Framework', href: '/legislative/ordinance-framework', i18nKey: 'legislative-ordinances' },
      { label: 'Resolution Framework', href: '/legislative/resolution-framework', i18nKey: 'legislative-resolutions' },
    ],
  },
  { label: 'Transparency', href: '/budget', i18nKey: 'nav-transparency' },
  { label: 'Contact', href: '/contact', i18nKey: 'nav-contact' },
];

export const hotlines: Hotline[] = [
  { name: 'Rescue 161', number: '161', icon: 'bi-exclamation-triangle-fill' },
  { name: 'Rescue (Globe)', number: '0917 584 2168', icon: 'bi-phone-fill' },
  { name: 'Rescue (Smart)', number: '0928 559 3341', icon: 'bi-phone-fill' },
  { name: 'City Hall', number: '(02) 8646-0462', icon: 'bi-building' },
];
