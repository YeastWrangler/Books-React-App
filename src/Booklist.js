import { getBooks } from './API'
import {useEffect, useState} from 'react'
import { Chart } from "react-google-charts";


//<img> src={book.volumeInfo.imageLinks.smallThumbnail}</img>

function Booklist () {

    const [booklist, setBooklist] = useState([])
    const genreList = booklist.map((book) => {
    return book.volumeInfo.categories
})
useEffect(() => {
    getBooks().then((books) => {
        setBooklist(books.items)
    })
}, [])
console.log(genreList)

// const makeChart = () => {
//      const test = [["fiction", 2], ["non-fiction", 2], ["hello", 1], ['music', 11]]
  
// const options = {
//     title: "Book Genres",
//   };  
//     return (
//       <Chart
//         chartType="PieChart"
//         data={[["fiction", 2], ["non-fiction", 2], ["hello", 1], ['music', 11]]}
//         options={options}
//         width={"75%"}
//         height={"100px"}
//       />
//     );
//     }

return <> {makeChart()}<div>{booklist.map((book) => {
    //console.log(book)
    return (<div key={book.accessInfo.id}>Title:{book.volumeInfo.title} - Author: {book.volumeInfo.authors} - genre: {book.volumeInfo.categories}</div>)
})}
</div>;
</>
}



export default Booklist