import { useCartContext } from "../../context/CartContext"

function CartWidgets() {
    const {cantidadTotal} = useCartContext()
    return (
        <div className="text-dark">
            {cantidadTotal() !== 0 && cantidadTotal() }
            🛒
        </div>
    )
}

export default CartWidgets