import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import type { Product } from './type/Product'
import { loadProductListService } from './services/ProductService';
import ProdcutList from './components/ProductList'

function App() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sortOrder, setSortOrder] = useState<string>('desc');

  useEffect( ()=>{
    const loadProductList = async ()=>{
      try{
        const data = await loadProductListService();
        setProductList(data.products)
      }catch(error){
        setError("Failed to fetch the data!")
      }finally{
        setLoading(false);
      }
    }
loadProductList();

  }, []);
console.log("Product List==> ", productList);
 const handleSorting = (event: React.ChangeEvent<HTMLSelectElement>)=>{
  const valuesort = event.target.value;
  setSortOrder(valuesort);
  if(sortOrder === 'desc'){
     setProductList( (prev)=> [...prev].sort( (a,b)=> a.price - b.price))
  }
  if(sortOrder === 'asc'){
    setProductList( (prev)=> [...prev].sort( (a,b)=> b.price - a.price))
  }
 




 }
  return (
    <>
    <select id='sort' onChange={handleSorting}>
      <option value="">--Select sort--</option>
      <option value="asc"> Low to High</option>
      <option value="desc"> High to Low</option>
    </select>
      <ProdcutList product={productList} />
    </>
  )
}

export default App
