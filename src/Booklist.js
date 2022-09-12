import { getBooks } from './API'
import {useEffect, useState} from 'react'
import Graph from "./Graph"



function Booklist () {

    const [booklist, setBooklist] = useState([])
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    // console.log(booklist.map((book) => {
    //     return <img src={book.volumeInfo.previewLink} alt="book"/>
    // }))

    const genreList = booklist.map((book) => {
    return book.volumeInfo.categories
})
useEffect(() => {
    getBooks(title, author).then((books) => {
        //console.log(title, author, "in books")
        setBooklist(books.items)
    })
}, [title, author])


const handleTitleChange = (event) => {
    //console.log(event.target.value)
    setTitle(event.target.value)
    
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
    <div id="total">
<div id="Books">
    <form class="btn btn-light btn-xl" onSubmit={handleTitleSubmit}>
     <label htmlFor="title-search"> Search by Title Here: </label>
     <input
        onChange={handleTitleChange}
        id="title-search"
        value={title}
        >
    </input>
    

    </form>
    <form class="btn btn-light btn-xl" onSubmit={handleAuthorSubmit}>
     <label htmlFor="author-search"> Search by Author Here: </label>
     <input
        onChange={handleAuthorChange}
        id="author-search"
        value={author}
        >
    </input>

    </form>
    </div>
        <div id="booklist">{booklist.map((book) => {
    
        return (<div key={book.id}>
        <p>------------</p> <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book cover"/> 
        <p>Title:{book.volumeInfo.title}</p>  <p>Author: {book.volumeInfo.authors} </p> <p>genre: {book.volumeInfo.categories} </p><a href={book.volumeInfo.previewLink}> Click for Preview </a> 
        </div>
        )
})}
        </div>
        </div>
         <Graph genreList={genreList}/>
        </>
)
}

export default Booklist