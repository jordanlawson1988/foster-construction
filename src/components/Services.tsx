"use client";

import { motion } from "framer-motion";
import {
  ChefHat,
  Bath,
  Home,
  Paintbrush,
  Hammer,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    description:
      "Transform your kitchen into the heart of your home with custom cabinetry, premium countertops, and modern layouts designed for your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Bath,
    title: "Bathroom Renovations",
    description:
      "Create your personal sanctuary with luxurious tile work, walk-in showers, soaking tubs, and elegant vanities that elevate your daily routine.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Home,
    title: "Home Additions",
    description:
      "Expand your living space with seamless additions that blend perfectly with your existing home, adding value and room to grow.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Paintbrush,
    title: "Interior Finishing",
    description:
      "From crown molding to custom built-ins, our finishing touches bring sophistication and character to every room in your home.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Hammer,
    title: "General Construction",
    description:
      "Full-scope construction services from framing to finish. We handle projects of any size with the same dedication to quality.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: LayoutGrid,
    title: "Deck & Outdoor Living",
    description:
      "Extend your living space outdoors with custom decks, patios, and outdoor kitchens perfect for Georgia's beautiful weather.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18f6b6fc3?auto=format&fit=crop&w=600&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services({
  onOpenContact,
}: {
  onOpenContact: () => void;
}) {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
            Expert Craftsmanship for
            <br />
            <span className="text-orange-500">Every Project</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Whether you&apos;re dreaming of a kitchen makeover or a whole-home
            renovation, we bring the expertise and attention to detail your
            project deserves.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-navy-200 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300"
            >
              {/* Card image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white shadow-lg">
                    <service.icon className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors group/btn"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
