import { Linkedin, Github, ExternalLink } from "lucide-react";

interface TeamMember {
  name: string;
  branch: string;
  role: string;
  isWebsiteDeveloper?: boolean;
  avatar?: string; // Path to image in public folder
  socials?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export default function Team() {
  const members: TeamMember[] = [
    {
      name: "Srushti Rawal",
      branch: "Artificial Intelligence & Data Science",
      role: "Centre of AI",
      avatar: "Sr.jpg", // Add your image to public/team/
      isWebsiteDeveloper: true,
      socials: {
        github: "https://github.com/sru36",
        linkedin: "https://www.linkedin.com/in/srushtirawal/",
        website: "https://srushtifr.vercel.app/"
      }
    },
    {
      name: "Anish Malaiya",
      branch: "Electronics & Telecommunication",
      role: "Electronics &  Telecommunication",
      avatar: "am.jpg", // Add your image to public/team/
      socials: {
        github: "https://github.com/anishmalaiya25",
        linkedin: "https://www.linkedin.com/in/anish-malaiya-242abb335/"
      }
    },
    {
      name: "Atharv Gupta",
      branch: "Information Technology  in Artificial Intelligence & Robotics",
      role: "Centre of AI",
      avatar: "ag.jpg", // Add your image to public/team/
      socials: {
        linkedin: "https://www.linkedin.com/in/atharv-gupta-45a37b36a/"
      }
    },
    {
      name: "Manas Shukla",
      branch: "Electronics & Telecommunication",
      role: "Electronics &  Telecommunication",
      avatar: "ms.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/manas-shukla-975406359/"
      }
    },
    {
      name: "Aashay Sangam",
      branch: "Electronics & Telecommunication",
      role: "Electronics &  Telecommunication",
      avatar: "aa.jpg",
      socials: {

        linkedin: "https://www.linkedin.com/in/aashay-sangam142/"
      }
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 lg:py-32 bg-background/50 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the talented people behind Group 4's Centre of IoT
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <div key={index}>
              {member.isWebsiteDeveloper ? (
                <div
                  className="bg-card rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-300 card-hover animate-fade-in border-2 border-primary p-1 relative glow-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-card rounded-lg overflow-hidden">
                    {/* Avatar */}
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                      {member.avatar ? (
                        <img
                          src={`/${member.avatar}`}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to name initials if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = '';
                            target.className = 'hidden';
                            const fallback = document.createElement('div');
                            fallback.className = 'text-4xl flex items-center justify-center w-full h-full bg-primary/10';
                            fallback.textContent = member.name.split(' ').map(n => n[0]).join('').toUpperCase();
                            target.parentNode?.insertBefore(fallback, target);
                            target.remove();
                          }}
                        />
                      ) : (
                        <div className="text-4xl flex items-center justify-center w-full h-full bg-primary/10">
                          {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8 space-y-4">
                      <div className="space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-heading font-bold text-base lg:text-lg text-foreground">
                            {member.name}
                          </h3>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full whitespace-nowrap">
                            Website Dev
                          </span>
                        </div>
                        <p className="text-xs font-medium text-primary">
                          {member.branch}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm lg:text-base font-semibold text-foreground">
                          {member.role}
                        </p>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-2 pt-4 border-t border-border">
                        {member.socials?.github && (
                          <a
                            href={member.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-secondary/50 rounded-lg transition-colors flex items-center justify-center"
                            aria-label={`${member.name}'s GitHub`}
                            title="GitHub"
                          >
                            <Github className="w-4 h-4 text-muted-foreground" />
                          </a>
                        )}
                        {member.socials?.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-secondary/50 rounded-lg transition-colors flex items-center justify-center"
                            aria-label={`${member.name}'s LinkedIn`}
                            title="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4 text-muted-foreground" />
                          </a>
                        )}
                        {member.socials?.website && (
                          <a
                            href={member.socials.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-secondary/50 rounded-lg transition-colors flex items-center justify-center"
                            aria-label={`${member.name}'s Website`}
                            title="Website"
                          >
                            <ExternalLink className="w-4 h-4 text-muted-foreground" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="bg-card rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-300 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Avatar */}
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                    {member.avatar ? (
                      <img
                        src={`/${member.avatar}`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '';
                          target.className = 'hidden';
                          const fallback = document.createElement('div');
                          fallback.className = 'text-4xl flex items-center justify-center w-full h-full bg-primary/10';
                          fallback.textContent = member.name.split(' ').map(n => n[0]).join('').toUpperCase();
                          target.parentNode?.insertBefore(fallback, target);
                          target.remove();
                        }}
                      />
                    ) : (
                      <div className="text-4xl flex items-center justify-center w-full h-full bg-primary/10">
                        {member.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-base lg:text-lg text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium text-primary">
                        {member.branch}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm lg:text-base font-semibold text-foreground">
                        {member.role}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2 pt-4 border-t border-border">
                      {member.socials?.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-secondary/50 rounded-lg transition-colors flex items-center justify-center"
                          aria-label={`${member.name}'s GitHub`}
                          title="GitHub"
                        >
                          <Github className="w-4 h-4 text-muted-foreground" />
                        </a>
                      )}
                      {member.socials?.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-secondary/50 rounded-lg transition-colors flex items-center justify-center"
                          aria-label={`${member.name}'s LinkedIn`}
                          title="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4 text-muted-foreground" />
                        </a>
                      )}
                      {member.socials?.website && (
                        <a
                          href={member.socials.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-secondary/50 rounded-lg transition-colors flex items-center justify-center"
                          aria-label={`${member.name}'s Website`}
                          title="Website"
                        >
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
