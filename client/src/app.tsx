import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Root,{
  loader as rootLoader
} from 'routes/root'
import SignUp from 'routes/signUp'
import SignIn, { action as signInAction } from 'routes/signIn'
import ErrorPage from 'routes/error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader
  },
  {
    path: '/signUp',
    element: <SignUp />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signIn',
    element: <SignIn />,
    errorElement: <ErrorPage />,
    action: signInAction
  }
])

function App() {
  return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}
export default App
