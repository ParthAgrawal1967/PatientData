const mongoose = require("mongoose");

// Define schema for patient data
const patientSchema = new mongoose.Schema({
  patientId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female"] },

  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },

  address: {
    village: String,
    district: String,
    state: String,
  },

  medicalHistory: {
    knownAllergies: String,
    chronicConditions: String,
    pastSurgeries: String,
    familyMedicalHistory: String,
    vaccinationRecords: String,
  },

  consultationRecords: {
    doctorsNotes: String,
    prescriptions: String,
    labTestResults: String,
    vitalSigns: {
      bloodPressure: String,
      heartRate: String,
      temperature: String,
    },
    dateOfVisit: Date,
    nextAppointment: Date,
  },

  emergencyDetails: {
    emergencyContact: {
      name: String,
      relation: String,
      phone: String,
    },
    bloodGroup: String,
    insuranceDetails: String,
  },
});

// Export model
module.exports = mongoose.model("Patient", patientSchema);
