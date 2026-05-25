import { useState } from 'react'

import api from '../api/axios'

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

  const [showPassword, setShowPassword] =
    useState(false)



  const navigate =
    useNavigate()

  const handleRegister =
    async (e) => {

      e.preventDefault()

      if (password.length < 6) {

        alert(
          'Password should be atleast 6 characters long'
        )

        return
      }

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


        login(token)

        alert('Registration successful! Please login.')

        navigate('/login')

      } catch (error) {

        console.log(error)

        alert(
          error.response?.data?.message
          ||
          'Registration failed'
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
        border-white/10
        p-10
        rounded-3xl
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
            bg-white/5
            border
            border-white/10
            p-4
            rounded-2xl
            outline-none
            focus:border-blue-500
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
            bg-white/5
            border
            border-white/10
            p-4
            rounded-2xl
            outline-none
            focus:border-blue-500
          "
          />

          <div className="relative">

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
           bg-blue-600
           hover:bg-blue-700
           p-4
           rounded-2xl
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
              onClick={() =>
                navigate('/login')
              }

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