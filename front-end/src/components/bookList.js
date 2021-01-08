const BookList = ({books}) => {
    return (
        <div>
            {books.map(book => <li key={book.index}>Title: {book.Book_Title}, Author: {book.Author}</li>)}
        </div>
    )
}

export default BookList