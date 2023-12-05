
import { Link, useLoaderData } from "react-router-dom";
import bookFacade from "../bookFacade";
import "./Books.css"

export async function loader({ request }) {
    let books = await bookFacade.getBooks();
    const url = new URL(request.url)
    const query = url.searchParams.get("q");
    if( query ) {
        books = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    }
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