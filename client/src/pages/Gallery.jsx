// src/pages/Gallery.jsx
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null); // null = no selection

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then(setImages)
      .catch(console.error);
  }, []);

  // open by index
  const openAt = (idx) => setSelectedIndex(idx);

  // close modal
  const close = () => setSelectedIndex(null);

  // navigate
  const prev = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  // keyboard handlers
  useEffect(() => {
    const onKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, prev, next]);

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
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => openAt(i)}
            >
              <img
                src={img.path}
                alt={img.caption || `Gallery ${i + 1}`}
                className="w-full h-80 sm:h-96 md:h-96 object-contain bg-white p-4 rounded-t-lg"
                loading="lazy"
              />
              <div className="p-3 bg-white text-gray-700 text-sm text-center">
                {img.caption}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedIndex !== null && images[selectedIndex] && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-80 flex items-center justify-center bg-black bg-opacity-80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close} // close when clicking background
          >
            {/* container to prevent closing when clicking the image/content */}
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={close}
                className="absolute top-3 right-3 p-2 rounded-md bg-white bg-opacity-10 hover:bg-opacity-20 text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Prev button */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white"
                aria-label="Previous"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next button */}
              <button
                onClick={next}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 text-white"
                aria-label="Next"
              >
                <ChevronRight size={22} />
              </button>

              {/* Image */}
              <div className="flex-shrink-0 w-full flex items-center justify-center">
                <img
                  src={images[selectedIndex].path}
                  alt={images[selectedIndex].caption || `Image ${selectedIndex + 1}`}
                  className="max-w-full max-h-[80vh] rounded-lg object-contain"
                />
              </div>

              {/* Caption + index */}
              <div className="mt-4 bg-white bg-opacity-90 text-oxford_blue rounded-md px-4 py-2 text-center max-w-full">
                <div className="text-sm md:text-base">{images[selectedIndex].caption}</div>
                <div className="text-xs text-black-600 mt-1">Image {selectedIndex + 1} of {images.length}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}