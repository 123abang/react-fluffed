// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { Play } from 'lucide-react'

// const mediaItems = [
//   { type: 'image', src: '/placeholder.svg?height=400&width=600', alt: 'Meme Coin Image 1' },
//   { type: 'video', src: 'https://www.example.com/video1.mp4', thumbnail: '/placeholder.svg?height=400&width=600' },
//   { type: 'image', src: '/placeholder.svg?height=400&width=600', alt: 'Meme Coin Image 2' },
//   { type: 'video', src: 'https://www.example.com/video2.mp4', thumbnail: '/placeholder.svg?height=400&width=600' },
// ]

// export function MediaSection() {
//   const [selectedItem, setSelectedItem] = useState(null)

//   const openModal = (item) => {
//     setSelectedItem(item)
//   }

//   const closeModal = () => {
//     setSelectedItem(null)
//   }

//   return (
//     <section id="media" className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-12 text-center">Media Gallery</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {mediaItems.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative cursor-pointer"
//               onClick={() => openModal(item)}
//             >
//               {/* <Image
//                 src={item.type === 'image' ? item.src : item.thumbnail}
//                 alt={item.alt || 'Media item'}
//                 width={600}
//                 height={400}
//                 layout="responsive"
//                 className="rounded-lg"
//               /> */}
//               {item.type === 'video' && (
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <Play size={48} className="text-white" />
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       {selectedItem && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
//           <div className="max-w-4xl w-full p-4">
//             {selectedItem.type === 'image' ? (
//               <Image
//                 src={selectedItem.src}
//                 alt={selectedItem.alt}
//                 width={800}
//                 height={600}
//                 layout="responsive"
//                 className="rounded-lg"
//               />
//             ) : (
//               <video src={selectedItem.src} controls className="w-full rounded-lg" />
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   )
// }

