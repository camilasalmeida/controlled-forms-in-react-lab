import { useState} from 'react';


const App = () => { 
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
            {/* Form will go here */}
        </div>
        <div className="bookCardsDiv"> {/* Book cards will display here */} </div>
</div>
</>
    )
}

export default App