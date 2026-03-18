import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-dark py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src="/images/logo.png" alt="Insurety Life" className="h-10 mb-4" />
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Providing information on final expense plans designed to help cover end-of-life costs and support loved ones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-primary-foreground/60 font-body text-sm hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/60 font-body text-sm hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#quote" className="text-primary-foreground/60 font-body text-sm hover:text-accent transition-colors">Get a Quote</a></li>
              <li><a href="#contact" className="text-primary-foreground/60 font-body text-sm hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/60 font-body text-sm hover:text-accent transition-colors">Final Expense</a></li>
              <li><a href="#" className="text-primary-foreground/60 font-body text-sm hover:text-accent transition-colors">Pension Planning</a></li>
              <li><a href="#" className="text-primary-foreground/60 font-body text-sm hover:text-accent transition-colors">Funeral Planning</a></li>
              <li><a href="#" className="text-primary-foreground/60 font-body text-sm hover:text-accent transition-colors">Coverage Options</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:18008953413" className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm hover:text-accent transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                1-800-895-3413 (TTY)
              </a>
              <a href="mailto:info@insuretylife.com" className="flex items-center gap-2 text-primary-foreground/60 font-body text-sm hover:text-accent transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@insuretylife.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/40 font-body text-xs">
            © {new Date().getFullYear()} Insurety Life. All rights reserved. This website provides general information and is not a substitute for professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
