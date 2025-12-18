import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

interface Spec {
  label: string;
  value: string;
}

interface WiringPin {
  pin: string;
  connection: string;
}

interface SensorCardProps {
  name: string;
  icon: ReactNode;
  description: string;
  specs: Spec[];
  wiring: WiringPin[];
  wokwiUrl?: string;
}

export default function SensorCard({
  name,
  icon,
  description,
  specs,
  wiring,
  wokwiUrl,
}: SensorCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-300 card-hover">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-foreground">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-secondary/50 rounded-lg transition-colors flex-shrink-0"
            aria-label="Toggle details"
          >
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 gap-4 p-6 bg-gradient-soft border-b border-border">
        {specs.map((spec, index) => (
          <div key={index}>
            <p className="text-xs text-muted-foreground font-medium uppercase">
              {spec.label}
            </p>
            <p className="text-sm font-semibold text-foreground mt-1">
              {spec.value}
            </p>
          </div>
        ))}
      </div>

      {/* Expandable Details */}
      {isExpanded && (
        <div className="p-6 border-t border-border space-y-6 animate-slide-down">
          {/* Wiring Information */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-foreground">
              Wiring & Connections
            </h4>
            <div className="space-y-2">
              {wiring.map((wire, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {wire.pin}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {wire.connection}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {wokwiUrl && (
              <a
                href={wokwiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary/20 transition-colors"
              >
                Wokwi Simulation
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
