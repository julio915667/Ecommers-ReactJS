import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../services/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState()  
    const [load, setLoad] = useState(true) 


    const getSelected = async (idItem) => {
        try {
            const document = doc(db, "datos", idItem)
            const response = await getDoc(document)
            const result = { id: response.id, ...response.data() }
            setSelectedItem(result)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSelected(id)
    }, [id])




    return (
        <>
            {load ? <Spinner /> : <ItemDetail item={selectedItem} />}
        </>
    )
}

export default ItemDetailContainer
