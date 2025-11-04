import React, { useState } from 'react';
export default function LavraturaWizard(){
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({autuadoNome:'',tipo:'PF',email:'',coordenadas:'',evidencias:[]});
  const next = ()=> setStep(s=>Math.min(4,s+1));
  const prev = ()=> setStep(s=>Math.max(1,s-1));
  const upload = (e)=>{ const files = Array.from(e.target.files); setForm(f=>({...f,evidencias:[...f.evidencias,...files.map(x=>x.name)]})); };
  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Lavratura do Auto de Infração</h2>
      <div className="mb-3 text-sm text-gray-600">Etapa {step} de 4</div>
      {step===1 && (
        <div className="space-y-3">
          <label className="block text-sm">Identificação do Autuado</label>
          <input className="w-full border rounded px-3 py-2" value={form.autuadoNome} onChange={e=>setForm({...form,autuadoNome:e.target.value})} placeholder="Nome completo / Razão social" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <select className="border rounded px-3 py-2" value={form.tipo} onChange={e=>setForm({...form,tipo:e.target.value})}>
              <option value="PF">Pessoa Física</option>
              <option value="PJ">Pessoa Jurídica</option>
              <option value="ESPOLIO">Espólio</option>
            </select>
            <input className="border rounded px-3 py-2" placeholder="E-mail/Contato" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
          </div>
        </div>
      )}
      {step===2 && (
        <div className="space-y-3">
          <label className="block text-sm">Evidências (fotos, PDFs)</label>
          <input type="file" multiple onChange={upload} className="block" />
          <div className="text-xs text-gray-600">Arquivos anexados:</div>
          <ul className="text-sm list-disc pl-5">
            {form.evidencias.map((f,i)=>(<li key={i}>{f}</li>))}
          </ul>
          <label className="block text-sm">Coordenadas (opcional)</label>
          <input className="border rounded px-3 py-2" placeholder="-23.5505, -46.6333" value={form.coordenadas} onChange={e=>setForm({...form,coordenadas:e.target.value})} />
        </div>
      )}
      {step===3 && (
        <div className="space-y-3">
          <label className="block text-sm">Pré-visualização do Auto</label>
          <div className="p-3 border rounded bg-gray-50">
            <div className="font-semibold">Autuado: {form.autuadoNome || '—'}</div>
            <div className="text-sm text-gray-600">Tipo: {form.tipo}</div>
            <div className="text-sm text-gray-600">E-mail: {form.email}</div>
            <div className="text-sm text-gray-600">Evidências: {form.evidencias.length} arquivos</div>
          </div>
          <div className="text-xs text-gray-500">Assinatura digital do fiscal será solicitada na finalização.</div>
        </div>
      )}
      {step===4 && (
        <div className="space-y-3">
          <label className="block text-sm">Confirmação e Assinatura</label>
          <div className="p-3 border rounded bg-gray-50">Ao confirmar, o sistema solicitará a assinatura digital do fiscal e a emissão do número do AI.</div>
          <button className="mt-2 px-4 py-2 bg-blue-800 text-white rounded" onClick={()=>alert('Simulação: AI gerado com sucesso (nº 2025/0001)')}>Confirmar e Assinar</button>
        </div>
      )}
      <div className="mt-6 flex justify-between">
        <button disabled={step===1} onClick={prev} className="px-3 py-2 border rounded disabled:opacity-50">Anterior</button>
        <button onClick={next} className="px-3 py-2 bg-blue-800 text-white rounded">{step<4 ? 'Próximo' : 'Concluir'}</button>
      </div>
    </div>
  );
}
