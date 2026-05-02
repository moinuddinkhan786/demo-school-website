/* eslint-disable @next/next/no-img-element */
import React from "react";

const imageBase = "https://www.pathwaysnoida.edu.in";

const topTiles = [
  {
    title: "Curriculum",
    image: `${imageBase}/discover-lp-new/images/slider-pic1.jpg`,
  },
  {
    title: "Arts and Music",
    image: `${imageBase}/discover-lp-new/images/slider-pic7.jpg`,
  },
  {
    title: "Co-curricular",
    image: `${imageBase}/discover-lp-new/images/slider-pic8.jpg`,
  },
  {
    title: "Admissions",
    image: `${imageBase}/discover-lp-new/images/mid-pic7.jpg`,
    patterned: true,
  },
];

const differenceItems = [
  {
    title: "Multiple Intelligences Theory",
    text: "We recognise every child as a unique learner and build experiences that help them discover strengths through inquiry, reflection and guided practice.",
    image: `${imageBase}/discover-lp-new/images/mid-pic1.jpg`,
  },
  {
    title: "Student Centered Learning",
    text: "Students take ownership of learning through collaborative projects, personal goals and classrooms designed for curiosity and confidence.",
    image: `${imageBase}/discover-lp-new/images/mid-pic3.jpg`,
    reverse: true,
  },
  {
    title: "Technology Leadership",
    text: "Digital fluency is woven into daily learning so students can research, create, communicate and solve problems with responsibility.",
    image: `${imageBase}/discover-lp-new/images/mid-pic4.jpg`,
  },
  {
    title: "International Mindedness",
    text: "A globally aware campus culture encourages respect, empathy and a deeper understanding of diverse perspectives and communities.",
    image: `${imageBase}/discover-lp-new/images/mid-pic5.jpg`,
    reverse: true,
  },
  {
    title: "Community Service",
    text: "Purposeful service programmes connect students with real needs and help them become thoughtful contributors beyond the classroom.",
    image: `${imageBase}/discover-lp-new/images/mid-pic6.jpg`,
  },
  {
    title: "Pathwaysian Ecosystem",
    text: "The school brings together teachers, families, mentors and peers in a warm ecosystem that supports wellbeing and excellence.",
    image: `${imageBase}/discover-lp-new/images/mid-pic7.jpg`,
    reverse: true,
  },
];

const partnerLogos = [
  "client-ib.svg",
  "client-ib-continuum.svg",
  "client-cis.svg",
  "client-microsoft.svg",
  "client-neasc.svg",
  "client-leed.svg",
];

const universityLogos = [
  "bot-logo1.jpg",
  "bot-logo3.jpg",
  "bot-logo5.jpg",
  "bot-logo9.jpg",
  "bot-logo13.jpg",
  "bot-logo20.jpg",
];

function ArrowButton({ children }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full bg-[#e95b50] px-5 py-2 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#d84a40]">
      {children}
      <span aria-hidden="true">+</span>
    </button>
  );
}

function FramedImage({ src, alt }) {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="absolute -right-3 -top-3 h-20 w-20 border-r-2 border-t-2 border-[#9c7039]" />
      <div className="absolute -bottom-3 -left-3 h-20 w-20 border-b-2 border-l-2 border-[#9c7039]" />
      <img
        src={src}
        alt={alt}
        className="relative z-10 aspect-[4/5] w-full object-cover"
      />
    </div>
  );
}

function DifferenceBlock({ item }) {
  return (
    <article
      className={`mx-auto grid max-w-4xl items-center gap-10 px-6 py-8 md:grid-cols-2 md:gap-16 ${
        item.reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="text-center">
        <h3 className="mx-auto max-w-[260px] text-2xl font-light leading-tight text-[#41362b]">
          {item.title}
        </h3>
        <p className="mx-auto mt-5 max-w-[320px] text-sm leading-6 text-[#173b4a]">
          {item.text}
        </p>
        <span className="mx-auto mt-5 grid h-6 w-6 place-items-center rounded-full bg-[#a78352] text-xs text-white">
          +
        </span>
      </div>
      <FramedImage src={item.image} alt={item.title} />
    </article>
  );
}

export default function Moin() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#173b4a]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <img
              src={`${imageBase}/assets/img/pathways-logo/noida-white.svg`}
              alt="Pathways School Noida"
              className="h-8 rounded-sm bg-[#0e6f82] px-2 py-1"
            />
          </div>
          <div className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-wide text-[#123948] md:flex">
            <a href="#roadmap">Explore</a>
            <a href="#difference">Pathways Difference</a>
            <a href="#campus">Campus</a>
            <a href="#footer">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-sm bg-[#008579] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
              Apply Now
            </button>
            <button className="rounded-sm bg-[#008579] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white">
              Visit Us
            </button>
            <span className="text-xl leading-none text-black">=</span>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#f7f4ed]">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#d8d1c4_1px,transparent_1px)] [background-size:10px_10px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-20">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#e94d40]">
              Welcome to Pathways
            </p>
            <h1 className="max-w-sm text-4xl font-light uppercase leading-[1.05] text-[#e84135] md:text-5xl">
              The Pathways Roadmap
            </h1>
            <p className="mt-6 max-w-md text-sm leading-6 text-[#123948]">
              A learning journey shaped by inquiry, confidence, international
              mindedness and a strong sense of belonging. Pathways School Noida
              nurtures every learner through academics, creativity, sport and
              service.
            </p>
            <div className="mt-7">
              <ArrowButton>Get in touch</ArrowButton>
            </div>
          </div>
          <div className="relative mx-auto h-[300px] w-[300px] sm:h-[390px] sm:w-[390px]">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#9b9384]" />
            <div className="absolute inset-5 overflow-hidden rounded-full bg-white">
              <img
                src={`${imageBase}/discover-lp-new/images/hero-wtap-img.jpg`}
                alt="Student learning at Pathways"
                className="h-full w-full object-cover"
              />
            </div>
            <img
              src={`${imageBase}/assets/img/students_icon_click_mob.png`}
              alt=""
              className="absolute bottom-8 right-4 h-20 w-20 object-contain"
            />
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid overflow-hidden md:grid-cols-4">
          {topTiles.map((tile) => (
            <article
              key={tile.title}
              className={`relative min-h-44 overflow-hidden ${
                tile.patterned ? "bg-[#079b92]" : ""
              }`}
            >
              {tile.patterned ? (
                <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
              ) : (
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/20" />
              <h2 className="absolute inset-x-0 bottom-8 px-4 text-center text-sm font-bold uppercase tracking-wide text-white">
                {tile.title}
              </h2>
            </article>
          ))}
        </div>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="border-l-2 border-[#e84135] pl-5">
            <h2 className="max-w-xs text-3xl font-light leading-tight text-[#e84135]">
              A foundation for lifelong learning
            </h2>
            <div className="mt-6">
              <ArrowButton>Get in touch</ArrowButton>
            </div>
            <ul className="mt-6 space-y-4 text-sm font-medium uppercase tracking-wide text-[#173b4a]">
              <li>Curriculum</li>
              <li>Leadership and governance</li>
              <li>Facilities</li>
              <li>Faculty</li>
              <li>Highlights</li>
            </ul>
          </div>
          <div>
            <img
              src={`${imageBase}/assets/img/landing-7.jpg`}
              alt="Pathways students beneath the night sky"
              className="h-64 w-full object-cover md:h-80"
            />
            <div className="ml-auto bg-[#dbeee5] p-8 text-center text-sm leading-6 text-[#173b4a] md:-mt-4 md:w-[78%]">
              At Pathways, students learn to ask questions, build perspective
              and act with confidence. The campus culture balances rigorous
              academics with creativity, wellbeing and global citizenship.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8">
        <div className="relative mx-auto max-w-4xl">
          <img
            src={`${imageBase}/assets/img/landing-6.jpg`}
            alt="Students celebrating with a trophy"
            className="h-[360px] w-full object-cover"
          />
          <div className="mx-auto -mt-20 max-w-3xl bg-[#fff9f1] px-8 py-10 text-center shadow-sm">
            <h2 className="text-xl font-light text-[#e84135]">
              Who Thrives at Pathways
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#123948]">
              A Pathwaysian is curious, reflective and ready to engage with the
              world. Students are encouraged to find their voice, respect other
              perspectives and build the skills needed for meaningful success.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-8 text-center">
        <h2 className="text-lg font-light text-[#e84135]">
          A Reflection of Our Journey Towards Excellence
        </h2>
        <div className="mt-8 grid grid-cols-3 items-center gap-6 border-y border-[#e6e0d5] py-5 md:grid-cols-6">
          {partnerLogos.map((logo) => (
            <img
              key={logo}
              src={`${imageBase}/discover-lp-new/images/${logo}`}
              alt=""
              className="mx-auto max-h-14 max-w-24 object-contain"
            />
          ))}
        </div>
      </section>

      <section id="difference" className="bg-[#fbf8e7] py-14">
        <h2 className="text-center text-2xl font-light text-[#e84135]">
          The Pathways Difference
        </h2>
        <div className="mt-10 space-y-10">
          {differenceItems.map((item) => (
            <DifferenceBlock key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-4xl bg-[#fff9f1] px-6 py-10">
          <h2 className="text-center text-xl font-light text-[#e84135]">
            Trending @ Pathways
          </h2>
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            <img
              src={`${imageBase}/discover-lp-new/images/homepage/trending-left-new.jpg`}
              alt="Holding Hands at Pathways"
              className="h-72 w-full object-cover"
            />
            <img
              src={`${imageBase}/discover-lp-new/images/homepage/trending-right.jpg`}
              alt="Pathways UTP"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-4xl rounded-b-[28px] rounded-t-md bg-[#e2f0e8] px-8 py-10 text-center">
          <h2 className="text-xl font-semibold uppercase tracking-wide text-[#078e86]">
            Voices of Our Community
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#123948]">
            Each Pathways experience is shaped by collaboration between
            students, educators and families. The community values confidence,
            compassion and active participation in every stage of learning.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            {[0, 1, 2, 3, 4].map((dot) => (
              <span
                key={dot}
                className={`h-2 w-2 rounded-full ${
                  dot === 0 ? "bg-[#078e86]" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl items-center gap-8 px-6 pb-12 md:grid-cols-[0.7fr_1.3fr]">
        <h2 className="text-2xl font-light leading-tight text-[#e84135]">
          Pathways of
          <br />
          our Alumni
        </h2>
        <div>
          <p className="text-sm leading-6 text-[#123948]">
            Students move forward with the confidence to join leading
            universities, creative industries and communities around the world.
          </p>
          <div className="mt-7 grid grid-cols-3 items-center gap-5 md:grid-cols-6">
            {universityLogos.map((logo) => (
              <img
                key={logo}
                src={`${imageBase}/discover-lp-new/images/${logo}`}
                alt=""
                className="mx-auto max-h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="campus" className="relative overflow-hidden">
        <img
          src={`${imageBase}/assets/img/homepage-thecampas.jpg`}
          alt="The Pathways campus"
          className="h-[340px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 grid place-items-center px-6 text-center text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.45em]">The</p>
            <h2 className="mt-2 text-4xl font-light uppercase tracking-wide">
              Campus
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6">
              A green, open and thoughtfully designed learning environment for
              academics, sport, creativity and community life.
            </p>
            <button className="mt-5 rounded-sm bg-[#008579] px-5 py-2 text-xs font-semibold uppercase tracking-wide">
              Know More
            </button>
          </div>
        </div>
      </section>

      <footer id="footer" className="bg-[#f7f7f7] px-6 py-10">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <img
            src={`${imageBase}/assets/img/pathways-logo/noida-white.svg`}
            alt="Pathways School Noida"
            className="h-10 rounded-sm bg-[#0e6f82] px-2 py-1"
          />
          <div className="grid gap-5 text-xs uppercase tracking-wide text-[#173b4a] sm:grid-cols-3">
            <div>
              <h3 className="font-bold text-[#e84135]">Noida</h3>
              <p className="mt-2 leading-5">Sector 100, Noida</p>
            </div>
            <div>
              <h3 className="font-bold text-[#e84135]">Admissions</h3>
              <p className="mt-2 leading-5">Apply now and visit campus</p>
            </div>
            <div>
              <h3 className="font-bold text-[#e84135]">Connect</h3>
              <p className="mt-2 leading-5">info@pathways.in</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
