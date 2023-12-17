import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);

  console.log(originalPrice, discountPercentage, discountedAmount);

  const calculateDiscount = () => {
    const discount = (originalPrice * discountPercentage) / 100;
    const discountedAmount = originalPrice - discount;
    setDiscountedAmount(discountedAmount);
  };

  const reset = () => {
    setOriginalPrice('');
    setDiscountPercentage('');
    setDiscountedAmount(0);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1  style={{  paddingTop:'20px',fontSize:'65px', fontFamily:'fantasy' }}>Discount Calculator</h1>
        </div>
        <div className="total">
          <h2>&#8377; {discountedAmount}</h2>
          <p>Your Discounted Amount</p>
        </div>
        <div className="form">
          <form>
            <div className="input">
              <TextField
                id="outlined-basic"
                value={originalPrice || ''}
                onChange={(e) => setOriginalPrice(e.target.value)}
                label="Original Price"
                variant="filled"
              /><br />
              <TextField
                id="filled-basic"
                value={discountPercentage || ''}
                onChange={(e) => setDiscountPercentage(e.target.value)}
                label="Discount Percentage"
                variant="filled"
              />
            </div>
            <div className="button">
              <Button variant="contained"  style={{ backgroundColor: '#dc3545', color: '#fff', marginBottom:'20px' }} onClick={calculateDiscount}>CALCULATE</Button>
              <Button variant="outlined"  style={{ color: '#000',marginBottom:'20px' }} onClick={reset}>RESET</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
