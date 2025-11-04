import React, { useState } from 'react';
import './LavraturaWizard.css';

export default function LavraturaWizard(){
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({autuadoNome:'',tipo:'PF',email:'',coordenadas:'',evidencias:[]});
  const next = ()=> setStep(s=>Math.min(4,s+1));
  const prev = ()=> setStep(s=>Math.max(1,s-1));
  const upload = (e)=>{ const files = Array.from(e.target.files); setForm(f=>({...f,evidencias:[...f.evidencias,...files.map(x=>x.name)]})); };

  return (
    <div className="lavratura-container">
      <div className="lavratura-card">
        <h2 className="lavratura-title">Lavratura do Auto de Infração</h2>
        <div className="progress-bar">
          <div className="progress-step active">1</div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>2</div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
          <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>4</div>
        </div>
        <div className="step-indicator">Etapa {step} de 4</div>
        
        {step===1 && (
          <div className="step-content">
            <h3 className="step-title">Identificação do Autuado</h3>
            <div className="form-group">
              <label>Nome completo / Razão social</label>
              <input 
                value={form.autuadoNome} 
                onChange={e=>setForm({...form,autuadoNome:e.target.value})} 
                placeholder="Digite o nome completo ou razão social"
              />
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Tipo</label>
                <select value={form.tipo} onChange={e=>setForm({...form,tipo:e.target.value})}>
                  <option value="PF">Pessoa Física</option>
                  <option value="PJ">Pessoa Jurídica</option>
                  <option value="ESPOLIO">Espólio</option>
                </select>
              </div>
              <div className="form-group">
                <label>E-mail/Contato</label>
                <input 
                  placeholder="E-mail para contato" 
                  value={form.email} 
                  onChange={e=>setForm({...form,email:e.target.value})} 
                />
              </div>
            </div>
          </div>
        )}
        
        {step===2 && (
          <div className="step-content">
            <h3 className="step-title">Evidências e Localização</h3>
            <div className="form-group">
              <label>Evidências (fotos, PDFs, documentos)</label>
              <input type="file" multiple onChange={upload} className="file-input" />
              <div className="file-list">
                <div className="file-list-title">Arquivos anexados:</div>
                <ul>
                  {form.evidencias.map((f,i)=>(<li key={i}>{f}</li>))}
                </ul>
              </div>
            </div>
            <div className="form-group">
              <label>Coordenadas geográficas (opcional)</label>
              <input 
                placeholder="Ex: -23.5505, -46.6333" 
                value={form.coordenadas} 
                onChange={e=>setForm({...form,coordenadas:e.target.value})} 
              />
            </div>
          </div>
        )}
        
        {step===3 && (
          <div className="step-content">
            <h3 className="step-title">Pré-visualização do Auto</h3>
            <div className="preview-card">
              <div className="preview-item">
                <strong>Autuado:</strong> {form.autuadoNome || '—'}
              </div>
              <div className="preview-item">
                <strong>Tipo:</strong> {form.tipo}
              </div>
              <div className="preview-item">
                <strong>E-mail:</strong> {form.email || '—'}
              </div>
              <div className="preview-item">
                <strong>Evidências:</strong> {form.evidencias.length} arquivo(s)
              </div>
              <div className="preview-item">
                <strong>Coordenadas:</strong> {form.coordenadas || 'Não informadas'}
              </div>
            </div>
            <div className="preview-note">
              Assinatura digital do fiscal será solicitada na finalização.
            </div>
          </div>
        )}
        
        {step===4 && (
          <div className="step-content">
            <h3 className="step-title">Confirmação e Assinatura</h3>
            <div className="confirmation-card">
              Ao confirmar, o sistema solicitará a assinatura digital do fiscal e a emissão do número do AI.
            </div>
            <button className="confirm-btn" onClick={()=>alert('Simulação: AI gerado com sucesso (nº 2025/0001)')}>
              Confirmar e Assinar Digitalmente
            </button>
          </div>
        )}
        
        <div className="navigation-buttons">
          <button disabled={step===1} onClick={prev} className="nav-btn prev-btn">
            Anterior
          </button>
          <button onClick={next} className="nav-btn next-btn">
            {step<4 ? 'Próximo' : 'Concluir'}
          </button>
        </div>
      </div>
    </div>
  );
}