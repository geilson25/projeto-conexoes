// Componente Header para exibir a barra de navegação do usuário
function Header({ user }) {
    try {
        return (
            // Contêiner principal do cabeçalho
            <header className="header" data-name="header">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Título da aplicação */}
                    <h1 className="text-white text-2xl font-bold" data-name="header-title">
                        Healthcare Training Hub
                    </h1>

                    {/* Informações do usuário */}
                    <div className="flex items-center gap-4" data-name="user-info">
                        {/* Seção com o avatar e nome do usuário */}
                        <div className="flex items-center gap-3" data-name="user-profile">
                            {/* Avatar do usuário */}
                            <img 
                                src={user.avatar || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} 
                                alt={`${user.name}'s avatar`}  // Texto alternativo com o nome do usuário
                                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                data-name="user-avatar"
                            />
                            {/* Nome do usuário */}
                            <span className="text-white" data-name="user-name">
                                {user.name}
                            </span>
                        </div>

                        {/* Componente LevelBadge que exibe o nível e os pontos do usuário */}
                        <LevelBadge level={user.level} points={user.points} />
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        // Se ocorrer um erro, uma função de reporte de erro é chamada
        reportError(error);
        return null;  // Caso ocorra erro, o componente retorna null para evitar que a aplicação quebre
    }
}
