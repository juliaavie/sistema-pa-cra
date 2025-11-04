import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ name: 'Servidor', email });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Cabeçalho */}
        <div className="login-header">
         <div className="logo">IMA</div>
          <h1>Acesse o Sistema do IMA</h1>
          <p>Área restrita para servidores. Utilize suas credenciais institucionais.</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>E-mail institucional</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@institucional.gov.br"
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>

        <div className="forgot-password">
          <a href="#forgot">Esqueci a senha</a>
        </div>
      </div>

      {/* Portal do Cidadão */}
      <div className="portal-card">
        <h3>Portal do Cidadão</h3>
        <p>O autuado também pode acessar para apresentar defesa e emitir DAE. Use o botão abaixo para abrir o portal público.</p>
        <button className="portal-btn">
          Ir para Portal do Autuado
        </button>
      </div>
    </div>
  );
}