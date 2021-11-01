import React, { createContext, useState } from 'react'

export const ProductList = createContext({});

export const DataProvider = (props) => {
    const [product, setProduct] = useState([
        {
            id: '1',
            product: 'CarbCred',
            name: 'ONE-CO2',
            price: '103.40',
            image:'https://t4.ftcdn.net/jpg/04/50/27/97/360_F_450279738_CRxs69dbCN1AIWPdKbcZIXG2PTR2ooZI.jpg',
            description: 'Créditos de carbono Onearth'
        }
    ]);

    const [quantidade, setQuantidade] = useState(0);

    const onAdd = () =>{
        setQuantidade(quantidade + 1)
    }
    const onRemove = () =>{
        setQuantidade(quantidade - 1)
    }

    return(
        <ProductList.Provider value={{product:product, quantidade:quantidade, onAdd:onAdd, onRemove:onRemove}}>
            {props.children}
        </ProductList.Provider>
    )
}