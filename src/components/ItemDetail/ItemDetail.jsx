import { useContext, useState } from "react"
import ItemCount from "../ItemCounter/ItemCounter"
import './ItemDetail.css'
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({product}) => {
    const [isCounter, setIsCounter] = useState(true)
    const {addProduct} = useCartContext()
    const onAdd = (quantity) => {
        addProduct({...product, quantity})
        setIsCounter(false)
    }    

    return(
        <div className="row m-0">
            <div className="col d-flex justify-content-center col-img">
                <img className="img" src={product.imageUrl} alt="" />
            </div>
            <div className="col detalle">
                <div><h2>{product.name}</h2></div>
                <div><b>Modelo:</b> {product.modelo}</div>
                <div><b>Descripción:</b> {product.description}</div>
                <div><b>Precio:</b> U$D {product.price}</div>
                <div><b>Stock Disponible:</b> {product.stock}</div>
                <div className="counter">
                { isCounter ? 
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                :
                <>                    
                    <Link to={'/cart'}>
                        <button className="btn btn-outline-dark out">Ir a Carrito</button>
                    </Link>
                    <Link to={'/'}>
                        <button className="btn btn-outline-dark out">Volver a Inicio</button>
                    </Link>
                </>

                } 
                </div>
            </div>
        </div>
    )
}

export default ItemDetail