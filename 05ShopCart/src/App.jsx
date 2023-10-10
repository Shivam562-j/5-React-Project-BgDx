import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);
    const [show, setShow] = useState(true);


    const handleClick = (item) => {
      // console.log(item);
      
      let isPresent = false;
      cart.forEach((product) => {
        if(item.id === product.id)
        isPresent = true;
      })

      if(isPresent){
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 4000);
        return;
      }

      setCart([...cart, item]);
    }

    const handleChange = (item, d) => {
      let ind = -1;
      cart.forEach((data, index) => {
        if(data.id === item.id)
        ind = index;
      });

      const tempArr = cart;
      tempArr[ind].amount += d;
      console.log(tempArr);

      if(tempArr[ind].amount === 0){
        tempArr[ind].amount = 1;
      }
      
      setCart([...tempArr])

    }

    return (
        <>
            <Navbar 
              size={cart.length} 
              setShow={setShow}
            />

            {
              show ? <Shop handleClick = {handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
            }


            {
              warning && <div className="warning">Item is already Added</div> 
            }

            <p className="copyright">Copyright 2023 © & Design and Developed by <a href="https://github.com/Shivam562-j/" target="_blank">Shivam </a></p>
        </>
    );
}

export default App;
