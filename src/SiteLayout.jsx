import React, { useState } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

const navigation=[{"id":"about-us","label":"About Us"},{"id":"dental-services","label":"Dental Services"},{"id":"dental-technology","label":"Technology"},{"id":"why-choose-us","label":"Why Choose Us"},{"id":"contact-us","label":"Contact Us"}];

export function SiteHeader({ homePrefix = '' }) {
  const [open, setOpen] = useState(false);
  return <header><a className="brand" href={homePrefix+'#shree-sainath-hospital-dental-clinic'}><span className="clinicLogo"><img src="/images/logo-white-transparent.png" alt="Dr. Zanwar&#39;s clinic logo: Say it with smile" width="1774" height="887" decoding="async"/></span><span><b>SHREE SAINATH</b><small>HOSPITAL DENTAL CLINIC</small></span></a><nav>{navigation.map(({id,label})=><a key={id} href={homePrefix+'#'+id}>{label}</a>)}</nav><a className="call" href="tel:+917841882371"><Phone/>Call Us</a><button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>{open&&<div id="mobile-navigation" className="mobile">{navigation.map(({id,label})=><a key={id} onClick={()=>setOpen(false)} href={homePrefix+'#'+id}>{label}</a>)}<a href="tel:+917841882371">Call Us</a></div>}</header>;
}

export function AppointmentSection() {
  return <section className="new"><div><p className="eyebrow">NEW PATIENTS WELCOME</p><h2>Your first visit,<br/>made <em>simple.</em></h2></div><p>Looking for a family dentist in Pune accepting new patients? We welcome adults and children, explain your treatment plan, and help you feel comfortable at your first dental appointment.</p><a className="btn light" href=" https://doctecqclinic.com/patient_register/patientlogin.php?doc_id=323">Book Appointment <ArrowRight/></a></section>;
}

export function SiteFooter() {
  return <footer className="foot"><div className="brand"><span className="clinicLogo"><img src="/images/logo-white-transparent.png" alt="Dr. Zanwar&#39;s clinic logo: Say it with smile" width="1774" height="887" decoding="async"/></span><span><b>SHREE SAINATH</b><small>HOSPITAL DENTAL CLINIC</small></span></div><p>Gentle, modern dentistry in Dhankawadi, Pune.</p><p>© 2026 Shree Sainath Hospital Dental Clinic. All rights reserved.</p></footer>;
}
