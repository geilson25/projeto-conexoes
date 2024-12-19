// Componente LevelBadge para exibir o nível do usuário
function LevelBadge({ level, points }) {
    try {
        // Obtém as informações do nível (cor e título) com base no nível atual
        const { color, title } = getLevelInfo(level);
        
        return (
            // Contêiner da badge de nível, com a classe 'color' aplicada dinamicamente
            <div 
                className={`level-badge ${color}`}  // A cor da badge é determinada pela variável 'color' obtida pela função getLevelInfo
                data-name="level-badge"
            >
                {/* Título do nível */}
                <span data-name="level-title">{title}</span>
                
                {/* Exibe os pontos do usuário */}
                <span className="ml-2" data-name="level-points">{points} pts</span>
            </div>
        );
    } catch (error) {
        // Se ocorrer um erro, uma função de reporte de erro é chamada
        reportError(error);
        return null;  // Caso ocorra erro, o componente retorna null para evitar que a aplicação quebre
    }
}
