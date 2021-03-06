import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Orden from '../components/Orden';
import Menu from '../components/Menu';
import firebase from '../firestore';
import './styles/BadgeNew.css';

const BadgeNew = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios('https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/prototype/src/data/menu.json');
      setState(result.data);
    }
    fetchData();
  }, []);

  const [orden, setOrden] = useState([]);
  const addOrden = (obj) => {
    if (orden.includes(obj)) {
      const index = orden.indexOf(obj);
      orden[index].count += 1;
      setOrden([...orden]);
    } else {
      state.filter(item => (item.name === obj.name ? setOrden([...orden, item]) : item));
    }
  };
  const deleteOrden = (name) => {
    setOrden(orden.filter(item => item.name !== name));
  };
  const updateItem = (index, item) => {
    const newItems = [...orden];
    newItems[index] = item;
    setOrden(newItems);
  };
  const [user, setUser] = useState({ customer: '' });
  const handleInputChange = (event) => {
    setUser({ customer: event.target.value });
  };
  const addUser = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection('users').add({ name: user.customer, orden, date: firebase.firestore.FieldValue.serverTimestamp() });
    setUser({ customer: '' });
    setOrden([]);
  };
  return (
    <div className="width-total">
      <div className="row width-total">
        <Navbar />
      </div>
      <div className="row width-total">
        <div className="col-md-6">
          <Menu addOrden={addOrden} state={state} />
        </div>
        <div className="col-md-6 margin-black">
          <Orden
            orden={orden}
            deleteOrden={deleteOrden}
            updateItem={updateItem}
            addUser={addUser}
            user={user}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};
export default BadgeNew;
