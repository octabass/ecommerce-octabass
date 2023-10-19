import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {pid} = useParams()
    
    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'products' , pid)
        getDoc(queryDoc)
        .then(resp =>({id: resp.id, ...resp.data()}))
        .then(resp => setProduct(resp))
    }, [])

    return(
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer