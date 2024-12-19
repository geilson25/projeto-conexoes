// Função para obter as informações de nível com base no número do nível
function getLevelInfo(level) {
    try {
        // Objeto que mapeia o número do nível para as informações correspondentes
        const levels = {
            1: { color: 'bg-gray-200 text-gray-800', title: 'Iniciante' }, // Nível 1: Iniciante
            2: { color: 'bg-green-200 text-green-800', title: 'Intermediário' }, // Nível 2: Intermediário
            3: { color: 'bg-blue-200 text-blue-800', title: 'Avançado' }, // Nível 3: Avançado
            4: { color: 'bg-purple-200 text-purple-800', title: 'Especialista' }, // Nível 4: Especialista
            5: { color: 'bg-yellow-200 text-yellow-800', title: 'Mestre' } // Nível 5: Mestre
        };
        
        // Retorna as informações correspondentes ao nível passado como argumento
        // Caso o nível não exista, retorna o nível 1 (Iniciante) como padrão
        return levels[level] || levels[1];
    } catch (error) {
        // Caso ocorra algum erro, chama a função para reportar o erro
        reportError(error);
        
        // Retorna um nível padrão (Iniciante) em caso de erro
        return { color: 'bg-gray-200 text-gray-800', title: 'Iniciante' };
    }
}
