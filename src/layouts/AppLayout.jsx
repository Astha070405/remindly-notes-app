import { Outlet }
from 'react-router-dom'

import Sidebar
from '../components/Sidebar'

import Navbar
from '../components/Navbar'

function AppLayout() {

  return (

    <div
      className="
      min-h-screen
      bg-[#0b1120]
      text-white

      flex
      flex-col

      lg:flex-row
    "
    >

      {/* Sidebar */}

      <Sidebar />

      {/* Main Area */}

      <div
        className="
        flex-1
        flex
        flex-col
      "
      >

        <Navbar />

        <main
          className="
          p-4
          sm:p-6
          lg:p-10
        "
        >

          <Outlet />

        </main>

      </div>

    </div>
  )
}

export default AppLayout