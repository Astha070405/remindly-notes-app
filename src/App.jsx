import { Routes, Route } from 'react-router-dom'
import ProtectedRoute
from './components/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import AppLayout from './layouts/AppLayout'
import TasksPage from './pages/TasksPage'
function App() {

  return (

    <Routes>

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