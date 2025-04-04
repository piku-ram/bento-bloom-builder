
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { Twitter, Linkedin, Github } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Rivera",
      title: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80",
      bio: "Former senior designer at Google who wanted to make website creation more accessible for small businesses.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    {
      name: "Sophia Chen",
      title: "CTO",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      bio: "SEO specialist with 10+ years experience helping businesses improve their online visibility.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
    {
      name: "Marcus Johnson",
      title: "Head of Product",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
      bio: "UX designer passionate about creating intuitive user experiences and beautiful interfaces.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    },
  ];

  const timeline = [
    {
      year: "2022",
      title: "BentoBloom Founded",
      description: "Started as a small team of three with a vision to make beautiful websites accessible to small businesses."
    },
    {
      year: "2023",
      title: "First 1,000 Customers",
      description: "Reached our first milestone with 1,000 active users and expanded our template library."
    },
    {
      year: "2024",
      title: "SEO Focus Expansion",
      description: "Launched our advanced SEO tools suite and schema markup generator to help businesses rank better."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanded our team to 25 people across 10 countries, supporting customers worldwide."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | BentoBloom</title>
        <meta name="description" content="Learn about BentoBloom and our mission to empower small businesses with beautiful websites." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">About BentoBloom</h1>
                <p className="text-xl text-muted-foreground mb-12">
                  Our mission is to make beautiful, SEO-optimized websites accessible to small businesses.
                </p>
                <div className="prose prose-lg max-w-none">
                  <p>
                    BentoBloom was founded in 2022 with a simple goal: to help small businesses succeed online without requiring 
                    technical expertise or massive budgets. We noticed that many small business owners were struggling to create 
                    websites that were both visually appealing and effective at attracting customers through search engines.
                  </p>
                  <p>
                    Our team combines expertise in design, SEO, and web development to create a platform that makes it easy for anyone 
                    to build a website that not only looks great but also performs well in search results. We're passionate about the 
                    bento grid design system and how it allows for creative, organized layouts that engage visitors.
                  </p>
                  <p>
                    Today, BentoBloom serves thousands of small businesses across various industries, from restaurants and retail 
                    shops to service providers and creative professionals. We're constantly evolving our platform based on user feedback 
                    and the latest web standards.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="w-full py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-16 text-center">Our Journey</h2>
              <div className="max-w-3xl mx-auto">
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-none">
                        <div className="bg-primary text-primary-foreground font-bold text-lg w-16 h-16 rounded-full flex items-center justify-center">
                          {item.year}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-16 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bento-cell p-6 flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary mb-4">{member.title}</p>
                    <p className="text-muted-foreground mb-6">{member.bio}</p>
                    <div className="flex gap-4 mt-auto">
                      <a href={member.twitter} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href={member.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href={member.github} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="w-full py-16 bg-primary/5">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
                  <p className="text-muted-foreground">
                    We believe great design and powerful tools should be accessible to businesses of all sizes.
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Simplicity</h3>
                  <p className="text-muted-foreground">
                    Complex technology doesn't have to be complicated to use. We focus on intuitive experiences.
                  </p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Empowerment</h3>
                  <p className="text-muted-foreground">
                    We aim to empower small businesses with the tools and knowledge to succeed online.
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                  Join Our Team
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
