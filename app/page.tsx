/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import type { FormEvent, ReactNode } from "react";

const imageBase = "https://lightcoral-goshawk-899795.hostingersite.com";
const logoSrc = `${imageBase}/wp-content/uploads/2025/10/sdps-logo-new.png`;

// ---------------- DATA ----------------

const navItems = [
  {
    label: "About SDPS",
    children: [
      "The School",
      "Vision & Mission",
      "Our Philosophy",
      "Character Building",
      "School Community",
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
    label: "Life At SDPS",
    children: [
      "Overview",
      "Sports",
      "Co-Curricular",
      "Overall Development",
      "Academic Events",
    ],
  },
  {
    label: "Facilities",
    children: [
      "Swimming Pool",
      "Mess",
      "Library",
      "Hi-Tech Labs",
    ],
  },
  {
    label: "Admissions",
    children: [
      "Admission Enquiry",
      "Visit Campus",
      "Fee Details",
      "Parent Connect",
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
    title: "About SDPS",
    image: `${imageBase}/wp-content/uploads/elementor/thumbs/IMG_0872-1-scaled-rcwly6g86lqkhmtv0a9vrq5eb2kap6ezrsp55k7zl4.jpg`,
    text: "SDPS International School, located on Khandwa Road, Indore, stands as a beacon of holistic education and character building.",
  },
  {
    title: "Academics",
    image: `${imageBase}/wp-content/uploads/2025/10/usp-1-683x1024.jpg`,
    text: "Learning at SDPS goes beyond textbooks, balancing academic excellence with curiosity, creativity, values, and social awareness.",
  },
  {
    title: "Sports",
    image: `${imageBase}/wp-content/uploads/2025/10/usp-2-683x1024.jpg`,
    text: "Sports and active campus life help students build confidence, teamwork, discipline, and a healthy competitive spirit.",
  },
  {
    title: "Co-Curricular",
    image: `${imageBase}/wp-content/uploads/2025/10/usp-3-683x1024.jpg`,
    text: "Co-curricular experiences support expression, leadership, collaboration, and the overall development of every learner.",
  },
];

const foundationTabs = [
  {
    key: "philosophy",
    label: "Our Philosophy",
    image: `${imageBase}/wp-content/uploads/elementor/thumbs/IMG_0867-1-scaled-rcwlsstdflt35sllpedefjmy6sgdmso6d48v639rma.jpg`,
    content: [
      "At SDPS International School, learning goes far beyond textbooks. Education is not just about acquiring knowledge; it is about igniting curiosity, fostering creativity, and shaping values that last a lifetime.",
      "Guided by the motto Learn, Lead, and Serve, the school blends academic excellence with moral integrity and social awareness.",
    ],
  },
  {
    key: "curriculum",
    label: "Curriculum",
    image: `${imageBase}/wp-content/uploads/2025/10/usp-1-683x1024.jpg`,
    sections: [
      {
        heading: "Academic Excellence",
        text: "SDPS focuses on strong conceptual understanding, disciplined study habits, and classroom learning that helps students apply knowledge with confidence.",
      },
      {
        heading: "Curiosity-Led Learning",
        text: "The school encourages students to ask questions, explore ideas, and build a genuine love for learning beyond textbooks.",
      },
      {
        heading: "Values With Knowledge",
        text: "Academic growth is paired with moral integrity, social awareness, and habits that prepare students to lead responsibly.",
      },
      {
        heading: "Confident Communication",
        text: "Students are supported to express themselves clearly through classroom participation, public events, and collaborative activities.",
      },
    ],
  },
  {
    key: "co-curricular",
    label: "Life At SDPS",
    image: `${imageBase}/wp-content/uploads/2025/10/usp-3-683x1024.jpg`,
    content: [
      "Life at SDPS brings together academics, sports, co-curricular opportunities, and overall development so students grow with balance, confidence, and purpose.",
    ],
  },
  {
    key: "campus",
    label: "Facilities",
    image: `${imageBase}/wp-content/uploads/2025/10/library-683x1024.jpg`,
    content: [
      "The campus supports student life with top-notch facilities including a swimming pool, mess, library, and hi-tech labs designed for practical learning and daily wellbeing.",
    ],
  },
  {
    key: "faculty",
    label: "Character Building",
    image: `${imageBase}/wp-content/uploads/elementor/thumbs/IMG_0854-1-scaled-rcwlh7h0v2ui756f1dsrttw6qx7bsk9joiuo0zdloq.jpg`,
    content: [
      "Founded under the aegis of the SDPS Women's Welfare Society, the school was established with a vision to nurture young minds into confident, compassionate, and responsible global citizens.",
    ],
  },
  {
    key: "highlights",
    label: "Highlights",
    image: `${imageBase}/wp-content/uploads/2025/10/lab-683x1024.jpg`,
    bullets: [
      "Holistic education and character building on Khandwa Road, Indore.",
      "Academic and public events that keep students connected to real participation.",
      "Sports, co-curricular learning, and overall development as key parts of school life.",
      "Top-notch facilities including swimming pool, mess, library, and hi-tech labs.",
    ],
  },
];

const partnerLogos = [
  { src: `${imageBase}/wp-content/uploads/2025/10/simming-683x1024.jpg`, alt: "Swimming Pool" },
  { src: `${imageBase}/wp-content/uploads/2025/10/mess1-683x1024.jpg`, alt: "Mess" },
  { src: `${imageBase}/wp-content/uploads/2025/10/library-683x1024.jpg`, alt: "Library" },
  { src: `${imageBase}/wp-content/uploads/2025/10/lab-683x1024.jpg`, alt: "Hi-Tech Labs" },
];

const differenceItems = [
  {
    title: "Holistic Education",
    text: "SDPS balances academics, values, creativity, and social awareness so students grow as confident and responsible individuals.",
    image: `${imageBase}/wp-content/uploads/elementor/thumbs/IMG_0872-1-scaled-rcwly6g86lqkhmtv0a9vrq5eb2kap6ezrsp55k7zl4.jpg`,
  },
  {
    title: "Curiosity and Creativity",
    text: "Learning goes beyond textbooks through experiences that ignite curiosity, foster creativity, and help students think independently.",
    image: `${imageBase}/wp-content/uploads/2025/10/usp-1-683x1024.jpg`,
    reverse: true,
  },
  {
    title: "Sports and Teamwork",
    text: "Sports experiences help students build discipline, resilience, teamwork, and a healthy sense of achievement.",
    image: `${imageBase}/wp-content/uploads/2025/10/usp-2-683x1024.jpg`,
  },
  {
    title: "Co-Curricular Growth",
    text: "Co-curricular activities give students space to express themselves, collaborate with peers, and develop leadership qualities.",
    image: `${imageBase}/wp-content/uploads/2025/10/usp-3-683x1024.jpg`,
    reverse: true,
  },
  {
    title: "Overall Development",
    text: "The school nurtures academic, physical, emotional, and social growth so each learner can move forward with confidence.",
    image: `${imageBase}/wp-content/uploads/2025/10/usp-4-683x1024.jpg`,
  },
  {
    title: "Top-Notch Facilities",
    text: "A swimming pool, mess, library, and hi-tech labs support a complete school environment for learning, wellbeing, and discovery.",
    image: `${imageBase}/wp-content/uploads/2025/10/lab-683x1024.jpg`,
    reverse: true,
  },
];

const testimonials = [
  {
    quote:
      "Learning at SDPS goes beyond textbooks; it shapes curiosity, creativity, values, and confidence for life.",
    name: "SDPS International School",
    role: "Our Philosophy",
  },
  {
    quote:
      "Learn, Lead, and Serve guides the school community toward academic excellence, moral integrity, and social awareness.",
    name: "SDPS International School",
    role: "School Motto",
  },
  {
    quote:
      "The school was established to nurture young minds into confident, compassionate, and responsible global citizens.",
    name: "SDPS Women's Welfare Society",
    role: "Founding Vision",
  },
  {
    quote:
      "Academic and public events help students participate, perform, and develop the confidence to engage with the wider community.",
    name: "Life At SDPS",
    role: "Events",
  },
  {
    quote:
      "Top-notch facilities support classroom learning, practical exploration, healthy routines, and a balanced campus experience.",
    name: "SDPS Campus",
    role: "Facilities",
  },
];

const facilityImages = [
  `${imageBase}/wp-content/uploads/2025/10/simming-683x1024.jpg`,
  `${imageBase}/wp-content/uploads/2025/10/mess1-683x1024.jpg`,
  `${imageBase}/wp-content/uploads/2025/10/library-683x1024.jpg`,
  `${imageBase}/wp-content/uploads/2025/10/lab-683x1024.jpg`,
];

const quickLinks = [
  "ENQUIRE NOW",
  "ACADEMICS",
  "Campus Tour",
  "FACILITIES",
  "Contact Us",
  "GOOGLE MAPS",
  "CAREERS",
  "EVENTS",
];

const schoolContact = {
  name: "SDPS International School",
  address: "Khandwa Road, Opp. Bilawali Tank, Indore (M.P.) 452020",
  phone: "+91 97541 49007",
  email: "enquiries@sdps.edu.in",
  hours: "Monday to Friday, 8:30 AM - 4:30 PM",
  mapUrl:
    "https://www.google.com/maps?q=SDPS%20International%20School%20Khandwa%20Road%20Indore&output=embed",
};

const campusImage =
  "https://images.pexels.com/photos/17792676/pexels-photo-17792676.jpeg?auto=compress&cs=tinysrgb&w=1800";
const heroVideo = "https://assets.mixkit.co/videos/35954/35954-720.mp4";
const heroVideoPoster =
  "https://assets.mixkit.co/videos/35954/35954-thumb-720-0.jpg";

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
              title="SDPS International School map"
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
              team, and understand the SDPS learning environment in person.
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
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const heroVideoRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const heroVideoElement = heroVideoRef.current;

    if (!heroVideoElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVideoReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(heroVideoElement);

    return () => observer.disconnect();
  }, []);

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
              src={logoSrc}
              alt="SDPS International School"
              className="h-12 w-auto md:h-14"
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

      <a
        href="https://wa.me/919754149007"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-[70] grid h-14 w-14 place-items-center rounded-full bg-[#32c85a] text-white shadow-lg ring-4 ring-white/90 transition hover:-translate-y-0.5 hover:bg-[#27b84e]"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M16.02 3.2A12.74 12.74 0 0 0 5.24 22.7L3.6 28.8l6.25-1.6A12.76 12.76 0 1 0 16.02 3.2Zm0 2.28a10.48 10.48 0 0 1 8.88 16.03 10.46 10.46 0 0 1-13.9 3.08l-.45-.27-3.72.95.98-3.62-.3-.47A10.48 10.48 0 0 1 16.02 5.48Zm-4.2 4.5c-.23 0-.6.08-.92.43-.32.35-1.22 1.2-1.22 2.92s1.25 3.38 1.43 3.62c.18.23 2.42 3.88 6.02 5.28 2.99 1.16 3.6.93 4.25.87.65-.06 2.1-.86 2.4-1.69.29-.83.29-1.54.2-1.69-.08-.14-.32-.23-.67-.4-.35-.18-2.1-1.04-2.42-1.15-.32-.12-.56-.18-.8.17-.23.35-.92 1.15-1.13 1.38-.2.23-.41.26-.76.09-.35-.18-1.49-.55-2.84-1.75-1.05-.94-1.76-2.1-1.97-2.45-.2-.35-.02-.54.15-.72.16-.16.35-.41.53-.62.18-.2.23-.35.35-.58.12-.23.06-.44-.03-.62-.08-.18-.8-1.93-1.1-2.64-.29-.7-.58-.6-.8-.61h-.67Z" />
        </svg>
      </a>

      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden bg-[#fbfaf4] text-[#073144]">
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,rgba(14,111,130,0.08)_1px,transparent_1px),linear-gradient(rgba(14,111,130,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[0.82fr_1.18fr] md:py-20">
          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl font-semibold uppercase leading-tight tracking-wide text-[#d84f3f] md:text-6xl">
              SDPS International
              <br />
              School
            </h1>
            <p className="mt-8 text-base leading-8 text-[#073144] md:text-lg">
              Welcome to{" "}
              <em className="font-semibold not-italic">
                SDPS International School
              </em>
              , Indore. Located on Khandwa Road, the school stands as a beacon
              of holistic education and character building, nurturing young
              minds into confident, compassionate, and responsible global
              citizens.
            </p>
            <div className="mt-8">
              <PrimaryButton variant="red" onClick={openEnquiryDrawer}>
                Get In Touch
              </PrimaryButton>
            </div>
          </div>

          <div
            ref={heroVideoRef}
            className="relative mx-auto aspect-square w-full max-w-[520px] md:max-w-[640px]"
          >
            <div className="absolute inset-0 rounded-full border border-[#173b4a]/20" />
            <div className="absolute inset-6 rounded-full border border-[#173b4a]/15" />
            <div className="absolute inset-[9%] overflow-hidden rounded-full bg-[#173b4a] shadow-2xl">
              <video
                className="block h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload={heroVideoReady ? "auto" : "none"}
                poster={heroVideoPoster}
              >
                {heroVideoReady && <source src={heroVideo} type="video/mp4" />}
              </video>
            </div>
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
              src={`${imageBase}/wp-content/uploads/elementor/thumbs/IMG_0872-1-scaled-rcwly6g86lqkhmtv0a9vrq5eb2kap6ezrsp55k7zl4.jpg`}
              alt="Students at SDPS International School"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-light text-[#e84135] md:text-4xl">
              About SDPS International School, Indore
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[#173b4a]">
              <p>
                SDPS International School, located on Khandwa Road, Indore,
                stands as a beacon of holistic education and character building.
                The school was founded under the aegis of the SDPS Women&apos;s
                Welfare Society.
              </p>
              <p>
                The institution was established with a vision to nurture young
                minds into confident, compassionate, and responsible global
                citizens.
              </p>
              <p>
                Guided by Learn, Lead, and Serve, SDPS blends academic
                excellence with moral integrity and social awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== EXCELLENCE LOGOS ============== */}
      <section className="bg-[#fbf8e7] py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-light text-[#e84135] md:text-3xl">
            Top-Notch Facilities
          </h2>
          <div className="mt-10 grid grid-cols-2 items-center gap-6 md:grid-cols-4">
            {partnerLogos.map((logo) => (
              <div key={logo.src} className="flex justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-48 w-full object-cover grayscale transition hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== THE SDPS DIFFERENCE ============== */}
      <section id="difference" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-light text-[#e84135] md:text-4xl">
            The SDPS Difference
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
            Life At SDPS
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <a href="#" className="group overflow-hidden">
              <img
                src={`${imageBase}/wp-content/uploads/2025/10/usp-2-683x1024.jpg`}
                alt="Sports at SDPS"
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </a>
            <a href="#" className="group overflow-hidden">
              <img
                src={`${imageBase}/wp-content/uploads/2025/10/usp-4-683x1024.jpg`}
                alt="Overall development at SDPS"
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
            SDPS Learning Values
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

      {/* ============== FACILITIES MARQUEE ============== */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-light text-[#e84135] md:text-4xl">
            Campus <span className="font-normal">Facilities</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#173b4a]">
            The SDPS campus supports daily school life with facilities for
            learning, wellbeing, activity, and practical exploration.
          </p>
        </div>

        <div className="mt-10 overflow-hidden">
          <div className="flex animate-[marquee_40s_linear_infinite] gap-10 whitespace-nowrap">
            {[...facilityImages, ...facilityImages].map((logo, i) => (
              <img
                key={`${logo}-${i}`}
                src={logo}
                alt="SDPS facility"
                className="h-36 w-28 flex-shrink-0 object-cover"
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
      <section id="campus" className="relative min-h-[500px] overflow-hidden md:min-h-[560px]">
        <img
          src={campusImage}
          alt="A school campus building with a green lawn"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45" />
        <div className="relative z-10 flex min-h-[500px] items-center justify-center px-6 py-16 text-center text-white md:min-h-[560px]">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] md:text-sm">
              The
            </p>
            <h2 className="mt-4 text-4xl font-light uppercase leading-none tracking-wide md:text-6xl">
              Facilities
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 md:text-base">
              A complete school environment with a swimming pool, mess, library,
              and hi-tech labs for learning, wellbeing, and discovery.
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
                src={logoSrc}
                alt="SDPS International School"
                className="h-16 rounded-sm bg-white px-3 py-2"
              />
              <p className="mt-5 text-sm leading-6 text-white/85">
                Khandwa Road, Opp. Bilawali Tank,
                <br />
                Indore (M.P.) 452020
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
            <p>Copyright � 2024 SDPS International School. All rights reserved.</p>
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
