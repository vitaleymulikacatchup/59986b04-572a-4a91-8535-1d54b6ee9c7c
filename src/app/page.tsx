"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Brain, Cloud, Code, DollarSign, Github, Globe, Linkedin, Mail, Shield, Sparkles, Star, Twitter, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="TechForward"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Innovation Powered by Technology"
          description="We deliver cutting-edge IT solutions that transform businesses and drive digital growth in the modern world."
          tag="Leading IT Solutions"
          tagIcon={Zap}
          buttons={[
            {
              text: "Start Your Project",
              href: "contact"
            },
            {
              text: "View Services",
              href: "features"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern technology office workspace"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Our Core Services"
          description="Comprehensive IT solutions designed to accelerate your business growth and digital transformation"
          tag="Services"
          tagIcon={Code}
          features={[
            {
              title: "AI & Machine Learning",
              description: "Harness the power of artificial intelligence to automate processes and gain valuable insights from your data",
              icon: Brain,
              button: {
                text: "Learn More",
                href: "https://example.com"
              }
            },
            {
              title: "Cloud Solutions",
              description: "Scalable cloud infrastructure and migration services to enhance performance and reduce operational costs",
              icon: Cloud,
              button: {
                text: "Get Started",
                href: "contact"
              }
            },
            {
              title: "Cybersecurity",
              description: "Advanced security solutions to protect your business from cyber threats and ensure data integrity",
              icon: Shield,
              button: {
                text: "Secure Now",
                href: "contact"
              }
            },
            {
              title: "Custom Software",
              description: "Tailored software development solutions built to meet your specific business requirements and goals",
              icon: Code,
              button: {
                text: "Start Project",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Trusted by industry leaders who rely on our expertise"
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "InnovateTech Solutions",
              rating: 5,
              testimonial: "TechForward transformed our entire IT infrastructure. Their expertise in cloud migration and AI implementation has doubled our operational efficiency.",
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson CEO portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              company: "DataFlow Systems",
              rating: 5,
              testimonial: "Outstanding cybersecurity solutions. TechForward's proactive approach has kept our systems secure while scaling our business globally.",
              imageSrc: "https://images.pexels.com/photos/16969846/pexels-photo-16969846.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen CTO portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Founder",
              company: "NextGen Startup",
              rating: 5,
              testimonial: "The custom software solution TechForward built for us is exactly what we needed. Their team understood our vision perfectly.",
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez founder portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Product Manager",
              company: "TechVision Corp",
              rating: 5,
              testimonial: "TechForward's AI solutions have revolutionized our product analytics. We now have insights we never thought possible.",
              imageSrc: "https://images.pexels.com/photos/6930549/pexels-photo-6930549.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim product manager portrait"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Expert Team"
          description="Passionate technologists dedicated to delivering exceptional results"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alexandra Stone",
              role: "CEO & Founder",
              description: "Former VP of Engineering at Microsoft. 15+ years leading technology transformations for Fortune 500 companies.",
              imageSrc: "https://images.pexels.com/photos/5989942/pexels-photo-5989942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alexandra Stone CEO portrait",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/alexandra"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com/alexandra"
                }
              ]
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Chief Technology Officer",
              description: "Former Principal Engineer at Google. Architect of scalable systems serving millions of users globally.",
              imageSrc: "https://images.pexels.com/photos/8546799/pexels-photo-8546799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Rodriguez CTO portrait",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/marcus"
                },
                {
                  icon: Github,
                  url: "https://github.com/marcus"
                }
              ]
            },
            {
              id: "3",
              name: "Jennifer Park",
              role: "Lead Developer",
              description: "Full-stack developer with expertise in AI/ML, cloud architecture, and modern web technologies.",
              imageSrc: "https://images.pexels.com/photos/7606019/pexels-photo-7606019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Park lead developer portrait",
              socialLinks: [
                {
                  icon: Github,
                  url: "https://github.com/jennifer"
                },
                {
                  icon: Globe,
                  url: "https://jenniferpark.dev"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Plan"
          description="Flexible pricing options designed to grow with your business"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              price: "$2,500/mo",
              name: "Starter Package",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "https://example.com"
                }
              ],
              features: [
                "Basic cloud setup",
                "Monthly security audit",
                "Email support",
                "Up to 5 user accounts"
              ]
            },
            {
              id: "business",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$7,500/mo",
              name: "Business Package",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Schedule Demo",
                  href: "https://example.com"
                }
              ],
              features: [
                "Advanced cloud infrastructure",
                "Weekly security monitoring",
                "Priority phone support",
                "Unlimited user accounts",
                "Custom integrations"
              ]
            },
            {
              id: "enterprise",
              price: "$15,000/mo",
              name: "Enterprise Package",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "View Features",
                  href: "https://example.com"
                }
              ],
              features: [
                "Enterprise cloud architecture",
                "24/7 security monitoring",
                "Dedicated account manager",
                "Custom AI/ML solutions",
                "On-site consulting"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our IT services"
          faqs={[
            {
              id: "1",
              title: "What types of IT services do you offer?",
              content: "We provide comprehensive IT solutions including AI/ML development, cloud infrastructure, cybersecurity, custom software development, and digital transformation consulting."
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content: "Project timelines vary based on complexity. Simple cloud migrations take 2-4 weeks, while custom software development can range from 3-12 months. We provide detailed timelines during our initial consultation."
            },
            {
              id: "3",
              title: "Do you provide ongoing support?",
              content: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular maintenance, security updates, and dedicated account management to ensure your systems run smoothly."
            },
            {
              id: "4",
              title: "Can you work with our existing technology stack?",
              content: "Absolutely. Our team has experience with a wide range of technologies and platforms. We can integrate with your existing systems or help you transition to more modern solutions."
            },
            {
              id: "5",
              title: "How do you ensure data security?",
              content: "We implement industry-leading security practices including encryption, multi-factor authentication, regular security audits, and compliance with standards like GDPR, HIPAA, and SOC 2."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Business?"
          description="Contact us today to discuss your IT needs and discover how our solutions can drive your digital transformation."
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Contact Us"
          termsText="By submitting, you agree to receive communications from TechForward. We respect your privacy."
          imageSrc="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Technology consultation meeting"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "AI & Machine Learning",
                  href: "features"
                },
                {
                  label: "Cloud Solutions",
                  href: "features"
                },
                {
                  label: "Cybersecurity",
                  href: "features"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "team"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Careers",
                  href: "https://example.com"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Documentation",
                  href: "https://example.com"
                }
              ]
            }
          ]}
          copyrightText="© 2025 TechForward. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}