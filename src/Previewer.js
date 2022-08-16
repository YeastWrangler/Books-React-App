const Previewer = (booklist) => {
//console.log(booklist)
return (<> <div>{booklist.map((book) => {
    //console.log(book)
    return (<div key={book.accessInfo.id}>Title:{book.volumeInfo.title} - Author: {book.volumeInfo.authors} - genre: {book.volumeInfo.categories} <button type="submit"> Click for Preview </button> </div>)
})}
</div>;
</>)
}

export default Previewer