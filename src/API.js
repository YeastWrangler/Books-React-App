

export const getBooks = () => {
    const myKey = 'AIzaSyCF_kEhUIPMbNvsa-dfzoUYy_XGoghyPLs'
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=harry_potter+intitle&filter=partial`)
    .then((response) => {
        return response.json()
    })

}
