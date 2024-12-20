// Função para obter as informações de um nível baseado no valor passado
function getLevelInfo(level) {
    try {
        // Definindo um objeto com informações sobre os níveis
        const levels = {
            1: { color: 'bg-gray-200 text-gray-800', title: 'Iniciante' },   // Nível 1: Iniciante, com cor cinza
            2: { color: 'bg-green-200 text-green-800', title: 'Intermediário' }, // Nível 2: Intermediário, com cor verde
            3: { color: 'bg-blue-200 text-blue-800', title: 'Avançado' },  // Nível 3: Avançado, com cor azul
            4: { color: 'bg-purple-200 text-purple-800', title: 'Especialista' }, // Nível 4: Especialista, com cor roxa
            5: { color: 'bg-yellow-200 text-yellow-800', title: 'Mestre' }  // Nível 5: Mestre, com cor amarela
        };
        
        // Retorna o objeto de nível correspondente, ou o nível 1 (Iniciante) como valor padrão
        return levels[level] || levels[1];
    } catch (error) {
        // Se houver um erro, chama a função reportError para tratar o erro
        reportError(error);

        // Retorna o nível padrão (Iniciante) caso haja erro
        return { color: 'bg-gray-200 text-gray-800', title: 'Iniciante' };
    }
}
