// Função do componente Header, que recebe o usuário e a função onProfileClick como props
function Header({ user, onProfileClick }) {
    try {
        // Retorna o JSX que representa o cabeçalho da aplicação
        return (
            <header className="header" data-name="header">
                {/* Container principal para alinhar os itens no cabeçalho */}
                <div className="container mx-auto flex justify-between items-center">
                    {/* Título da aplicação */}
                    <h1 className="text-white text-2xl font-bold" data-name="header-title">
                        Healthcare Training Hub
                    </h1>

                    {/* Container para as informações do usuário */}
                    <div className="flex items-center gap-4" data-name="user-info">
                        {/* Informações do perfil do usuário */}
                        <div className="flex items-center gap-3" data-name="user-profile">
                            {/* Imagem do avatar do usuário */}
                            <img 
                                src={user.avatar || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} 
                                alt={`${user.name}'s avatar`}  // Texto alternativo para a imagem
                                className="w-12 h-12 rounded-full border-2 border-white object-cover cursor-pointer"  // Estilos do avatar
                                data-name="user-avatar"
                                onClick={onProfileClick}  // Chama a função onProfileClick quando o avatar é clicado
                            />
                            {/* Nome do usuário */}
                            <span className="text-white" data-name="user-name">
                                {user.name}
                            </span>
                        </div>

                        {/* Componente de Badge de Nível que mostra o nível e os pontos */}
                        <LevelBadge level={user.level} points={user.points} />
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        // Caso ocorra um erro, ele é capturado e a função reportError é chamada
        reportError(error);
        return null;  // Retorna null caso ocorra um erro, não renderizando nada
    }
}
