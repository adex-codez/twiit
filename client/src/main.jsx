import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import SignUp from './routes/signup'

const router = createBrowserRouter([
  {
    path: 'signup',
    element: <SignUp />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
