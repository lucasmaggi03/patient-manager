import { create } from "zustand";
import type { Patient } from "../types";

type PatientState = {
    patient: Patient[]
}

export const usePatientStore = create<PatientState>(() => ({
    patient: []
}));
