'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Dex from '../../images/IMG_1344.JPG';
import Second from '../../images/IMG_1345.JPG';
import Video from '../../images/IMG_1332.MP4';

// List of media items
const mediaItems = [
  {
    type: 'image',
    src: Dex,
    alt: 'Beautiful nature scene 1',
  },
  {
    type: 'image',
    src: Second,
    alt: 'Beautiful nature scene 2',
  },
  {
    type: 'video',
    src: Video,
    alt: 'Sample video 1',
  },
];

export function MediaGallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="media-gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Media Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative cursor-pointer"
              onClick={() => openModal(item)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt || 'Media item'}
                  className="w-full rounded-lg shadow-lg"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full rounded-lg shadow-lg"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="max-w-4xl w-full p-4">
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full rounded-lg"
              />
            ) : (
              <video
                src={selectedItem.src}
                muted
                autoPlay
                loop
                controls
                playsInline
                className="w-full rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
