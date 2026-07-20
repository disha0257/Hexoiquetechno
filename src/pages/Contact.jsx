import "./Contact.css";
import "../App.css";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Globe,
  MessageCircle,
  Briefcase,
  CheckCircle,
} from "lucide-react";

function Contact() {
  const navigate = useNavigate();

  const formRef = useRef(null);

  // ==========================================
  // LIVE BACKEND API
  // ==========================================

  const API_URL =
    "https://hexoiquetechno.onrender.com/api/contact";

  // ==========================================
  // FORM DATA
  // ==========================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  // ==========================================
  // STATES
  // ==========================================

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState("");

  const [loading, setLoading] = useState(false);

  // ==========================================
  // SCROLL TO FORM
  // ==========================================

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ==========================================
  // INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone only numbers
    if (name === "phone") {
      if (!/^[0-9]*$/.test(value)) {
        return;
      }

      if (value.length > 10) {
        return;
      }
    }

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
      submit: "",
    }));

    setSuccess("");
  };

  // ==========================================
  // VALIDATION
  // ==========================================

  const validate = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail|icloud)\.(com|in)$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email =
        "Enter a valid Gmail, Yahoo, Outlook, Hotmail or iCloud email";
    }

    // Company
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    } else if (formData.company.trim().length < 2) {
      newErrors.company =
        "Company name must be at least 2 characters";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Enter a 10 digit mobile number";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Project details are required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message =
        "Minimum 20 characters required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ==========================================
  // SUBMIT FORM
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validate()) {
      return;
    }

    setLoading(true);

    setSuccess("");

    setErrors({});

    try {
      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.name.trim(),

          email: formData.email.trim().toLowerCase(),

          company: formData.company.trim(),

          phone: formData.phone.trim(),

          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      console.log("Backend Response:", data);

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to submit contact request"
        );
      }

      // SUCCESS
      setSuccess(
        "Thank you! Your request has been submitted successfully."
      );

      // CLEAR FORM
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });

      // Remove success message
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    } catch (error) {
      console.error("Contact Form Error:", error);

      setErrors({
        submit:
          "Unable to connect to the server. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // INPUT CLASS
  // ==========================================

  const inputClass = (field) => {
    return errors[field] ? "error-input" : "";
  };

  return (
    <div className="contact-page">
      <Header />

      <main>
        {/* BACKGROUND ANIMATION */}

        <div className="background-animation">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              className="bg-circle"
              key={index}
            ></span>
          ))}
        </div>

        {/* HERO SECTION */}

        <section className="contact-hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="hero-tag">
                CONTACT HEXONIQUE
              </span>

              <h1>
                Let's Build Your
                <br />
                Next Digital
                <br />
                Success Story
              </h1>

              <p>
                Whether you're a startup, enterprise,
                or growing business, our experts are
                ready to transform your ideas into
                innovative digital solutions.
              </p>

              <div className="hero-buttons">
                <button
                  className="primary-btn"
                  onClick={scrollToForm}
                >
                  Get Free Consultation

                  <ArrowRight size={18} />
                </button>

                <button
                  className="secondary-btn"
                  onClick={() => navigate("/services")}
                >
                  View Services
                </button>
              </div>

              <div className="hero-features">
                <div>
                  <CheckCircle size={18} />
                  Free Consultation
                </div>

                <div>
                  <CheckCircle size={18} />
                  24/7 Support
                </div>

                <div>
                  <CheckCircle size={18} />
                  Fast Delivery
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}

            <div
              className="contact-form-card"
              ref={formRef}
            >
              <h2>Request a Quote</h2>

              <p>
                Fill out the form and our team will contact
                you within 24 hours.
              </p>

              {/* SUCCESS MESSAGE */}

              {success && (
                <div className="success-box">
                  <CheckCircle size={18} />

                  {success}
                </div>
              )}

              {/* SERVER ERROR */}

              {errors.submit && (
                <div className="error-box">
                  {errors.submit}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* NAME */}

                <input
                  className={inputClass("name")}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />

                <span className="field-error">
                  {errors.name}
                </span>

                {/* EMAIL */}

                <input
                  className={inputClass("email")}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />

                <span className="field-error">
                  {errors.email}
                </span>

                {/* COMPANY */}

                <input
                  className={inputClass("company")}
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                />

                <span className="field-error">
                  {errors.company}
                </span>

                {/* PHONE */}

                <input
                  className={inputClass("phone")}
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  maxLength="10"
                  inputMode="numeric"
                />

                <span className="field-error">
                  {errors.phone}
                </span>

                {/* MESSAGE */}

                <textarea
                  className={inputClass("message")}
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                />

                <span className="field-error">
                  {errors.message}
                </span>

                {/* SUBMIT BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                >
                  <Send size={18} />

                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* CONTACT INFORMATION */}

        <section className="contact-info">
          <div className="container cards">
            <div className="card">
              <Mail />

              <h3>Email</h3>

              <p>
                <a href="mailto:hexoniquetechno@gmail.com">
                  hexoniquetechno@gmail.com
                </a>
              </p>
            </div>

            <div className="card">
              <Phone />

              <h3>Phone</h3>

              <p>
                <a href="tel:+919586347364">
                  +91 95863 47364
                </a>
              </p>
            </div>

            <div className="card">
              <MapPin />

              <h3>Location</h3>

              <p>Rajkot, Gujarat</p>
            </div>

            <div className="card">
              <Clock />

              <h3>Working Hours</h3>

              <p>Mon - Sat | 10 AM - 7 PM</p>
            </div>
          </div>
        </section>

        {/* WHY HEXONIQUE */}

        <section className="why-contact">
          <div className="container">
            <div className="section-heading">
              <span>WHY HEXONIQUE</span>

              <h2>Trusted Technology Partner</h2>

              <p>
                Delivering scalable software solutions
                with innovation, quality, and long-term
                business value.
              </p>
            </div>

            <div className="features">
              <div className="feature">
                <Globe />

                <h3>Global Delivery</h3>

                <p>
                  Serving businesses across India,
                  USA, UK, UAE and Australia.
                </p>
              </div>

              <div className="feature">
                <MessageCircle />

                <h3>Dedicated Support</h3>

                <p>
                  Transparent communication and
                  continuous assistance.
                </p>
              </div>

              <div className="feature">
                <Briefcase />

                <h3>Professional Team</h3>

                <p>
                  Experienced developers creating
                  secure and scalable digital products.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;