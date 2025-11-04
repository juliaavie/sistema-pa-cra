import React from 'react';
import './ProcessView.css';

export default function ProcessView(){
  const processos = [
    {num:'2025-0001', autuado:'Empresa Exemplo LTDA', status:'Em Instrução', data:'2025-10-20'},
    {num:'2025-0002', autuado:'João da Silva', status:'Aguardando Defesa', data:'2025-10-22'},
  ];

  return (
    <div className="process-view-container">
      <div className="process-view-card">
        <h2 className="process-view-title">Consulta de Processos Administrativos</h2>
        
        <div className="process-content">
          <div className="process-list-section">
            <div className="section-header">
              <h3>Lista de Processos</h3>
              <div className="process-count">{processos.length} processo(s) encontrado(s)</div>
            </div>
            
            <div className="table-container">
              <table className="process-table">
                <thead>
                  <tr>
                    <th>Nº do Processo</th>
                    <th>Autuado</th>
                    <th>Status</th>
                    <th>Data de Abertura</th>
                  </tr>
                </thead>
                <tbody>
                  {processos.map((p,i)=>(
                    <tr key={i} className="process-row">
                      <td className="process-number">{p.num}</td>
                      <td className="process-autuado">{p.autuado}</td>
                      <td>
                        <span className={`status-badge ${p.status.replace(' ', '-').toLowerCase()}`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="process-date">{p.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="filters-section">
            <div className="filters-card">
              <h4 className="filters-title">Filtros</h4>
              
              <div className="filter-group">
                <label>Unidade</label>
                <select className="filter-select">
                  <option>Todas as Unidades</option>
                  <option>Regional 1</option>
                  <option>Regional 2</option>
                  <option>Regional 3</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Status</label>
                <select className="filter-select">
                  <option>Todos os Status</option>
                  <option>Em Instrução</option>
                  <option>Aguardando Defesa</option>
                  <option>Concluído</option>
                  <option>Arquivado</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Período</label>
                <select className="filter-select">
                  <option>Últimos 30 dias</option>
                  <option>Últimos 90 dias</option>
                  <option>Este ano</option>
                  <option>Todo o período</option>
                </select>
              </div>

              <button className="apply-filters-btn">
                Aplicar Filtros
              </button>

              <button className="clear-filters-btn">
                Limpar Filtros
              </button>
            </div>

            <div className="quick-actions">
              <h4 className="actions-title">Ações Rápidas</h4>
              <button className="action-btn primary">
                Novo Processo
              </button>
              <button className="action-btn secondary">
                Relatório
              </button>
              <button className="action-btn secondary">
                Exportar Dados
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}