import React, { useState } from 'react';
export default function Login({ onLogin }){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const submit = (e)=>{ e.preventDefault(); onLogin({name: 'Servidor Exemplo', email}); };
  return (
    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="p-6 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Acesse o Sistema PA</h2>
        <p className="text-sm text-gray-600 mb-4">Área restrita para servidores. Utilize suas credenciais institucionais.</p>
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-sm">E‑mail institucional</label>
            <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm">Senha</label>
            <input required type="password" value={senha} onChange={e=>setSenha(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div className="flex items-center justify-between">
            <button className="px-4 py-2 bg-blue-800 text-white rounded">Entrar</button>
            <a className="text-sm text-blue-800">Esqueci a senha</a>
          </div>
        </form>
      </div>
      <div className="p-6">
        <div className="bg-white rounded shadow p-6">
          <h3 className="font-semibold">Portal do Cidadão</h3>
          <p className="text-sm text-gray-600">O autuado também pode acessar para apresentar defesa e emitir DAE. Use o botão abaixo para abrir o portal público.</p>
          <div className="mt-4">
            <button className="px-3 py-2 border rounded" onClick={()=>alert('Acesso ao portal público (simulado)')}>Ir para Portal do Autuado</button>
          </div>
        </div>
      </div>
    </div>
  );
}
