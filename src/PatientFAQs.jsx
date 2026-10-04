import React from 'react';

const questions = [
  [
    "Where is your dental clinic in Pune?",
    "Shree Sainath Hospital Dental Clinic is at Trimurti Chowk, near PICT College, Tanaje Nagar, Mohan Nagar, Dhankawadi, Pune 411043. Bharti Vidyapeeth Backgate is a nearby landmark."
  ],
  [
    "Is the dental clinic open on Sunday?",
    "Our Sunday clinic hours are 10:00 AM to 2:00 PM. Monday to Saturday, we are open from 10:00 AM to 3:00 PM and 6:00 PM to 9:00 PM. Call to confirm appointment availability before visiting."
  ],
  [
    "Are you accepting new patients and children?",
    "Yes. We welcome new patients and offer family dental care, including dental checkups for children, preventive care for growing teeth, and guidance on brushing and oral hygiene."
  ],
  [
    "How do I book an emergency dental appointment in Pune?",
    "For toothache, a chipped tooth or dental trauma, call +91 78418 82371 to ask about the earliest available appointment during clinic hours. Our services include emergency dental care for severe pain or trauma."
  ],
  [
    "Can I discuss dental anxiety before my appointment?",
    "Yes. Tell us about any concerns when booking. Dr. Dhiraj Zanwar explains treatment plans in plain language, and our team will walk you through your visit so you know what to expect."
  ],
  [
    "Can I book a dental checkup for sensitive teeth, bleeding gums or bad breath?",
    "You can book a dental checkup to discuss these concerns with Dr. Dhiraj Zanwar. The visit is an opportunity to explain your symptoms, ask questions and discuss the next steps after an examination."
  ]
];

const treatmentGroups = [
  {
    id: 'implant-questions',
    title: 'Dental implants',
    questions: [
      ['How can I find out the cost of replacing a missing tooth?', 'Book an implant consultation with Dr. Dhiraj Zanwar, BDS and Certified Implantologist, at Shree Sainath Hospital Dental Clinic in Dhankawadi. Discuss your missing tooth, the proposed restoration and a personalised estimate before deciding on treatment.'],
      ['Can an implant be placed on the day a tooth is removed?', 'Ask Dr. Zanwar whether immediate placement is appropriate for your case. A consultation is needed before confirming the procedure or timing.'],
      ['What should I expect during implant treatment and recovery?', 'At your consultation, ask about anaesthesia, the stages of treatment, aftercare and when you can return to your usual activities. Dr. Zanwar can explain the plan for your case and address any concerns about discomfort.'],
      ['Will I need a bone graft before an implant?', 'An examination and appropriate imaging help assess whether there is enough bone to support an implant. Discuss whether any additional treatment is needed before proceeding.']
    ]
  },
  {
    id: 'smile-questions',
    title: 'Smile makeovers & cosmetic care',
    questions: [
      ['What would a smile makeover at your clinic involve and cost?', 'Our cosmetic services include professional teeth whitening, porcelain veneers and dental bonding. Tell Dr. Zanwar what you would like to change so you can discuss suitable options, the proposed fees and your priorities at a consultation.'],
      ['Can I plan cosmetic dental care before a wedding or event?', 'Share your event date when booking. An early consultation gives you time to discuss options and agree on a realistic schedule with Dr. Zanwar.'],
      ['How do porcelain veneers and composite bonding compare?', 'Porcelain veneers are custom-made shells covering the front of teeth. Composite bonding uses tooth-coloured resin to reshape or repair their appearance. Porcelain is generally more stain-resistant; composite is easier to repair and may need less enamel removal. Your bite, tooth health and goals help determine suitability.'],
      ['How many appointments will my smile makeover need?', 'Your appointment schedule will depend on the treatments selected. Ask for a visit-by-visit plan at your consultation, especially if you are travelling or working toward an event date.']
    ]
  },
  {
    id: 'toothache-questions',
    title: 'Toothache & fillings',
    questions: [
      ['How do I get a quote for a tooth-coloured filling?', 'Our restorative services include composite fillings. Book an examination at our Dhankawadi clinic to discuss the affected tooth, the recommended treatment and its cost.'],
      ['My filling has fallen out. Can I arrange a repair?', 'Call +91 78418 82371 and mention the lost filling and any pain. We can check appointment availability; the tooth needs assessment before the treatment and number of visits can be confirmed.'],
      ['What should I do about severe tooth pain at night?', 'Seek urgent dental care for severe or persistent pain. Call our clinic during opening hours for the earliest available appointment; if care cannot wait, contact an available urgent dental service. If swelling affects your breathing or swallowing, go to the nearest emergency department immediately.']
    ]
  }
];

const faqGroups = [...treatmentGroups, { id: 'visit-questions', title: 'Planning your visit', questions }];

const featuredQuestions = [questions[0], questions[1], treatmentGroups[0].questions[0], treatmentGroups[1].questions[0], questions[3]];

export default function PatientFAQs({ fullPage = false }) {
  const Heading = fullPage ? 'h1' : 'h2';
  return <section id="dental-questions" className="patientFAQs" aria-labelledby="faq-heading">
    <div className="faqContainer">
    <p className="eyebrow">DENTAL FAQs & TREATMENT GUIDE</p>
    <Heading id="faq-heading">Your dental care <em>questions.</em></Heading>
    <p className="faqIntro">Explore treatments and plan your visit to Dr. Dhiraj Zanwar at Shree Sainath Hospital Dental Clinic, Dhankawadi, Pune.</p>
    {fullPage && <nav className="faqTopics" aria-label="FAQ topics">{faqGroups.map(({ id, title }) => <a key={id} href={'#' + id}>{title}</a>)}</nav>}
    <div className="faqList">{fullPage ? faqGroups.map(({ id, title, questions: items }) => <section className="faqGroup" key={id} id={id} aria-labelledby={id + '-heading'}>
      <h3 id={id + '-heading'}>{title}</h3>
      {items.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
    </section>) : featuredQuestions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    {!fullPage && <a className="btn" href="/faqs/">Read more FAQs <span aria-hidden="true">→</span></a>}
    <p className="faqContact"><a href="tel:+917841882371">Call to book your dental visit</a> or <a href={fullPage ? '/#contact-us' : '#contact-us'}>view clinic hours and directions</a>.</p>
    </div>
  </section>;
}
