import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Kitchen Remodeling",
  "Bathroom Renovations",
  "Home Additions",
  "Interior Finishing",
  "General Construction",
  "Deck & Outdoor Living",
];

const serviceAreas = [
  "Marietta",
  "Kennesaw",
  "Smyrna",
  "Roswell",
  "Acworth",
  "Woodstock",
  "Canton",
  "Dallas",
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 font-bold text-lg text-white">
                FC
              </div>
              <div>
                <div className="font-bold text-lg">Foster Construction</div>
                <div className="text-xs text-white/50 tracking-wider uppercase">
                  Services Georgia
                </div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Building trust through quality craftsmanship since 2005. Licensed,
              insured, and committed to exceeding your expectations on every
              project.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label={i === 0 ? "Facebook" : "Instagram"}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-4">
              Contact Info
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+17705551234"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-orange-400 transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                (770) 555-1234
              </a>
              <a
                href="mailto:info@fosterconstructionga.com"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-orange-400 transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                info@fosterconstructionga.com
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                Marietta, GA 30060
              </div>
            </div>

            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-3">
              Service Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-white/50"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Foster Construction Services
            Georgia. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
