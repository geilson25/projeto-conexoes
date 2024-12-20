// Função do componente LevelBadge, que recebe o nível e os pontos como props
function LevelBadge({ level, points }) {
    try {
        // Obtém as informações do nível (cor e título) com base no valor de `level` através da função getLevelInfo
        const { color, title } = getLevelInfo(level);
        
        // Retorna o JSX que representa o badge de nível
        return (
            // A div principal do badge, que inclui a cor do nível dinamicamente
            <div 
                className={`level-badge ${color}`}  // Adiciona a classe base 'level-badge' e a classe de cor dinâmica
                data-name="level-badge"  // Atributo customizado para identificar o badge
            >
                {/* O título do nível */}
                <span data-name="level-title">{title}</span>
                {/* Exibe os pontos do nível com um espaçamento à esquerda (ml-2) */}
                <span className="ml-2" data-name="level-points">{points} pts</span>
            </div>
        );
    } catch (error) {
        // Caso ocorra um erro durante a execução, ele será capturado aqui
        reportError(error);  // Chama a função reportError para registrar o erro
        return null;  // Se ocorrer um erro, o componente retorna null, ou seja, nada será exibido
    }
}
