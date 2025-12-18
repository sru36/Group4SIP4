import { Zap, Droplet, Wind, Eye, Activity, TrendingUp, Lightbulb, Flame, Monitor, Droplets, Cpu, Volume2, Thermometer, Grid3x3, Wifi, Fan, Disc3, Lightbulb as BulbIcon, Smartphone } from "lucide-react";
import SensorCard from "./SensorCard";

export default function Sensors() {
  const sensors = [
    {
      name: "Ultrasonic Sensor",
      icon: <Zap className="w-6 h-6 text-primary" />,
      description: "Distance measurement sensor using ultrasonic waves",
      specs: [
        { label: "Operating Voltage", value: "5V DC" },
        { label: "Frequency", value: "40 kHz" },
        { label: "Range", value: "2 cm - 4 m" },
        { label: "Accuracy", value: "±3mm" },
      ],
      wiring: [
        { pin: "VCC", connection: "Power supply 5V" },
        { pin: "GND", connection: "Ground" },
        { pin: "TRIG", connection: "Arduino digital pin (e.g., D7)" },
        { pin: "ECHO", connection: "Arduino digital pin (e.g., D8)" },
      ],
      wokwiUrl: "https://wokwi.com/projects/449752430788516865",
    },
    {
      name: "DHT22 Temperature & Humidity",
      icon: <Droplet className="w-6 h-6 text-primary" />,
      description: "Digital temperature and humidity sensor",
      specs: [
        { label: "Operating Voltage", value: "3.3V - 6V" },
        { label: "Temperature Range", value: "-40°C to 125°C" },
        { label: "Humidity Range", value: "0-100% RH" },
        { label: "Accuracy", value: "±2°C, ±2%" },
      ],
      wiring: [
        { pin: "VCC", connection: "3.3V or 5V" },
        { pin: "GND", connection: "Ground" },
        { pin: "DATA", connection: "Arduino pin with pull-up resistor" },
        { pin: "NC", connection: "Not connected" },
      ],
      wokwiUrl: "https://wokwi.com/projects/450661314250486785",
    },
    {
      name: "MQ-2 Gas Sensor",
      icon: <Wind className="w-6 h-6 text-primary" />,
      description: "Detects combustible gases and smoke",
      specs: [
        { label: "Operating Voltage", value: "5V DC" },
        { label: "Sensitivity", value: "High" },
        { label: "Detection", value: "LPG, Smoke, Methane" },
        { label: "Response Time", value: "~10 seconds" },
      ],
      wiring: [
        { pin: "VCC", connection: "5V power supply" },
        { pin: "GND", connection: "Ground" },
        { pin: "AO", connection: "Arduino analog pin (A0)" },
        { pin: "DO", connection: "Arduino digital pin (optional)" },
      ],
      wokwiUrl: "https://wokwi.com/projects/450662416051396609",
    },
    {
      name: "LDR (Light Dependent Resistor)",
      icon: <Eye className="w-6 h-6 text-primary" />,
      description: "Light intensity and brightness sensor",
      specs: [
        { label: "Operating Voltage", value: "Variable" },
        { label: "Spectral Peak", value: "570nm (yellow-green)" },
        { label: "Dark Resistance", value: ">1MΩ" },
        { label: "Light Resistance", value: "~10KΩ" },
      ],
      wiring: [
        { pin: "Pin 1", connection: "5V through resistor (10kΩ)" },
        { pin: "Pin 2", connection: "Ground" },
        { pin: "Output", connection: "Arduino analog pin (A1)" },
      ],
      wokwiUrl: "https://wokwi.com/projects/449753705407418369",
    },
    {
      name: "PIR Motion Sensor",
      icon: <Activity className="w-6 h-6 text-primary" />,
      description: "Passive infrared motion detection",
      specs: [
        { label: "Operating Voltage", value: "5V DC" },
        { label: "Detection Range", value: "0 - 7 meters" },
        { label: "Output Type", value: "Digital HIGH/LOW" },
        { label: "Response Time", value: "1-2 seconds" },
      ],
      wiring: [
        { pin: "VCC", connection: "5V power supply" },
        { pin: "OUT", connection: "Arduino digital pin (D9)" },
        { pin: "GND", connection: "Ground" },
      ],
      wokwiUrl: "https://wokwi.com/projects/450660648934115329",
    },
    {
      name: "Flame Sensor",
      icon: <Flame className="w-6 h-6 text-primary" />,
      description: "Infrared flame detection sensor",
      specs: [
        { label: "Operating Voltage", value: "5V DC" },
        { label: "Detection Range", value: "0 - 100 cm" },
        { label: "Wavelength", value: "760 - 1100 nm" },
        { label: "Output Type", value: "Analog/Digital" },
      ],
      wiring: [
        { pin: "VCC", connection: "5V power supply" },
        { pin: "GND", connection: "Ground" },
        { pin: "AO", connection: "Arduino analog pin (A2)" },
        { pin: "DO", connection: "Arduino digital pin (D10)" },
      ],
      wokwiUrl: "https://wokwi.com",
    },
    {
      name: "OLED Display",
      icon: <Monitor className="w-6 h-6 text-primary" />,
      description: "128x64 OLED display module with I2C interface",
      specs: [
        { label: "Operating Voltage", value: "3.3V - 5V" },
        { label: "Resolution", value: "128 x 64 pixels" },
        { label: "Interface", value: "I2C" },
        { label: "Color", value: "Monochrome (White)" },
      ],
      wiring: [
        { pin: "VCC", connection: "3.3V or 5V" },
        { pin: "GND", connection: "Ground" },
        { pin: "SCL", connection: "Arduino SCL (A5)" },
        { pin: "SDA", connection: "Arduino SDA (A4)" },
      ],
      wokwiUrl: "https://wokwi.com/projects/450699616967438337",
    },
    {
      name: "Soil Moisture Sensor",
      icon: <Droplets className="w-6 h-6 text-primary" />,
      description: "Capacitive soil moisture measurement sensor",
      specs: [
        { label: "Operating Voltage", value: "3.3V - 5V" },
        { label: "Output Range", value: "0 - 1023 (ADC)" },
        { label: "Measurement", value: "Soil Water Content" },
        { label: "Accuracy", value: "±5%" },
      ],
      wiring: [
        { pin: "VCC", connection: "3.3V or 5V" },
        { pin: "GND", connection: "Ground" },
        { pin: "AO", connection: "Arduino analog pin (A3)" },
      ],
    },
    {
      name: "Raspberry Pi Pico",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      description: "Microcontroller board with dual ARM Cortex-M0+ cores",
      specs: [
        { label: "Processor", value: "Dual ARM Cortex-M0+" },
        { label: "Operating Voltage", value: "1.8V - 5.5V" },
        { label: "GPIO Pins", value: "30 pins" },
        { label: "Memory", value: "264KB RAM, 2MB Flash" },
      ],
      wiring: [
        { pin: "VSYS", connection: "Power supply 5V" },
        { pin: "GND", connection: "Ground" },
        { pin: "GPIO", connection: "Sensor connections" },
      ],
      wokwiUrl: "https://wokwi.com/projects/450699321138946049",
    },
    {
      name: "Raspberry Pi",
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      description: "Single board computer with powerful ARM processor",
      specs: [
        { label: "Processor", value: "ARM Cortex-A72" },
        { label: "Operating Voltage", value: "5V (USB-C)" },
        { label: "GPIO Pins", value: "40 pins (26 GPIO)" },
        { label: "RAM", value: "2GB - 8GB" },
      ],
      wiring: [
        { pin: "5V", connection: "Power supply" },
        { pin: "GND", connection: "Ground" },
        { pin: "GPIO", connection: "Sensor connections" },
      ],
    },
    {
      name: "Buzzer",
      icon: <Volume2 className="w-6 h-6 text-primary" />,
      description: "Audio buzzer for sound alerts and notifications",
      specs: [
        { label: "Operating Voltage", value: "5V - 12V DC" },
        { label: "Frequency", value: "2000 - 3000 Hz" },
        { label: "Sound Level", value: ">80 dB" },
        { label: "Type", value: "Active/Passive" },
      ],
      wiring: [
        { pin: "VCC", connection: "5V power supply" },
        { pin: "GND", connection: "Ground" },
        { pin: "Signal", connection: "Arduino digital pin (PWM)" },
      ],
      wokwiUrl: "https://wokwi.com/projects/450699765285382145",
    },
    {
      name: "DS18B20 Temperature Sensor",
      icon: <Thermometer className="w-6 h-6 text-primary" />,
      description: "1-Wire digital temperature sensor",
      specs: [
        { label: "Operating Voltage", value: "3V - 5.5V" },
        { label: "Temperature Range", value: "-55°C to 125°C" },
        { label: "Accuracy", value: "±0.5°C" },
        { label: "Interface", value: "1-Wire" },
      ],
      wiring: [
        { pin: "VCC", connection: "3V or 5V" },
        { pin: "GND", connection: "Ground" },
        { pin: "DATA", connection: "Arduino digital pin (D4)" },
      ],
      wokwiUrl: "https://wokwi.com/projects/450703573362455553",
    },
    {
      name: "MINI Breadboard",
      icon: <Grid3x3 className="w-6 h-6 text-primary" />,
      description: "Prototyping board for circuit connections without soldering",
      specs: [
        { label: "Type", value: "Solderless" },
        { label: "Holes", value: "400 - 830 ties" },
        { label: "Pin Spacing", value: "2.54mm" },
        { label: "Material", value: "Plastic with metal contacts" },
      ],
      wiring: [
        { pin: "Positive Rail", connection: "Power (+)" },
        { pin: "Ground Rail", connection: "Power (-)" },
        { pin: "Tie Points", connection: "Component connections" },
      ],
    },
    {
      name: "Relay Module",
      icon: <Wifi className="w-6 h-6 text-primary" />,
      description: "Electromagnetic relay for switching high power circuits",
      specs: [
        { label: "Coil Voltage", value: "5V DC" },
        { label: "Contact Rating", value: "10A 250V AC" },
        { label: "Switching Time", value: "~10ms" },
        { label: "Channels", value: "1 - 8" },
      ],
      wiring: [
        { pin: "VCC", connection: "5V power supply" },
        { pin: "GND", connection: "Ground" },
        { pin: "IN", connection: "Arduino digital pin" },
        { pin: "COM", connection: "Load circuit" },
      ],
      wokwiUrl: "https://wokwi.com",
    },
    {
      name: "Servo Motor",
      icon: <Disc3 className="w-6 h-6 text-primary" />,
      description: "Precision servo motor for positioning and control",
      specs: [
        { label: "Operating Voltage", value: "4.8V - 6V" },
        { label: "Torque", value: "4.8 kg·cm" },
        { label: "Speed", value: "0.16 sec/60°" },
        { label: "Rotation", value: "0° - 180°" },
      ],
      wiring: [
        { pin: "VCC", connection: "5V power supply" },
        { pin: "GND", connection: "Ground" },
        { pin: "Signal", connection: "Arduino PWM pin (D3, D5, D6)" },
      ],
      wokwiUrl: "https://wokwi.com/projects/450663444455079937",
    },
    {
      name: "DC Fan",
      icon: <Fan className="w-6 h-6 text-primary" />,
      description: "DC motor fan for ventilation and cooling",
      specs: [
        { label: "Operating Voltage", value: "3V - 12V DC" },
        { label: "Current", value: "80 - 200 mA" },
        { label: "Speed", value: "Variable" },
        { label: "Speed Control", value: "PWM" },
      ],
      wiring: [
        { pin: "VCC", connection: "Power supply (3-12V)" },
        { pin: "GND", connection: "Ground" },
        { pin: "PWM", connection: "Arduino PWM pin (via transistor)" },
      ],
      wokwiUrl: "https://wokwi.com",
    },
    {
      name: "Bulb Holder",
      icon: <BulbIcon className="w-6 h-6 text-primary" />,
      description: "Socket for connecting and powering light bulbs",
      specs: [
        { label: "Type", value: "E27 / E14 / B22" },
        { label: "Max Voltage", value: "250V AC" },
        { label: "Max Current", value: "10A" },
        { label: "Wattage", value: "60W - 100W" },
      ],
      wiring: [
        { pin: "Live", connection: "AC power line" },
        { pin: "Neutral", connection: "AC return" },
        { pin: "Ground", connection: "Safety ground (if available)" },
      ],
    },
  ];

  return (
    <section id="sensors" className="py-16 md:py-24 lg:py-32 bg-background w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            Sensor Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of sensors and components, their specifications,
            wiring diagrams, and integration details
          </p>
        </div>

        {/* Sensors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sensors.map((sensor, index) => (
            <div 
              key={index} 
              className="animate-fade-in h-full"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <SensorCard {...sensor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
