import { useState, createContext, useContext } from "react";

const CartContext = createContext ([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    const isProduct = (id) => cartList.findIndex(prod => prod.id === id)

    const addProduct = (newProduct)=>{
        
        const index = isProduct(newProduct.id)

        if (index !== -1) {
            cartList[index].quantity += newProduct.quantity
            setCartList([...cartList])
        } else {
            setCartList([...cartList, newProduct])
        }
    }

    const eliminarProducto = (pid) => setCartList(cartList.filter(prod => prod.id !== pid))

    const cantidadTotal = ()=> cartList.reduce((cantidadTotal, objProduct)=> cantidadTotal += objProduct.quantity ,0)

    const precioTotal = () => cartList.reduce((precioTotal, objProduct)=> precioTotal += (objProduct.price * objProduct.quantity) ,0)

    const deleteCart = ()=>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteCart,
            eliminarProducto,
            cantidadTotal,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}
