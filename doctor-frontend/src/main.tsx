import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ContactUs from './Pages/Contacts.tsx'
import SafetyPolicy from './Pages/SafetyPolicy.tsx'
import SignIn from './Pages/Signin.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/safety-policy",
    element: <SafetyPolicy />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
