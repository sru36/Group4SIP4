import { ExternalLink, Code } from "lucide-react";

export default function Credits() {
  const libraryTools = [
    {
      name: "Wokwi",
      description: "Online Arduino & electronics simulator",
      url: "https://wokwi.com/",
      icon: "⚡",
    },
    {
      name: "Robu.in",
      description: "Electronics components and modules",
      url: "https://robu.in/",
      icon: "🛠️",
    },
    {
      name: "MITS Gwalior",
      description: "Educational resources and documentation",
      url: "https://web.mitsgwalior.in/",
      icon: "📚",
    },
    {
      name: "Centre of IoT",
      description: "Project resources and documentation",
      url: "https://drive.google.com/drive/folders/1jFMIqpXL6DxjAyQSwz_QgBtuX-mDb0jH",
      icon: "🌐",
    },
  ];

  return (
    <section id="credits" className="section-container bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 space-y-4 text-center animate-slide-up">
          <h2 className="section-title">Library Tools</h2>
          <p className="section-description">
            Essential tools and resources used in this project
          </p>
        </div>

        {/* Library Tools Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {libraryTools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl shadow-soft p-8 text-center hover:shadow-soft-lg transition-all duration-300 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{tool.icon}</div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {tool.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {tool.description}
              </p>
              <div className="flex items-center justify-center gap-2 text-primary font-medium">
                <Code className="w-4 h-4" />
                Visit
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
