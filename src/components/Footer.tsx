
import React from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background py-12 border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-primary">
              Dev<span className="text-foreground">Profile</span>
            </h3>
            <p className="mt-2 text-muted-foreground">
              Building exceptional digital experiences
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-primary" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-muted text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="mt-2 text-xs text-muted-foreground">
            <a
              href="#"
              className="hover:text-primary transition-colors mr-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
