import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotal, getCartItems } from "./features/card/cardSlice";
import { useEffect } from "react";
import Model from "./components/Model";

function App() {

const { cartItems, isLoading } = useSelector((store) => store.cart)
const { isOpen } = useSelector((store) => store.model)
const dispatch = useDispatch()

useEffect(() => {
  dispatch(calculateTotal())
}, [cartItems, dispatch])
useEffect(() => {
  dispatch(getCartItems())
},[])

if (isLoading) {
  return (
    <div className='loading'>
      <h1>Loading...</h1>
    </div>
  );
}

  return (
    <>
    {isOpen && <Model />}
    <Navbar />
    <CartContainer />
    </>
  );
}
export default App;
