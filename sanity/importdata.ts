import axios from 'axios'
import client from '../sanity/lib/client'
import { product } from './schemaTypes/products'

export default async function handler(res, req){
    try{
        const {data} = await axios.get('https://template6-six.vercel.app/api/products')
        for(product of data ){
            await client.create(product)
            _type: 'product'
            product.name;
            
            res.status(200).json(data)({message: 'Data inserted Successfully'})
        }catch(error){
            console.error(error)
            res.status(500).json({error: 'Failed to load data...'})
        }

    }
