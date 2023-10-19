import { Link } from "react-router-dom"
import { memo } from "react"

const Item = memo(({product}) => {
    return (
        <div className="card w-25 m-4">
            <div className="card-body">
                <img className="w-100 card-img-top mb-2" src={product.imageUrl} alt="imagen prenda"/>
                <h4 className="mb-4">{product.name}</h4>
                <p>Modelo: {product.modelo}</p>
                <p>Descripción: {product.description}</p>
                <p>Precio: U$D {product.price}</p>
            </div>
            <div className="card-footer">
            <Link to={`/detalle/${product.id}`}>
                    <button className="btn btn-outline-dark w-100">Detalle</button>
            </Link>
            </div>
        </div>
    )
})

export default Item