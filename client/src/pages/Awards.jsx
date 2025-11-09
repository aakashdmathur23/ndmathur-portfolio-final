import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

function TimelineItem({ item, i }) {
  const isAward = item.type === 'award';
  return (
    <motion.div
      initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="mb-6 flex flex-col md:flex-row items-start"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-oxford_blue text-white mr-4">
        {isAward ? <Award size={20} /> : <Calendar size={18} />}
      </div>
      <div className="flex-1 bg-white p-4 rounded shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-semibold">{item.title}</div>
            <div className="text-sm text-gray-600">{item.organization}</div>
          </div>
          <div className="text-sm text-gray-500">{item.year}</div>
        </div>
        {item.description && <div className="mt-2 text-gray-700">{item.description}</div>}
      </div>
    </motion.div>
  );
}

export default function Awards() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/awards').then(r => r.json()).then(setItems).catch(console.error);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="font-heading text-3xl mb-6 text-oxford_blue">Awards & Career Timeline</h2>
      <div className="space-y-6">
        {items.sort((a,b)=> (b.year || 0) - (a.year || 0)).map((it,i)=>(
          <TimelineItem key={i} item={it} i={i} />
        ))}
      </div>
    </div>
  );
}
