import React, {useState} from 'react'
import { Modal, Button } from  "@mui/material";
import "./menu.css";
import { loadRazorpay } from './Razorpay'; 
const Menu = ({heading}) => {
    const [cart, setCart] = useState([]);
  const [menuItems] = useState([
    { 
      id: 1,
       name: 'Chicken Biryani', 
       price: 210,photo:require("./Restaurants_1/Img/chickenbiryani.avif"),
       desc:"Tender and flavorful bites of succulent chicken, perfectly seasoned and fried to perfection." 
      },
    { 
      id: 2,
       name: 'Chicken 65',
        price: 140,photo:require("./Restaurants_1/Img/c65.avif"),
      desc:"Serves 1 | South Indian dish made with a few simple spices, coconut slices, and curry leaves." 
    },
    { 
      id: 3,
       name: 'Beef Biryani', 
       price: 310,photo:require("./Restaurants_1/Img/beefbiryani.avif"),
      desc:"served with salad and pickle." 
    },
    { 
      id: 4,
       name: 'Ghee Rice and Beef stew',
        price: 300,photo:require("./Restaurants_1/Img/gheeandbeef.avif"),
      desc:"Serves 1 | Ghee rice is a one pot rice dish made with ghee, rice, spices & nuts. It is one of the most basic flavored rice recipe served with Beef Stew.      "
     },
  ]);
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const openCartModal = () => {
    setCartModalOpen(true);
  };

  const closeCartModal = () => {
    setCartModalOpen(false);
  };
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
  const proceedToCheckout = async () => {
    const subtotal = calculateSubtotal();
    const isLoaded = await loadRazorpay();
    if (isLoaded) {
      const options = {
        key: "rzp_test_pqLQaLi0Fyz3Ws",
        key_secret:"9pNRqHpZuAPKKPH3pEMhOhFR",
        amount: subtotal * 100, // Razorpay works in paise, so convert to paise
        currency: "INR",
        name: "FoodBear",
        description: "Test Transaction",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          // Handle payment success
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#F37254"
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      alert('Razorpay SDK failed to load. Are you online?');
    }
  };
  return (
    <div>
      <h1>{heading} </h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <div className="item-details">
            <h2>{item.name}</h2>
            <p>Price: ₹{item.price.toFixed(2)}</p>
            <p>Descprition: {item.desc}</p>
            </div>
            <div className="itemimgcart">
              <img src={item.photo}/>
            <Button variant="contained" color="primary" onClick={() => addToCart(item)}>
              Add to Cart
            </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-button">
      <Button variant="contained" color="secondary" onClick={openCartModal}>
        View Cart ({cart.length} items)
      </Button>
      </div>
      <Modal open={isCartModalOpen} onClose={closeCartModal}>
        <div className="cart-modal">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ₹{item.price.toFixed(2)}
                  <Button variant="contained" color="success" onClick={() => removeFromCart(index)}>
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
            <h3>Subtotal: ₹{calculateSubtotal()}</h3>
            <Button variant="contained" color="primary" onClick={proceedToCheckout}>Proceed to Checkout</Button>
            </div>
          )}
          <Button variant="contained" onClick={closeCartModal}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default Menu