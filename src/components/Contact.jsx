import { useState } from 'react';
import emailjs from '@emailjs/browser';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '9IGX9UGA0IKsFAVfz';
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_y9c15mg';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_u5k2osk';

const INFO = [
  { icon: 'fas fa-envelope', text: 'myanmar2021burma@gmail.com' },
  { icon: 'fas fa-phone-alt', text: '+95 9 259929156' },
  { icon: 'fas fa-globe', text: 'www.thethtar.dev' },
  { icon: 'fab fa-github', text: 'https://github.com/myanmar2021burma' },
  { icon: 'fas fa-clock', text: '09:00 – 17:00 (GMT+6:30)' },
];

const EMPTY = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ type: 'idle' }); // idle | sending | success | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'sending' });
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey: PUBLIC_KEY }
      );
      setStatus({ type: 'success' });
      setForm(EMPTY);
    } catch {
      setStatus({ type: 'error' });
    }
  };

  return (
    <div className="contact-two">
      <div className="contact-info-yellow">
        <h2 style={{ color: 'var(--purple-accent)' }}>
          <i className="fas fa-address-card" /> Personal Info
        </h2>
        <p>Feel free to contact me any time. I will get back to you as soon as possible.</p>
        {INFO.map((row) => (
          <div
            key={row.text}
            className="info-row"
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}
          >
            <i className={row.icon} /> <span>{row.text}</span>
          </div>
        ))}
      </div>

      <div className="contact-form-raised">
        <h2 style={{ color: 'var(--purple-accent)' }}>
          <i className="fas fa-paper-plane" /> Send Message
        </h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={onChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={form.email}
            onChange={onChange}
            required
          />
          <textarea
            rows="4"
            name="message"
            placeholder="Project idea, collaboration, or just say hello..."
            value={form.message}
            onChange={onChange}
            required
          />
          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%' }}
            disabled={status.type === 'sending'}
          >
            <i className="far fa-envelope" /> Send to Gmail
          </button>
          <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.85rem' }}>
            {status.type === 'sending' && (
              <>
                <i className="fas fa-spinner fa-pulse" /> Sending...
              </>
            )}
            {status.type === 'success' && (
              <span style={{ color: '#2E7D32' }}>✅ Message sent to my Gmail! I'll reply soon.</span>
            )}
            {status.type === 'error' && (
              <span style={{ color: '#D32F2F' }}>❌ Failed. Check EmailJS credentials.</span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
