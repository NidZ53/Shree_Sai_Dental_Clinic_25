import React, { useState } from 'react';
import { BadgeCheck, HeartHandshake, MessageCircle, ScanLine } from 'lucide-react';

const pages = [
  [
    { Icon: MessageCircle, title: 'Personalized Experience', text: 'Every smile is different. We take time to understand your concerns, answer your questions, and explain your treatment options in plain language.' },
    { Icon: HeartHandshake, title: 'Comfort Comes First', text: 'A calm chairside manner and a gentle approach help you feel at ease. We guide you through each step, with time to ask questions along the way.' },
  ],
  [
    { Icon: BadgeCheck, title: 'Qualified, Attentive Care', text: 'Dr. Dhiraj Zanwar, BDS and Certified Implantologist, brings a detail-focused approach to dental care for adults and children.' },
    { Icon: ScanLine, title: 'Modern Dental Technology', text: 'Digital X-rays, intraoral imaging, and modern treatment tools support precise diagnosis and help you understand the care your smile needs.' },
  ],
];

export default function WhyChooseUs() {
  const [page, setPage] = useState(0);
  const move = direction => setPage(current => (current + direction + pages.length) % pages.length);

  return <section id="why-choose-us" className="whyChooseUs" aria-labelledby="why-choose-heading" aria-roledescription="carousel">
    <div className="whyChooseIntro">
      <div>
        <p className="eyebrow">THE SHREE SAINATH APPROACH</p>
        <h2 id="why-choose-heading">Why Patients<br/>Choose <em>Us.</em></h2>
      </div>
      <div className="whyChooseControls">
        <div className="whyChooseArrows">
          <button type="button" onClick={() => move(-1)} aria-label="Previous reasons to choose us" aria-controls="why-choose-cards"><span aria-hidden="true">◀</span></button>
          <button type="button" onClick={() => move(1)} aria-label="Next reasons to choose us" aria-controls="why-choose-cards"><span aria-hidden="true">▶</span></button>
        </div>
        <span className="whyChooseCounter" role="status">{page + 1} / {pages.length}</span>
      </div>
    </div>
    <div id="why-choose-cards" className="whyChooseCards" aria-live="polite" aria-atomic="true">
      {pages[page].map(({ Icon, title, text }) => <article className="whyChooseCard" key={title}>
        <Icon className="whyChooseIcon" strokeWidth={1.25} aria-hidden="true"/>
        <div><h3>{title}</h3><p>{text}</p></div>
      </article>)}
    </div>
  </section>;
}
