import {
  NavLink
} from 'react-router-dom'
import {
  FiHome,
  FiCheckSquare
} from 'react-icons/fi'
function Sidebar() {

  return (

    <div
      className="
      w-full
      lg:w-72

      bg-[#0f172a]

      border-b
      lg:border-b-0

      lg:border-r

      border-gray-800

      p-5
      sm:p-6
    "
    >

      <h1
        className="
        text-3xl
        sm:text-5xl

        font-black
        tracking-tight

        bg-gradient-to-r
        from-blue-400
        to-cyan-300

        bg-clip-text
        text-transparent

        mb-8
      "
      >
        Remindly
      </h1>

      <nav
        className="
        flex
        flex-row
        lg:flex-col

        gap-3
      "
      >

        <NavLink

          to="/dashboard"

          className={({ isActive }) => `
            flex-1

            p-3

            rounded-xl

            transition

            text-center
            lg:text-left

            ${
              isActive

                ? 'bg-white/10 border border-white/10'

                : 'hover:bg-[#232836]'
            }
          `}
        >

          <div
            className="
            flex
            items-center
            gap-3
          "
          >
            <FiHome />
            Dashboard
          </div>
        </NavLink>

        <NavLink

          to="/tasks"

          className={({ isActive }) => `
            flex-1

            p-3

            rounded-xl

            transition

            text-center
            lg:text-left

            ${
              isActive

                ? 'bg-white/10 border border-white/10'

                : 'hover:bg-[#232836]'
            }
          `}
        >
          <div
            className="
            flex
            items-center
            gap-3
          "
          >
            <FiCheckSquare />
            Tasks
          </div>
        </NavLink>

      </nav>

    </div>
  )
}

export default Sidebar