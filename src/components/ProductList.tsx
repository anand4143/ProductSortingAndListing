import type { Product, ProductResponse } from "../type/Product";


interface productListProps{
  product: Product[];
}
const ProdcutList = ( {product}:productListProps)=>{

  console.log("Product from componet===> ", product);

  return (
    <>
    <h3>Product list</h3>
   
      {product.map( (item)=>(
         <div key={item.id} style={{border: "1px solid red", padding: "10px", margin: "10px"}}>
        <p>
          Name: {item.title}
        </p>
         <p><img src={item.thumbnail} /></p>
        <p>Description: {item.description}</p>
        <p>Price: {item.price}</p>
       
        </div>
      ))}
    
    </>
    
  )
}

export default ProdcutList;