// Componente CourseCard para exibir as informações de cada curso com o seu progresso
function CourseCard({ course, progress }) {
    try {
        return (
            // Cartão de curso principal com sombra e padding
            <div className="course-card p-4 shadow-lg" data-name="course-card">
                {/* Imagem do curso (capa) */}
                <div className="course-cover-image mb-4" data-name="course-cover">
                    <img 
                        src={course.coverImage}  // A imagem do curso recebida da propriedade course
                        alt={course.title}  // Texto alternativo com o título do curso
                        className="w-full h-48 object-cover rounded-lg"  // Estilos para garantir que a imagem ocupe a largura total e tenha uma altura fixa
                        data-name="course-image"
                    />
                </div>
                {/* Título do curso */}
                <h3 className="text-xl font-semibold mb-2" data-name="course-title">
                    {course.title}  {/* Título do curso */}
                </h3>
                {/* Descrição do curso */}
                <p className="text-gray-600 mb-4" data-name="course-description">
                    {course.description}  {/* Descrição do curso */}
                </p>
                {/* Barra de progresso do curso */}
                <div className="mb-2" data-name="course-progress">
                    <ProgressBar progress={progress} />  {/* Componente ProgressBar que recebe o progresso do curso */}
                </div>
                {/* Rodapé do cartão com pontos e botão para iniciar/continuar */}
                <div className="flex justify-between items-center" data-name="course-footer">
                    {/* Exibe a quantidade de pontos do curso */}
                    <span className="text-sm text-gray-500" data-name="course-points">
                        {course.points} pontos  {/* Pontos atribuídos ao curso */}
                    </span>
                    {/* Botão para iniciar ou continuar o curso */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" data-name="start-course">
                        {progress > 0 ? 'Continuar' : 'Começar'}  {/* Exibe "Continuar" se houver progresso, caso contrário, "Começar" */}
                    </button>
                </div>
            </div>
        );
    } catch (error) {
        // Se ocorrer um erro, uma função de reporte de erro é chamada
        reportError(error);
        return null;  // Caso ocorra erro, o componente retorna null para evitar que a aplicação quebre
    }
}
