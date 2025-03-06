// src/components/ContactForm.jsx
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
    // Her ville du vanligvis sende dataen til en server
    alert('Takk for din henvendelse! Jeg vil ta kontakt snart.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 font-medium text-gray-700 text-left"
        >
          Navn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:border-indigo-900 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 font-medium text-gray-700 text-left"
        >
          E-post
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded focus:border-indigo-900 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 font-medium text-gray-700 text-left"
        >
          Melding
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded resize-y min-h-[120px] focus:border-indigo-900 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows="5"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="inline-block px-8 py-3 bg-indigo-900 text-white font-semibold rounded hover:bg-indigo-800 transition-colors transform hover:-translate-y-1 duration-200"
      >
        Send Melding
      </button>
    </form>
  );
};

export default ContactForm;
