import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Update form status
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <form 
      className="w-full max-w-lg mx-auto" 
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 font-medium font-ingress text-gray-300 text-left"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full font-body p-3 border border-gray-300 rounded focus:border-indigo-900 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-background"
          required
          aria-required="true"
          aria-invalid={formData.name === ''}
          {...(formStatus.submitted && formData.name === '' ? {'aria-describedby': 'name-error'} : {})}
        />
        {formStatus.submitted && formData.name === '' && (
          <p id="name-error" className="text-red-500 mt-1">Name is required</p>
        )}
      </div>
      
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 font-medium font-ingress text-gray-300 text-left"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full font-body p-3 border border-gray-300 rounded focus:border-indigo-900 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-background"
          required
          aria-required="true"
          aria-invalid={formData.email === ''}
          {...(formStatus.submitted && formData.email === '' ? {'aria-describedby': 'email-error'} : {})}
        />
        {formStatus.submitted && formData.email === '' && (
          <p id="email-error" className="text-red-500 mt-1">Email is required</p>
        )}
      </div>
      
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 font-medium font-ingress text-gray-300 text-left"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full font-body p-3 border border-gray-300 rounded resize-y min-h-[120px] focus:border-indigo-900 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-background"
          rows="5"
          required
          aria-required="true"
          aria-invalid={formData.message === ''}
          {...(formStatus.submitted && formData.message === '' ? {'aria-describedby': 'message-error'} : {})}
        ></textarea>
        {formStatus.submitted && formData.message === '' && (
          <p id="message-error" className="text-red-500 mt-1">Message is required</p>
        )}
      </div>
      
      <button
        type="submit"
        className="inline-block px-8 py-3 bg-gradient-to-tr from-gradientFrom to-gradientTo text-background font-semibold font-button rounded hover:brightness-75 transition-colors transform duration-300"
        aria-label="Send message"
      >
        Send Message
      </button>
      
      {formStatus.submitted && formStatus.success && (
        <div 
          className="mt-4 p-3 bg-green-100 text-green-800 rounded" 
          role="alert"
          aria-live="assertive"
        >
          {formStatus.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;