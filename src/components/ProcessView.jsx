import React from 'react';
export default function ProcessView(){
  const processos = [
    {num:'2025-0001', autuado:'Empresa Exemplo LTDA', status:'Em Instrução', data:'2025-10-20'},
    {num:'2025-0002', autuado:'João da Silva', status:'Aguardando Defesa', data:'2025-10-22'},
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white rounded shadow p-4">
        <h3 className="font-semibold mb-3">Lista de Processos</h3>
        <table className="w-full text-sm">
          <thead className="text-left text-xs text-gray-500">
            <tr><th>Nº</th><th>Autuado</th><th>Status</th><th>Data</th></tr>
          </thead>
          <tbody>
            {processos.map((p,i)=>(
              <tr key={i} className="border-t"><td className="py-2">{p.num}</td><td>{p.autuado}</td><td>{p.status}</td><td>{p.data}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <aside className="bg-white rounded shadow p-4">
        <h4 className="font-semibold mb-2">Filtros</h4>
        <div className="space-y-2 text-sm">
          <div>
            <label className="block text-xs">Unidade</label>
            <select className="w-full border rounded px-2 py-1"><option>Geral</option><option>Regional 1</option></select>
          </div>
          <div>
            <label className="block text-xs">Status</label>
            <select className="w-full border rounded px-2 py-1"><option>Todos</option><option>Em Instrução</option><option>Aguardando Defesa</option></select>
          </div>
        </div>
      </aside>
    </div>
  );
}
