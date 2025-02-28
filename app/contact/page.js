"use client";
import { useRef, useEffect, useState } from "react";

export default function Contact() {
  const tallyRef = useRef(null);
  const [resetForm, setResetForm] = useState(false);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === "https://tally.so" && event.data.type === "TALLY_FORM_SUBMITTED") {
        setResetForm(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (resetForm) {
      setTimeout(() => {
        setResetForm(false); 
      }, 100); 
    }
  }, [resetForm]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-12">
      <h1 className="text-5xl font-extrabold text-center text-blue-400 mb-8">Contact Us</h1>

      <section className="bg-gray-800 p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-300 text-center">Get in Touch</h2>
        <p className="text-gray-300 mt-4 text-center">
          We would love to hear from you! Fill out the form below, and we will get back to you as soon as possible.
        </p>

        <div className="mt-6 flex justify-center">
            {!resetForm && (
              <iframe
                ref={tallyRef}
                src="https://tally.so/embed/n0D5L6?alignLeft=1&hideTitle=1&dynamicHeight=1"
                width="100%"
                loading="lazy"
                height="450"
                frameBorder="0"
                className="rounded-lg"
                allowFullScreen
              ></iframe>
            )}
          </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-300">Other Ways to Reach Us</h2>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
          <a href="mailto:support@ecotech.com" target="_blank" className="text-lg font-semibold text-blue-400 hover:text-blue-300 transition border-b border-blue-400 pb-1">
            📧 hoodasweety890@gmail.com
          </a>
          <p className="text-lg font-semibold text-gray-300">📞 +91 9812483249</p>
          <p className="text-lg font-semibold text-gray-300">
            <a href="https://maps.google.com/?q=MIED+Department,+IIT+Roorkee,+Uttarakhand,+India" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
              📍 MIED Department, IIT Roorkee, Uttarakhand, India
            </a>
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <iframe
            className="w-full md:w-2/3 h-64 rounded-lg shadow-lg mt-4"
            src="https://www.google.com/maps?q=MIED+Department,+IIT+Roorkee,+Uttarakhand,+India&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
