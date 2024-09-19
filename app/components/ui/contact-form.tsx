'use client';

import { useState, useRef } from 'react';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!recaptchaToken) {
      setError('Please complete the CAPTCHA.');
      setLoading(false);
      return;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, recaptchaToken }),
    });

    const result = await res.json();

    if (res.ok) {
      setSuccess('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');

      if (recaptchaRef.current) {
        recaptchaRef.current.reset(); // Reset the CAPTCHA
      }
      setRecaptchaToken('');
    } else {
      setError(result.error || 'Something went wrong.');
    }

    setLoading(false);
  };

  const handleRecaptchaChange = (token: string | null) => {
    if (token) {
      setRecaptchaToken(token);
    }
  };

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg-pc:h-20 lg-pc:rounded-2xl lg-pc:px-6 lg-pc:py-3 lg-pc:text-2xl"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg-pc:h-20 lg-pc:rounded-2xl lg-pc:px-6 lg-pc:py-3 lg-pc:text-2xl"
            />
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg-pc:h-40 lg-pc:rounded-2xl lg-pc:text-2xl"
          ></textarea>
          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaChange}
              ref={recaptchaRef}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg-pc:h-20 lg-pc:rounded-2xl lg-pc:px-8 lg-pc:py-4 lg-pc:text-2xl"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
      {success && <p className="mt-4 text-green-600">{success}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
}
