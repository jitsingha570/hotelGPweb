import React, { useEffect, useState } from 'react';

import api from '../utils/api'; // Custom axios instance

const Roomsedit = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ roomname: '', roomdescription: '', roomprice: '', roomdiscount: '' });
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const fetchRooms = async () => {
    try {
      const res = await api.get('/rooms');
      setRooms(res.data);
      setError(false);
    } catch (error) {
      console.error("Failed to fetch rooms", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/rooms/${id}`);
      fetchRooms();
    } catch (err) {
      console.error('Error deleting room:', err);
    }
  };

  const handleUpdate = (room) => {
    setForm(room);
    setIsUpdating(true);
    setCurrentId(room._id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isUpdating) {
        await api.put(`/rooms/${currentId}`, form);
      } else {
        await api.post('/rooms', form);
      }
      setForm({ roomname: '', roomdescription: '', roomprice: '', roomdiscount: '' });
      setIsUpdating(false);
      setCurrentId(null);
      fetchRooms();
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="flex flex-col items-center bg-blue-100 pt-20 min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-4/5 mb-10">
        <h2 className="text-xl font-bold mb-4">{isUpdating ? 'Update Room' : 'Add Room'}</h2>
        <input className="w-full mb-2 p-2 border" placeholder="Room Name" value={form.roomname} onChange={e => setForm({ ...form, roomname: e.target.value })} />
        <input className="w-full mb-2 p-2 border" placeholder="Description" value={form.roomdescription} onChange={e => setForm({ ...form, roomdescription: e.target.value })} />
        <input className="w-full mb-2 p-2 border" placeholder="Price" type="number" value={form.roomprice} onChange={e => setForm({ ...form, roomprice: e.target.value })} />
        <input className="w-full mb-4 p-2 border" placeholder="Discounted Price" type="number" value={form.roomdiscount} onChange={e => setForm({ ...form, roomdiscount: e.target.value })} />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" type="submit">{isUpdating ? 'Update' : 'Add'}</button>
      </form>

      {error ? (
        <div className="text-red-600 text-xl font-semibold">⚠️ Failed to fetch rooms.</div>
      ) : (
        rooms.map((room, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-white shadow-lg w-4/5 rounded-lg overflow-hidden mb-6 p-6">
            <div className="w-full md:w-1/2 flex flex-col space-y-2">
              <h2 className="text-2xl font-semibold text-blue-600">{room.roomname}</h2>
              <p>{room.roomdescription}</p>
              <p className="line-through text-black">Rs.{room.roomprice}</p>
              <p className="text-green-600 font-bold">Now Rs.{room.roomdiscount}</p>
              <div className="flex mt-2 space-x-2">
                <button onClick={() => handleUpdate(room)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Update</button>
                <button onClick={() => handleDelete(room._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Roomsedit;
