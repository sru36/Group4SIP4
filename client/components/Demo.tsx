import { useState } from "react";
import { Download, ChevronDown } from "lucide-react";

export default function Demo() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      step: 1,
      title: "Assemble Hardware",
      icon: "🔧",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Follow these steps to assemble your IoT kit:
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="text-primary font-bold">1.</span>
              <span>Prepare Raspberry Pi Pico/Raspberry Pi/STEM32 board and power supply</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">2.</span>
              <span>Install sensor breakout boards on breadboard</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">3.</span>
              <span>
                Connect VCC and GND pins to power rails using appropriate wires
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">4.</span>
              <span>Connect sensor signal pins to microcontroller GPIO pins</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">5.</span>
              <span>Double-check all connections against wiring diagrams</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">6.</span>
              <span>Connect power supply and verify LED indicators</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      step: 2,
      title: "Install Libraries",
      icon: "📚",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Required libraries for sensor integration:
          </p>
          <div className="space-y-3">
            <div className="bg-secondary/10 p-3 rounded-lg">
              <p className="font-semibold text-sm text-foreground">
                DHT Sensor Library
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Author: Adafruit - For DHT11/DHT22 temperature sensors
              </p>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg">
              <p className="font-semibold text-sm text-foreground">
                Ultrasonic Sensor Library
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                For HC-SR04 distance measurement
              </p>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg">
              <p className="font-semibold text-sm text-foreground">
                BMP180 Barometer Library
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Author: Adafruit - I2C pressure sensor
              </p>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg">
              <p className="font-semibold text-sm text-foreground">
                Wire Library
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Built-in library for I2C communication
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Install from Arduino IDE → Sketch → Include Library → Manage
            Libraries
          </p>
        </div>
      ),
    },
    {
      step: 3,
      title: "Upload Code",
      icon: "💻",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Sample code to initialize and read sensor data:
          </p>
          <div className="bg-muted text-foreground p-4 rounded-lg overflow-x-auto font-mono text-xs border border-border">
            <pre>{`#include <DHT.h>
#include <Wire.h>

// Sensor definitions
#define DHT_PIN 2
#define DHT_TYPE DHT22
DHT dht(DHT_PIN, DHT_TYPE);

// HC-SR04 pins
const int TRIG_PIN = 7;
const int ECHO_PIN = 8;

void setup() {
  Serial.begin(9600);
  dht.begin();
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
}

void loop() {
  // Read DHT22
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  // Read HC-SR04
  long distance = readDistance();
  
  // Print values
  Serial.print("Temp: ");
  Serial.print(temp);
  Serial.print("°C, Humidity: ");
  Serial.println(humidity);
}`}</pre>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="demo" className="section-container bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 space-y-4 text-center animate-slide-up">
          <h2 className="section-title">Circuit & Demo</h2>
          <p className="section-description">
            Complete circuit diagrams, wiring instructions, and setup guide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Circuit Diagram */}
          <div className="space-y-6 animate-slide-up">
            <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-5xl">📋</div>
                  <p className="text-muted-foreground text-sm">
                    Circuit Diagram Placeholder
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Add your Fritzing diagram or circuit image here
                  </p>
                </div>
              </div>
              <div className="p-6 border-t border-border">
                <h3 className="font-heading font-bold text-foreground mb-2">
                  Circuit Schematic
                </h3>
                <p className="text-sm text-muted-foreground">
                  Detailed wiring diagram showing all sensor connections to the
                  microcontroller
                </p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary/20 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Diagram
            </a>
          </div>

          {/* Right - Setup Guide */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-2xl text-foreground">
                Getting Started
              </h3>
              <p className="text-muted-foreground">
                Follow these expandable steps to set up your IoT kit and start
                collecting sensor data.
              </p>
            </div>

            {/* Setup Steps - Collapsible */}
            <div className="space-y-4">
              {steps.map((item) => (
                <div key={item.step} className="bg-card rounded-xl shadow-soft overflow-hidden">
                  <button
                    onClick={() =>
                      setExpandedStep(
                        expandedStep === item.step ? null : item.step
                      )
                    }
                    className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div className="text-left">
                        <h4 className="font-heading font-semibold text-foreground">
                          {item.step}. {item.title}
                        </h4>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        expandedStep === item.step ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedStep === item.step && (
                    <div className="px-4 pb-4 border-t border-border pt-4 animate-slide-down">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
