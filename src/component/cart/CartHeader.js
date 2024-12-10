import { useSelector } from "react-redux"


export const CartHeader = () => {
    const state = useSelector((state) => state);

    return(
        <h4 style={{textTransform: "capitalize"}}>number of items in cart: {state.numOfItems}</h4>
    )
}