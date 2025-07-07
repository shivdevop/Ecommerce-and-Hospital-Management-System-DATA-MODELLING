import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true
    },
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
      required: true
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true
    },
    diagnosis: {
      type: String,
      required: true
    },
    treatmentDetails: {
      type: String,
      required: true
    },
    prescribedMedicines: [
      {
        medicineName: String,
        dosage: String,
        duration: String
      }
    ],
    visitDate: {
      type: Date,
      default: Date.now
    },
    followUpRequired: {
      type: Boolean,
      default: false
    },
    reports: [
      {
        fileName: String,
        fileUrl: String // This could be a URL pointing to S3 or local storage
      }
    ]
  },
  {
    timestamps: true
  }
);

export const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);
