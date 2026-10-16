import React from 'react';
import { SiteHeader, SiteFooter } from './SiteLayout.jsx';
import './privacy-policy.css';

export default function PrivacyPolicy() {
  return <main>
    <SiteHeader homePrefix="/" />
    <section className="privacyPolicy" aria-labelledby="privacy-heading">
      <div className="privacyContent">
        <p className="eyebrow">YOUR PRIVACY</p>
        <h1 id="privacy-heading">Privacy Policy</h1>
        <p className="privacyUpdated">Last updated: 16 October 2026</p>
        <p>Shree Sainath Hospital Dental Clinic respects your privacy. This policy explains how information is handled when you visit our website or contact us through its links.</p>
        <h2>Information you share with us</h2>
        <p>This website does not currently have a patient registration or appointment form of its own. If you call or message us, you may choose to share your name, contact details, appointment preferences or information about your dental concerns. We use that information to respond to your enquiry, arrange appointments and communicate about your care. Please avoid sending sensitive medical information through public reviews.</p>
        <h2>Website usage and analytics</h2>
        <p>Our hosting provider may process technical information such as your IP address, browser details and request logs to deliver and protect the website. The website also loads fonts from Google Fonts, which involves requests to Google servers.</p>
        <p>When enabled, Google Analytics helps us understand website visits and clicks on Call, WhatsApp and Book Appointment links. It may use cookies and process device, browser and usage information. Our custom click events do not include patient names, messages or contact details. Our configured page-view URLs exclude query strings and fragments.</p>
        <p>You can manage cookies through your browser settings. Blocking cookies may affect analytics and third-party services. Learn more about <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s privacy practices</a> or use the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.</p>
        <h2>Booking, WhatsApp and Google Maps</h2>
        <p>Appointment links open Doctecq Clinic, messaging links open WhatsApp, and directions and review links open Google Maps. Information you provide on those services is handled under their own privacy policies. These services may process information outside India. Please review their policies before sharing personal or health information.</p>
        <h2>Patient reviews</h2>
        <p>We display selected publicly shared Google reviews, including the reviewer’s displayed name, rating and review text. These are saved copies and may not reflect later changes on Google. To ask us to correct or remove a review displayed on this website, please contact the clinic.</p>
        <h2>Access, retention and security</h2>
        <p>Information shared with the clinic is used for enquiries, appointments and care, and may be accessed by staff and service providers who need it for those purposes. We do not sell your personal information. We aim to retain it only as needed for those purposes and applicable record-keeping requirements. No internet service can guarantee complete security.</p>
        <h2>Your questions and requests</h2>
        <p>You can contact us with privacy questions or requests to access, correct or delete information you have shared with the clinic. We may need to verify your identity and retain information needed for clinical records or other applicable obligations.</p>
        <p><strong>Shree Sainath Hospital Dental Clinic</strong><br/>Trimurti Chowk, near PICT College, Mohan Nagar, Dhankawadi, Pune, Maharashtra 411043<br/>Phone: <a href="tel:+917841882371">+91 78418 82371</a></p>
        <h2>Changes to this policy</h2>
        <p>We may update this policy as the website or our services change. The date above shows when this page was last updated.</p>
        <a className="privacyBack" href="/">Back to home</a>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
