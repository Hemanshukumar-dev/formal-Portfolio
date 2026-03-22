// Contact Section — Left info + Right form with EmailJS
import { useState, useRef } from "react";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Contact info data
  const contactInfo = [
    {
      icon: <FiMail size={20} />,
      label: "EMAIL",
      value: "hemanshukumar.dev@gmail.com",
      href: "mailto:hemanshukumar.dev@gmail.com",
    },
    {
      icon: <FiGithub size={20} />,
      label: "GITHUB",
      value: "github.com/Hemanshukumar-dev",
      href: "https://github.com/Hemanshukumar-dev",
    },
    {
      icon: <FiLinkedin size={20} />,
      label: "LINKEDIN",
      value: "linkedin.com/in/hemanshukumar",
      href: "http://www.linkedin.com/in/hemanshukumar",
    },
    {
      icon: <FiMapPin size={20} />,
      label: "LOCATION",
      value: "Jalandhar, Punjab",
      href: null,
    },
  ];

  // Validate form fields
  const validate = (formData) => {
    const newErrors = {};
    if (!formData.get("user_name")?.trim()) newErrors.name = "Name is required";
    if (!formData.get("user_email")?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("user_email"))) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.get("message")?.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      // Replace with your EmailJS service/template/public key
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );
      setSuccess(true);
      formRef.current.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrors({ form: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Left Column: Info ── */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 border border-border mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm text-secondary font-medium">
                Ready for Software Roles
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2 leading-tight">
              Let's build your next
            </h2>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                full-stack solution.
              </span>
            </h2>

            <p className="text-secondary leading-relaxed mb-10 max-w-md">
              Whether you have a project idea, internship, or software role in
              mind, I'd be glad to connect.
            </p>

            {/* Contact Info Items */}
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-tag-bg flex items-center justify-center text-secondary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary font-medium">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium text-sm hover:text-secondary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-primary font-medium text-sm">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Form ── */}
          <div className="bg-white rounded-2xl shadow-md border border-border p-8">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
              Send a Message
            </h3>

            {/* Success Message */}
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-4 text-sm">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {/* Form Error */}
            {errors.form && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-4 text-sm">
                {errors.form}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name ? "border-red-400" : "border-border"
                  } bg-white text-primary placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email ? "border-red-400" : "border-border"
                  } bg-white text-primary placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-primary mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Let's work together!"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message ? "border-red-400" : "border-border"
                  } bg-white text-primary placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full px-6 py-3 text-sm font-medium flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
