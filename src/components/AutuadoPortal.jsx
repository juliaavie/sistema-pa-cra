import React, { useState } from 'react';
import './AutuadoPortal.css';

export default function AutuadoPortal(){
  const [defesa, setDefesa] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [daeValue, setDaeValue] = useState('');
  const [paymentType, setPaymentType] = useState('unique');

  const submitDefesa = () => alert('Defesa enviada (simulação).');
  const searchProcess = () => alert(`Pesquisando por: ${searchTerm}`);
  const generateDAE = () => alert(`DAE gerado - Valor: R$ ${daeValue}, Tipo: ${paymentType}`);

  return (
    <div className="autuado-container">
      <div className="autuado-card">
        <h2 className="autuado-title">Portal do Autuado</h2>
        <p className="autuado-subtitle">Área exclusiva para autuados apresentarem defesa e emitirem DAE</p>
        
        <div className="portal-grid">
          {/* Consultar AI */}
          <div className="portal-section">
            <div className="section-header">
              <h3 className="section-title">Consultar Auto de Infração</h3>
              <div className="section-icon">🔍</div>
            </div>
            <p className="section-description">
              Informe o número do auto ou CPF/CNPJ para consultar o processo administrativo.
            </p>
            <div className="search-form">
              <input 
                className="search-input"
                placeholder="Nº do Auto / CPF / CNPJ" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-btn" onClick={searchProcess}>
                Pesquisar
              </button>
            </div>
          </div>

          {/* Apresentar Defesa */}
          <div className="portal-section">
            <div className="section-header">
              <h3 className="section-title">Apresentar Defesa</h3>
              <div className="section-icon">📝</div>
            </div>
            <p className="section-description">
              Anexe documentos e escreva sua defesa. O prazo será verificado automaticamente.
            </p>
            <textarea 
              className="defesa-textarea"
              rows={6} 
              value={defesa}
              onChange={e => setDefesa(e.target.value)}
              placeholder="Descreva aqui os fatos e argumentos da sua defesa..."
            />
            <div className="defesa-actions">
              <input type="file" className="file-input" />
              <button onClick={submitDefesa} className="defesa-btn">
                Enviar Defesa
              </button>
            </div>
          </div>

          {/* Emissão de DAE */}
          <div className="portal-section full-width">
            <div className="section-header">
              <h3 className="section-title">Emissão de DAE</h3>
              <div className="section-icon">💰</div>
            </div>
            <p className="section-description">
              Simule valores e emita o Documento de Arrecadação Estadual online.
            </p>
            <div className="dae-form">
              <div className="dae-input-group">
                <label>Valor (R$)</label>
                <input 
                  className="dae-input"
                  placeholder="0,00" 
                  value={daeValue}
                  onChange={(e) => setDaeValue(e.target.value)}
                />
              </div>
              <div className="dae-input-group">
                <label>Forma de Pagamento</label>
                <select 
                  className="dae-select"
                  value={paymentType}
                  onChange={(e) => setPaymentType(e.target.value)}
                >
                  <option value="unique">Pagamento único</option>
                  <option value="installment">Parcelado</option>
                </select>
              </div>
              <button className="dae-btn" onClick={generateDAE}>
                Gerar DAE
              </button>
            </div>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="info-section">
          <h4 className="info-title">Informações Importantes</h4>
          <div className="info-grid">
            <div className="info-item">
              <strong>Prazo para Defesa:</strong> 30 dias úteis
            </div>
            <div className="info-item">
              <strong>Horário de Atendimento:</strong> 08h às 17h
            </div>
            <div className="info-item">
              <strong>Telefone:</strong> (31) 3215-0000
            </div>
            <div className="info-item">
              <strong>E-mail:</strong> ouvidoria@ima.mg.gov.br
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}