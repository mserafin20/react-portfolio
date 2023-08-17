import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS

// import Error from './pages/Error.jsx'
import About from './pages/About.jsx'
// import Contact from './pages/Contact.jsx'
// import Resume from './pages/Resume.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      // {
      //   index: true,
      //   element: <Contact />,
      // },
      // {
      //   index: true,
      //   element: <Resume />,
      // },
      // {
      //   index: true,
      //   element: <ProjectsList />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
