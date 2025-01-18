import React from 'react';
import ServiceCard from '@/components/ServiceCard'; // Component we'll create in the next step

const services = [
  {
    title: 'Pediatric Dentistry',
    description: 'Comprehensive dental care tailored for children, ensuring a comfortable and friendly environment.',
    icon: '🦷',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth, restoring functionality and aesthetics.',
    icon: '🪛',
  },
  {
    title: 'Root Canal Treatment',
    description: 'Effective treatment to save infected teeth and alleviate pain.',
    icon: '🪥',
  },
  {
    title: 'Teeth Whitening',
    description: 'Advanced procedures to brighten your smile and boost confidence.',
    icon: '✨',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Enhancing the appearance of your teeth through veneers, bonding, and more.',
    icon: '💎',
  },
  {
    title: 'Crowns & Bridges',
    description: 'Restorative solutions to strengthen damaged teeth and replace missing ones.',
    icon: '👑',
  },
  {
    title: 'Wisdom Teeth Extraction',
    description: 'Safe and comfortable removal of problematic wisdom teeth.',
    icon: '🦷',
  },
  {
    title: 'Invisalign',
    description: 'Clear aligners to straighten teeth discreetly and effectively.',
    icon: '🦷',
  },
];

const Services = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">My Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
