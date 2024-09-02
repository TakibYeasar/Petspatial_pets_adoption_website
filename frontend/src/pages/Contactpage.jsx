import React from 'react';
import { FaArrowRight, FaClock, FaEnvelope, FaHome, FaPhone } from 'react-icons/fa';

const contactDetails = [
  {
    icon: <FaHome />,
    title: 'Contact Address',
    content: '#3456VL Petspatial, Corner Services, NY - 62617.',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Address',
    content: (
      <>
        <a href="mailto:contact@mail.com" >contact@mail.com</a><br />
        <a href="mailto:support@mail.com" className="text-blue-600 hover:text-blue-800">support@mail.com</a>
      </>
    ),
  },
  {
    icon: <FaPhone />,
    title: 'Contact Phone',
    content: (
      <>
        <a href="tel:+12 534 891 4364" className="text-blue-600 hover:text-blue-800">+12 534 891 4364</a><br />
        <a href="tel:+44 987 654 3211" className="text-blue-600 hover:text-blue-800">+44 987 654 3211</a>
      </>
    ),
  },
  {
    icon: <FaClock />,
    title: 'Opening Hours',
    content: (
      <>
        <p>Mon-Fri: 8 AM - 5 PM</p>
        <p>Sat-Sun: Closed</p>
      </>
    ),
  },
];

const Contact = () => {
  return (
    <div className="contact-sec">
      {/* Banner Section */}
      <div className="relative min-h-[260px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/assets/images/banner2.jpg')` }}>
        <div className="absolute inset-0 bg-font bg-opacity-50"></div>
      </div>

      {/* Breadcrumbs Section */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <ul className="flex items-center text-lg font-semibold text-gray-900">
            <li>
              <a href="/" className="text-gray-700 opacity-70 hover:opacity-100">Home</a>
            </li>
            <li className="flex items-center font-bold">
              <FaArrowRight className="mx-2 text-sm opacity-70" />
              Contact Us
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-100 py-12" id="contact">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mb-8">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="text-left">
                <h6 className="text-lg font-medium text-gray-900 mb-2">Get in Touch with Us</h6>
                <h3 className="text-2xl font-bold text-gray-900">Let's Discuss Any Services Enquiry</h3>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <p className="text-gray-700">
                We are dedicated to the safety of our guests and employees and have updated our safety measures. We believe in Simple, Creative, Modern, and Flexible Design Standards with a Retina and Responsive Approach.
              </p>
            </div>
          </div>

          {/* Contact Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center py-8">
            {contactDetails.map(({ icon, title, content }) => (
              <div key={title} className="bg-white p-8 rounded-lg shadow-lg">
                <a className="text-white bg-blue-600 p-3 rounded-full text-xl inline-block mb-4">{icon}</a>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{title}</h4>
                <p className="text-gray-700">{content}</p>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto pt-12">
            <h5 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch. We're Here to Help</h5>
            <form action="" method="post">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  className="bg-white border border-gray-300 text-gray-700 rounded-lg p-4"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  className="bg-white border border-gray-300 text-gray-700 rounded-lg p-4"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="bg-white border border-gray-300 text-gray-700 rounded-lg p-4 w-full"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  className="bg-white border border-gray-300 text-gray-700 rounded-lg p-4 w-full"
                  id="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="btn-style"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
