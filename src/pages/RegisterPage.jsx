import { useState } from 'react'

import api from '../api/axios'

import {
  FiEye,
  FiEyeOff
} from 'react-icons/fi'



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

const [loading, setLoading] =
  useState(false)


  const navigate =
    useNavigate()

  const handleRegister =
    async (e) => {

      e.preventDefault()

      if (password.length < 6) {

        alert(
          'Password should be at least 6 characters long'
        )

        return
      }

      setLoading(true)

      try {

        await api.post(
          '/auth/register',
          {
            name,
            email,
            password
          }
        )

        alert(
          'Registration successful! Please login.'
        )

        navigate('/login')

      } catch (error) {

        console.log(error)

        alert(
          error.response?.data?.message
          ||
          'Registration failed'
        )

      } finally {

        setLoading(false)
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

             disabled={loading}

             className="
             w-full
             bg-blue-600
             hover:bg-blue-700
             disabled:bg-blue-400
             disabled:cursor-not-allowed
             p-4
             rounded-2xl
             font-semibold
             transition
             flex
             items-center
             justify-center
           "
           >

             {
               loading
                 ? (
                   <div className="flex items-center gap-2">

                     <div
                       className="
                       w-5
                       h-5
                       border-2
                       border-white
                       border-t-transparent
                       rounded-full
                       animate-spin
                     "
                     />

                     <span>
                       Registering...
                     </span>

                   </div>
                 )
                 : 'Register'
             }

           </button>

              {
                loading
                  ? (
                    <div className="flex items-center gap-2">

                      <div
                        className="
                        w-5
                        h-5
                        border-2
                        border-white
                        border-t-transparent
                        rounded-full
                        animate-spin
                      "
                      />

                      <span>
                        Registering...
                      </span>

                    </div>
                  )
                  : 'Register'
              }

            </button>

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