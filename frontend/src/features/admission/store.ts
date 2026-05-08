import { create } from 'zustand'
import { admissionApi } from './api'
import type { ReadmittedStudentsResponse } from './types'

// ── Mock data — used when the backend is unreachable ─────────────────────────
const MOCK_DATA: ReadmittedStudentsResponse = {
  title: 'Readmitted Students',
  chart_type: 'bar',
  data: [
    { category: '2019', value: 32 },
    { category: '2020', value: 29 },
    { category: '2021', value: 38 },
    { category: '2022', value: 45 },
    { category: '2023', value: 50 },
  ],
}

interface AdmissionState {
  readmittedStudents: ReadmittedStudentsResponse | null
  loading: boolean
  error: string | null
  fetchReadmittedStudents: () => Promise<void>
}

export const useAdmissionStore = create<AdmissionState>((set) => ({
  readmittedStudents: null,
  loading: false,
  error: null,
  fetchReadmittedStudents: async () => {
    set({ loading: true, error: null })
    try {
      const data = await admissionApi.getReadmittedStudents()
      set({ readmittedStudents: data, loading: false })
    } catch {
      // Backend unreachable — fall back to mock so the chart still renders
      console.warn('[AdmissionStore] API unreachable, using mock data.')
      set({ readmittedStudents: MOCK_DATA, loading: false, error: null })
    }
  },
}))