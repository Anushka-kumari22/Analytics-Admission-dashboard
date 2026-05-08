import api from '@/lib/api'
import type { ReadmittedStudentsResponse } from './types'

export const admissionApi = {
  getReadmittedStudents: () =>
    api.get<ReadmittedStudentsResponse>('/admission/readmitted-students')
      .then(r => r.data),
}