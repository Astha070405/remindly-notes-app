import {
  useEffect,
  useState
} from 'react'

import api from '../api/axios'

function DashboardPage() {

  const [stats, setStats] =
    useState([
      {
        title: 'Total Tasks',
        value: 0
      },

      {
        title: 'Completed',
        value: 0
      },

      {
        title: 'Pending',
        value: 0
      },

      {
        title: 'Overdue',
        value: 0
      },
    ])
const [recentTasks,
  setRecentTasks] =
  useState([])

  useEffect(() => {

    fetchStats()

  }, [])

  const fetchStats =
    async () => {

      try {

        const response =
          await api.get('/tasks')

        const tasks =
          response.data

setRecentTasks(
  tasks.slice(0, 5)
)
        const totalTasks =
          tasks.length

        const completed =
          tasks.filter(
            (task) =>
              task.completed
          ).length

        const pending =
          tasks.filter(
            (task) =>
              !task.completed
          ).length

        const overdue =
          tasks.filter(
            (task) =>

              !task.completed &&

              new Date(
                task.dueDate
              ) < new Date()

          ).length

        setStats([

          {
            title: 'Total Tasks',
            value: totalTasks
          },

          {
            title: 'Completed',
            value: completed
          },

          {
            title: 'Pending',
            value: pending
          },

          {
            title: 'Overdue',
            value: overdue
          },
        ])

      } catch (error) {

        console.log(error)
      }
    }

  return (

    <div>

      <div
        className="
        mb-10
      "
      >

        <h1
          className="
          text-5xl
          font-bold
          tracking-tight
        "
        >
          Dashboard
        </h1>

        <p
          className="
          text-gray-400
          mt-3
          text-lg
        "
        >
          Manage your productivity.
        </p>

      </div>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
      >

        {stats.map((item) => (

          <div

            key={item.title}

            className="
            bg-[#181c24]
            border
            border-gray-800
            p-7
            rounded-3xl
            hover:border-blue-500
            transition-all
            duration-300
          "
          >

            <p
              className="
              text-gray-400
              text-sm
              mb-4
            "
            >
              {item.title}
            </p>

            <h2
              className="
              text-5xl
              font-bold
            "
            >
              {item.value}
            </h2>

          </div>
        ))}

      </div>
<div
  className="
  mt-12
"
>

  <h2
    className="
    text-3xl
    font-bold
    mb-6
  "
  >
    Recent Tasks
  </h2>

  <div
    className="
    grid
    gap-4
  "
  >

    {
      recentTasks.map((task) => (

        <div

          key={task.id}

          className="
          bg-[#181c24]
          border
          border-gray-800
          rounded-2xl
          p-5
          flex
          justify-between
          items-center
        "
        >

          <div>

            <h3
              className="
              text-xl
              font-semibold
            "
            >
              {task.title}
            </h3>

            <p
              className="
              text-gray-400
              mt-2
            "
            >
              {
                new Date(
                  task.dueDate
                ).toLocaleString()
              }
            </p>

          </div>

          <span

            className={`
              px-3
              py-1
              rounded-full
              text-xs
              font-semibold

              ${
                task.priority === 'HIGH'

                  ? 'bg-red-500/20 text-red-400'

                  : task.priority ===
                    'MEDIUM'

                    ? 'bg-yellow-500/20 text-yellow-400'

                    : 'bg-green-500/20 text-green-400'
              }
            `}
          >

            {task.priority}

          </span>

        </div>
      ))
    }

  </div>

</div>
    </div>
  )
}

export default DashboardPage