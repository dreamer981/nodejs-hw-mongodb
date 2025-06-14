import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, default: null },
    isFavourite: { type: Boolean, default: false },
    contactType: {
      type: String,
      enum: ['personal', 'home'],
      default: 'personal',
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model('Contact', contactSchema);
