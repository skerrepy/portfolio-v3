"use client";
import React from "react";
import Link from "next/link";
import { LinkPreview } from "./link-preview";

type ExperienceCardProps = {
  from: string;
  to?: string;
  url: string;
  role: string;
  company: string;
  technologies?: string[];
  description: string;
};
type PillProps = {
  name: string;
};
const Pill = ({ name }: PillProps) => {
  return (
    <div className="flex items-center group-hover:text-teal-200/100 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-500 ">
      {name}
    </div>
  );
};
const ExperienceCard = ({
  from,
  to,
  url,
  role,
  technologies,
  description,
  company,
}: ExperienceCardProps) => {
  return (
    <div className="group  cursor-pointer relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute transition duration-300  -inset-x-4 -inset-y-4 z-0 hidden rounded-md motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-teal-600 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
      </div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide group-hover:text-white text-slate-700 sm:col-span-2">
          {from} {from && to&& "—"} {to}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-bold leading-snug text-slate-200">
            <div>
              <LinkPreview
                className="inline-flex items-baseline font-bold leading-tight text-slate-800 group-hover:text-teal-300 focus-visible:text-teal-300  group/link "
                url={url}
              >
                <span className="text-slate-800 group-hover:text-zinc-100">

                  {role}{" "}
                  {company&&role&& "— "}
                  {company&&
                   <span className="inline-block">
                   {company}

                   <svg
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
                 </span>
                  }
                 
                </span>
              </LinkPreview>
            </div>
          </h3>
          <p className="mt-2 group-hover:text-zinc-50 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap">
            {technologies?.map((tech) => (
              <li className="mr-1.5 mt-2">
                <Pill key={tech} name={tech} />
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default ExperienceCard;
