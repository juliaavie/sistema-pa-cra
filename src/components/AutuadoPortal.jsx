import React, { useState } from 'react';
export default function AutuadoPortal(){
  const [defesa, setDefesa] = useState(null);
  const submit = ()=> alert('Defesa enviada (simulação).');
  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-lg font-semibold mb-3">Portal do Autuado</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold">Consultar AI</h4>
          <div className="mt-2 text-sm text-gray-600">Informe o número do auto ou CPF para consultar o processo.</div>
          <div className="mt-3">
            <input className="w-full border rounded px-3 py-2" placeholder="Nº do Auto / CPF" />
            <button className="mt-2 px-3 py-2 bg-blue-800 text-white rounded">Pesquisar</button>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Apresentar Defesa</h4>
          <div className="mt-2 text-sm text-gray-600">Anexe documentos e escreva sua defesa. Prazo será verificado automaticamente.</div>
          <textarea className="w-full border rounded px-3 py-2 mt-2" rows={6} value={defesa||''} onChange={e=>setDefesa(e.target.value)} />
          <div className="flex gap-2 mt-2">
            <input type="file" />
            <button onClick={submit} className="px-3 py-2 bg-blue-800 text-white rounded">Enviar Defesa</button>
          </div>
        </div>
        <div className="md:col-span-2 mt-4">
          <h4 className="font-semibold">Emissão de DAE</h4>
          <div className="mt-2 text-sm text-gray-600">Simule valores e emita o DAE online.</div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2">
            <input className="border rounded px-3 py-2" placeholder="Valor (R$)" />
            <select className="border rounded px-3 py-2"><option>Pagamento único</option><option>Parcelado</option></select>
            <button className="px-3 py-2 bg-blue-800 text-white rounded">Gerar DAE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
