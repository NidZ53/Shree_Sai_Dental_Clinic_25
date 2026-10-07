import { SiteHeader, SiteFooter, AppointmentSection } from './SiteLayout.jsx';
import PatientFAQs from './PatientFAQs.jsx';
import DentalImplants from './DentalImplants.jsx';
import doctorPhoto from './assets/dr_dhiraj_zanwar.jpg';
import WhyChooseUs from './WhyChooseUs.jsx';
import CountUp from './CountUp.jsx';
import React,{useEffect} from 'react';import{Phone,ArrowRight,MapPin,Clock,ShieldCheck,ScanLine,Glasses,Camera,Activity,Scan}from'lucide-react';
export const services=[
  [
    "Preventive Care",
    [
      "Routine dental exams and checkups",
      "Professional teeth cleaning",
      "Dental sealants and fluoride treatments"
    ],
    "01",
    "/images/tooth_cleaning.png"
  ],
  [
    "Restorative Dentistry",
    [
      "Tooth-colored dental fillings (composite fillings)",
      "Dental crowns and bridges",
      "Root canal treatment (root canal therapy)"
    ],
    "02",
    "/images/root_canal.png"
  ],
  [
    "Cosmetic Dentistry",
    [
      "Professional teeth whitening",
      "Porcelain veneers",
      "Dental bonding and smile makeovers"
    ],
    "03",
    "/images/cosmetic_surgery.png"
  ],
  [
    "Advanced & Surgical Procedures",
    [
      "Dental implants placement and restoration",
      "Tooth extraction and wisdom teeth removal",
      "Periodontal (gum disease) treatments"
    ],
    "04",
    "/images/dental_implants.png"
  ],
  [
    "Specialized Care",
    [
      "Orthodontics (braces or clear aligners like Invisalign)",
      "Emergency dental care for severe pain or trauma"
    ],
    "05",
    "/images/specialized_care.png"
  ],
  [
    "Pediatric Dental Care",
    [
      "Dental checkups for children",
      "Preventive care for growing teeth",
      "Guidance on brushing and oral hygiene"
    ],
    "06",
    "/images/pediatric_Care.png"
  ]
];
const tech=[[ScanLine,'Digital X-Rays (RVG)','Instant, low-radiation imaging for precise diagnosis.'],[Camera,'Intraoral Camera','See exactly what we see, right on a chairside screen.'],[Glasses,'Magnifying Loupes','For precision and accuracy.'],[Activity,'Rotary Endodontics','Precise, efficient root canal treatment in fewer sittings.'],[Scan,'Digital Intraoral Scanner','Replaces messy physical molds with fast, precise 3D digital impressions. Offers high accuracy, patient comfort, time efficiency, better visualization, and an eco-friendly alternative to physical molds.'],[ShieldCheck,'Full Sterilization Protocol','Autoclave sterilization and single-use disposables for every patient.']];
function App(){useEffect(()=>{if(!('IntersectionObserver' in window))return;const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('lit')),{threshold:.35});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));return()=>io.disconnect()},[]);return <main>
<SiteHeader/>
<section id="shree-sainath-hospital-dental-clinic" className="hero"><div className="heroCopy"><p className="eyebrow">AFFORDABLE DENTAL SERVICES IN PUNE</p><h1>Gentle dental care in Pune for your <em>whole family.</em></h1><p className="lead">Shree Sainath Hospital Dental Clinic near Bharti Vidyapeeth Backgate, PICT College and Trimurti Chowk brings together precise diagnosis, modern dental care, and a calm chairside manner so every visit feels easy, not stressful.</p><div className="actions"><a className="btn" href="  https://doctecqclinic.com/patient_register/patientlogin.php?doc_id=323">Book an Appointment <ArrowRight/></a><a className="textLink" href="#dental-services">Explore Services <ArrowRight/></a></div></div><div className="heroArt"><img className="heroTooth" src="/images/hero-tooth-team.png" alt="Illustration of a tooth with a miniature dental team and equipment" width="1231" height="1277" fetchPriority="high" loading="eager" decoding="async"/></div></section>
<section className="stats"><div><CountUp value={2} suffix="+ yrs"/><span>Clinical experience</span></div><div><b>Affordable Family care</b><span>For every stage of your smile</span></div><div><b className="qualifications">BDS <small>Certified Implantologist</small></b><span>Dr. Dhiraj Zanwar</span></div></section>
<section id="about-us" className="doctor"><div className="portrait"><img className="doctorPhoto" src={doctorPhoto} alt="Dr. Dhiraj Zanwar, dentist at Shree Sainath Hospital Dental Clinic" width="960" height="1280" loading="lazy" decoding="async"/></div><div><p className="eyebrow">MEET YOUR DENTIST</p><h2>Dr. Dhiraj Zanwar, <i>BDS</i></h2><div className="doctorStory"><p className="reveal">Dr. Dhiraj Zanwar, BDS and Certified Implantologist, brings more than 2 years of hands-on clinical experience to Dental Clinic in Pune.</p><p className="reveal">He treats patients across Pune with a calm, detail-focused approach and explains every treatment plan in plain language.</p><p className="reveal">Every visit is built around comfort and long-term oral health, so you understand exactly what's being done and why.</p></div><div className="pills"><span>BDS</span><span>Certified Implantologist</span><span>2+ Years Experience</span></div><a className="btn" href=" https://doctecqclinic.com/patient_register/patientlogin.php?doc_id=323">Book a Consultation <ArrowRight/></a></div></section>
<section id="dental-services" className="services"><p className="eyebrow">OUR SERVICES</p><div className="sectionHead"><h2>Care for every stage<br/>of your <em>smile.</em></h2><p>Our dental services in Dhankawadi, Pune include routine dental checkups, teeth cleaning, root canal treatment, cosmetic dentistry, dental implants, braces and clear aligners, and dental care for children.</p></div><div className="serviceGrid">{services.map(([title,items,number,image])=><article key={number}><span>{number}</span><img className="serviceImage" src={image} alt="" width="120" height="100" loading="lazy" decoding="async"/><h3>{title}</h3><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
<DentalImplants/>
<section id="dental-technology" className="technology"><div className="sectionHead"><div><p className="eyebrow">MODERN DENTISTRY</p><h2>Advanced technology,<br/><em>better outcomes.</em></h2></div><p>Modern diagnostic and treatment tools can make dental care more accurate, comfortable, and efficient.</p></div><div className="techGrid">{tech.map(([Icon,t,d],index)=><article key={t} style={{"--art-x":(index%3)*50+"%","--art-y":Math.floor(index/3)*100+"%"}}><div className="techArtwork" aria-hidden="true"/><Icon aria-hidden="true"/><h3>{t === 'Magnifying Loupes' ? <strong>{t}</strong> : t}</h3><p>{d}</p></article>)}</div></section>
<WhyChooseUs/>
<AppointmentSection/>
<PatientFAQs/>
<section id="contact-us" className="contact"><div><p className="eyebrow">VISIT US</p><h2>Care that fits<br/><em>your day.</em></h2><p className="lead">Find our dental clinic in Dhankawadi, Pune, near PICT College, Trimurti Chowk and Bharti Vidyapeeth Backgate. Evening appointments and Sunday clinic hours help you plan your visit.</p></div><div className="contactCard"><div><Clock/><h3>Clinic Hours</h3><p><b>Mon – Sat</b><br/>10:00 AM – 3:00 PM<br/>6:00 PM – 9:00 PM</p><p><b>Sunday</b><br/>10:00 AM – 2:00 PM</p></div><div><MapPin/><h3>Our Location</h3><p>Trimurti Chowk, near PICT College,<br/>Tanaje Nagar, Mohan Nagar, Dhankawadi,<br/>Pune, Maharashtra – 411043</p><a href="https://www.google.com/maps/search/?api=1&query=Shree+Sainath+Hospital+Dental+Clinic+Trimurti+Chowk+Dhankawadi+Pune" target="_blank" rel="noopener noreferrer">Get Directions <ArrowRight/></a></div><div><Phone/><h3>Call Us</h3><a className="phone" href="tel:+917841882371">+91 78418 82371</a><a className="whatsappLink" href="https://wa.me/917841882371" target="_blank" rel="noopener noreferrer">Connect with us on WhatsApp <ArrowRight/></a></div></div></section>
<SiteFooter/></main>}
export default App;
