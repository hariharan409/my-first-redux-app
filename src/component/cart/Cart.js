import { CartBody } from "./CartBody"
import { CartHeader } from "./CartHeader"
import { CartItem } from "./CartItem"


export const Cart = () => {

    return(
        <div style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",height: "100%"}}>
            <CartHeader /> 
            <CartItem />
            <CartBody />
        </div>
    )
}