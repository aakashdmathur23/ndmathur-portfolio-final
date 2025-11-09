import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function Publications() {
  const [pubs, setPubs] = useState([]);

  useEffect(() => {
    fetch("/api/publications")
      .then((res) => res.json())
      .then(setPubs)
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-8 font-body">
      <h2 className="font-heading text-3xl mb-6 text-oxford_blue flex items-center gap-2">
        <FileText size={26} className="text-orange_web-500" /> Research Publications
      </h2>

      {pubs.length === 0 ? (
        <p className="text-gray-600">Loading publications…</p>
      ) : (
        <div className="space-y-5">
          {pubs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-800 font-semibold">{p.title}</p>
              <p className="text-gray-600 text-sm mt-1">
                <strong>Journal:</strong> {p.journal}
              </p>
              {p.year && (
                <p className="text-gray-500 text-xs mt-1">Published: {p.year}</p>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
