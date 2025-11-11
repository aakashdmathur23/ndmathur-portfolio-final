import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronsDown, ChevronsUp } from 'lucide-react';

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-white p-4 rounded shadow-sm"
      >
        <div className="text-left">
          <div className="font-heading text-lg">{title}</div>
        </div>
        <div className="ml-4">
          {open ? <ChevronsUp size={20} /> : <ChevronsDown size={20} />}
        </div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-platinum rounded-b">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/profile').then(r => r.json()).then(setData).catch(console.error);
  }, []);

  if (!data) return <div className="p-8">Loading profile…</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-8">
        <img src="/assets/portrait.jpeg" alt={data.name} className="w-36 h-36 rounded-full mx-auto object-cover shadow-lg" />
        <h1 className="font-heading text-2xl mt-4">{data.name}</h1>
        <div className="text-orange_web-500 mt-1">{data.designation}</div>
        <p className="mt-4 text-gray-700">{data.summary}</p>
      </div>

      <div className="grid gap-6">
        <Accordion title="Education & Qualifications">
          <div className="space-y-3 text-gray-700">
            {data.education.map((ed, i) => (
              <div key={i}>
                <div className="font-semibold">{ed.degree} — {ed.institution}{ed.year ? `, ${ed.year}` : ''}</div>
                {ed.notes && <div className="text-sm text-gray-600 mt-1">{ed.notes}</div>}
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Academic Journey & Career">
          <div className="space-y-3 text-gray-700">
            {data.positions.map((p, i) => (
              <div key={i}>
                <div className="font-semibold">{p.title} — {p.organization}</div>
                {p.period && <div className="text-sm text-gray-600">{p.period}</div>}
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="Research & Supervision">
          <div className="text-gray-700">
            <p>{data.research_and_supervision && data.research_and_supervision.notes}</p>
            <p className="mt-2"><strong>PhD Supervisions:</strong> {data.research_and_supervision && data.research_and_supervision.phd_supervisions}</p>
          </div>
        </Accordion>

        <Accordion title="Books & Publications (Overview)">
          <div className="text-gray-700">
            <p className="font-semibold mb-2">Selected books</p>
            <ul className="list-disc list-inside text-gray-700">
              {data.books.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <p className="mt-4">{data.publications_overview}</p>
          </div>
        </Accordion>

        <Accordion title="Memberships & Roles">
          <div className="text-gray-700">
            <ul className="list-disc list-inside">
              {data.memberships_and_roles.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        </Accordion>

        <Accordion title="Teaching Philosophy & Impact">
          <div className="text-gray-700">
            <p>{data.teaching_philosophy}</p>
            <p className="mt-2 text-sm text-gray-600">Also: {data.training_and_conferences}</p>
          </div>
        </Accordion>

      </div>

    </div>
  );
}
