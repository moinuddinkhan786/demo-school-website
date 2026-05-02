/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import type { FormEvent, ReactNode } from "react";

const imageBase = "https://www.pathwaysnoida.edu.in";

// ---------------- DATA ----------------

const navItems = [
  {
    label: "Know Pathways",
    children: [
      "The School",
      "Vision & Mission",
      "Leadership & Governance",
      "The Campus",
      "Awards & Honours",
      "Affiliations & Accreditations",
      "Our Mascot",
    ],
  },
  {
    label: "Academics",
    children: [
      "Overview",
      "Methodology & Learning Styles",
      "Curriculum",
      "Faculty",
      "Technology",
      "Library",
      "Career Guidance",
      "Learning Support",
      "Results",
    ],
  },
  {
    label: "Beyond Academics",
    children: [
      "Overview",
      "Sports",
      "The Arts",
      "Expeditions & International Exchange",
      "Community Service",
      "Student Council",
    ],
  },
  {
    label: "Admissions",
    children: [
      "Overview",
      "Admissions Journey",
      "Pre-Term & Rolling Admissions",
      "International Families",
      "Fee Schedule",
      "Scholarships",
      "FAQs",
    ],
  },
  {
    label: "Our Community",
    children: [
      "Overview",
      "International Community",
      "Alumni",
      "Parents' Speak",
      "Press",
      "Pathways Privileges",
    ],
  },
  {
    label: "Get in Touch",
    children: [
      "Contact Us",
      "Driving Directions",
      "Admission Enquiry",
      "Careers",
    ],
  },
];

const topTiles = [
  {
    title: "Know Pathways",
    image: `${imageBase}/assets/img/landing-1.jpg`,
    text: "Pathways aims to build and nurture a community of thinking, compassionate global citizens, who are committed to living with responsibility, learning and innovating with enthusiasm, and balancing a strong work ethos with a sense of play.",
  },
  {
    title: "Academics",
    image: `${imageBase}/assets/img/landing-6.jpg`,
    text: "An International Baccalaureate (IB) Continuum School; Pathways School Noida provides a safe, tranquil, and intellectually stimulating environment while catering to the unique learning needs of each student, with ample opportunities for project work and discovery learning.",
  },
  {
    title: "Beyond Academics",
    image: `${imageBase}/assets/img/landing-7.jpg`,
    text: "There are multiple pathways to cultivate the holistic development of students and equip them with essential life skills. Co-curricular activities like Sports, The Arts, Community Service, and Leadership platforms foster critical thinking, self-expression, and cultural appreciation.",
  },
  {
    title: "Admissions",
    image: `${imageBase}/assets/img/landing-2-5.jpg`,
    text: "We invite you to embark on a truly enriching educational journey that will ignite your curiosity and nurture your innate potential. Discover our vibrant learning community that celebrates diversity, and experience first-hand the myriad offerings.",
  },
];

const foundationTabs = [
  {
    key: "philosophy",
    label: "Our Philosophy",
    image: `${imageBase}/discover-lp-new/images/slider-pic1.jpg`,
    content: [
      "Pathways School Noida aims to build and nurture a community of thinking, compassionate world citizens, who are committed to living with responsibility, learning with enthusiasm, and balancing a strong work ethos with a sense of play.",
      "We invite you to embark on a truly enriching educational journey that will ignite your curiosity and nurture your innate potential. Discover our vibrant learning community that celebrates diversity, and experience first-hand the myriad offerings.",
    ],
  },
  {
    key: "curriculum",
    label: "Curriculum",
    image: `${imageBase}/discover-lp-new/images/mid-pic7.jpg`,
    sections: [
      {
        heading: "Early Years (12 months - 6 years)",
        text: "Our Early Years programme, inspired by IB PYP, Reggio Emilia, Playway, and Maria Montessori, offers a comprehensive and dynamic curriculum that lays the foundation for every child's academic, social, and emotional wellbeing.",
      },
      {
        heading: "IB Primary Years Program (6 - 11 years)",
        text: "The PYP marks the start of a lifelong journey. It develops caring and culturally aware children to become active participants in their own learning.",
      },
      {
        heading: "IB Middle Years Program (11 - 16 years)",
        text: "Building a solid academic foundation, the MYP develops students' confidence in managing their own learning and making connections between their learning in the classroom and the real world.",
      },
      {
        heading: "IB Diploma Program (16 - 18 years)",
        text: "A future-ready programme that builds students' inquiring mindset, fosters their desire to learn, and prepares them to excel at their careers and lead meaningful lives.",
      },
      {
        heading: "IB Career-related Program (16 - 18 years)",
        text: "A unique programme for students in their final school years. It equips them with future-ready skills and prepares them to follow their career pathways—combining academic subjects with their own professional interests.",
      },
    ],
  },
  {
    key: "co-curricular",
    label: "Co-Curricular Enrichment",
    image: `${imageBase}/discover-lp-new/images/slider-pic8.jpg`,
    content: [
      "There are multiple pathways to cultivate the holistic development of students and equip them with essential life skills. Co-curricular activities like Sports, The Arts, Community Service, and Leadership platforms foster critical thinking, self-expression, and cultural appreciation.",
    ],
  },
  {
    key: "campus",
    label: "Campus",
    image: `${imageBase}/assets/img/homepage-thecampas.jpg`,
    content: [
      "Our 10-acre campus boasts state-of-the-art technology and thoughtfully designed spaces that foster innovation and learning. We've embraced innovative approaches to reduce our carbon footprint, incorporating age-old Indian architectural techniques that make our buildings not only environmentally friendly but also intelligently sustainable.",
    ],
  },
  {
    key: "faculty",
    label: "Faculty",
    image: `${imageBase}/discover-lp-new/images/slider-pic7.jpg`,
    content: [
      "Pathways School Noida is led by an extremely talented team of educators. Each one of our faculty has an innate passion, not just to teach, but also to learn. Their flexible, student-centered approach facilitates learning in its truest sense. Pathways also strongly believes in developing its faculty and encouraging them to enhance their professional skills through dedicated workshops and training sessions, both locally and internationally. Pastoral care is integral to our faculty's approach, ensuring each child's wellbeing is always a priority.",
    ],
  },
  {
    key: "highlights",
    label: "Highlights",
    image: `${imageBase}/discover-lp-new/images/mid-pic5.jpg`,
    bullets: [
      "Pathways School Noida is jointly accredited by the Council of International Schools (CIS) and the New England Association of Schools & Colleges (NEASC).",
      "The school has been recognized as a Global Microsoft Showcase School for its leadership in integrating technology with teaching and learning.",
      "Pathways School Noida is consistently ranked as the No. 1 International School in North India by the C-Fore survey.",
      "We are the first and only school chain in the world to be awarded with the 'LEED EB Platinum' rating for energy and environmental design by the United States Green Building Council.",
      "Honoured with the 2025 International School Award by ISC Research, the school is proud to be the only one in India and one of just five worldwide to earn this distinction.",
    ],
  },
];

const partnerLogos = [
  { src: "client-ib.svg", alt: "International Baccalaureate (IB) School in India" },
  { src: "client-ib-continuum.svg", alt: "IB Continuum School" },
  { src: "client-leed.svg", alt: "Leed Platinum School in India" },
  { src: "client-cis.svg", alt: "CIS Accredited School in India" },
  { src: "client-neasc.svg", alt: "NEASC Accredited Schools in India" },
  { src: "client-microsoft.svg", alt: "Microsoft Showcase School" },
];

const differenceItems = [
  {
    title: "Multiple Intelligences Theory",
    text: "Inspired by Dr. Howard Gardner, we implement the Multiple Intelligences approach to celebrate diverse student aptitudes, transforming learning into a personalized experience that transcends traditional literacy and numeracy.",
    image: `${imageBase}/discover-lp-new/images/mid-pic4.jpg`,
  },
  {
    title: "Student Centered Learning",
    text: "Our teaching methodology encourages inquiry-based learning, fostering learner autonomy, critical thinking, and ethical awareness.",
    image: `${imageBase}/discover-lp-new/images/mid-pic5.jpg`,
    reverse: true,
  },
  {
    title: "Technology Leadership",
    text: "As a Microsoft Showcase School, Pathways enhances learning and creativity through integrated technology, while promoting responsible digital citizenship from an early age.",
    image: `${imageBase}/discover-lp-new/images/mid-pic3.jpg`,
  },
  {
    title: "International Mindedness",
    text: "Pathways School Noida is a vibrant convergence point for global communities, with over 36 nationalities among its faculty and students, cultivating a global perspective and cultural understanding.",
    image: `${imageBase}/discover-lp-new/images/mid-pic1.jpg`,
    reverse: true,
  },
  {
    title: "Community Service",
    text: "We empower students to make a meaningful impact through hands-on involvement in various social and environmental initiatives.",
    image: `${imageBase}/discover-lp-new/images/mid-pic6.jpg`,
  },
  {
    title: "Pathwaysian Ecosystem",
    text: "At Pathways, the power of community is our greatest strength with students, faculty, and parents connected as one close-knit family. Care takes precedence over curriculum, with support extending seamlessly across grades. Our open-door policy and regular touchpoints reassure parents that every child is seen, heard, and valued.",
    image: `${imageBase}/discover-lp-new/images/mid-pic7.jpg`,
    reverse: true,
  },
];

const testimonials = [
  {
    quote:
      "..It is my home - I've been deeply connected with all the wonderful teachers who have supported me through every step, as well as with my peers with whom I have fostered deep bonds. The environments both in and outside class are designed to be inclusive, supportive, and to push you to your greatest potential. I'm truly proud to call myself a Pathwaysian!",
    name: "Meher Housego, IBCP 2",
    role: "Student",
  },
  {
    quote:
      "The school is my second home and it has shaped me into who I am today. The environment of learning and the teachers have always been supportive of my wide-eyed self.",
    name: "Dilisha Khurana, Batch of 2025",
    role: "Alumna",
  },
  {
    quote:
      "Pathways taught me beyond the books. It not only made me question the norms of the world but also subsequently made me believe in myself and the power of my own intellect.",
    name: "Ritika Sharma, Batch of 2014",
    role: "Alumna",
  },
  {
    quote:
      "..not only have I been absolutely amazed by the standard of excellence in the curriculum of the IB, but I have also appreciated the way it is delivered by Pathways School Noida. Moreover, it was heartwarming to see how much her teachers cared for her, and I always knew that my daughter's education was in good hands.",
    name: "Dr. Ajay Agarwal",
    role: "Parent",
  },
  {
    quote:
      "In education, we need to work with detail to bring out the best in each of our students. This need to blend long-term goals and the details with individual needs are at the heart of my belief in education as the critical building block of our societies.",
    name: "Mr. Aaron Jacob",
    role: "School Director",
  },
  {
    quote:
      "I have had the privilege of being in PSN since its inception in 2010 and have seen the school grow. Students are at the core of every interaction and engagement in school. I admire the culture of support and openness.",
    name: "Ms. Smita Bhattacharya",
    role: "Faculty",
  },
];

const universityLogos = Array.from({ length: 25 }, (_, i) => `bot-logo${i + 1}.jpg`);

const quickLinks = [
  "ENQUIRE NOW",
  "CURRICULUM",
  "Campus Tour",
  "FOOD MENU",
  "Contact Us",
  "GOOGLE MAPS",
  "CAREERS",
  "CALENDAR",
];

const schoolContact = {
  name: "Pathways School Noida",
  address: "Sector 100, Noida - 201304, Uttar Pradesh, India",
  phone: "+91 120 461 7000",
  email: "admissions.noida@pathways.in",
  hours: "Monday to Friday, 8:30 AM - 4:30 PM",
  mapUrl:
    "https://www.google.com/maps?q=Pathways%20School%20Noida%20Sector%20100%20Noida&output=embed",
};

// ---------------- COMPONENTS ----------------

function PrimaryButton({
  children,
  variant = "red",
  onClick,
}: {
  children: ReactNode;
  variant?: "red" | "teal";
  onClick?: () => void;
}) {
  const colors =
    variant === "red"
      ? "bg-[#e84135] hover:bg-[#c93529]"
      : "bg-[#008579] hover:bg-[#00695f]";
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-sm px-6 py-3 text-[12px] font-semibold uppercase tracking-wider text-white shadow-md transition ${colors}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </button>
  );
}

function VisitUsModal({
  open,
  onClose,
  onGetInTouch,
}: {
  open: boolean;
  onClose: () => void;
  onGetInTouch: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-[80] overflow-y-auto px-4 py-5 transition duration-200 ease-out md:grid md:place-items-center md:py-6 ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <button
        className="absolute inset-0 bg-[#173b4a]/55 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close visit us modal"
      />

      <section
        className={`relative mx-auto min-h-0 w-full max-w-5xl overflow-hidden rounded-md bg-white shadow-2xl transition duration-200 ease-out md:max-h-[92vh] md:overflow-y-auto ${
          open ? "translate-y-0 scale-100" : "translate-y-3 scale-[0.98]"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="visit-us-title"
      >
        <div className="grid md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[260px] bg-[#e2f0e8] md:min-h-[520px]">
            <iframe
              title="Pathways School Noida map"
              src={schoolContact.mapUrl}
              className="h-full min-h-[260px] w-full border-0 md:min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute left-5 top-5 rounded-sm bg-white/95 px-4 py-3 shadow-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e84135]">
                Campus Location
              </p>
              <p className="mt-1 text-sm font-semibold text-[#173b4a]">
                Map pin preview
              </p>
            </div>
          </div>

          <div className="relative bg-[#f7f4ed] px-5 py-7 pb-8 md:px-8 md:py-10">
            <button
              onClick={onClose}
              className="sticky left-full top-3 z-10 -mb-9 grid h-9 w-9 place-items-center rounded-sm border border-[#173b4a]/15 bg-white text-xl leading-none text-[#173b4a] transition hover:border-[#e84135] hover:text-[#e84135] md:absolute md:right-4 md:top-4 md:mb-0"
              aria-label="Close modal"
            >
              x
            </button>

            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#008579]">
              Visit Us
            </p>
            <h2
              id="visit-us-title"
              className="mt-3 max-w-sm text-3xl font-light leading-tight text-[#e84135] md:text-4xl"
            >
              Plan your campus visit
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#173b4a]">
              We welcome families to experience the campus, meet the admissions
              team, and understand the Pathways learning environment in person.
            </p>

            <div className="mt-7 space-y-5 border-y border-[#173b4a]/15 py-6">
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#e84135]">
                  Address
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#173b4a]">
                  {schoolContact.name}
                  <br />
                  {schoolContact.address}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#e84135]">
                    Phone
                  </h3>
                  <a
                    href={`tel:${schoolContact.phone.replaceAll(" ", "")}`}
                    className="mt-2 block text-sm text-[#173b4a] hover:text-[#e84135]"
                  >
                    {schoolContact.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#e84135]">
                    Email
                  </h3>
                  <a
                    href={`mailto:${schoolContact.email}`}
                    className="mt-2 block break-words text-sm text-[#173b4a] hover:text-[#e84135]"
                  >
                    {schoolContact.email}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#e84135]">
                  Office Hours
                </h3>
                <p className="mt-2 text-sm text-[#173b4a]">
                  {schoolContact.hours}
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 pb-1 sm:flex-row">
              <button
                onClick={onGetInTouch}
                className="inline-flex items-center justify-center rounded-sm bg-[#e84135] px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white shadow-md transition hover:bg-[#c93529]"
              >
                Get In Touch
              </button>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${schoolContact.name}, ${schoolContact.address}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-[#008579] px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-[#008579] transition hover:bg-[#008579] hover:text-white"
              >
                Open Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function EnquiryDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className={`fixed inset-0 z-[90] transition duration-200 ease-out ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <button
        className="absolute inset-0 bg-[#173b4a]/45 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close enquiry form"
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#f7f4ed] shadow-2xl transition duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-drawer-title"
      >
        <div className="border-b border-[#173b4a]/15 bg-white px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#008579]">
                Enquiry Form
              </p>
              <h2
                id="enquiry-drawer-title"
                className="mt-2 text-2xl font-light leading-tight text-[#e84135]"
              >
                Get in touch with admissions
              </h2>
            </div>
            <button
              onClick={onClose}
              className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-sm border border-[#173b4a]/15 bg-[#f7f4ed] text-xl leading-none text-[#173b4a] transition hover:border-[#e84135] hover:text-[#e84135]"
              aria-label="Close enquiry drawer"
            >
              x
            </button>
          </div>
          <p className="mt-3 text-sm leading-6 text-[#173b4a]">
            Share your details and the admissions team will connect with you.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {submitted ? (
            <div className="border-y border-[#173b4a]/15 py-8">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#008579]">
                Form Received
              </p>
              <h3 className="mt-3 text-2xl font-light text-[#e84135]">
                Thank you for reaching out.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#173b4a]">
                Your enquiry is ready on the website side. Connect this form to
                your backend or email service when you want to collect real
                submissions.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-sm border border-[#008579] px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-[#008579] transition hover:bg-[#008579] hover:text-white"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#173b4a]">
                  Full Name
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  className="mt-2 w-full rounded-sm border border-[#173b4a]/15 bg-white px-4 py-3 text-sm text-[#173b4a] outline-none transition focus:border-[#e84135] focus:ring-2 focus:ring-[#e84135]/15"
                  placeholder="Enter your name"
                />
              </label>

              <label className="block">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#173b4a]">
                  Contact Number
                </span>
                <input
                  required
                  name="contact"
                  type="tel"
                  className="mt-2 w-full rounded-sm border border-[#173b4a]/15 bg-white px-4 py-3 text-sm text-[#173b4a] outline-none transition focus:border-[#e84135] focus:ring-2 focus:ring-[#e84135]/15"
                  placeholder="+91 98765 43210"
                />
              </label>

              <label className="block">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#173b4a]">
                  Gmail ID
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-sm border border-[#173b4a]/15 bg-white px-4 py-3 text-sm text-[#173b4a] outline-none transition focus:border-[#e84135] focus:ring-2 focus:ring-[#e84135]/15"
                  placeholder="name@gmail.com"
                />
              </label>

              <label className="block">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#173b4a]">
                  Address
                </span>
                <textarea
                  required
                  name="address"
                  rows={3}
                  className="mt-2 w-full resize-none rounded-sm border border-[#173b4a]/15 bg-white px-4 py-3 text-sm text-[#173b4a] outline-none transition focus:border-[#e84135] focus:ring-2 focus:ring-[#e84135]/15"
                  placeholder="City, state, and full address"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#173b4a]">
                    Student Grade
                  </span>
                  <select
                    name="grade"
                    className="mt-2 w-full rounded-sm border border-[#173b4a]/15 bg-white px-4 py-3 text-sm text-[#173b4a] outline-none transition focus:border-[#e84135] focus:ring-2 focus:ring-[#e84135]/15"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option>Early Years</option>
                    <option>Primary Years</option>
                    <option>Middle Years</option>
                    <option>Diploma Program</option>
                    <option>Career-related Program</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#173b4a]">
                    Visit Type
                  </span>
                  <select
                    name="visitType"
                    className="mt-2 w-full rounded-sm border border-[#173b4a]/15 bg-white px-4 py-3 text-sm text-[#173b4a] outline-none transition focus:border-[#e84135] focus:ring-2 focus:ring-[#e84135]/15"
                    defaultValue="Campus Visit"
                  >
                    <option>Campus Visit</option>
                    <option>Admission Enquiry</option>
                    <option>Callback Request</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#173b4a]">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none rounded-sm border border-[#173b4a]/15 bg-white px-4 py-3 text-sm text-[#173b4a] outline-none transition focus:border-[#e84135] focus:ring-2 focus:ring-[#e84135]/15"
                  placeholder="Tell us what you would like to know"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-sm bg-[#e84135] px-5 py-3 text-[12px] font-semibold uppercase tracking-wider text-white shadow-md transition hover:bg-[#c93529]"
              >
                Submit Enquiry
              </button>
            </form>
          )}
        </div>

        <div className="border-t border-[#173b4a]/15 bg-white px-6 py-4 text-xs leading-5 text-[#173b4a]">
          {schoolContact.name}
          <br />
          {schoolContact.phone} | {schoolContact.email}
        </div>
      </aside>
    </div>
  );
}

// ---------------- PAGE ----------------

export default function Home() {
  const [activeTab, setActiveTab] = useState(foundationTabs[0].key);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [enquiryDrawerOpen, setEnquiryDrawerOpen] = useState(false);

  const currentTab =
    foundationTabs.find((t) => t.key === activeTab) ?? foundationTabs[0];

  // Auto-rotate testimonials
  useEffect(() => {
    const id = setInterval(() => {
      setTestimonialIdx((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVisitModalOpen(false);
        setEnquiryDrawerOpen(false);
      }
    };

    document.body.style.overflow =
      visitModalOpen || enquiryDrawerOpen ? "hidden" : "";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [visitModalOpen, enquiryDrawerOpen]);

  function openEnquiryDrawer() {
    setVisitModalOpen(false);
    setMobileMenuOpen(false);
    setEnquiryDrawerOpen(true);
  }

  return (
    <main className="min-h-screen bg-white font-sans text-[#173b4a]">
      {/* ============== HEADER ============== */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white shadow-sm">
        {/* Top utility bar */}
        <div className="hidden bg-[#0e6f82] text-white md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-end gap-5 px-6 py-1.5 text-[10px] font-semibold uppercase tracking-wider">
            <a href="#" className="hover:text-[#f7d046]">Students</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-[#f7d046]">Parents</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-[#f7d046]">Faculty</a>
          </div>
        </div>

        {/* Main nav */}
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
          <a href="#" className="flex items-center">
            <img
              src={`${imageBase}/assets/img/client1-noida.svg`}
              alt="Pathways School Noida"
              className="h-12 md:h-14"
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 text-[12px] font-semibold uppercase tracking-wide text-[#173b4a] lg:flex">
            <li>
              <a href="#" className="hover:text-[#e84135]">Home</a>
            </li>
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <button className="flex items-center gap-1 hover:text-[#e84135]">
                  {item.label}
                  <span className="text-[8px]">▼</span>
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-60 -translate-x-1/2 rounded-md border border-black/10 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-4 py-2 text-[11px] normal-case text-[#173b4a] hover:bg-[#f7f4ed] hover:text-[#e84135]"
                    >
                      {child}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          {/* Right buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={openEnquiryDrawer}
              className="hidden rounded-sm bg-[#008579] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-[#00695f] md:block"
            >
              Let&apos;s Talk
            </button>
            <button
              onClick={() => setVisitModalOpen(true)}
              className="hidden rounded-sm bg-[#e84135] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#c93529] md:block"
            >
              Visit Us
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-1 grid h-9 w-9 place-items-center text-2xl text-[#173b4a] lg:hidden"
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
            <ul className="space-y-2 text-sm font-semibold uppercase">
              <li><a href="#" className="block py-1">Home</a></li>
              {navItems.map((it) => (
                <li key={it.label}>
                  <a href="#" className="block py-1">{it.label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2">
              <button
                onClick={openEnquiryDrawer}
                className="flex-1 rounded-sm bg-[#008579] py-2 text-[11px] font-bold uppercase text-white"
              >
                Let&apos;s Talk
              </button>
              <button
                onClick={() => {
                  setVisitModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex-1 rounded-sm bg-[#e84135] py-2 text-[11px] font-bold uppercase text-white"
              >
                Visit Us
              </button>
            </div>
          </div>
        )}
      </header>

      <VisitUsModal
        open={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
        onGetInTouch={openEnquiryDrawer}
      />

      <EnquiryDrawer
        open={enquiryDrawerOpen}
        onClose={() => setEnquiryDrawerOpen(false)}
      />

      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0e6f82] via-[#0a5a6b] to-[#083e4b] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${imageBase}/discover-lp-new/images/hero-wtap-img.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
          <h1 className="max-w-3xl text-4xl font-light uppercase leading-[1.05] tracking-wide md:text-6xl">
            The Pathways
            <br />
            <span className="font-normal">Roadmap</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/95 md:text-base md:leading-8">
            There are schools and then there is{" "}
            <em className="font-semibold not-italic text-[#f7d046]">Pathways</em>.
            Everything you would ever wish for from a school, and more. We invite
            you to embark on an enriching educational journey in a truly global,
            fully supportive learning environment. Turning aptitude into expertise.
            Talent into stardom. Hobbies into careers. And good children into
            great human beings.
          </p>
          <div className="mt-8">
            <PrimaryButton variant="red" onClick={openEnquiryDrawer}>
              Get In Touch
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* ============== 4 TILE SECTION ============== */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-4">
          {topTiles.map((tile) => (
            <article
              key={tile.title}
              className="group relative h-[360px] overflow-hidden"
            >
              <img
                src={tile.image}
                alt={tile.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold uppercase tracking-wide">
                  {tile.title}
                </h3>
                <p className="mt-3 max-h-0 overflow-hidden text-[12px] leading-5 opacity-0 transition-all duration-500 group-hover:max-h-48 group-hover:opacity-100">
                  {tile.text}
                </p>
                <button className="mt-4 inline-flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
                  Read More <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============== "A FOUNDATION FOR" TABS ============== */}
      <section id="roadmap" className="bg-[#f7f4ed] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-light leading-tight text-[#173b4a] md:text-4xl">
              A foundation for{" "}
              <span className="text-[#e84135]">lifelong learning</span>
            </h2>
          </div>

          {/* Tab buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
            {foundationTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-sm px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider transition md:text-[11px] ${
                  activeTab === tab.key
                    ? "bg-[#e84135] text-white shadow-md"
                    : "bg-white text-[#173b4a] hover:bg-[#fce8e6] hover:text-[#e84135]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
            <div className="overflow-hidden">
              <img
                src={currentTab.image}
                alt={currentTab.label}
                className="h-[400px] w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              {"content" in currentTab && currentTab.content?.map((p, i) => (
                <p key={i} className="text-sm leading-7 text-[#173b4a]">
                  {p}
                </p>
              ))}
              {"sections" in currentTab && currentTab.sections?.map((sec, i) => (
                <div key={i}>
                  <h3 className="text-base font-semibold text-[#e84135]">
                    {sec.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#173b4a]">
                    {sec.text}
                  </p>
                </div>
              ))}
              {"bullets" in currentTab && currentTab.bullets && (
                <ul className="space-y-3">
                  {currentTab.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-7 text-[#173b4a]"
                    >
                      <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[#e84135]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============== WHO THRIVES ============== */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src={`${imageBase}/discover-lp-new/images/hero-wtap-img.jpg`}
              alt="Students celebrating with trophy"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-light text-[#e84135] md:text-4xl">
              Who Thrives at Pathways
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[#173b4a]">
              <p>
                Pathways School Noida welcomes families who believe in
                differentiated learning that meets every learner where they are.
                If you&apos;re looking for a school that values curiosity,
                creativity, empathy, and global citizenship, you&apos;ll feel right
                at home here.
              </p>
              <p>
                Our learning environment is ideal for students who are
                open-minded, eager to explore, and ready to take ownership of
                their journey, whether they&apos;re moving from another IB school,
                transitioning from a different curriculum, or beginning their
                very first experience with formal education.
              </p>
              <p>
                We celebrate diversity in all its forms and support each child as
                they grow into confident, compassionate learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== EXCELLENCE LOGOS ============== */}
      <section className="bg-[#fbf8e7] py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-light text-[#e84135] md:text-3xl">
            A Reflection of Our Journey Towards Excellence
          </h2>
          <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
            {partnerLogos.map((logo) => (
              <div key={logo.src} className="flex justify-center">
                <img
                  src={`${imageBase}/discover-lp-new/images/${logo.src}`}
                  alt={logo.alt}
                  className="max-h-20 max-w-[120px] object-contain grayscale transition hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== THE PATHWAYS DIFFERENCE ============== */}
      <section id="difference" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-light text-[#e84135] md:text-4xl">
            The Pathways Difference
          </h2>
          <div className="mt-12 space-y-16">
            {differenceItems.map((item) => (
              <article
                key={item.title}
                className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  item.reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <h3 className="text-2xl font-light text-[#173b4a] md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[#173b4a]">
                    {item.text}
                  </p>
                  <button className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#e84135] hover:gap-3 transition-all">
                    Read More <span>→</span>
                  </button>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[320px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TRENDING ============== */}
      <section className="bg-[#f7f4ed] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-light text-[#e84135] md:text-4xl">
            Trending @ Pathways
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <a href="#" className="group overflow-hidden">
              <img
                src={`${imageBase}/discover-lp-new/images/homepage/trending-left-new.jpg`}
                alt="Holding Hands at Pathways"
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </a>
            <a href="#" className="group overflow-hidden">
              <img
                src={`${imageBase}/discover-lp-new/images/homepage/trending-right.jpg`}
                alt="Pathways UTP"
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <section className="bg-[#e2f0e8] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-xl font-bold uppercase tracking-wide text-[#078e86] md:text-2xl">
            Voices of Our Community
          </h2>

          <div className="relative mt-8 min-h-[280px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === testimonialIdx ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <blockquote className="mx-auto max-w-3xl text-sm italic leading-7 text-[#173b4a] md:text-base md:leading-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="text-base font-bold text-[#173b4a]">{t.name}</p>
                  <p className="text-sm text-[#078e86]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIdx(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === testimonialIdx
                    ? "w-8 bg-[#078e86]"
                    : "w-2.5 bg-white"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============== ALUMNI MARQUEE ============== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-light text-[#e84135] md:text-4xl">
            Pathways of <span className="font-normal">our Alumni</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#173b4a]">
            Our alumni network at Pathways School Noida extends across the
            globe, with graduates pursuing diverse fields at both national and
            international universities.
          </p>
        </div>

        <div className="mt-10 overflow-hidden">
          <div className="flex animate-[marquee_40s_linear_infinite] gap-10 whitespace-nowrap">
            {[...universityLogos, ...universityLogos].map((logo, i) => (
              <img
                key={`${logo}-${i}`}
                src={`${imageBase}/discover-lp-new/images/${logo}`}
                alt=""
                className="h-16 max-w-[120px] flex-shrink-0 object-contain"
              />
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ============== CAMPUS ============== */}
      <section id="campus" className="relative overflow-hidden">
        <img
          src={`${imageBase}/assets/img/homepage-thecampas.jpg`}
          alt="The Pathways Campus"
          className="h-[450px] w-full object-cover md:h-[520px]"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 grid place-items-center px-6 text-center text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em]">
              The
            </p>
            <h2 className="mt-2 text-5xl font-light uppercase tracking-wide md:text-6xl">
              Campus
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 md:text-base">
              A green, open and thoughtfully designed learning environment for
              academics, sport, creativity and community life.
            </p>
            <div className="mt-7">
              <PrimaryButton variant="teal">Explore</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer id="footer" className="bg-[#0e6f82] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <img
                src={`${imageBase}/assets/img/client1-noida.svg`}
                alt="Pathways School Noida"
                className="h-16 brightness-0 invert"
              />
              <p className="mt-5 text-sm leading-6 text-white/85">
                Sector 100, Noida – 201304
                <br />
                Uttar Pradesh, India
              </p>
              <div className="mt-5 flex gap-3">
                {["Instagram", "Facebook", "Twitter", "Youtube", "Linkedin"].map(
                  (s) => (
                    <a
                      key={s}
                      href="#"
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-[10px] uppercase hover:border-[#f7d046] hover:text-[#f7d046]"
                      aria-label={s}
                    >
                      {s[0]}
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold uppercase tracking-wide">
                Quick Links
              </h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-[12px] uppercase tracking-wide text-white/85 sm:grid-cols-4">
                {quickLinks.map((q) => (
                  <li key={q}>
                    <a href="#" className="hover:text-[#f7d046]">
                      {q}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-[11px] text-white/75 md:flex-row">
            <p>Copyright © 2024 Pathways School Noida. All rights reserved.</p>
            <p>
              Site By:{" "}
              <a href="#" className="text-[#f7d046] hover:underline">
                Dezine N Digital
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
