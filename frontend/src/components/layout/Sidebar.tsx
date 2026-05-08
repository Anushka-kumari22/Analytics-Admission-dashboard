const links = [{ label: 'Dashboard', href: '/' }, { label: 'Admission', href: '/' }]

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-gray-100 min-h-screen pt-6">
      <nav className="flex flex-col gap-1 px-3">
        {links.map(l => (
          <a key={l.label} href={l.href}
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600
                       hover:bg-indigo-50 hover:text-indigo-700 transition-colors">
            {l.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}