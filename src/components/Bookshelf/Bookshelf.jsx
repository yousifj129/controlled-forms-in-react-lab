import { useState } from "react";

const BookShelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({ title: '', author: '' })

    function handleInputChange(event) {
        event.preventDefault();
        // setFormData({
        //   ...formData,
        //   [event.target.name]: event.target.value
        // })
        const currentBookData = { ...newBook }
        currentBookData[event.target.name] = event.target.value
        setNewBook(currentBookData)
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newBooks = [...books]
        newBooks.push(newBook)
        setBooks(newBooks)
    }

    return (<div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">title: </label>
                <input type="text" name="title" id="title" onChange={handleInputChange} value={newBook.title} />

                <label htmlFor="author">author: </label>
                <input type="text" name="author" id="author" onChange={handleInputChange} value={newBook.author} />

                <input type="submit" value="submit" />
            </form>
        </div>
        <div className="bookCardsDiv">
            {books.map((book, index) => {
                return <div key={index} className="bookCard">
                    <h3>{book.title}</h3>
                    <p>by {book.author}</p>
                </div>
            })}
        </div>
    </div>)
}

export default BookShelf