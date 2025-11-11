import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const stats = [
    { label: 'Years of Teaching', value: '47+' },
    { label: 'Research Papers', value: '70+' },
    { label: 'PhD Supervisions', value: '34+' },
    { label: 'Lectures Delivered', value: '3000+' },
  ];

  return (
    <div className="bg-platinum min-h-screen text-black font-body">
      <section className="text-center py-12 px-4 bg-gradient-to-b from-oxford_blue to-oxford_blue-600 text-white">
        <motion.img
          src="/assets/portrait.jpeg"
          alt="Prof. N.D. Mathur"
          className="w-56 h-56 rounded-full mx-auto mb-6 shadow-xl object-cover p-1 bg-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="font-heading text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Prof. (Dr.) N. D. Mathur
        </motion.h1>
        <p className="mt-2 text-lg text-orange_web-500 font-medium">
          President (Vice-Chancellor), Vivekananda Global University, Jaipur
        </p>
        <p className="italic mt-4 text-platinum-900">
          “A lifetime dedicated to education, economics, and human excellence.”
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <p className="text-3xl font-bold text-orange_web-500">{s.value}</p>
            <p className="text-sm text-black-600">{s.label}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
