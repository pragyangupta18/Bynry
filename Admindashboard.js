import React, { useState } from "react";
import { profiles as initialProfiles } from "../data";

const AdminDashboard = () => {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [newProfile, setNewProfile] = useState({
    name: "",
    description: "",
    photo: "",
    location: { lat: 0, lng: 0 },
  });

  const addProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({
      name: "",
      description: "",
      photo: "",
      location: { lat: 0, lng: 0 },
    });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input
        type="text"
        placeholder="Name"
        value={newProfile.name}
        onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newProfile.description}
        onChange={(e) =>
          setNewProfile({ ...newProfile, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={newProfile.photo}
        onChange={(e) =>
          setNewProfile({ ...newProfile, photo: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Latitude"
        value={newProfile.location.lat}
        onChange={(e) =>
          setNewProfile({
            ...newProfile,
            location: { ...newProfile.location, lat: parseFloat(e.target.value) },
          })
        }
      />
      <input
        type="text"
        placeholder="Longitude"
        value={newProfile.location.lng}
        onChange={(e) =>
          setNewProfile({
            ...newProfile,
            location: { ...newProfile.location, lng: parseFloat(e.target.value) },
          })
        }
      />
      <button onClick={addProfile}>Add Profile</button>
    </div>
  );
};

export default AdminDashboard;
