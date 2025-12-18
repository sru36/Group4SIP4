import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full pt-16 pb-16 md:pb-24 lg:pb-32 flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                Group 4
                <br />
                <span className="gradient-text">Centre of IoT</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                A hands-on IoT kit built with multiple sensors. Learn how to
                build, integrate, and deploy connected hardware systems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("sensors")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
              >
                Explore Sensors
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  10+
                </p>
                <p className="text-sm text-muted-foreground">Sensors & Components</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  5
                </p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:flex items-center justify-center animate-fade-in">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl overflow-hidden">
                <img 
                  src="/circuit.jpg" 
                  alt="IoT Kit" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">IoT Hardware Kit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
