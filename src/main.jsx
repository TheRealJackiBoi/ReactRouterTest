import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Index from './routes/index.jsx'
import Books, {loader as booksLoader} from './routes/Books.jsx'
import NewBook, {action as newBookAction} from './routes/NewBook.jsx'
import Book, {loader as bookLoader} from './routes/Book.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={ (<h1>Oops this page doesn't exist</h1>) }>
    <Route 
      index 
      element={<Index />} 
    />
    <Route path="books" >
      <Route 
        index 
        element={<Books />} 
        loader={booksLoader} 
      />
      <Route 
        path=':id' 
        element={<Book />} 
        loader={bookLoader} 
      />
      <Route 
        path='new' 
        element={<NewBook />} 
        action={newBookAction}
      />
    </Route>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
