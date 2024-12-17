'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from '../../images/fluffer.jpg';
import { Play } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  thumbnail?: string;
}

const mediaItems: MediaItem[] = [
  {
    type: 'image',
    src: '/images/nature1.jpg',
    alt: 'Beautiful nature scene 1',
  },
  {
    type: 'image',
    src: '/images/nature2.jpg',
    alt: 'Beautiful nature scene 2',
  },
  {
    type: 'video',
    src: '/videos/sample1.mp4',
    thumbnail: '/images/video-thumbnail1.jpg',
    alt: 'Sample video 1',
  },
  {
    type: 'image',
    src: '/images/architecture1.jpg',
    alt: 'Amazing architecture',
  },
  {
    type: 'video',
    src: '/videos/sample2.mp4',
    thumbnail: '/images/video-thumbnail2.jpg',
    alt: 'Sample video 2',
  },
];

export function MediaGallery() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const openModal = (item: MediaItem) => {
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
              <Image
                src={item.type === 'image' ? item.src : item.thumbnail || ''}
                alt={item.alt || 'Media item'}
                width={600}
                height={400}
                layout="responsive"
                className="rounded-lg shadow-lg"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <Play size={48} className="text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="max-w-4xl w-full p-4">
            {selectedItem.type === 'image' ? (
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                width={800}
                height={600}
                layout="responsive"
                className="rounded-lg"
              />
            ) : (
              <video src={selectedItem.src} controls className="w-full rounded-lg">
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
