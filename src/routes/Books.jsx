
import { Link, useLoaderData } from "react-router-dom";
import bookFacade from "../bookFacade";
import "./Books.css"
export async function loader() {
    const books = await bookFacade.getBooks();
    return { books }
}

const Books = () => {

    const { books } = useLoaderData();

    return (
        <>
            <h1>Books</h1>
            <div className="book-list">
                {books.map(
                    book => (
                        <Link to={`/books/${book.id}`} key={book.id}
                        className="book">

                            <h3>{ book.title }</h3>
                            <p>{ book.info }</p>

                        </Link>
                    )
                )}
            </div>
        </>
    )
}

export default Books