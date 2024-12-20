function Profile({ user, onBack }) {
  try {
      return (
          <div className="profile-page" data-name="profile-page">
              {/* Botão de voltar */}
              <button 
                  onClick={onBack}  // Aciona a função onBack quando clicado
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
                  data-name="back-button"
              >
                  ← Voltar
              </button>
              
              {/* Cabeçalho do perfil */}
              <ProfileHeader user={user} />
              
              {/* Estatísticas do usuário */}
              <ProfileStats stats={{
                  totalPoints: user.points,  // Pontuação total do usuário
                  completedCourses: user.completedCourses,  // Cursos completos
                  currentStreak: user.streak,  // Sequência atual (streak)
                  achievements: user.achievements.length,  // Quantidade de conquistas
                  levelProgress: 75,  // Progresso de nível (valor estático neste exemplo)
                  pointsToNextLevel: 250  // Pontos necessários para o próximo nível
              }} />
              
              {/* Conquistas do usuário */}
              <Achievements achievements={user.achievements} />
              
              {/* Cursos do usuário */}
              <ProfileCourses courses={user.courses} />
          </div>
      );
  } catch (error) {
      // Se ocorrer um erro, ele será registrado e nada será renderizado
      reportError(error);
      return null;
  }
}
