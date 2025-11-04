export default function Header({ onNavigate, user }){
  return (
    <header className="bg-white border-b border-green-200 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        {/* Logo e Título */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white font-bold text-xl shadow-md">
            IMA
          </div>
          <div>
            <div className="font-bold text-xl text-green-800 leading-tight">
              Instituto Mineiro de Agropecuária
            </div>
            <div className="text-sm text-green-600 font-medium">
              Sistema de Processos Administrativos
            </div>
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex items-center gap-3">
          <button
            className="px-6 py-3 rounded-xl hover:bg-green-50 text-green-800 font-semibold text-base border border-green-200 hover:border-green-300 transition-all duration-200 hover:shadow-md"
            onClick={()=>onNavigate('lavratura')}
          >
            📄 Lavratura AI
          </button>
          <button
            className="px-6 py-3 rounded-xl hover:bg-green-50 text-green-800 font-semibold text-base border border-green-200 hover:border-green-300 transition-all duration-200 hover:shadow-md"
            onClick={()=>onNavigate('process')}
          >
            📋 Processos
          </button>
          <button
            className="px-6 py-3 rounded-xl hover:bg-green-50 text-green-800 font-semibold text-base border border-green-200 hover:border-green-300 transition-all duration-200 hover:shadow-md"
            onClick={()=>onNavigate('autuado')}
          >
            👤 Portal do Autuado
          </button>
          
          {user ? (
            <div className="ml-4 px-4 py-2 bg-green-100 rounded-lg border border-green-200">
              <div className="text-green-800 font-semibold text-base">👋 {user.name}</div>
            </div>
          ) : (
            <button
              className="ml-4 px-6 py-3 bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg"
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