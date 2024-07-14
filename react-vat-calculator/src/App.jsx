import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [vat, setVat] = useState(0);
  const [grossPrice, setGrossPrice] = useState(0);

  function handlePriceChange(e) {
    const newPrice = parseFloat(e.target.value) || 0;
    setPrice(e.target.value);
    updateCalculations(newPrice, parseFloat(discount) || 0);
  }

  function handleDiscountChange(e) {
    const newDiscount = parseFloat(e.target.value) || 0;
    setDiscount(e.target.value);
    updateCalculations(parseFloat(price) || 0, newDiscount);
  }

  function updateCalculations(newPrice, newDiscount) {
    const discountedPrice = newPrice - newDiscount;
    const calculatedVat = discountedPrice * 0.07;
    setVat(calculatedVat.toFixed(2));
    setGrossPrice(discountedPrice.toFixed(2));
  }

  return (
    <>
      <h2>Price</h2>
      <input 
        type="number" 
        value={price}
        onChange={handlePriceChange} 
        style={{fontSize: '20pt'}} 
        placeholder="Enter price"
      />

      <h2>Discount (amount)</h2>
      <input 
        type="number" 
        value={discount}
        onChange={handleDiscountChange} 
        style={{fontSize: '20pt'}} 
        placeholder="Enter discount"
      />

      <p>Gross Price: {grossPrice}</p>
      <p>VAT (7%): {vat}</p>
    </>
  )
}

export default App
