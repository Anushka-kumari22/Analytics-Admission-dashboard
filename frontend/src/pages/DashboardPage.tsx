import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'
import PageWrapper from '@/components/layout/PageWrapper'
import { ReadmittedStudentsWidget } from '@/features/admission'

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <PageWrapper>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Admission Overview
          </h1>
          {/* Each intern's widget is dropped in here as a separate component */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ReadmittedStudentsWidget />
            {/* Future intern widgets go here: <EnrollmentWidget />, <DroploutWidget /> … */}
          </div>
        </PageWrapper>
      </div>
    </div>
  )
}