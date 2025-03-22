import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [roomId, setId] = useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    if (roomId.trim()) {
      navigate(`/room/${roomId}`);
      window.location.reload();
    } else {
      alert('Please enter a valid Room ID');
    }
  };

  return (
    <div className="h-screen font-mono flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white/20 backdrop-blur-md shadow-xl p-6 rounded-2xl w-[400px] flex flex-col items-center">
        <h1 className="text-white text-2xl font-bold mb-4">Join a Room</h1>
        <input
          className="w-full px-4 py-3 text-lg border-2 border-white/40 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
          type="text"
          placeholder="Enter Your name"
          value={roomId}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          className="mt-4 w-full py-3 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
          onClick={handleJoin}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
