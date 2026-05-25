import { useState } from 'react'

import api from '../api/axios'
import { useState } from 'react'

import {
  FiEye,
  FiEyeOff
} from 'react-icons/fi'
import { useAuth }
from '../context/AuthContext'

import { useNavigate }
from 'react-router-dom'

function RegisterPage() {

  const [name, setName] =
    useState('')

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')
const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()

  const navigate =
    useNavigate()

  const handleRegister =
    async (e) => {

      e.preventDefault()

      try {

        const response =
          await api.post(
            '/auth/register',
            {
              name,
              email,
              password
            }
          )

        const token =
          response.data.token

        login(token)

        navigate('/dashboard')

      } catch (error) {

          console.log(
            error.response.data
          )

          alert(
            error.response.data.message
          )
        }
    }

  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#0f1117]
    "
    >

      <div
        className="
        bg-[#181c24]
        border
        border-gray-800
        p-10
        rounded-2xl
        shadow-xl
        w-full
        max-w-md
      "
      >

        <h1
          className="
          text-4xl
          font-bold
          mb-8
          text-center
        "
        >
          Register
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Name"

            value={name}

            onChange={(e) =>
              setName(e.target.value)
            }

            className="
            w-full
            bg-[#232836]
            border
            border-gray-700
            p-4
            rounded-xl
          "
          />

          <input
            type="email"
            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

            className="
            w-full
            bg-[#232836]
            border
            border-gray-700
            p-4
            rounded-xl
          "
          />

          <div
            className="
            relative
          "
          >

            <input

              type={
                showPassword
                  ? 'text'
                  : 'password'
              }

              placeholder="Password"

              value={password}

              onChange={(e) =>
                setPassword(e.target.value)
              }

              className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-5
              py-4
              pr-14
              text-white
              outline-none
              focus:border-blue-500
            "
            />

            <button

              type="button"

              onClick={() =>
                setShowPassword(!showPassword)
              }

              className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              text-gray-400
              hover:text-white
              transition
            "
            >

              {
                showPassword
                  ? <FiEyeOff size={20} />
                  : <FiEye size={20} />
              }

            </button>

          </div>

          <button
            className="
            w-full
            bg-green-600
            hover:bg-green-700
            p-4
            rounded-xl
            font-semibold
            transition
          "
          >
            Register
          </button>
<p
  className="
  text-center
  text-gray-400
  mt-6
"
>
  Already have an account?

  <span
    onClick={() => navigate('/login')}
    className="
    text-blue-400
    hover:text-blue-300
    cursor-pointer
    ml-2
    font-medium
  "
  >
    Login
  </span>
</p>
        </form>

      </div>

    </div>
  )
}

export default RegisterPage