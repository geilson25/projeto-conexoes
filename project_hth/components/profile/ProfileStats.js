// Componente que exibe as estatísticas do perfil do usuário
function ProfileStats({ stats }) {
  try {
      return (
          <div className="stats-container" data-name="stats-container">
              {/* Seção de estatísticas gerais */}
              <div className="stats-grid" data-name="stats-grid">
                  {/* Cartão de "Pontos Totais" */}
                  <div className="stat-card" data-name="total-points">
                      <h3>Pontos Totais</h3> {/* Título do cartão */}
                      <p className="stat-value">{stats.totalPoints}</p> {/* Valor total de pontos */}
                  </div>
                  {/* Cartão de "Cursos Concluídos" */}
                  <div className="stat-card" data-name="courses-completed">
                      <h3>Cursos Concluídos</h3> {/* Título do cartão */}
                      <p className="stat-value">{stats.completedCourses}</p> {/* Número de cursos concluídos */}
                  </div>
                  {/* Cartão de "Sequência Atual" */}
                  <div className="stat-card" data-name="current-streak">
                      <h3>Sequência Atual</h3> {/* Título do cartão */}
                      <p className="stat-value">{stats.currentStreak} dias</p> {/* Sequência atual de dias consecutivos */}
                  </div>
                  {/* Cartão de "Conquistas" */}
                  <div className="stat-card" data-name="achievements">
                      <h3>Conquistas</h3> {/* Título do cartão */}
                      <p className="stat-value">{stats.achievements}</p> {/* Número de conquistas */}
                  </div>
              </div>

              {/* Seção de progresso para o próximo nível */}
              <div className="level-progress" data-name="level-progress">
                  <h3>Progresso para Próximo Nível</h3> {/* Título da seção */}
                  {/* Barra de progresso que indica o progresso atual do usuário */}
                  <ProgressBar progress={stats.levelProgress} />
                  {/* Texto adicional sobre o número de pontos necessários para alcançar o próximo nível */}
                  <p className="text-sm text-gray-600 mt-2">
                      {stats.pointsToNextLevel} pontos para o próximo nível
                  </p>
              </div>
          </div>
      );
  } catch (error) {
      // Em caso de erro, reporta o erro e retorna null
      reportError(error);
      return null;
  }
}
