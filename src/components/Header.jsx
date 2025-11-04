export default function Header({ onNavigate, user }){
  return (
    <header className="bg-white border-b border-green-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">IMA</div>
          <div>
            <div className="font-semibold text-lg text-green-800">Instituto Mineiro de Agropecuária</div>
            <div className="text-xs text-green-600">Sistema de Processos Administrativos</div>
          </div>
        </div>
        <nav className="flex items-center gap-2">
          <button 
            className="text-sm px-4 py-2 rounded-lg hover:bg-green-50 text-green-700 font-medium transition-colors" 
            onClick={()=>onNavigate('lavratura')}
          >
            Lavratura AI
          </button>
          <button 
            className="text-sm px-4 py-2 rounded-lg hover:bg-green-50 text-green-700 font-medium transition-colors" 
            onClick={()=>onNavigate('process')}
          >
            Processos
          </button>
          <button 
            className="text-sm px-4 py-2 rounded-lg hover:bg-green-50 text-green-700 font-medium transition-colors" 
            onClick={()=>onNavigate('autuado')}
          >
            Portal do Autuado
          </button>
          {user ? (
            <div className="ml-4 text-sm text-green-700 font-medium">{user.name}</div>
          ) : (
            <button 
              className="ml-4 text-sm px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors" 
              onClick={()=>onNavigate('login')}
            >
              Entrar
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}