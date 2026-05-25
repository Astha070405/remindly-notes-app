import { useNavigate }
from 'react-router-dom'

import { useAuth }
from '../context/AuthContext'

function Navbar() {

  const { logout } =
    useAuth()

  const navigate =
    useNavigate()

  const handleLogout = () => {

    logout()

    navigate('/login')
  }

  return (

    <div
      className="
      bg-white/5
      backdrop-blur-xl

      border-b
      border-white/10

      px-4
      sm:px-8

      py-4

      flex

      flex-col
      sm:flex-row

      gap-4

      sm:gap-0

      justify-between
      sm:items-center
    "
    >

      <h2
        className="
        text-2xl
        sm:text-3xl

        font-bold
        tracking-tight

        text-white
      "
      >
        Welcome Back
      </h2>

      <button

        onClick={handleLogout}

        className="
        bg-white/10
        hover:bg-white/20

        px-5
        py-2

        rounded-xl

        transition

        w-full
        sm:w-auto
      "
      >
        Logout
      </button>

    </div>
  )
}

export default Navbar