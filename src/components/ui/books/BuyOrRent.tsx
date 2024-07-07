'use client'

import Book from "@/types/Book";
import {useContext} from "react";
import {StoreContext} from "@/context";
import {toast} from "react-toastify";

const BuyOrRent = ({book}: {book: Book}) => {
    const {cartData, setCartData} = useContext(StoreContext);

    const handleCart = (e: React.MouseEvent<HTMLButtonElement>, reason: "Buy" | "Rent") => {
        e.preventDefault();
        const newData = {...book, type: reason}
        const found = cartData.find((item) => {
            return item.id === book.id;
        });
        if (!found){
            setCartData([...cartData, newData]);
            toast.success(`Added ${book.title} to the Cart`, {
                autoClose: 1000
            });
        } else {
            toast.error(`OOPS!! You have added ${book.title} already to the Cart`);
        }
    };

    return (
        <div className="flex items-center">
            <div className="m-2">
                <button
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(event) => handleCart(event, "Buy")}
                >Buy this
                    book for {book.sellPrice} €
                </button>
                <p className="text-sm text-gray-700 text-center">{book?.sold ?
                    `${book?.sold} copies sold already!` :
                    `Be the first one to buy this book!`}
                </p>
            </div>
            <div className="m-2">
                <button
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(event) => handleCart(event, "Rent")}
                >Rent this
                    book for {book.rentPrice} €/pm
                </button>
                <p className="text-sm text-gray-700 text-center">{book.isRented ?
                    `Rented by ${book?.renterIds?.length} customer already!` :
                    `Be the first one to rent this book!`}
                </p>
            </div>
        </div>
    )
};

export default BuyOrRent
