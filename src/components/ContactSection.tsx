
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="container-section bg-secondary/30">
      <h2 className="section-heading">Get In Touch</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Feel free to reach out if you have any questions, want to discuss a project, 
        or just want to connect. I'm always open to new opportunities and collaborations.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <Card className="card-hover">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-full mt-1">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">contact@example.com</p>
                <a 
                  href="mailto:contact@example.com"
                  className="text-primary text-sm inline-block mt-1 hover:underline"
                >
                  Send an email
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-full mt-1">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-full mt-1">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">San Francisco, California</p>
              </div>
            </CardContent>
          </Card>

          <div className="pt-6">
            <h3 className="font-medium mb-3">Connect with me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background border rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background border rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background border rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
