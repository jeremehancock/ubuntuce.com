import React from 'react';
import TeamCard from "../TeamCard";

const Contributors = () => {
  return (
    <div className="flex flex-col md:flex-row md:-mx-3">
      <div className="flex-1 px-3">
        <TeamCard image="jeremehancock" name="Jereme Hancock" title="Creator / Developer" />
      </div>
      <div className="flex-1 px-3">
        <TeamCard image="russmacshane" name="Russ MacShane" title="QA / Developer" />
      </div>
      <div className="flex-1 px-3">
        <TeamCard image="mateogomez" name="Mateo Gomez" title="Torrent Manager" />
      </div>
    </div>
  );
};

export default Contributors;
