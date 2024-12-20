// Função do componente CourseCard, que exibe as informações de um curso específico
function CourseCard({ course, progress }) {
    try {
        // Retorna o JSX para o cartão do curso
        return (
            <div className="course-card shadow-lg" data-name="course-card">
                {/* Imagem de capa do curso */}
                <div className="course-cover-image" data-name="course-cover">
                    <img 
                        src={course.coverImage}  // Imagem de capa do curso
                        alt={course.title}  // Texto alternativo da imagem (título do curso)
                        loading="lazy"  // Carregamento preguiçoso da imagem para melhorar o desempenho
                        data-name="course-image"
                    />
                </div>
                
                {/* Conteúdo do curso */}
                <div className="p-4 flex flex-col flex-grow" data-name="course-content">
                    {/* Título do curso */}
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2" data-name="course-title">
                        {course.title}  {/* Exibe o título do curso */}
                    </h3>
                    
                    {/* Descrição do curso */}
                    <p className="text-gray-600 mb-4 flex-grow line-clamp-3" data-name="course-description">
                        {course.description}  {/* Exibe a descrição do curso */}
                    </p>
                    
                    {/* Rodapé do curso */}
                    <div className="mt-auto" data-name="course-footer">
                        {/* Barra de progresso do curso */}
                        <div className="mb-2" data-name="course-progress">
                            <ProgressBar progress={progress} />  {/* Exibe o progresso do curso */}
                        </div>
                        
                        {/* Rodapé com pontos do curso e botão */}
                        <div className="flex justify-between items-center">
                            {/* Exibe os pontos do curso */}
                            <span className="text-sm text-gray-500" data-name="course-points">
                                {course.points} pontos  {/* Exibe a quantidade de pontos atribuídos ao curso */}
                            </span>
                            
                            {/* Botão para iniciar ou continuar o curso */}
                            <button 
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors" 
                                data-name="start-course"
                            >
                                {/* Exibe 'Continuar' se o progresso for maior que 0, caso contrário exibe 'Começar' */}
                                {progress > 0 ? 'Continuar' : 'Começar'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        // Caso ocorra um erro, ele é capturado e reportado
        reportError(error);
        return null;  // Retorna null caso ocorra um erro, não renderizando nada
    }
}
