import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Image } from "lucide-react";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then(setImages)
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8 font-body">
      <h2 className="font-heading text-3xl mb-6 text-oxford_blue flex items-center gap-2">
        <Image size={26} className="text-orange_web-500" /> Photo Gallery
      </h2>

      {images.length === 0 ? (
        <p className="text-gray-600">Loading gallery…</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={img.path}
                alt={img.caption}
                className="w-full h-85 object-cover rounded-lg"
              />
              <div className="p-3 bg-white text-gray-700 text-sm text-center">
                {img.caption}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
