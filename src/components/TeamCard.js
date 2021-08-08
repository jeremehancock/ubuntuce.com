import React from 'react';
import Card from './Card';
import { StaticImage } from 'gatsby-plugin-image';

const TeamCard = ({ image, name, title }) => (
  <Card className="mb-8">
    <div className="flex items-center">
      {image === 'jeremehancock' && (
        <StaticImage
          src="../images/jeremehancock.jpg"
          alt={name}
          placeholder="blurred"
          className="w-24 h-24 mr-4 rounded-full"
        />
      )}
      {image === 'russmacshane' && (
        <StaticImage
          src="../images/russmacshane.jpg"
          alt={name}
          placeholder="blurred"
          className="w-24 h-24 mr-4 rounded-full"
        />
      )}
      {image === 'mateogomez' && (
        <StaticImage
          src="../images/mateogomez.jpg"
          alt={name}
          placeholder="blurred"
          className="w-24 h-24 mr-4 rounded-full"
        />
      )}
      <div>
        <p>{name}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  </Card>
);

export default TeamCard;
