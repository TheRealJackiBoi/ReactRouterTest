import "./NavBar.css"
import { Form, NavLink } from "react-router-dom"

const NavBar = () => {
    
    return (
        <header className="header">
        <NavLink to="/" className="logo">Books</NavLink>
        <nav className="nav-menu">
            <NavLink 
            to="/books" 
            className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''}
            >
            Books
            </NavLink>
            <NavLink 
            to="/books/new" 
            className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''}
            >
                New Book
            </NavLink>
            <Form id="search-form" role="search">
                <input
                    id="q"
                    aria-label="Search books"
                    placeholder="Search"
                    type="search"
                    name="q"
                />
                <div id="search-spinner" aria-hidden hidden={true} />
                <div className="sr-only {({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''}" aria-live="polite"></div>
            </Form>
        </nav>
        </header>
    )}

export default NavBar