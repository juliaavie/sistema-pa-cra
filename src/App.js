import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import LavraturaWizard from './components/LavraturaWizard';
import ProcessView from './components/ProcessView';
import AutuadoPortal from './components/AutuadoPortal';

export default function App() {
  const [route, setRoute] = useState('login');
  const [user, setUser] = useState(null);
  const nav = (r) => setRoute(r);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 text-gray-800">
      <Header onNavigate={nav} user={user} />
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        {route === 'login' && <Login onLogin={(u)=>{setUser(u); setRoute('lavratura');}} />}
        {route === 'lavratura' && <LavraturaWizard />}
        {route === 'process' && <ProcessView />}
        {route === 'autuado' && <AutuadoPortal />}
      </main>
    </div>
  );
}