"use client";
import { useState } from "react";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="bg-neutral-800/50 rounded-xl border border-neutral-700 p-6">
      <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
      <form
        onSubmit={(data) => {
          console.log(data);
        }}
        className="space-y-6"
      >
        {["name", "email", "subject"].map((field, index) => (
          <div key={index + 5}>
            <label
              htmlFor={field}
              className="block text-sm font-medium text-neutral-300 mb-2 capitalize"
            >
              {field}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              // @ts-ignore
              value={formData[field]}
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
              placeholder={`Your ${field}`}
            />
          </div>
        ))}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
            }}
            className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center"
        >
          <i className="fas fa-paper-plane mr-2"></i>
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
}
