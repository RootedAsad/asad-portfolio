import { Helmet } from "react-helmet-async";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Certificates from "../components/sections/Certificates";
import Contact from "../components/sections/Contact";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://asad-portfolio-tau.vercel.app/portfolio#person",
  "name": "Muhammad Asad",
  "alternateName": "RootedAsad",
  "url": "https://asad-portfolio-tau.vercel.app/portfolio",
  "image": "https://asad-portfolio-tau.vercel.app/images/profile.png",
  "jobTitle": "Full Stack Developer",
  "description":
    "Muhammad Asad, known online as RootedAsad, is a Full Stack Developer specializing in React, Node.js, Express.js, MongoDB, and modern web applications.",
  "sameAs": [
    "https://github.com/RootedAsad",
    "https://www.linkedin.com/in/RootedAsad/"
  ]
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>RootedAsad — Full Stack Developer</title>

        <meta
          name="description"
          content="RootedAsad is a Full Stack Developer building modern web applications with React, Node.js, Express, MongoDB, and modern web technologies."
        />

        <link
          rel="canonical"
          href="https://asad-portfolio-tau.vercel.app/portfolio"
        />

        <meta
          property="og:title"
          content="RootedAsad — Full Stack Developer"
        />

        <meta
          property="og:description"
          content="Portfolio of RootedAsad — Full Stack Developer building modern web applications and digital experiences."
        />

        <meta
          property="og:url"
          content="https://asad-portfolio-tau.vercel.app/portfolio"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://asad-portfolio-tau.vercel.app/images/profile.png"
        />

        <meta
          property="og:image:alt"
          content="Muhammad Asad — RootedAsad Full Stack Developer"
        />

        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}