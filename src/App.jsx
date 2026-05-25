import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import ProtectedRoute
from './components/ProtectedRoute'

import LoginPage
from './pages/LoginPage'

import RegisterPage
from './pages/RegisterPage'

import DashboardPage
from './pages/DashboardPage'

import TasksPage
from './pages/TasksPage'

import AppLayout
from './layouts/AppLayout'

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={
          <Navigate
            to="/login"
          />
        }
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      <Route

        element={
          <ProtectedRoute>

            <AppLayout />

          </ProtectedRoute>
        }
      >

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/tasks"
          element={<TasksPage />}
        />

      </Route>

    </Routes>
  )
}

export default App