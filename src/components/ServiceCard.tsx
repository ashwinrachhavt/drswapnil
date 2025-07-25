import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="shadow-lg rounded-lg p-6 text-center bg-white">
    <div className="text-primary-blue text-3xl mb-4">{icon}</div>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default ServiceCard;
