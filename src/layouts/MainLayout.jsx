import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border p-4 text-center text-sm text-text">
        © 2026 OKars Dealer — Footer placeholder
      </footer>
    </div>
  )
}

export default MainLayout