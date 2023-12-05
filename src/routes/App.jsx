import { Outlet } from 'react-router-dom'
import "./../app.css"
import NavBar from '../components/NavBar';

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = {}//= await getContacts(q);
  return { contacts };
}

function App() {
  

  return (
    <>
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </>
  )
}

export default App
