import React, { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom'
import './style.css'
import heroesImg from '../../assets/heroes.png'
import logoimg from '../../assets/logo.svg'
import api from '../../services/api';


export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {

      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile')
    } catch (err) {

      alert('Falha no login, tente novamente.')

    }
  }

  return (

    <div className="logon-container">
      <section className="form">
        <img src={logoimg} alt="bethehero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="SUA ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FaSignInAlt size={16} color="#E02041" />
      Não tenho cadastro
      </Link>

        </form>

      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>

  )

};