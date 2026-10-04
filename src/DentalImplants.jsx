import React from 'react';
import { CircleCheck } from 'lucide-react';

const benefits = [
  'Look, feel & function like natural teeth',
  'A long-lasting replacement for missing teeth',
  'Improved comfort and confidence',
  'Help preserve bone & facial structure',
];
const parts = [
  ['Crown', 'Custom-made, natural-looking tooth'],
  ['Abutment', 'Connector that holds the crown'],
  ['Implant', 'Titanium post that fuses with bone'],
];

export default function DentalImplants() {
  return <section id="dental-implants" className="implantSection" aria-labelledby="implant-heading">
    <div className="implantCopy">
      <h2 id="implant-heading">Replace Missing Teeth.<br/>Restore Confidence.<br/><span>Transform Lives.</span></h2>
      <p>Explore dental implants in Pune with Dr. Dhiraj Zanwar, BDS and Certified Implantologist. Visit our clinic to discuss options for replacing missing teeth and a treatment plan suited to your needs.</p>
      <ul>{benefits.map(benefit => <li key={benefit}><CircleCheck aria-hidden="true"/><span>{benefit}</span></li>)}</ul>
    </div>
    <figure className="implantDiagram">
      <img src="/images/dental-implant.png" alt="Cutaway illustration showing a crown above an abutment and a titanium implant anchored in the jawbone" width="1306" height="1205" loading="lazy" decoding="async"/>
      <figcaption><dl>{parts.map(([name, description]) => <div key={name}><dt>{name}</dt><dd>{description}</dd></div>)}</dl></figcaption>
    </figure>
  </section>;
}
