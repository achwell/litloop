import {getBookById} from "@/lib/fake-data";
import BookDetails from "@/components/ui/books/BookDetails";

const BookDetailsPage = ({params: {id}}: {params: {id: string}}) => {
    const book = getBookById(id);
    if (!book) return null
    return(
        <BookDetails book={book} />
    )
}
export default BookDetailsPage
