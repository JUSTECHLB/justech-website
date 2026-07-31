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
        description: "A responsive corporate website covering robotics education, hardware prototyping, and technical services, optimized for web and mobile.",
        image: "images/lebotics-logo.png",
        previewImage: "images/lebotics.jpg",
        categories: ["web"],
        technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
        liveUrl: "https://lebotics.omarchouman.com/"
    },
    {
        title: "JMR CONSULTING",
        description: "A clean, professional website built for JMR Consulting to showcase consulting services, team expertise, and contact options. Fully responsive and designed to convert visitors into clients.",
        image: "images/jmr-logo.png",
        previewImage: "images/jmr.png",
        categories: ["web"],
        technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
        liveUrl: "https://jmrconsulting.me/"
    },
    {
        title: "AGS SOLUTIONS",
        description: "A responsive corporate website designed for AGS Solutions to highlight their services and expertise. Built with a modern design, optimized for both desktop and mobile devices, and structured for SEO visibility.",
        image: "images/ags-logo.png",
        previewImage: "images/ags.png",
        categories: ["web"], 
        technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
        liveUrl: "https://agssolutions.ae/"
    },
    {
      title: "Rut Essentials",
      description: "Five separate builds plus an ongoing maintenance and management retainer. A responsive corporate site presenting Private Label, Hospitality, and Spa & Salon product lines, built around visual storytelling and mobile-first browsing.",
      image: "images/rut-logo.png",
      previewImage: "images/rut.png",
      categories: ["web", "seo"], 
      technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://rutessentials.com/"
  },
  {
    title: "Spade Travel",
    description: "A responsive web application for Spade's internal travel agency operations. The dashboard covers people and resource control, client management, reporting, and admin workflows, built for clarity and consistency across devices.",
    image: "images/spade-logo.webp",
    previewImage: "images/spade.png",
    categories: ["web"], 
    technologies: ["PHP", "Laravel", "Blade", "CSS", "JavaScript"],
    liveUrl: "#"
  },
  {
    title: "AmazeTech",
    description: "A responsive e-commerce website for AmazeTech, selling electronics, accessories, and gadgets. Built with clear category navigation and optimized for mobile and desktop performance.",
    image: "images/amazetech-logo.webp",
    previewImage: "images/amazetech.png",
    categories: ["web", "seo"], 
    technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://amazetechlb.com/"
  },
  {
    title: "Noma Fashion",
    description: "A high-fashion storefront for Noma Fashion, showing abayas, gowns, and women's wear with refined imagery, clear product categories, and a short checkout path. Fully responsive.",
    image: "images/noma-logo.png",
    previewImage: "images/noma.png",
    categories: ["web"], 
    technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://nomafashion.com/"
  },
  {
    title: "Protein Warehouse Lebanon",
    description: "A responsive storefront for Protein Warehouse Lebanon, selling supplements and wellness products. Clear product visuals, fast-loading pages, and a short path from browsing to checkout.",
    image: "images/pwl-logo.webp",
    previewImage: "images/pwl.png",
    categories: ["web"], 
    technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://proteinwarehouselb.com/"
  },
  {
    title: "Top Designs HD",
    description: "A responsive agency website for Top Designs HD covering branding, digital marketing campaigns, and media production. Visual-heavy, with a clear route from portfolio to enquiry.",
    image: "images/topdesigns-logo.png",
    previewImage: "images/topdesigns.png",
    categories: ["web"], 
    technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://topdesignshd.com/"
  },
  {
    title: "Fit District",
    // TODO (needs input from JUSTECH): real description. The previous copy here was
    // duplicated from Top Designs HD and described the wrong client.
    description: "Responsive website design and development for Fit District.",
    image: "images/fd-logo.webp",
    previewImage: "images/fd.png",
    categories: ["web"], 
    technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://fit-district.com/"
  },
  {
    title: "The Yas Design",
    description: "A responsive e-commerce platform for The Yas Design, selling planners, notebooks, and desk essentials. Considered product photography, simple product flows, and mobile and desktop parity.",
    image: "images/theyasdesign-logo.webp",
    previewImage: "images/theyasdesign.png",
    categories: ["web", "seo"], 
    technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://theyasdesign.com/"  
  },
  {
    title: "Maseertak",
    // TODO (needs input from JUSTECH): real description. The previous copy here was
    // duplicated from The Yas Design and described the wrong client.
    description: "Ongoing maintenance and support on an existing WordPress site: hosting, updates, and fixes.",
    image: "images/maseertak-logo.png",
    previewImage: "images/maseertak.png",
    categories: ["maintenance"], 
    technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://maseertak.com/"  
  },
  {
    title: "GME",
    // TODO (needs input from JUSTECH): real description. The previous copy here was
    // duplicated from The Yas Design and described the wrong client.
    description: "Ongoing maintenance and support on an existing WordPress site: hosting, updates, and fixes.",
    image: "images/gme-logo.png",
    previewImage: "images/gme.png",
    categories: ["maintenance"], 
    technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://gme.com.lb/"  
  },
  {
    title: "Alkoun Business",
    // TODO (needs input from JUSTECH): real description. The previous copy here was
    // duplicated from The Yas Design and described the wrong client.
    description: "Search engine optimization engagement for Alkoun Business.",
    image: "images/alkoun-logo.png",
    previewImage: "images/alkoun.png",
    categories: ["seo"], 
    technologies: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://alkoun-business.com/"  
  },
];

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Web Design & Development", value: "web" },
    { label: "Maintenance & Support", value: "maintenance" },
    { label: "Mobile Application", value: "mobile" },
    { label: "SEO", value: "seo" }
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter(project => project.categories.includes(activeFilter));

  return (
    <section id="portfolio" className="bg-dark p-5 z-0 pt-4 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center space-y-4 mb-16">
          <h1>
            <span className="text-5xl sm:text-6xl md:text-7xl tracking-tight text-white">Our </span>
            <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-blue-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Web and software projects delivered for clients across Lebanon and MENA.
          </p>
        </div>
        {/*
          Featured client. This is the only block on the page with a story attached.
          TODO (needs input from JUSTECH): turn the remaining projects into real case
          studies using problem -> constraint -> approach -> what we built -> result.
          The constraint is what separates a case study from a brag, so it is the field
          worth writing down first. Rut Essentials below still needs its problem,
          constraint, and result filled in.
        */}
        <div className="max-w-3xl mx-auto mb-16 gradient-border rounded-2xl p-8 md:p-10 bg-dark-lighter text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-light mb-4">
            Featured client
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Rut Essentials: <span className="gradient-text">five projects and counting</span>.
          </h3>
          <p className="text-lg text-gray-300">
            Five separate builds plus an ongoing maintenance and management retainer.
            The clearest signal we know how to give: they keep coming back.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
          className={
          (activeFilter === filter.value? "bg-gradient-to-r from-blue to-blue-dark text-white ": "border-blue/20 hover:bg-dark-lighter text-white ") +"px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-6 md:text-lg h-auto rounded-full backdrop-blur-sm hover:border-blue/40 transition-all duration-300"}            >
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