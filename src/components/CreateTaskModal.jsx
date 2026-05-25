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
          "
          >
            Create Task
          </h2>

          <button
            onClick={closeModal}

            className="
            text-gray-400
            hover:text-white
            text-2xl
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
            rounded-xl
            p-4
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
            rounded-xl
            p-4
            h-32
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

            <select

              value={priority}

              onChange={(e) =>
                setPriority(e.target.value)
              }

              className="
              w-full
              bg-[#232836]
              border
              border-white/10
              p-4
              rounded-2xl
              outline-none
              focus:border-blue-500
            "
            >

              <option value="LOW">
                Low
              </option>

              <option value="MEDIUM">
                Medium
              </option>

              <option value="HIGH">
                High
              </option>

            </select>

          </div>

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
            rounded-xl
            p-4
          "
          />

          <label
            className="
            flex
            items-center
            gap-3
            text-gray-300
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
            />

            Enable Reminder

          </label>

          <button
            className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            rounded-xl
            p-4
            font-semibold
            transition
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