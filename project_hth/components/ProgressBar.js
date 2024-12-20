// Definição do componente ProgressBar, que recebe um valor `progress` como prop
function ProgressBar({ progress }) {
    try {
        // Retorno do JSX que define a estrutura da barra de progresso
        return (
            // A div principal que envolve toda a barra de progresso
            <div className="progress-bar" data-name="progress-bar">
                {/* 
                A div interna que representa o preenchimento da barra de progresso.
                A largura da div é dinâmica e depende do valor da prop `progress`, 
                que é passado como uma porcentagem.
                */}
                <div 
                    className="progress-bar-fill bg-green-500"  // Aplica o estilo da barra preenchida com cor verde
                    style={{ width: `${progress}%` }}  // Define a largura da barra com base na prop `progress`
                    data-name="progress-fill"  // Atributo customizado de dados para identificar essa div
                >
                </div>
            </div>
        );
    } catch (error) {
        // Caso ocorra um erro durante a execução, ele será capturado aqui
        reportError(error);  // A função reportError é chamada para registrar o erro
        return null;  // Se ocorrer erro, o componente retorna null, ou seja, nada será exibido
    }
}
