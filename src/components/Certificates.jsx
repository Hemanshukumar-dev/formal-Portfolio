// Certificates Section — Grid of certificate cards + click-to-open modal
import { useState } from "react";
import { FiX } from "react-icons/fi";
import certificates from "../data/certificates";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal handler
  const closeModal = () => setSelectedCert(null);

  return (
    <section id="certificates" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
          <span className="text-secondary text-2xl font-body mr-3">05.</span>
          Certifications
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full mb-12" />

        {/* Certificates Grid — 3 top, 2 bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="bg-white rounded-2xl shadow-md border border-border p-6 text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Certificate preview image */}
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Certificate Info */}
              <h3 className="font-heading text-base font-semibold text-primary mb-1 leading-snug">
                {cert.title}
              </h3>
              <p className="text-secondary text-sm">{cert.issuer}</p>
            </button>
          ))}
        </div>
      </div>

      {/* ── Modal Overlay ── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-tag-bg flex items-center justify-center text-primary hover:bg-accent hover:scale-110 transition-all duration-300"
              aria-label="Close modal"
            >
              <FiX size={18} />
            </button>

            {/* Certificate Title */}
            <h3 className="font-heading text-xl font-semibold text-primary mb-1 pr-10">
              {selectedCert.title}
            </h3>
            <p className="text-secondary text-sm mb-5">{selectedCert.issuer}</p>

            {/* Full Certificate Image */}
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[80vh] object-contain rounded-lg mb-5"
            />

            {/* Authenticate Button */}
            <div className="text-center">
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                Authenticate ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
