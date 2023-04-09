import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Outlet } from 'react-router-dom';
import Card from '../Components/Card';




//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { users, getUsers, theme } = useAppContext();
  const [dentists, setdentists] = useState([]);

  const getDentist = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setdentists(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Outlet />
    <main className={theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {users?.map((user) => {
          return (
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
            />
          );
        })}
      </div>
      <div>
        <hr></hr>
      </div>
    </main>
    </>
  );
};

export default Home;
