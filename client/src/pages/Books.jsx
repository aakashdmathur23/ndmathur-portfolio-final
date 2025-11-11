import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then(setBooks)
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-8 font-body">
      <h2 className="font-heading text-3xl mb-6 text-oxford_blue flex items-center gap-2">
        <BookOpen size={28} className="text-orange_web-500" /> Authored Books
      </h2>

      {books.length === 0 ? (
        <p className="text-gray-600">Loading books…</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg text-oxford_blue mb-2">
                {book.title}
              </h3>
              <p className="text-sm text-gray-700">{book.publisher}</p>
              {book.year && (
                <p className="text-xs text-gray-500 mt-1">{book.year}</p>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
