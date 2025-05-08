// routes/nurseRoutes.js
import express from 'express';
import Nurse from '../models/Nurse.js';

const router = express.Router();

// GET all nurses
router.get('/', async (req, res) => {
  try {
    const nurses = await Nurse.find();
    res.json(nurses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch nurses' });
  }
});

// POST a new nurse (with ALL fields)
router.post('/', async (req, res) => {
  const { name, email, phone, specialty, experience, available, address, certifications } = req.body;

  const newNurse = new Nurse({
    name,
    email,
    phone,
    specialty,
    experience,
    available,
    address,
    certifications
  });

  try {
    const savedNurse = await newNurse.save();
    res.status(201).json(savedNurse);
  } catch (error) {
    console.error('❌ Error adding nurse:', error);
    res.status(400).json({ error: error.message || 'Failed to add nurse' });
  }
});

export default router;
