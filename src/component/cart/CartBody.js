import { useDispatch } from "react-redux"
import { addItem, deleteItem } from "./cartAction";


export const CartBody = () => {
    const dispatch = useDispatch();

    return(
        <div style={{display: "flex",justifyContent: "center",columnGap: "20px"}}>
            <button onClick={() => dispatch(addItem())} style={{backgroundColor: "green",color: "white",padding: "15px",textTransform: "capitalize",cursor: "pointer"}}>add item to cart</button>
            <button onClick={() => dispatch(deleteItem())} style={{backgroundColor: "red",color: "white",padding: "5px",textTransform: "capitalize",cursor: "pointer"}}>remove item from cart</button>
        </div>
    )
}