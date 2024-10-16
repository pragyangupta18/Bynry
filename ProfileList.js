import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import MapComponent from "./MapComponent";
import { profiles } from "../data";

const ProfileList = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSummaryClick={handleSummaryClick}
          />
        ))}
      </div>

      {selectedProfile && (
        <div className="map-section">
          <h3>{`Viewing Location for ${selectedProfile.name}`}</h3>
          <MapComponent location={selectedProfile.location} />
        </div>
      )}
    </div>
  );
};

export default ProfileList;
