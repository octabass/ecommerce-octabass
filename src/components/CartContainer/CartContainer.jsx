import React, { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { Link } from "react-router-dom"
import './CartContainer.css'


const CartContainer = () => {
    const {cartList, deleteCart, eliminarProducto, precioTotal} = useCartContext()

	const [dataForm, setDataForm] = useState({
		name: '',
		phone: '',
		email: ''
	})

	const [id, setId] = useState('')
    
    const handleAddOrder = async (evt) => {
	evt.preventDefault()
	const order = {}
	order.buyer = dataForm
	order.items = cartList.map(prod => {
		return {id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}
	})
    
	order.total= precioTotal()

	const queryDB = getFirestore()
	const ordersCollection = collection(queryDB, 'orders')
	addDoc(ordersCollection, order)
	.then(({id}) => setId(id))
	.catch(err => console.log(err))
	.finally(()=> {
		setDataForm({
			name: '',
			phone: '',
			email: ''
		})
		deleteCart()
	})
    }

    const handleOnChange = (evt) => {
	setDataForm({
		...dataForm,
		[evt.target.name] : evt.target.value
	})
}

return (
	<>
		{id !== '' && <h3 className="m-4 text-primary">Se ha generado la órden de compra: {id}</h3>}
	 	
        {cartList.length > 0 ? 
			<div>
				{cartList.map(prod => <div key={prod.id} className="card-product">
					<img src={prod.imageUrl} className="w-25"/>
                    <div className="card-product-esp">
					<p className="name">{prod.name}</p>
                    <p className="price">U$D {prod.price}</p>
                    <p>Cantidad: {prod.quantity}</p>
					<button className="btn btn-danger m-3" onClick={ () => eliminarProducto(prod.id) }> X </button>
                    </div>
				</div>)}
				<h3 className="total-price">Precio total: U$D {precioTotal()}</h3>
				<form onSubmit={handleAddOrder}>
                    <div>
					<input 
						type='text' 
						name='name' 
						placeholder='Ingresar nombre' 
						value={dataForm.name}
						onChange={handleOnChange}
					/>
					<input 
						type='text' 
						name='phone'
						placeholder='Ingresar teléfono' 
						value={dataForm.phone}
						onChange={handleOnChange}
					/>
					<input 
						type='text' 
						name='email'
						placeholder='Ingresar email' 
						value={dataForm.email}
						onChange={handleOnChange}
					/>
                    </div>
                    <div>
					<button className="btn btn-success">
						Terminar compra
					</button>
                    </div>
				</form>
                <div className="empty-cart">
				<button onClick={deleteCart} className="btn btn-outline-dark ">Vaciar Carrito</button>
                </div>
			</div>		
		:
			<div className="off-product">
				<h3>No hay productos en el carrito</h3>
				<Link to='/' className="btn btn-outline-dark btn-inicio">Volver a Inicio</Link>
			</div>
            }
	</>	
)      
}

export default CartContainer