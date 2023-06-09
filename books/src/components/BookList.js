import { useContext } from 'react';
import BooksContext from '../context/books';
import BookShow from './BookShow'
function BookList({books, onDelete, onEdit }){

    const value = useContext(BooksContext);

    const renderBooks = books.map((book) =>{
        return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    });
    return <div className='book-list'>
        {value}
        {renderBooks}
        </div>
}

export default BookList;