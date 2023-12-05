import bookFacade from "../bookFacade";
import { useLoaderData } from "react-router-dom"

export function loader({ params }) {
    const book = bookFacade.findBook(params.id);
    return { book };
}

const Book = () => {

    const { book } = useLoaderData();

    return (
        <>
            <h1>{book.title}</h1>
            <p>Id: {book.id}</p>
            <p>{book.info}</p>
        </>
    )}

export default Book