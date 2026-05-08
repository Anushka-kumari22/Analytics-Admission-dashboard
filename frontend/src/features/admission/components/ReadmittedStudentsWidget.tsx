import { useEffect } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell,
} from 'recharts'
import { useAdmissionStore } from '../store'

const BAR_COLOR = '#6366f1'

export default function ReadmittedStudentsWidget() {
  const { readmittedStudents, loading, error, fetchReadmittedStudents } =
    useAdmissionStore()

  useEffect(() => { fetchReadmittedStudents() }, [fetchReadmittedStudents])

  if (loading) return (
    <div className="flex items-center justify-center h-64 text-gray-400">
      Loading…
    </div>
  )

  if (error) return (
    <div className="flex items-center justify-center h-64 text-red-400">
      {error}
    </div>
  )

  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        {readmittedStudents?.title ?? 'Readmitted Students'}
      </h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={readmittedStudents?.data ?? []}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="category" tick={{ fontSize: 13 }} />
          <YAxis tick={{ fontSize: 13 }} />
          <Tooltip
            contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 4px 20px #0001' }}
            cursor={{ fill: '#f5f3ff' }}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {(readmittedStudents?.data ?? []).map((_, i) => (
              <Cell key={i} fill={BAR_COLOR} fillOpacity={0.75 + i * 0.05} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}