// models/Nurse.js
import mongoose from 'mongoose';

const nurseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'], // Custom error
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, // Ensure no duplicate emails
    lowercase: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'] // Basic email validation
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  specialty: {
    type: String,
    required: [true, 'Specialty is required'],
    trim: true
  },
  experience: {
    type: Number,
    min: [0, 'Experience cannot be negative'],
    default: 0
  },
  available: {
    type: Boolean,
    default: true
  },
  address: {
    type: String,
    trim: true
  },
  certifications: {
    type: [String],
    default: []
  }

}, {
    timestamps: true
});

NurseSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
NurseSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Nurse = mongoose.model('Nurse', nurseSchema);

export default Nurse;
