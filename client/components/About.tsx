import { CheckCircle } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "Hands-On Learning",
      description: "Practical experience with real IoT hardware and sensors",
    },
    {
      title: "Multiple Sensors",
      description:
        "Integration of 8+ different sensor types for comprehensive data collection",
    },
    {
      title: "Arduino Compatible",
      description:
        "Works with Arduino, Raspberry Pi, and ESP32 microcontrollers",
    },
    {
      title: "Complete Documentation",
      description:
        "Detailed wiring diagrams, specifications, and usage examples",
    },
  ];

  const techStack = [
    "Raspberry Pi Pico",
    "Raspberry Pi",
    "STEM32",
    "Python",
    "MicroPython",
    "Microcontrollers",
    "Sensor Integration",
  ];

  return (
    <section id="about" className="section-container bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h2 className="section-title">About This Project</h2>
              <p className="section-description">
                Group 4's Centre of IoT is a comprehensive, hands-on kit
                designed to teach IoT principles through practical hardware
                integration and sensor management.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-foreground">
                Objective
              </h3>
              <p className="text-muted-foreground">
                To provide a complete learning platform that demonstrates how
                multiple sensors can be integrated, configured, and utilized in
                a real-world IoT application.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-foreground">
                Microcontroller
              </h3>
              <p className="text-muted-foreground">
                Built with compatibility for Raspberry Pi Pico, Raspberry Pi, and STEM32,
                offering flexibility in hardware choice and scalability options.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-foreground">
                Use Case
              </h3>
              <p className="text-muted-foreground">
                Perfect for students, hobbyists, and professionals learning IoT
                development, sensor integration, and data acquisition systems.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Features Grid */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-foreground">
                Key Features
              </h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-3 p-4 bg-card rounded-lg shadow-soft hover:shadow-soft-md transition-shadow card-hover"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-foreground">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
