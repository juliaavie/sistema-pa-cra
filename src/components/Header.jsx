import React from 'react';
export default function Header({ onNavigate, user }){
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-blue-800 flex items-center justify-center text-white font-bold">PA</div>
          <div>
            <div className="font-semibold text-lg">Sistema PA</div>
            <div className="text-xs text-gray-500">Gestão de Processos Administrativos</div>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <button className="text-sm px-3 py-2 rounded hover:bg-gray-100" onClick={()=>onNavigate('lavratura')}>Lavratura AI</button>
          <button className="text-sm px-3 py-2 rounded hover:bg-gray-100" onClick={()=>onNavigate('process')}>Processos</button>
          <button className="text-sm px-3 py-2 rounded hover:bg-gray-100" onClick={()=>onNavigate('autuado')}>Portal do Autuado</button>
          {user ? (
            <div className="ml-3 text-sm text-gray-700">{user.name}</div>
          ) : (
            <button className="ml-3 text-sm px-3 py-2 bg-blue-800 text-white rounded" onClick={()=>onNavigate('login')}>Entrar</button>
          )}
        </nav>
      </div>
    </header>
  );
}
