import {
  useEffect,
  useState
} from 'react'

import api from '../api/axios'

import CreateTaskModal
from '../components/CreateTaskModal'

function TasksPage() {

  const [tasks, setTasks] =
    useState([])

  const [showModal,
    setShowModal] =
    useState(false)

  useEffect(() => {

    fetchTasks()

  }, [])

  const fetchTasks =
    async () => {

      try {

        const response =
          await api.get('/tasks')

        setTasks(response.data)

      } catch (error) {

        console.log(error)
      }
    }

  const toggleComplete =
    async (taskId) => {

      try {

        await api.patch(
          `/tasks/${taskId}/complete`
        )

        fetchTasks()

      } catch (error) {

        console.log(error)
      }
    }

  const deleteTask =
    async (taskId) => {

      try {

        await api.delete(
          `/tasks/${taskId}`
        )

        fetchTasks()

      } catch (error) {

        console.log(error)
      }
    }

  return (

    <div>

      <div
        className="
        flex
        flex-col
        sm:flex-row

        gap-4

        sm:items-center
        sm:justify-between

        mb-8
      "
      >

        <h1
          className="
          text-3xl
          sm:text-5xl
          font-bold
          tracking-tight
        "
        >
          Tasks
        </h1>

        <button

          onClick={() =>
            setShowModal(true)
          }

          className="
          bg-white/10
          hover:bg-white/20

          border
          border-white/10

          backdrop-blur-xl

          px-5
          py-3

          rounded-2xl

          transition
        "
        >
          + New Task
        </button>

      </div>

      {
        tasks.length === 0 ? (

          <div
            className="
            flex
            flex-col
            items-center
            justify-center

            text-center

            py-32

            border
            border-dashed
            border-white/10

            rounded-3xl

            bg-white/5
            backdrop-blur-xl
          "
          >

            <div
              className="
              text-6xl
              mb-6
              text-white/30
            "
            >
              ○
            </div>

            <h2
              className="
              text-3xl
              font-bold
            "
            >
              No tasks yet
            </h2>

            <p
              className="
              text-gray-400
              mt-4
              max-w-md
            "
            >
              Create your first task
              to start managing your
              productivity.
            </p>

            <button

              onClick={() =>
                setShowModal(true)
              }

              className="
              mt-8

              bg-white/10
              hover:bg-white/20

              border
              border-white/10

              px-6
              py-3

              rounded-2xl

              transition
            "
            >
              Create Task
            </button>

          </div>

        ) : (

          <div
            className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-5
          "
          >

            {tasks.map((task) => (

              <div

                key={task.id}

                className={`
                  border
                  p-6
                  rounded-3xl
                  transition-all
                  duration-300

                  backdrop-blur-xl

                  ${
                    task.completed

                      ? 'bg-emerald-500/5 border-emerald-500/10'

                      : new Date(task.dueDate)
                          < new Date()

                        ? 'bg-rose-500/5 border-rose-500/10'

                        : 'bg-white/5 border-white/10'
                  }
                `}
              >

                <div
                  className="
                  flex
                  flex-col
                  sm:flex-row

                  justify-between

                  sm:items-start

                  gap-4
                "
                >

                  <div>

                    <h2
                      className="
                      text-2xl
                      font-semibold
                    "
                    >
                      {task.title}
                    </h2>

                    <p
                      className="
                      text-gray-400
                      mt-3
                    "
                    >
                      {task.description}
                    </p>

                    <div
                      className="
                      flex
                      items-center
                      gap-3
                      mt-4
                      flex-wrap
                    "
                    >

                      <span

                        className={`
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold

                          ${
                            task.priority === 'HIGH'

                              ? 'bg-rose-400/10 text-rose-300'

                              : task.priority ===
                                'MEDIUM'

                                ? 'bg-amber-400/10 text-amber-300'

                                : 'bg-emerald-400/10 text-emerald-300'
                          }
                        `}
                      >

                        {task.priority}

                      </span>

                      {
                        task.completed && (

                          <span
                            className="
                            bg-emerald-400/10
                            text-emerald-300

                            px-3
                            py-1

                            rounded-full

                            text-xs
                            font-semibold
                          "
                          >
                            COMPLETED
                          </span>
                        )
                      }

                    </div>

                  </div>

                </div>

                <div
                  className="
                  mt-6
                  text-sm
                  text-gray-500
                "
                >

                  Due:
                  {' '}

                  {
                    new Date(
                      task.dueDate
                    ).toLocaleString()
                  }

                </div>

                <div
                  className="
                  flex
                  flex-col
                  sm:flex-row

                  gap-3
                  mt-6
                "
                >

                  <button

                    onClick={() =>
                      toggleComplete(task.id)
                    }

                    className="
                    bg-white/10
                    hover:bg-white/20

                    border
                    border-white/10

                    px-4
                    py-2

                    rounded-xl

                    text-sm

                    transition
                  "
                  >

                    {
                      task.completed
                        ? 'Completed'
                        : 'Mark Complete'
                    }

                  </button>

                  <button

                    onClick={() =>
                      deleteTask(task.id)
                    }

                    className="
                    bg-white/5
                    hover:bg-white/10

                    border
                    border-white/10

                    text-red-300

                    px-4
                    py-2

                    rounded-xl

                    text-sm

                    transition
                  "
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>
        )
      }

      {
        showModal && (

          <CreateTaskModal

            closeModal={() =>
              setShowModal(false)
            }

            refreshTasks={
              fetchTasks
            }
          />
        )
      }

    </div>
  )
}

export default TasksPage