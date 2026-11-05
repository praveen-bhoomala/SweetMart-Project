

import { useState } from 'react';
import './App.css';

import cartIcon from './assets/react.svg';
import gulabJamunImg from './assets/sweets/gulab-jamun.jpg';
import rasgullaImg from './assets/sweets/rasgulla.jpg';
import kajuKatliImg from './assets/sweets/kaju-katli.jpg';
import ladooImg from './assets/sweets/ladoo.jpg';
import jalebiImg from './assets/sweets/jalebi.jpg';
import barfiImg from './assets/sweets/barfi.jpg';


const SWEETS = [
  {
    id: 1,
    name: 'Gulab Jamun',
    price: 10,
    description: 'Soft, syrupy, and delicious.',
    image: gulabJamunImg,
  },
  {
    id: 2,
    name: 'Rasgulla',
    price: 12,
    description: 'Spongy and sweet cottage cheese balls.',
    image: rasgullaImg,
  },
  {
    id: 3,
    name: 'Kaju Katli',
    price: 20,
    description: 'Diamond-shaped cashew fudge.',
    image: kajuKatliImg,
  },
  {
    id: 4,
    name: 'Ladoo',
    price: 8,
    description: 'Round, festive, and flavorful.',
    image: ladooImg,
  },
  {
    id: 5,
    name: 'Jalebi',
    price: 15,
    description: 'Crispy, bright orange spirals soaked in syrup.',
    image: jalebiImg,
  },
  {
    id: 6,
    name: 'Barfi',
    price: 18,
    description: 'Rich, creamy, and comes in many flavors.',
    image: barfiImg,
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [selectedSweet, setSelectedSweet] = useState(null);

  const addToCart = (sweet) => {
    setCart((prev) => [...prev, sweet]);
  };

  const goHome = () => setSelectedSweet(null);

  return (
    <div className="sweet-shop-container">
      <header>
        <h1 onClick={goHome} style={{ cursor: 'pointer' }}>Sweet Shop</h1>
        <div className="cart-info">
          <img src={cartIcon} alt="cart" className="cart-icon" />
          {cart.length}
        </div>
      </header>
      <main>
        {selectedSweet ? (
          <SweetDetail sweet={selectedSweet} onBack={goHome} onAdd={addToCart} />
        ) : (
          <SweetList sweets={SWEETS} onSelect={setSelectedSweet} />
        )}
      </main>
      <footer>
        <strong>Enjoy your sweets!</strong>
      </footer>
    </div>
  );
}


function SweetList({ sweets, onSelect }) {
  const fallback = 'https://via.placeholder.com/180x120?text=No+Image';
  return (
    <div className="sweet-list">
      {sweets.map((sweet) => (
        <div key={sweet.id} className="sweet-card" onClick={() => onSelect(sweet)}>
          <img src={sweet.image} alt={sweet.name} className="sweet-img" onError={e => { e.target.onerror=null; e.target.src=fallback; }} />
          <h2>{sweet.name}</h2>
          <p>Price: ₹{sweet.price}</p>
        </div>
      ))}
    </div>
  );
}


function SweetDetail({ sweet, onBack, onAdd }) {
  const fallback = 'https://via.placeholder.com/320x200?text=No+Image';
  return (
    <div className="sweet-detail">
      <button onClick={onBack}>← Back</button>
      <img src={sweet.image} alt={sweet.name} className="sweet-img-detail" onError={e => { e.target.onerror=null; e.target.src=fallback; }} />
      <h2>{sweet.name}</h2>
      <p>{sweet.description}</p>
      <p>Price: ₹{sweet.price}</p>
      <button onClick={() => onAdd(sweet)}>Add to Cart</button>
    </div>
  );
}

export default App;
