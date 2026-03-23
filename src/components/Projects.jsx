// Projects Section — Grid of project cards with SPOTLIGHT badge
import { FiGithub, FiExternalLink } from "react-icons/fi";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
          Projects
        </h2>
        <p className="text-secondary text-lg mb-12">
          Selected work showcasing my development and problem-solving skills
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-md border border-border overflow-hidden flex flex-col cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title + Badges */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.spotlight && (
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Spotlight
                      </span>
                    )}
                    {project.live && (
                      <span className="bg-accent text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Live
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-tag-bg px-3 py-1 rounded-full text-xs font-medium text-primary border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-all duration-300"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-tag-bg rounded-full px-4 py-1.5 text-sm font-medium text-primary border border-border hover:bg-accent hover:shadow-sm transition-all duration-300"
                    >
                      <FiExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
