import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 font-medium text-gray-300 text-left"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:border-indigo-900 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-background"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 font-medium text-gray-300 text-left"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:border-indigo-900 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-background"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 font-medium text-gray-300 text-left"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded resize-y min-h-[120px] focus:border-indigo-900 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-background"
          rows="5"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-block px-8 py-3 bg-gradient-to-tr from-gradientFrom to-gradientTo text-background font-semibold rounded hover:brightness-75 ransition-colors transform duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
