import { ReactNode } from 'react'

export default function PageWrapper({ children }: { children: ReactNode }) {
  return <main className="flex-1 p-8 bg-gray-50 min-h-screen">{children}</main>
}
