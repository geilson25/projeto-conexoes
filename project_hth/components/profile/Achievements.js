// Componente para exibir as conquistas do usuário
function Achievements({ achievements }) {
  try {
      // Renderiza a seção de conquistas
      return (
          <div className="achievements-section" data-name="achievements">
              {/* Título da seção de conquistas */}
              <h2 className="section-title">Conquistas</h2>
              <div className="achievements-grid" data-name="achievements-grid">
                  {/* Mapeia todas as conquistas e exibe individualmente */}
                  {achievements.map(achievement => (
                      <div 
                          key={achievement.id} // Chave única para cada conquista
                          className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`} // Aplica a classe "unlocked" se a conquista foi desbloqueada
                          data-name={`achievement-${achievement.id}`} // Atributo personalizado para identificação
                      >
                          {/* Exibe o ícone da conquista */}
                          <div className="achievement-icon">{achievement.icon}</div>
                          {/* Título da conquista */}
                          <h3>{achievement.title}</h3>
                          {/* Descrição da conquista */}
                          <p>{achievement.description}</p>
                          {/* Se a conquista estiver desbloqueada, exibe a data de conquista */}
                          {achievement.unlocked && (
                              <span className="achievement-date">
                                  Conquistado em {achievement.unlockedDate}
                              </span>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      );
  } catch (error) {
      // Em caso de erro, chama uma função para reportar o erro
      reportError(error);
      return null; // Retorna null se houver erro
  }
}
