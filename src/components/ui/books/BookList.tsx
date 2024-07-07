import Book from "@/types/Book";
import BookCard from "@/components/ui/books/BookCard";

const BookList = ({books}: {books: Book[]}) => {
    return (
        <>
            {
                books.map((book) => <BookCard key={book.id} book={book}/>)
            }
        </>
    )
}

export default BookList
