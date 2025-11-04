import './Header.css';

export default function Header({ onNavigate, user }){
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo e Título */}
        <div className="header-logo">
          <div className="logo-circle">IMA</div>
          <div className="header-titles">
            <h1>Instituto Mineiro de Agropecuária</h1>
            <p>Sistema de Processos Administrativos</p>
          </div>
        </div>

        {/* Navegação */}
        <nav className="header-nav">
          <button
            className="nav-button"
            onClick={()=>onNavigate('lavratura')}
          >
            📄 Lavratura AI
          </button>
          <button
            className="nav-button"
            onClick={()=>onNavigate('process')}
          >
            📋 Processos
          </button>
          <button
            className="nav-button"
            onClick={()=>onNavigate('autuado')}
          >
            👤 Portal do Autuado
          </button>
          
          {user ? (
            <div className="user-info">
              <div className="user-name">👋 {user.name}</div>
            </div>
          ) : (
            <button
              className="login-button"
              onClick={()=>onNavigate('login')}
            >
              🔐 Entrar
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}