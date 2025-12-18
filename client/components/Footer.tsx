import { Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-foreground py-12 md:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl font-bold gradient-text mb-2">
              Group 4 — Centre of IoT
            </h3>
            <p className="text-sm text-muted-foreground">Skill Internship 2025</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/sru36/Group4SIP4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors text-primary-foreground font-medium text-sm"
            >
              <Github className="w-4 h-4" />
              <span className="whitespace-nowrap">GitHub</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} Group 4 — Centre of IoT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
