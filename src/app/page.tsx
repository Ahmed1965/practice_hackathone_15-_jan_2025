import { sanityFetch } from "@/sanity/lib/live";
import { allProduct } from "@/sanity/lib/query";
import Image from 'next/image';


type products = {
  name:string,
  description:string,
  price:number,
  image:string,
  _id: string
}

export default async function Home() {
  const { data: products }: { data: products[] } = await sanityFetch({ query: allProduct });
  return (
    <div className="">
      <h1 className="">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product)=>
        <div className="border p-4" key={product._id}>
          <Image src={product.image} alt='product' width={60} height={500}/>
          <h2 className="">{product.name}</h2>
          <p className="">{product.description}</p>
          <p className="">{product.price}</p>
        </div>
        )}
      </div>

      
    </div>
  
  );
}
