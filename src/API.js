

export const getBooks = (titleQuery, authorQuery) => {
    let userSearchQuery = "harry potter"
    let userFilter = "subject"
    //console.log(authorQuery, "in API function")
//console.log(props)
if (titleQuery) {
    userSearchQuery = titleQuery
    userFilter = "intitle"
}
if (authorQuery) {
    userSearchQuery = authorQuery
    userFilter = "inauthor"
}    

    const myKey = 'AIzaSyCF_kEhUIPMbNvsa-dfzoUYy_XGoghyPLs'
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${userSearchQuery}+${userFilter}&filter=partial`)
    .then((response) => {
        return response.json()
    })

}
