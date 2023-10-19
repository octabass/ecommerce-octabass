import Item from "../Item/Item"
import { memo } from "react"

const ItemList = memo(({products}) => {    
    return (
        <>
        { products.map(product =>            
            <Item key={product.id} product={product}/>
        )}
        </>
    )
})

export default ItemList