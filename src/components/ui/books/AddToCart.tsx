'use client'

import Book from "@/types/Book";
import {ShoppingCartIcon} from "@heroicons/react/24/solid";
import {toast} from "react-toastify";
import {StoreContext} from "@/context";
import {useContext} from "react";

const AddToCart = ({book}: {book: Book}) => {
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
        <div className="flex justify-around">
            <button
                className="bg-purple-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                onClick={(event) => handleCart(event, "Buy")}
            >
                <ShoppingCartIcon className="w-5 mr-0.5 inline"/> to Buy
            </button>
            <button
                className="bg-purple-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                onClick={(event) => handleCart(event, "Rent")}
            >
                <ShoppingCartIcon className="w-5 mr-0.5 inline"/> to Rent
            </button>
        </div>
    )
};

export default AddToCart
