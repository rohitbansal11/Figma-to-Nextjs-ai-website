'use client';

import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';



const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-white/10 last:border-0">
    <button
      className="flex items cursor-pointer-center justify-between w-full py-5 text-left focus:outline-none"
      onClick={onClick}
    >
      <h3 className="font-medium">{question}</h3>
      <div className="flex-shrink-0 ml-4">
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </div>
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-70 pb-5' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="text-sm">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = faqRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const faqs = [
    {
      question: 'What is included in the free kit?',
      answer: 'The free kit includes a comprehensive set of UI components, templates, and tools to help you build your AI startup website. You get access to all the design elements, responsive layouts, and basic customization options.'
    },
    {
      question: 'Do I need coding knowledge to use the kit?',
      answer: 'No, our kit is designed to be user-friendly and doesn\'t require any coding knowledge. Our drag-and-drop interface makes it easy to customize your website without touching a line of code.'
    },
    {
      question: 'Can I use the kit for commercial projects?',
      answer: 'Yes, you can use the free kit for both personal and commercial projects. However, if you need advanced features and support, we recommend checking out our premium version.'
    },
    {
      question: 'How often do you update the kit?',
      answer: 'We release updates on a weekly basis, adding new components, fixing bugs, and improving performance. We also incorporate user feedback to ensure the kit meets your needs.'
    },
    {
      question: 'Is the kit compatible with all browsers?',
      answer: 'Yes, our kit is compatible with all modern browsers including Chrome, Firefox, Safari, and Edge. We regularly test on various platforms to ensure consistent performance.'
    }
  ];

  return (
    <section 
      id="faq" 
      ref={faqRef}
      className="section-padding"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">FAQ</h2>
          <p className="text-md opacity-70 animate-on-scroll">
            Find answers to common questions about our AI Startup Website Kit.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass rounded-xl p-6 animate-on-scroll">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-sm opacity-70 mb-4">Still have questions?</p>
          <button className="cursor-pointer   bg-purple hover:bg-purple-light text-white font-medium px-6 py-3 rounded-md transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;