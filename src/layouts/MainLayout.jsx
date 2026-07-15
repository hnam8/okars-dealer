import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar sẽ được dựng ở bước sau */}
      <header className="border-b border-border p-4">
        <p className="text-primary font-bold">OKars Dealer — Navbar placeholder</p>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer sẽ được dựng ở bước sau */}
      <footer className="border-t border-border p-4 text-center text-sm text-text">
        © 2026 OKars Dealer — Footer placeholder
      </footer>
    </div>
  )
}

export default MainLayout