import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="text-center">
          <img
            src="/images/logo.png"
            alt="Insurety Life"
            className="h-24 md:h-28 mx-auto mb-4"
            style={{ filter: "brightness(0) saturate(100%) invert(14%) sepia(73%) saturate(1449%) hue-rotate(204deg) brightness(92%) contrast(96%)" }}
          />
          <p className="mx-auto max-w-xl text-muted-foreground font-body text-sm leading-relaxed">
            Helping individuals explore simple and informative final expense planning options with care and clarity.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-display font-bold text-navy mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-muted-foreground font-body text-sm hover:text-navy transition-colors">Home</a></li>
              <li><a href="/about" className="text-muted-foreground font-body text-sm hover:text-navy transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-muted-foreground font-body text-sm hover:text-navy transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-navy mb-4">Legal Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground font-body text-sm hover:text-navy transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground font-body text-sm hover:text-navy transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-navy mb-4">Social Media</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground font-body text-sm hover:text-navy transition-colors">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground font-body text-sm hover:text-navy transition-colors">Facebook</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-navy mb-4">Contact Info</h4>
            <div className="space-y-4">
              <a href="mailto:info@insuretylife.com" className="flex items-center gap-3 text-muted-foreground font-body text-sm hover:text-navy transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@insuretylife.com
              </a>
              <a href="tel:18008953413" className="flex items-center gap-3 text-muted-foreground font-body text-sm hover:text-navy transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                1-800-895-3413 (TTY)
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-navy-dark">
        <div className="container mx-auto px-4 lg:px-8 py-5 text-center">
          <p className="text-primary-foreground/70 font-body text-xs">
            2026 © Copyright Insurety Life. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
