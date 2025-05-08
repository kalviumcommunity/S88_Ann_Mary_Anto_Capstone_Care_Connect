// src/App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [nurses, setNurses] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    experience: '',
    available: true,
    address: '',
    certifications: ''
  });

  // Fetch nurses from backend
  const fetchNurses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/nurses');
      setNurses(res.data);
    } catch (err) {
      console.error('Error fetching nurses:', err);
    }
  };

  useEffect(() => {
    fetchNurses();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit new nurse
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      experience: Number(formData.experience),
      certifications: formData.certifications.split(',').map((cert) => cert.trim())
    };

    try {
      await axios.post('http://localhost:5000/nurses', payload);
      alert('Nurse added successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        specialty: '',
        experience: '',
        available: true,
        address: '',
        certifications: ''
      });
      fetchNurses(); // refresh list
    } catch (err) {
      alert('Failed to add nurse: ' + err.response?.data?.error);
    }
  };

  return (
    <>
      <h1>Care-Connect Nurses</h1>

      <h2>Add New Nurse</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required /><br />
        <input name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange} required /><br />
        <input name="experience" type="number" placeholder="Experience (years)" value={formData.experience} onChange={handleChange} /><br />
        <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} /><br />
        <input name="certifications" placeholder="Certifications (comma separated)" value={formData.certifications} onChange={handleChange} /><br />
        <button type="submit">Add Nurse</button>
      </form>

      <h2>All Nurses</h2>
      {nurses.map((nurse) => (
        <div key={nurse._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{nurse.name}</h3>
          <p><strong>Specialty:</strong> {nurse.specialty}</p>
          <p><strong>Email:</strong> {nurse.email}</p>
          <p><strong>Phone:</strong> {nurse.phone}</p>
          <p><strong>Experience:</strong> {nurse.experience} years</p>
          <p><strong>Available:</strong> {nurse.available ? 'Yes' : 'No'}</p>
          <p><strong>Address:</strong> {nurse.address}</p>
          <p><strong>Certifications:</strong> {nurse.certifications.join(', ')}</p>
        </div>
      ))}
    </>
  );
}

export default App;
