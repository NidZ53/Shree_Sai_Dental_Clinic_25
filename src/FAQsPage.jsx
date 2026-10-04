import React from 'react';
import PatientFAQs from './PatientFAQs.jsx';
import { SiteHeader, SiteFooter, AppointmentSection } from './SiteLayout.jsx';

export default function FAQsPage() {
  return <main>
    <SiteHeader homePrefix="/" />
    <PatientFAQs fullPage />
    <AppointmentSection />
    <SiteFooter />
  </main>;
}
