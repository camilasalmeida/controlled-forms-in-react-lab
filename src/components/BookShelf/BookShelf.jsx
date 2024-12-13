import { useState} from 'react';


const BookShelf = () => { 
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    })

    const handleInputChange = (e) => {
        setNewBook({...newBook, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setBooks([ ...books, newBook ])
        setNewBook({ 
            title: '',
            author: '',
        })
    }

    return ( 
        <> 
<div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}> 
            <label htmlFor="title"> Title:</label>
            <input required 
            type="text"
            name="title"
            id="title"
            placeholder="add the title"
            value={newBook.name}
            onChange={handleInputChange}
            />

            <label htmlFor="author">Author:</label>
            <input required
            type="text"
            name="author"
            id="author"
            placeholder='add the author'
            value={newBook.author}
            onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
            </form>
        </div>
        <div className="bookCardsDiv"> {/* Book cards will display here */} </div>
</div>
</>
    )
}

export default BookShelf