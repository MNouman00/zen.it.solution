import logo from "../logo.png";
import slidpc1 from "../slidpc1.jpg";
import slidpic2 from "../slidpic2.jpg";
import slidpic3 from "../slidpic3.jpg";
import slidpic4 from "../slidpic4.jpg";
import slidpic5 from "../slidpic5.jpg";
import slidpic6 from "../slidpic6.jpg";
import slidpic7 from "../slidpic7.jpg";
import slidpic8 from "../slidpic8.jpg";
import logovid from "../logovid.mp4";
import midvideo from "../midvideo.mp4";
import apple from "../apple.png";
import amazon from "../amazon.png";
import google from "../google.png";
import mcr from "../mcr.png";
import slack from "../slack.png";
import mobile from "../mobile.png";
import location from "../location.png";
import email from "../email.png";
import clock from "../clock.png";
import hambur from "../hambur.png";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Home.css";

const Home = () => {
  const images = [
    slidpc1,
    slidpic2,
    slidpic3,
    slidpic4,
    slidpic5,
    slidpic6,
    slidpic7,
    slidpic8,
  ];

  const captions = [
    "Development",
    "Engineering",
    "Maintenance",
    "High-Performance",
    "Data-Driven",
    "Future-Proof",
    "Strategic",
    "Innovative",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const result = await emailjs.send(
        "service_id74el4",
        "YOUR_TEMPLATE_ID", // Replace with actual template ID
        formData,
        "OEwTebJxZPaj18xsj"
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const [typingState, setTypingState] = useState({
    text: "",
    index: 0,
    isDeleting: false,
    textIndex: 0,
  });

  const texts = [
    "Web Development",
    "App Development",
    "Cloud Solutions",
    "Custom Logo Design",
    "UI/UX Design",
    "SEO Optimization",
  ];

  useEffect(() => {
    const type = () => {
      const currentText = texts[typingState.textIndex];

      setTypingState((prev) => {
        if (!prev.isDeleting) {
          // Typing mode
          if (prev.index < currentText.length) {
            return {
              ...prev,
              text: currentText.substring(0, prev.index + 1),
              index: prev.index + 1,
            };
          } else {
            // Switch to deleting after pause
            setTimeout(() => {
              setTypingState((prev) => ({ ...prev, isDeleting: true }));
            }, 2000);
            return prev;
          }
        } else {
          // Deleting mode
          if (prev.index > 0) {
            return {
              ...prev,
              text: currentText.substring(0, prev.index - 1),
              index: prev.index - 1,
            };
          } else {
            // Move to next text
            return {
              text: "",
              index: 0,
              isDeleting: false,
              textIndex: (prev.textIndex + 1) % texts.length,
            };
          }
        }
      });
    };

    const timer = setTimeout(type, typingState.isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [typingState, texts]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* main body */}
      <div className="m-0 p-0 box-border font-mullish">
        {/* header */}
        <div className="min-h-screen w-full relative flex flex-col">
          {/* nav section */}
          <div className="shadow-md fixed flex items-center justify-between p-4 md:p-8 top-0 left-0 w-full z-10 ">
            <nav className="flex items-center justify-between w-full">
              <div className="flex items-center justify-between gap-2">
                <span className="hover:text-blue-500 transition duration-300 text-2xl md:text-4xl font-bold text-blue-900">
                  ZEN.IT.
                </span>
                <span className="hover:text-blue-500 transition duration-300 text-lg md:text-2xl font-bold text-gray-700">
                  SOLUTION
                </span>
                <img
                  src={logo}
                  alt="Zen IT Solution Logo"
                  className="h-6 w-6 md:h-10 md:w-10"
                />
              </div>

              {/* nav link section */}
              <div
                id="nave"
                className={`flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${
                  isMenuOpen ? "block" : "hidden md:flex"
                }`}
                style={{ top: isMenuOpen ? "100%" : "-100%" }}
              >
                <ul className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 text-base md:text-lg font-medium w-full md:w-auto p-4 md:p-0">
                  <li className="w-full md:w-auto text-center">
                    <a
                      className="block border text-blue-500 p-2 rounded-2xl hover:text-blue-300 transition duration-300"
                      href="/"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </a>
                  </li>
                  <li className="w-full md:w-auto text-center">
                    <a
                      className="block border text-blue-500 p-2 rounded-2xl hover:text-blue-300 transition duration-300"
                      href="About"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About
                    </a>
                  </li>
                  <li className="w-full md:w-auto text-center">
                    <a
                      className="block border text-blue-500 p-2 rounded-2xl hover:text-blue-300 transition duration-300"
                      href="Services"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services
                    </a>
                  </li>
                  <li className="w-full md:w-auto text-center">
                    <a
                      className="block border text-blue-500 p-2 rounded-2xl hover:text-blue-300 transition duration-300"
                      href="portfolio"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="w-full md:w-auto text-center">
                    <a
                      className="block border text-blue-500 p-2 rounded-2xl hover:text-blue-300 transition duration-300"
                      href="#contact1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                id="menu-button"
                className="md:hidden z-20"
                onClick={toggleMenu}
              >
                <img
                  className="h-6 w-8 border-0"
                  src={hambur}
                  alt="menubutton"
                />
              </button>
            </nav>
          </div>

          {/* background video section */}
          <div className="w-full h-screen flex items-center justify-center mt-16 md:mt-0">
            <video
              className="w-full h-full object-cover brightness-50"
              autoPlay
              loop
              muted
              playsInline
              src={logovid}
            ></video>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 md:gap-8 text-white px-4 text-center">
              <h1 id="h1" className="text-2xl md:text-4xl font-bold">
                Zen.IT.Solution
              </h1>
              <a
                id="a1"
                className="text-lg md:text-2xl text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                href="#explor"
              >
                Explore Us →
              </a>

              <div className="h-16 md:h-20 w-full flex flex-col md:flex-row items-center justify-center">
                <h1 className="font-black text-xl md:text-3xl text-white">
                  Professional{" "}
                </h1>
                <h2 className="typing-text text-blue-500 font-black text-lg md:text-2xl ml-0 md:ml-2 mt-1 md:mt-0">
                  {typingState.text}
                  <span className="cursor">|</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        {/* paragraph */}
        <div className="w-full h-auto flex flex-col items-center justify-center gap-6 md:gap-8 px-4">
          {/* heading */}
          <div className="w-full h-auto flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4 md:gap-8 text-center">
              <h1 className="text-2xl md:text-4xl font-bold hover:text-blue-500 transition duration-300">
                The world's leading brands are powered by
              </h1>
              <span className="hover:text-blue-500 transition duration-300 text-2xl md:text-4xl font-bold text-blue-900">
                ZEN.IT.SOLUTION
              </span>
            </div>
          </div>
          <br />
          {/* paragraph section */}
          <div className="w-full md:w-[80%] h-fit flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-blue-950 text-3xl md:text-5xl font-black">
              Craft Unique Digital Experiences
            </h1>
            <p className="text-base md:text-lg font-mullish text-justify md:text-center text-gray-500">
              " In today's digital landscape, your website is your most valuable
              asset. We are a team of expert developers and strategists
              dedicated to transforming your vision into a powerful,
              user-friendly, and results-driven website. "
            </p>
          </div>
        </div>

        <br />

        {/* gallery container */}
        <div className="w-full h-auto md:h-[800px] flex flex-col items-center justify-center gap-6 md:gap-8 mb-8 bg-gray-100 shadow-lg shadow-blue-200 px-4 py-8">
          {/* Slider Container */}
          <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden border border-gray-300 rounded-lg bg-gray-100 shadow-lg">
            {/* Animated Slider */}
            <div className="flex items-center justify-start gap-4 h-full rounded-2xl p-4 md:p-7 animate-scroll hover:pause">
              {/* Duplicate items for seamless loop */}
              {[...images, ...images].map((img, index) => (
                <div
                  key={`slider-${index}`}
                  className="flex flex-col items-center justify-center w-[250px] md:w-[400px] h-full min-w-[200px] md:min-w-[300px] rounded-lg shadow-lg p-2 md:p-4 bg-gray-100 hover:scale-105 transform transition duration-300 ease-in-out overflow-hidden relative group hover:shadow-2xl"
                >
                  <img
                    className="w-full h-48 md:h-80 rounded object-cover block"
                    src={img}
                    alt={captions[index % captions.length]}
                  />
                  <div className="absolute bottom-0 left-0 right-0 rounded-2xl bg-white p-2 md:p-4 font-black text-center text-sm md:text-base">
                    {captions[index % captions.length]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        {/* mid section */}
        <section
          id="explor"
          className="min-h-screen flex items-center justify-center p-4 gap-4 md:gap-7"
        >
          <div className="max-w-6xl w-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              {/* Text Content */}
              <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
                  Transform Your Digital Experience With{" "}
                  <span className="text-blue-500 hover:text-blue-300">
                    ZEN.SOLUTION
                  </span>
                </h1>
                <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                  Discover innovative solutions that will revolutionize how you
                  work and create. Join thousands of satisfied users today.
                </p>

                <div className="space-y-4 md:space-y-5 mb-6 md:mb-10">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 md:mr-4">
                      <i className="fas fa-rocket text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                        Lightning Fast Performance
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Optimized for speed and efficiency with cutting-edge
                        technology.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3 md:mr-4">
                      <i className="fas fa-shield-alt text-green-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                        Enterprise-Grade Security
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Your data is protected with industry-leading security
                        measures.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3 md:mr-4">
                      <i className="fas fa-cogs text-purple-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                        Easy Customization
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Tailor the platform to your specific needs with our
                        flexible tools.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-300 text-sm md:text-base">
                    <a href="#contact1">Get Started →</a>
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-300 text-sm md:text-base">
                    <a href="About">Learn More →</a>
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 flex items-center rounded-xl justify-center p-6 md:p-12 bg-gradient-to-br from-blue-400 to-blue-300">
                <div className="relative w-full max-w-md">
                  <div className="rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={slidpic6}
                      alt="Digital Transformation"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional info section */}
            <div className="mt-8 md:mt-12 text-center">
              <p className="text-blue-600 font-bold text-lg md:text-2xl">
                Trusted by industry leaders worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 p-4 md:p-6 mt-2 bg-gray-200 text-gray-700 rounded-2xl">
                <span className="font-bold text-lg md:text-2xl flex items-center">
                  Google{" "}
                  <img
                    className="ml-2 h-5 w-5 md:h-7 md:w-7"
                    src={google}
                    alt="Google"
                  />
                </span>
                <span className="font-bold text-lg md:text-2xl flex items-center">
                  Microsoft{" "}
                  <img
                    className="ml-2 h-5 w-5 md:h-7 md:w-7"
                    src={mcr}
                    alt="Microsoft"
                  />
                </span>
                <span className="font-bold text-lg md:text-2xl flex items-center">
                  Amazon{" "}
                  <img
                    className="ml-2 h-5 w-5 md:h-7 md:w-7"
                    src={amazon}
                    alt="Amazon"
                  />
                </span>
                <span className="font-bold text-lg md:text-2xl flex items-center">
                  Apple{" "}
                  <img
                    className="ml-2 h-5 w-5 md:h-7 md:w-7"
                    src={apple}
                    alt="Apple"
                  />
                </span>
                <span className="font-bold text-lg md:text-2xl flex items-center">
                  Slack{" "}
                  <img
                    className="ml-2 h-5 w-5 md:h-7 md:w-7"
                    src={slack}
                    alt="Slack"
                  />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* mid video section */}
        <div className="w-full h-auto md:h-[800px] flex items-center justify-center mb-8 bg-gray-50 py-8 md:py-0">
          <div className="w-full md:w-[90%] h-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-4">
            <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-evenly gap-4">
              <h1 className="text-2xl md:text-4xl font-bold hover:text-blue-500 transition duration-300">
                " Our platform is known as "
                <span className="text-blue-500">Empower</span>
              </h1>
              <p className="text-base md:text-lg font-mullish text-justify">
                certified experts dedicated to empowering businesses like yours.
                Our proven methodologies and premium support are the
                cornerstones of our company. We believe in building secure and
                seamless solutions that you can depend on.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 text-sm md:text-base">
                <a href="Services">Learn More →</a>
              </button>
            </div>
            <div className="w-full md:w-1/2 h-full flex items-center justify-center">
              <video
                className="w-full h-auto"
                loop
                autoPlay
                muted
                playsInline
                src={midvideo}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <br />
        <br />

        {/* stats section */}
        <div className="min-h-screen w-full flex items-center justify-center p-4">
          <div className="p-4 md:p-8 rounded-2xl shadow-xl w-full max-w-6xl bg-gray-50">
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                Working With Us <span className="text-blue-400">Zen.IT</span>
              </h1>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Turn browsing into buying with a custom-built online store. We
                develop secure, intuitive, and high-converting e-commerce
                websites that simplify the customer journey.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden bg-white">
              <div className="px-4 py-3 md:px-6 md:py-4 flex items-center justify-between bg-blue-100">
                <h2 className="text-blue-600 text-lg md:text-xl font-bold">
                  Zen Performing
                </h2>
              </div>

              <div className="px-4 py-3 md:px-6 md:py-4 space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-blue-50 p-4 md:p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-blue-400 font-medium text-sm md:text-base">
                        Visitors
                      </h3>
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-gray-800">
                      4,289
                    </p>
                    <p className="text-xs md:text-sm text-green-500 mt-1">
                      ↑ 12.5% increase
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 md:p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-blue-400 font-medium text-sm md:text-base">
                        Bounce Rate
                      </h3>
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-gray-800">
                      32.3%
                    </p>
                    <p className="text-xs md:text-sm text-red-500 mt-1">
                      ↓ 5.2% decrease
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 md:p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-blue-400 font-medium text-sm md:text-base">
                        Conversion
                      </h3>
                    </div>
                    <p className="text-xl md:text-2xl font-bold text-gray-800">
                      8.5%
                    </p>
                    <p className="text-xs md:text-sm text-green-500 mt-1">
                      ↑ 3.7% increase
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 md:p-4 rounded-r">
                  <div className="flex items-start">
                    <div className="ml-3">
                      <p className="text-xs md:text-sm text-blue-700">
                        Data updated every week. Refresh now to get the latest
                        metrics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gray-100">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                  <button className="px-3 py-2 bg-indigo-600 border border-gray-300 rounded-lg text-white text-xs md:text-sm font-medium hover:bg-blue-500 transition w-full sm:w-auto">
                    <a href="#contact1">Contact Us →</a>
                  </button>
                  <button className="px-3 py-2 bg-indigo-600 border border-gray-300 rounded-lg text-white text-xs md:text-sm font-medium hover:bg-blue-500 transition w-full sm:w-auto">
                    <a href="portfolio">Analyze Us →</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        {/* contact section */}
        <div>
          <section className="py-8 md:py-16 bg-blue-200">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  Get In Touch
                </h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                  Reach out to discuss your project or request a consultation
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                    Contact Information
                  </h3>
                  <p className="mb-6 md:mb-8">
                    Fill out the form or contact us through other channels
                    listed below:
                  </p>

                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start">
                      <div className="text-xl mr-3 md:mr-4">
                        <img
                          className="h-8 w-6 md:h-12 md:w-10"
                          src={location}
                          alt="Location"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">
                          Address
                        </h4>
                        <p className="text-sm">Islamabad, Punjab, Pakistan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-xl mr-3 md:mr-4">
                        <img
                          className="h-8 w-6 md:h-12 md:w-10"
                          src={mobile}
                          alt="Phone"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">
                          Phone
                        </h4>
                        <p className="text-sm"> (+92) 322 7757470</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-xl mr-3 md:mr-4">
                        <img
                          className="h-8 w-6 md:h-12 md:w-10"
                          src={email}
                          alt="Email"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">
                          Email
                        </h4>
                        <p className="text-sm">zen.it.solution0@mail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-xl mr-3 md:mr-4">
                        <img
                          className="h-7 w-7 md:h-11 md:w-11"
                          src={clock}
                          alt="Working Hours"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">
                          Working Hours
                        </h4>
                        <p className="text-sm">Monday-Friday: 9AM - 5PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 md:mt-10">
                    <h4 className="font-bold text-lg md:text-xl mb-3 md:mb-4">
                      Follow Us
                    </h4>
                    <div className="flex flex-wrap justify-between gap-2">
                      <a
                        href="https://web.facebook.com/profile.php?id=61580902258081&sk=followers"
                        className="font-bold text-blue-400 hover:text-blue-600 hover:text-xl transition ease-in-out text-sm md:text-base"
                      >
                        Facebook →
                      </a>
                      <a
                        href="#"
                        className="font-bold text-blue-400 hover:text-blue-600 hover:text-xl transition ease-in-out text-sm md:text-base"
                      >
                        Twitter →
                      </a>
                      <a
                        href="#"
                        className="font-bold text-blue-400 hover:text-blue-600 hover:text-xl transition ease-in-out text-sm md:text-base"
                      >
                        Instagram →
                      </a>
                      <a
                        href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BYcVB%2FVXXSAaRhkzY90bdPQ%3D%3D"
                        className="font-bold text-blue-400 hover:text-blue-600 hover:text-xl transition ease-in-out text-sm md:text-base"
                      >
                        LinkedIn →
                      </a>
                    </div>
                  </div>
                </div>

                {/* form section */}
                <div id="contact1">
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white text-blue-500 rounded-xl p-4 md:p-8 shadow-lg"
                  >
                    <div className="mb-4 md:mb-6">
                      <label
                        htmlFor="name"
                        className="block mb-2 font-medium text-sm md:text-base"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name..."
                        value={formData.name}
                        onChange={handleChange}
                        required
                        id="name"
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
                      />
                    </div>
                    <div className="mb-4 md:mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 font-medium text-sm md:text-base"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email Address..."
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      />
                    </div>
                    <div className="mb-4 md:mb-6">
                      <label
                        htmlFor="phone"
                        className="block mb-2 font-medium text-sm md:text-base"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone No..."
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      />
                    </div>

                    <div className="mb-4 md:mb-6">
                      <label
                        htmlFor="projectType"
                        className="block mb-2 font-medium text-sm md:text-base"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      >
                        <option value="">Select Project Type</option>
                        <option value="website">Website Development</option>
                        <option value="ecommerce">App Development</option>
                        <option value="webapp">Cloud Solutions</option>
                        <option value="redesign">Custom Logo Design</option>
                        <option value="maintenance">Graphic Design</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <label
                        htmlFor="message"
                        className="block mb-2 font-medium text-sm md:text-base"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Project Details"
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition disabled:bg-gray-400 text-sm md:text-base"
                    >
                      {isSubmitting ? "Sending..." : "Submit"}
                    </button>

                    {submitStatus === "success" && (
                      <div className="status-message success mt-3 md:mt-4 p-2 md:p-3 bg-green-100 text-green-700 rounded text-sm">
                        Thank you! Your message has been sent successfully.
                        We'll get back to you within 24 hours.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="status-message error mt-3 md:mt-4 p-2 md:p-3 bg-red-100 text-red-700 rounded text-sm">
                        Sorry, there was an error sending your message. Please
                        try again or contact us directly at
                        zen.it.solution0@gmail.com
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* footer */}
          <section className="min-h-screen flex items-center justify-center w-full">
            <footer className="h-screen w-full bg-blue-200 text-blue-900 shadow-inner">
              <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-20">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                  {/* Company Info */}
                  <div className="mb-8 md:mb-0 md:w-1/4">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">
                      ZEN.IT.
                      <span className="text-blue-500 hover:text-white transition-colors duration-300">
                        SOLUTION
                      </span>
                    </h2>
                    <p className="mb-4 text-sm md:text-base">
                      Creating innovative solutions for the digital world.
                      Empowering businesses through technology.
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div className="mb-8 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="/"
                          className="text-blue-500 hover:text-white transition-colors duration-300 text-sm md:text-base"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="About"
                          className="text-blue-500 hover:text-white transition-colors duration-300 text-sm md:text-base"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="Services"
                          className="text-blue-500 hover:text-white transition-colors duration-300 text-sm md:text-base"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="portfolio"
                          className="text-blue-500 hover:text-white transition-colors duration-300 text-sm md:text-base"
                        >
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          href="#contact1"
                          className="text-blue-500 hover:text-white transition-colors duration-300 text-sm md:text-base"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Services */}
                  <div className="mb-8 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Services</h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-blue-500 hover:text-white transition-colors duration-300 text-sm md:text-base"
                        >
                          Web Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-blue-500 hover:text-white transition-colors duration-300 text-sm md:text-base"
                        >
                          App Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-blue-500 hover:text-white transition-colors duration-300 text-sm md:text-base"
                        >
                          Cloud Solutions
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-blue-500 hover:text-white transition-colors duration-300 text-sm md:text-base"
                        >
                          Custom Logo Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-blue-500 hover:text-white transition-colors duration-300 text-sm md:text-base"
                        >
                          Graphic Design
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-blue-500 hover:text-white transition-colors duration-300 text-sm md:text-base"
                        >
                          SEO Optimization
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 flex items-center justify-center">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                      <h3 className="text-xl md:text-2xl font-semibold">
                        <a href="#contact1">Join Us→</a>{" "}
                      </h3>
                      <p className="text-blue-600 text-sm md:text-base">
                        Get the latest updates and offers
                      </p>
                    </div>
                  </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-500 text-center text-gray-800 text-xs md:text-sm">
                  <p>© 2023 Zen IT Solution. All rights reserved.</p>
                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    <a
                      href="#"
                      className="text-gray-800 hover:text-white transition-colors duration-300"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-white transition-colors duration-300"
                    >
                      Terms of Service
                    </a>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-white transition-colors duration-300"
                    >
                      Cookie Policy
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
