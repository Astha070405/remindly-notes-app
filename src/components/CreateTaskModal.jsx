import { useState } from 'react'
import api from '../api/axios'

function CreateTaskModal({
  closeModal,
  refreshTasks
}) {

  const [title, setTitle] =
    useState('')

  const [description,
    setDescription] =
    useState('')

  const [priority,
    setPriority] =
    useState('MEDIUM')

  const [dueDate,
    setDueDate] =
    useState('')

  const [reminderEnabled,
    setReminderEnabled] =
    useState(true)

  const handleCreateTask =
    async (e) => {

      e.preventDefault()

      try {

        await api.post(
          '/tasks',
          {
            title,
            description,
            priority,
            dueDate,
            reminderEnabled
          }
        )

        refreshTasks()

        closeModal()

      } catch (error) {

        console.log(error)

        alert(
          'Failed to create task'
        )
      }
    }

  return (

    <div
      className="
      fixed
      inset-0
      bg-black/60
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
      p-4
      overflow-y-auto
    "
    >
      <div
        className="
        bg-[#181c24]
        border
        border-gray-800
        rounded-3xl
        p-8
        w-full
        max-w-lg
        shadow-2xl
      "
      >

        <div
          className="
          flex
          justify-between
          items-center
          mb-8
        "
        >

          <h2
            className="
            text-3xl
            font-bold
            text-white
          "
          >
            Create Task
          </h2>

          <button
            onClick={closeModal}

            className="
            text-gray-400
            hover:text-white
            text-3xl
            transition
          "
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleCreateTask}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Task title"

            value={title}

            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }

            className="
            w-full
            bg-[#232836]
            border
            border-gray-700
            rounded-2xl
            p-4
            text-white
            outline-none
            focus:border-blue-500
          "
          />

          <textarea
            placeholder="Description"

            value={description}

            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }

            className="
            w-full
            bg-[#232836]
            border
            border-gray-700
            rounded-2xl
            p-4
            h-32
            text-white
            outline-none
            focus:border-blue-500
          "
          />

          <div
            className="
            flex
            flex-col
            gap-2
          "
          >

            <label
              className="
              text-sm
              text-gray-400
              font-medium
            "
            >
              Priority
            </label>

            <div className="relative">

              <select

                value={priority}

                onChange={(e) =>
                  setPriority(e.target.value)
                }

                className="
                appearance-none
                w-full
                bg-[#232836]
                border
                border-gray-700
                p-4
                rounded-2xl
                text-white
                outline-none
                focus:border-blue-500
                cursor-pointer
              "
              >

                <option value="LOW">
                  Low Priority
                </option>

                <option value="MEDIUM">
                  Medium Priority
                </option>

                <option value="HIGH">
                  High Priority
                </option>

              </select>

              <div
                className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-gray-400
                pointer-events-none
                text-sm
              "
              >
                ▼
              </div>

            </div>

          </div>

          <div
            className="
            flex
            flex-col
            gap-2
          "
          >

            <label
              className="
              text-sm
              text-gray-400
              font-medium
            "
            >
              Due Date & Time
            </label>

            <input
              type="datetime-local"

              value={dueDate}

              onChange={(e) =>
                setDueDate(
                  e.target.value
                )
              }

              className="
              w-full
              bg-[#232836]
              border
              border-gray-700
              rounded-2xl
              p-4
              text-white
              outline-none
              focus:border-blue-500
              cursor-pointer
            "
            />

          </div>

          <label
            className="
            flex
            items-center
            gap-3
            text-gray-300
            cursor-pointer
          "
          >

            <input
              type="checkbox"

              checked={
                reminderEnabled
              }

              onChange={(e) =>
                setReminderEnabled(
                  e.target.checked
                )
              }

              className="
              w-5
              h-5
              accent-blue-600
              cursor-pointer
            "
            />

            Enable Reminder

          </label>

          <button
            className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            rounded-2xl
            p-4
            font-semibold
            transition
            text-white
          "
          >
            Create Task
          </button>

        </form>

      </div>

    </div>
  )
}

export default CreateTaskModal