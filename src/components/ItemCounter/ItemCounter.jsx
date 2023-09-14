import { useCounter } from "../hooks/useCounter"
import '../ItemDetail/ItemDetail.css'

const ItemCount = ({initial, stock, onAdd}) => { 

    const { count, handleAdd, handleSubtract } = useCounter(initial, stock)
    
    return (
        <center>
            <div>
                <button className="btn btn-outline-dark" onClick={handleSubtract}> - 1 </button>    
                <label className="px-3">
                    <strong>{ count }</strong>
                </label>
                <button className="btn btn-outline-dark" onClick={handleAdd}> + 1 </button>
            </div>
            <div>
                <button className="btn btn-outline-dark mt-3" onClick={()=>onAdd(count)}>Agregar al carrito</button>    
            </div>
        </center>
    )
} 

export default ItemCount