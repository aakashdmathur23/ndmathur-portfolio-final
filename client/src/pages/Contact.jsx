import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setSuccess('✅ Thank you for reaching out, your message has been received.');
      setForm({ name: '', email: '', message: '' });
    } else {
      setSuccess('⚠️ There was an issue submitting your message. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 font-body">
      <h2 className="font-heading text-3xl font-semibold mb-4 text-oxford_blue">Contact</h2>
      <p className="text-black-700 mb-6">
        You can reach out to Prof. (Dr.) N. D. Mathur using the form below or via email.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-2 rounded border border-platinum-600 focus:outline-none focus:ring-2 focus:ring-orange_web-500"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-2 rounded border border-platinum-600 focus:outline-none focus:ring-2 focus:ring-orange_web-500"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows="6"
          className="w-full p-2 rounded border border-platinum-600 focus:outline-none focus:ring-2 focus:ring-orange_web-500"
        ></textarea>

        <button
          type="submit"
          className="bg-oxford_blue hover:bg-orange_web-500 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
        >
          Send Message
        </button>

        {success && (
          <p className="text-green-600 mt-2 text-sm font-medium">{success}</p>
        )}
      </form>

      <div className="mt-8 text-center text-sm text-gray-700">
        <p>Email: <a href="mailto:mathur.naresh@rediffmail.com" className="text-orange_web-500 hover:underline">mathur.naresh@rediffmail.com</a></p>
        <p>Alternate Email: <a href="mailto:mathur.naresh56@gmail.com" className="text-orange_web-500 hover:underline">mathur.naresh56@gmail.com</a></p>
        <p className="mt-2">Address: C-129, Anand Bhawan, Mangal Marg, Bapu Nagar, Jaipur - 302015</p>
      </div>
    </div>
  );
}
