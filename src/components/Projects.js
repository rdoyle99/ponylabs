import React from "react";

const projects = [
  {
    name: "Magic Sales Bot ↗️",
    initials: "🧙",
    href: "https://magicsalesbot.com/",
    bgColor: "bg-blue-400",
    description: "Using AI to write sales emails 10x faster.",
  },
  {
    name: "JiffyLead ↗️",
    initials: "🚀",
    href: "https://jiffylead.com/",
    bgColor: "bg-green-400",
    description: "Find leads and their emails, fast and for free.",
  },
  {
    name: "Personal Site ↗️",
    initials: "☘️",
    href: "https://ryanpdoyle.com/",
    bgColor: "bg-yellow-400",
    description: "Where I share my writing.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class Projects extends React.Component {
  render() {
    return (
      <div className="m-10 mt-20">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Projects
        </h2>
        <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-1 lg:grid-cols-1">
          {projects.map((project) => (
            <a
              href={project.href}
              className="text-gray-900 font-medium hover:text-gray-600 "
              target="_blank"
              rel="noreferrer"
            >
              <li
                key={project.name}
                className="col-span-1 flex shadow-sm rounded-md"
              >
                <div
                  className={classNames(
                    project.bgColor,
                    "flex-shrink-0 flex items-center justify-center w-32 text-white text-sm font-medium rounded-l-md"
                  )}
                >
                  {project.initials}
                </div>
                <div className=" hover:bg-blue-100 flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <p>{project.name}</p>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    );
  }
}

export default Projects;
