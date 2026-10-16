import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import './patient-reviews.css';

// Transcribed from the supplied Google review screenshots; not a live Google feed.
const reviews = [
  { name: 'Prashant Ghogare', text: 'I recently had my dental implant surgery done by Dr. Dhiraj, and I had an excellent experience. Dr. Dhiraj is very professional, knowledgeable, and skilled. He explained the entire procedure clearly, answered all my questions patiently, and made me feel comfortable throughout the treatment. The implant surgery was performed smoothly, with great care and attention to detail. I’m very satisfied with the treatment and the overall experience. I would highly recommend Dr. Dhiraj to anyone looking for a skilled and trustworthy dentist for implant treatment.' },
  { name: 'Sakshi Ladda', text: 'I’ve always been a bit anxious about going to the dentist, but Dr. Dhiraj Zanwar completely put me at ease. He was incredibly gentle, reassuring, and checked in on me throughout the entire root canal procedure. The level of care and empathy here is unmatched. If you’re looking for a dentist who truly cares about your comfort, look no further!' },
  { name: 'Saurabh Pathade', text: 'Best Dental treatment I ever had, Doctor is very polite and well skilled, thank you Dr Dhiraj sir 🙏🏻' },
  { name: 'ANKITA BANGAD', text: 'Great experience for my dental treatment. Skilled dr with a gentle hand.' },
  { name: 'Shankar Yevale', text: 'Excellent dental clinic with professional and friendly staff. The dentist explained everything clearly and provided excellent treatment. The clinic is clean, well-maintained, and the overall experience was very comfortable. Highly recommended!' },
  { name: 'Lalit Paliwal', text: 'Really impressed with the care and professionalism at this clinic. My experience for tooth extraction was completely painless and comfortable from start to finish, and the doctor was very patient, caring, and thorough. The entire team is welcoming and makes you feel at ease. Definitely recommend this clinic for excellent dental treatment and oral surgical care' },
  { name: 'Sanket Sangewar', text: 'Great experience at Dr. Dhiraj’s dental clinic. The doctor was friendly, professional, and explained everything clearly. The clinic was clean and the staff was helpful. The procedures went out smoothly. Do visit.' },
  { name: 'Amruta Zarkar', text: 'Highly recommended' },
  { name: 'DINESH BHAWARE', text: 'I had a great experience at Dr. Dhiraj’s dental clinic. He is a highly professional, friendly, and knowledgeable dentist who genuinely cares about his patients. He takes the time to explain the treatment clearly and makes sure you feel comfortable throughout the procedure.\n\nThe clinic is clean, well-maintained, and has a very welcoming atmosphere. I especially appreciate Dr. Dhiraj’s gentle approach and attention to detail.\n\nI would definitely recommend Dr. Dhiraj to anyone looking for a trustworthy and skilled dentist. Excellent service and a great overall experience!' },
];

function ReviewCard({ review, index, duplicate = false }) {
  const [expanded, setExpanded] = useState(false);
  const long = review.text.length > 220;
  const initials = review.name.split(' ').map(word => word[0]).slice(0, 2).join('');
  return <article className="patientReviewCard" aria-label={`Review by ${review.name}`}>
    <div className="patientReviewAuthor"><span className={`patientReviewAvatar avatarTone${index % 3}`} aria-hidden="true">{initials}</span><div><h3>{review.name}</h3><span className="patientReviewSource">Google review</span></div></div>
    <div className="patientReviewStars" role="img" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} aria-hidden="true" />)}</div>
    <blockquote id={`review-text-${index}`} className={expanded ? 'patientReviewText expanded' : 'patientReviewText'}><p>{review.text}</p></blockquote>
    {long && <button className="reviewReadMore" tabIndex={duplicate ? -1 : undefined} type="button" aria-expanded={expanded} aria-controls={`review-text-${index}`} onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Read full review'}</button>}
  </article>;
}

export default function PatientReviews() {
  const track = useRef(null);
  useEffect(() => {
    const el = track.current;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let frame;
    let lastTime;
    let resumeAt = 0;
    let position = el.scrollLeft;
    const delay = () => { resumeAt = performance.now() + 5000; };
    const animate = time => {
      const elapsed = lastTime ? Math.min(time - lastTime, 50) : 0;
      lastTime = time;
      const paused = preference.matches || el.matches(':hover') || el.contains(document.activeElement) || el.querySelector('[aria-expanded="true"]') || time < resumeAt;
      if (!paused) {
        const first = el.children[0];
        const duplicate = el.children[reviews.length];
        const loopWidth = duplicate.offsetLeft - first.offsetLeft;
        position = (position + elapsed * 0.032) % loopWidth;
        el.scrollLeft = position;
      } else position = el.scrollLeft;
      frame = requestAnimationFrame(animate);
    };
    el.addEventListener('touchstart', delay, { passive: true });
    el.addEventListener('touchend', delay, { passive: true });
    el.addEventListener('wheel', delay, { passive: true });
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('touchstart', delay);
      el.removeEventListener('touchend', delay);
      el.removeEventListener('wheel', delay);
    };
  }, []);
  return <section id="patient-reviews" className="patientReviews" aria-labelledby="patient-reviews-heading" aria-roledescription="carousel">
    <div className="patientReviewsHeading"><div><p className="eyebrow">PATIENT EXPERIENCES</p><h2 id="patient-reviews-heading">Kind words from<br/><em>our patients.</em></h2></div><p>Read what patients have shared about their visits to Shree Sainath Hospital Dental Clinic on Google.</p></div>
    <div className="patientReviewsTrack" id="patient-reviews-track" ref={track} tabIndex={0} aria-label="Patient reviews scroll automatically. Hover or focus to pause; swipe to browse.">
      {reviews.map((review, index) => <ReviewCard key={review.name} review={review} index={index} />)}
      {reviews.map((review, index) => <div className="patientReviewDuplicate" aria-hidden="true" key={'repeat-' + review.name}><ReviewCard review={review} index={index + reviews.length} duplicate /></div>)}
    </div>
  
  </section>;
}
