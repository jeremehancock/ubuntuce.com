import React from 'react';
import Card from './Card';

const TeamCard = ({ image, name, title }) => (
  <Card className="mb-8">
    <div className="flex items-center">
      <img
        className="w-24 h-24 mr-4 rounded-full"
        src={image}
        alt={name}
      />
      <div>
        <p>{name}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  </Card>
);

export default TeamCard;
