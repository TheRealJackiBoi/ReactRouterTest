import { Form, redirect } from "react-router-dom"
import bookFacade from "../bookFacade"

export async function action({request}) {
    if (request.method !== "POST") {
        alert("Not allowed")
        return redirect(`/books/new`);
    }    
    const data = await request.formData();
        if (data.get("title") === "" || data.get("info") === "") {
            alert("Please fill out all fields")
            redirect(`/books/new`);
            return;
        }
        console.log(await data)
    let book = {
        id: "",
        title: data.get("title"),
        info: data.get("info")
    }
    console.log(book)
    book = await bookFacade.addBook(book);
    return redirect(`/books/${book.id}`);
}


const NewBook = () => {
    return (
        <>
            <h1>New Book</h1>

            <Form method="post">
                <label htmlFor="title">Titel</label>
                <input type="text" name="title" id="title" placeholder="Title" required/>

                <label htmlFor="info">Info</label>
                <input type="text" name="info" id="info" placeholder="Info" required/>

                <button type="submit">Add Book</button>
            </Form>
        </>
    )}

export default NewBook