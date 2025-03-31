const express = require("express");
const Patient = require("../models/Patient");

const router = express.Router();

// 📌 1️⃣ Add a New Patient
router.post("/", async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ message: "Patient added successfully", patient });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}); 

// 📌 2️⃣ Get All Patients
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: "Error fetching patients" });
  }
});

// 📌 3️⃣ Get a Patient by ID
router.get("/:id", async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: "Error fetching patient" });
  }
});

// 📌 4️⃣ Update a Patient
router.put("/:id", async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Patient updated successfully", updatedPatient });
  } catch (error) {
    res.status(400).json({ error: "Error updating patient" });
  }
});

// 📌 5️⃣ Delete a Patient
router.delete("/:id", async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting patient" });
  }
});

module.exports = router;
