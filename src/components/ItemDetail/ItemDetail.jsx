import ItemCount from "../ItemCounter/ItemCounter"
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    const onAdd = (count) => {
        console.log('Cantidad agregada: ', count)
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
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail