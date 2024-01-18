import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import "./index.css" 
import { createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Bag from './routes/Bag.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import ItemStore from './store/item.js'
const router=createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",element:<Home/>
      },
      {
        path:"/bag",element:<Bag/>
      }
    ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ItemStore} >
    <RouterProvider router={router}/>
    </Provider>
   </React.StrictMode>,
)
