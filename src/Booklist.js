import { getBooks } from './API'
import {useEffect, useState} from 'react'
import { Chart } from "react-google-charts";
import Graph from "./Graph"


//<img> src={book.volumeInfo.imageLinks.smallThumbnail}</img>

function Booklist () {

    const [booklist, setBooklist] = useState([])
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    

    const genreList = booklist.map((book) => {
    return book.volumeInfo.categories
})
useEffect(() => {
    getBooks(title, author).then((books) => {
        //console.log(title, author, "in books")
        setBooklist(books.items)
    })
}, [title, author])

const [clicked, setClicked] = useState(false);

const handleClick = () => {
    setClicked((currentClicked) => {
        return !currentClicked
    })
}

const handleTitleChange = (event) => {
    //console.log(event.target.value)
    setTitle(event.target.value)
    console.log(title)
}

const handleTitleSubmit = (event) => {
    event.preventDefault()

    setTitle((currentTitle) => {
       
        return title
    })

    setTitle("");
}

const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
}

const handleAuthorSubmit = (event) => {
    event.preventDefault()

    setAuthor((currentAuthor) => {
        return author
    })
}

return (<> 
    <form onSubmit={handleTitleSubmit}>
     <label htmlFor="title-search"> Search by Title Here:</label>
     <input
        onChange={handleTitleChange}
        id="title-search"
        value={title}
        >
    </input>

    </form>
    <form onSubmit={handleAuthorSubmit}>
     <label htmlFor="author-search"> Search by Author Here:</label>
     <input
        onChange={handleAuthorChange}
        id="author-search"
        value={author}
        >
    </input>

    </form>
        <div>{booklist.map((book) => {
    
        return (<div key={book.id}>
        <p>Thumbnail: </p> <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book cover"/> 
        <p>Title:{book.volumeInfo.title}</p>  <p>Author: {book.volumeInfo.authors} </p> <p>genre: {book.volumeInfo.categories} </p><button onClick={handleClick}> Click for Preview </button> 
        </div>
        )
})}
         <Graph genreList={genreList}/>
        </div>
</>)
}

export default Booklist