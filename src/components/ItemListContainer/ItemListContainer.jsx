import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Loading } from "../Loading/Loading"
import { collection, getDocs, getFirestore, where, query} from 'firebase/firestore'


const ItemListContainer = () => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {cid} = useParams()
    
    useEffect(()=>{
        
        if (cid) {
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            const queryFilter = query(queryCollection, where('category' , '==', cid))
            getDocs(queryFilter)
            .then(resp => setProduct(resp.docs.map(prod =>({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
            .then(resp => setProduct(resp.docs.map(prod =>({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }, [cid])

    return(
        <center>
        <div className="row d-flex justify-content-center">
        { loading ? 
            <Loading />
        : 
            <ItemList products={products} />
        }
        </div>
        </center>
    )
}

export default ItemListContainer
