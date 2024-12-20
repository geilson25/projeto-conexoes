// Componente para exibir o cabeçalho do perfil do usuário
function ProfileHeader({ user }) {
  try {
      // Renderiza o cabeçalho do perfil
      return (
          <div className="profile-header" data-name="profile-header">
              {/* Seção de capa do perfil (cobertura visual) */}
              <div className="profile-cover" data-name="profile-cover"></div>
              <div className="profile-info" data-name="profile-info">
                  {/* Exibe a foto do avatar do usuário */}
                  <img 
                      src={user.avatar} // A URL do avatar do usuário
                      alt={`${user.name}'s avatar`} // Texto alternativo com o nome do usuário
                      className="profile-avatar" // Estilos CSS para o avatar
                      data-name="profile-avatar" // Atributo personalizado para identificar o elemento
                  />
                  <div className="profile-details" data-name="profile-details">
                      {/* Nome do usuário */}
                      <h1 className="text-2xl font-bold" data-name="profile-name">{user.name}</h1>
                      <div className="flex items-center gap-3 mt-2">
                          {/* Exibe o nível e pontos do usuário */}
                          <LevelBadge level={user.level} points={user.points} />
                          {/* Exibe a sequência de dias consecutivos */}
                          <span className="streak-badge" data-name="streak-badge">
                              🔥 {user.streak} dias consecutivos
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      );
  } catch (error) {
      // Em caso de erro, chama a função reportError
      reportError(error);
      return null; // Retorna null se houver erro
  }
}
