"use client";
import ExperienceCard from "@/components/ui/experience-card";
import { FlipWords } from "@/components/ui/flip-words";
import { LinkPreview } from "@/components/ui/link-preview";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
export default function Home() {
  type socialMediaPreviewType = {
    icon: React.ReactNode;
    link: string;
  };
  type siteScrollingPoints = {
    title: string;
    id: string;
  };
  interface SectionObserverProps {
    // Define any props if needed
  }
  const words: string[] = ["pixel-perfect", "engaging", "accessible"];

  const social_media_links: socialMediaPreviewType[] = [
    {
      icon: <Github />,
      link: "https://github.com/skerrepy",
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/omar-hanafi-654489100/",
    },
    {
      icon: <Twitter />,
      link: "https://x.com/mikatorigai",
    },
  ];
  const site_scrolling_points: siteScrollingPoints[] = [
    {
      title: "About",
      id: "about",
    },
    {
      title: "Experience",
      id: "experience",
    },
    {
      title: "Freelance Projects",
      id: "freelance_projects",
    },
    {
      title: "Personal Projects",
      id: "personal_projects",
    },
  ];
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const sectionRefs = useRef<Array<HTMLDivElement >|any>([]);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-100px",
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setCurrentSection(sectionId);
        }
      });
    }, options);

    sectionRefs.current.forEach((ref: Element) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Omar Hanafi
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-750 sm:text-xl">
              Full-Stack Developer
            </h2>
            <div className="mt-4 max-w-xs text-slate-600 leading-normal">
              I create <FlipWords words={words} /> digital experiences across
              the full stack.
            </div>
            <nav className="nav hidden lg:block" aria-label="Link scrollers">
              <ul className="mt-16 w-max">
                {site_scrolling_points.map((scp) => (
                  <li key={`link-${scp.id}`}>
                    <Link
                      className="group active flex items-center py-3 "
                      href={`#${scp.id}`}
                    >
                      <span
                        className={cn(
                          "nav-indicator mr-4 h-px w-8 bg-zinc-300 transition-all group-hover:w-16 group-hover:bg-zinc-500 group-focus-visible:w-16 group-focus-visible:bg-zinc-200 motion-reduce:transition-none",
                          { "bg-zinc-500 w-16": scp.id === currentSection }
                        )}
                      ></span>
                      <span
                        className={cn(
                          "nav-text text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-zinc-900 group-focus-visible:text-zinc-200",
                          { "text-zinc-900": scp.id === currentSection }
                        )}
                      >
                        {scp.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <ul className="ml-1 lg:mb-0 mb-4 mt-4 lg:mt-8 flex items-center">
            {social_media_links.map((sml, index) => (
              <li
                key={`sml-${index}`}
                className="transform hover:-translate-y-1 transition duration-100 mr-5 text-xs shrink-0"
              >
                <Link href={sml.link} target="_noblank">
                  {sml.icon}
                </Link>
              </li>
            ))}
          </ul>
        </header>
        <div></div>
        <main className="pt-18 lg:w-1/2 lg:py-24">
          <section
            ref={(el) => sectionRefs.current.push(el)}
            id="about"
            className="mb-14 scroll-mt-16 md:mb-24 lg:mb-30 lg:scroll-mt-20"
          >
            <div className="mb-4">
              Hey there!{" "}
              👋
              I&apos;m a passionate full stack developer who caught the web
              development bug at 16 when I created my first website out of sheer
              curiosity — and I&apos;ve been hooked ever since! I&apos;ve had the pleasure
              of working with a{" "}
              <LinkPreview
                className="font-bold text-black-600"
                url="https://www.ispeak.to/"
              >
                startup
              </LinkPreview>{" "}
              , doing some freelancing, and even sharing my knowledge through{" "}
              <LinkPreview
                className="font-bold "
                url="https://preply.com/en/tutor/3130632"
              >
                tutoring
              </LinkPreview>
              . When I&apos;m not diving into code, you&apos;ll find me exploring new
              destinations or taking leisurely strolls, soaking in the world
              beyond the screen.
            </div>

            <Link className="group underline underline-offset-4 transition ease-in-out duration-400 hover:underline-offset-8 group/link" target="_blank" href="/Omar Hanafi's CV.pdf" >
              View My CV  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                     aria-hidden="true"
                   >
                     <path
                       fillRule="evenodd"
                       d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                       clipRule="evenodd"
                     ></path>
                   </svg>
            </Link>
          </section>
          <TracingBeam className="px-10 md:px-2">
            {sections.map((section) => {
              return (
                <section
                  ref={(el) => sectionRefs.current.push(el)}
                  key={section.header}
                  id={section.id}
                  className="max-w-2xl mx-auto antialiased pt-4 flex flex-col "
                >
                  <h3 className="font-bold text-2xl my-4">{section.header}</h3>
                  {section.content.map((item, index) => (
                    <div key={`content-${index}`} className="mb-20">
                      <ExperienceCard
                      
                        technologies={item.technologies}
                        from={item.from}
                        to={item.to}
                        url={item.url}
                        role={item.role}
                        company={item.company}
                        description={item.description}
                      />
                    </div>
                  ))}
                </section>
              );
            })}
            <div></div>
          </TracingBeam>
        </main>
      </div>
    </div>
  );
}

const professional_experience = [
  {
    technologies: [
      "React Js",
      "MongoDB",
      "Javascript",
      "Node JS",
      "Nginx",
      "AWS",
      "Cloudflare",
      "Twillio",
      "Mailgun",
    ],
    from: "September 2023",
    to: "Present",
    role: "Freelancer",
    company: "",
    description:
      "As a freelance software developer, I specialize in providing tailored solutions to clients seeking custom software development. I leverage my expertise to deliver high-quality code and responsive applications, meeting diverse project requirements and deadlines. With a commitment to client satisfaction, I ensure clear communication and collaborate closely to translate ideas into functional, scalable software solutions.",
    url: window?.location?.href,
  },
  {
    technologies: [
      "React Js",
      "MongoDB",
      "Javascript",
      "Node JS",
      "Python",
      "Arduino",
    ],
    from: "April 2023",
    to: "September 2023",
    role: "Software Development Tutor",
    company: "Preply",
    description:
      "As a tutor on Preply, I shared my expertise in software development with students, guiding them through fundamental concepts and advanced techniques. I tailored lessons to individual learning styles, focusing on practical coding skills and problem-solving strategies. Through personalized instruction and real-world examples, I empowered students to build confidence and proficiency in software development.",
    url: "https://www.preply.com/",
  },
  {
    technologies: [
      "React Js",
      "Storybook",
      "Javascript",
      "TypeScript",
      "Socket.Io",
      "Material UI",
    ],
    from: "June 2022",
    to: "October 2022",
    role: "Frontend Developer",
    company: "ISpeak(Formerly Pengguin)",
    description:
      "I optimized development efficiency by creating reusable components and integrating Pengguin's UI library. Contributed new features to enhance Pengguin's web app and conducted rigorous code reviews to resolve bugs and refactor code, reducing technical debt. Additionally, provided design solutions for a more user-friendly interface, ensuring an intuitive experience for our users",
    url: "https://www.ispeak.to/",
  },
];
const freelance_projects = [
  {
    technologies: [
      "React Js",
      "MongoDB",
      "Express JS",
      "Javascript",
      "Node JS",
      "Nginx",
      "AWS",
      "Cloudflare",
      "Twillio",
      "Mailgun",
    ],
    from: "September 2023",
    to: "May 2024",
    role: "",
    company: "Bookclick",
    description:
      "BookClick optimizes booking processes, HR management, contract e-signing, and reminders for service providers, integrating scheduling, payments, and real-time availability updates to enhance operational efficiency and customer experience.",
    url: "https://www.bookclick.com/",
  },
  {
    technologies: ["React Js", "MongoDB", "ExpressJs", "NodeJS", "Cloudinary"],
    from: "July 2021",
    to: "August 2021",
    role: "",
    company: "Pharaoh.vip",
    description:
      "Pharaoh.VIP is a freelance project I've developed, focusing on creating a user-friendly e-commerce platform for luxury fashion and accessories. It features secure transactions, intuitive navigation, and personalized experiences, aiming to deliver a seamless shopping journey tailored to discerning tastes. This project reflects my commitment to crafting functional and elegant solutions in the freelance arena.",
    url: "https://pharaoh.vip/",
  },
];
const personal_projects = [
  {
    technologies: ["React Native", "Javascript", "Express JS", "Python"],
    from: "Feburary 2023",
    role: "",
    company: "MU",
    description:
      "MU(Moyenne Universitaire) searches scraps all of the public data of universities in tunisia and helps users to calculate their semester's average with ease.",
    url: "https://vimeo.com/802479244",
  },
  {
    technologies: [
      "React Js",
      "MongoDB",
      "Flask",
      "Javascript",
      "Python",
      "Nginx",
      "AWS",
      "Cloudflare",
      "Docker",
      "Intl",
    ],
    from: "Mars 2020",
    to: "October 2020",
    role: "",
    company: "Tunytalk",
    description:
      "Tunytalk is a personal project I've created, drawing inspiration from Reddit's community-focused approach to social networking. It's designed to foster open and engaging discussions among users within specialized communities called 'Tunys'. By emphasizing user participation through features like voting and moderation, Tunytalk aims to create a welcoming online environment where everyone can share and discover content based on their interests, promoting positive interactions and meaningful connections.",
    url: "https://github.com/skerrepy/tunytalk-client",
  },
];
const sections = [
  {
    header: "Experience",
    id: "experience",
    content: professional_experience,
  },
  {
    header: "Freelance Projects",
    id: "freelance_projects",
    content: freelance_projects,
  },
  {
    header: "Personal Projects",
    id: "personal_projects",
    content: personal_projects,
  },
];
