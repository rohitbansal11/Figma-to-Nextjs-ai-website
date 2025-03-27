"use client";

import { useEffect, useRef } from "react";

const Idea = () => {
  const ideaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ideaRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={ideaRef}
      className="section-padding bg-gradient-to-br from-background to-dark-lighter"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From idea to website <br />
                in{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                  minutes
                </span>
                .
              </h2>
              <p className="text-md opacity-70 mb-8">
                Stop wasting time on complex development. With our AI website
                kit, you can quickly create and deploy your startup website
                without any coding knowledge.
              </p>
            </div>

            <div className="flex flex-col gap-6 mb-8">
              {[
                {
                  title: "Choose your template",
                  description:
                    "Pick from a variety of professionally designed templates.",
                },
                {
                  title: "Customize content",
                  description:
                    "Add your brand colors, imagery, and content with ease.",
                },
                {
                  title: "Launch your site",
                  description:
                    "One-click deployment to get your site live in seconds.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 animate-on-scroll"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple/20 flex items-center justify-center text-purple-light font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm opacity-70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-on-scroll">
              <button className=" cursor-pointer bg-purple hover:bg-purple-light text-white font-medium px-6 py-3 rounded-md transition-colors">
                Start Building
              </button>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="glass rounded-2xl overflow-hidden">
              <img
                src="/sideimages.png"
                alt="Website Builder Interface"
                className="w-full h-500 transform translate-y-4 scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Idea;
