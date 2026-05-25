import { useState } from 'react'

import api from '../api/axios'

import { useAuth }
from '../context/AuthContext'

import { useNavigate }
from 'react-router-dom'

function LoginPage() {

  const { login } =
    useAuth()

  const navigate =
    useNavigate()

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const handleLogin =
    async (e) => {

      e.preventDefault()

      try {

        const response =
          await api.post(
            '/auth/login',
            {
              email,
              password
            }
          )

        const token =
          response.data.token

        login(token)

        navigate('/dashboard')

      } catch (error) {

        console.log(error)

        alert(
          error.response?.data?.message
          || 'Login failed'
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
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

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

          <input
            type="password"
            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(
                e.target.value
              )
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

          <button
            className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            p-4
            rounded-xl
            font-semibold
            transition
          "
          >
            Login
          </button>
<p
  className="
  text-center
  text-gray-400
  mt-6
"
>
  Don&apos;t have an account?

  <span
    onClick={() =>
      navigate('/register')
    }

    className="
    text-blue-400
    ml-2
    cursor-pointer
    hover:text-blue-300
  "
  >
    Register
  </span>
</p>
        </form>

      </div>

    </div>
  )
}

export default LoginPage