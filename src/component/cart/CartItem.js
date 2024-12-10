import { useSelector } from "react-redux"


export const CartItem = () => {
    const state = useSelector((state) => state);

    return(
        <div style={{height: "100px",fontSize: "30px",overflow: "auto"}}>
            {
                "🎁".repeat(state.numOfItems) || "EMPTY CART"
            }
        </div>
    )
}