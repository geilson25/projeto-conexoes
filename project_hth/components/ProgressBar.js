// Componente ProgressBar para exibir uma barra de progresso
function ProgressBar({ progress }) {
    try {
        return (
            // Contêiner da barra de progresso
            <div className="progress-bar" data-name="progress-bar">
                {/* Preenchimento da barra de progresso, a largura é determinada pela variável 'progress' */}
                <div 
                    className="progress-bar-fill bg-green-500"  // Cor de preenchimento verde para a barra
                    style={{ width: `${progress}%` }}  // A largura da barra é ajustada conforme o valor de 'progress'
                    data-name="progress-fill"
                >
                </div>
            </div>
        );
    } catch (error) {
        // Se ocorrer um erro, uma função de reporte de erro é chamada
        reportError(error);
        return null;  // Caso ocorra erro, o componente retorna null para evitar que a aplicação quebre
    }
}
