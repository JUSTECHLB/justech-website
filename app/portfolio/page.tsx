"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
type Project = {
    title: string;
    description: string;
    image: string;
    previewImage: string;
    categories: string[]; 
    technologies: string[];
    liveUrl: string;
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

const projects: Project[] = [
    {
        title: "LEBOTICS",
        description: "A full-stack e-Responsive corporate website showcasing robotics education, hardware prototyping, and tech services, optimized for web and mobile.",
        image: "images/lebotics-logo.png",
        previewImage: "images/lebotics.jpg",
        categories: ["web", "seo"],
        technologies: ["React", "Node.js", "Tailwind CSS"],
        liveUrl: "https://lebotics.omarchouman.com/"
    },
    {
        title: "JMR CONSULTING",
        description: "A clean, professional website built for JMR Consulting to showcase consulting services, team expertise, and contact options. Fully responsive and designed to convert visitors into clients.",
        image: "images/jmr-logo.png",
        previewImage: "images/jmr.png",
        categories: ["web"],
        technologies: ["React", "Node.js", "Tailwind CSS"],
        liveUrl: "https://jmrconsulting.me/"
    },
    {
        title: "AGS SOLUTIONS",
        description: "A responsive corporate website designed for AGS Solutions to highlight their services and expertise. Built with a modern design, optimized for both desktop and mobile devices, and structured for SEO visibility.",
        image: "images/ags-logo.png",
        previewImage: "images/ags.png",
        categories: ["seo", "web"], 
        technologies: ["React", "Node.js", "Tailwind CSS"],
        liveUrl: "https://agssolutions.ae/"
    },
];

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Web Design & Development", value: "web" },
    { label: "Mobile Application Development", value: "mobile" },
    { label: "SEO Projects", value: "seo" }
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="portfolio" className="bg-gradient-to-r from-dark-lighter/90 to-dark/90 backdrop-blur-md p-5 z-0 pt-24 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center space-y-4 mb-16">
          <h2>
            <span className="text-5xl sm:text-6xl md:text-7xl tracking-tight text-white">Our </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-blue-400">Portfolio</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              className={(activeFilter === filter.value ? "bg-gradient-to-r from-blue to-blue-dark text-white px-8 py-6 text-lg h-auto rounded-full group transition-all duration-300 shadow-lg shadow-blue/20 hover:shadow-blue/30 hover:scale-105": "")+"order-blue/20 hover:bg-dark-lighter text-white px-8 py-6 text-lg h-auto rounded-full backdrop-blur-sm hover:border-blue/40 transition-all duration-300"}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {filteredProjects.length ===0 ?(
            <div className="col-span-full text-center text-muted-foreground ">
              No projects found for the selected category.
            </div>):(filteredProjects.map((project, idx) => (
              <div
                key={project.title + idx}
                className="bg-card rounded-2xl shadow p-6 flex flex-col border-2 border-blue-light "
              >
                <div className="h-40 bg-muted rounded mb-4 flex items-center justify-center">
                  {project.image ?(
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover h-fit w-fit rounded hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => setPreviewProject(project)}
                    />
                  ):(
                    <span className="text-muted-foreground">No Image</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-primary hover:text-blue-light transition-colors">
                See Project Details &rarr;
                </a>
              </div>
            ))
          )}

        </div>
        {previewProject &&(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setPreviewProject(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={previewProject.previewImage}
              alt={previewProject.title}
              className="w-full h-48 object-contain rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              {previewProject.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {previewProject.description}
            </p>
            <a
              href={previewProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue to-blue-dark text-white px-4 py-2 text-sm h-auto rounded-full group transition-all duration-300 shadow-lg shadow-blue/20 hover:shadow-blue/30 "
            >
              View Live Project
            </a>
          </div>
        </div>
        )}
      </div>
    </section>
);
}