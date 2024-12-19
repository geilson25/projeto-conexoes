// Componente Dashboard para exibir a lista de cursos com seu progresso
function Dashboard({ courses, userProgress }) {
    try {
        return (
            // Contêiner principal do Dashboard
            <div className="container mx-auto mt-8" data-name="dashboard">
                {/* Grid para exibir os cursos de forma responsiva */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Mapeia a lista de cursos e renderiza um CourseCard para cada curso */}
                    {courses.map(course => (
                        <CourseCard
                            key={course.id}  // Chave única para cada curso no mapeamento
                            course={course}  // Passa as informações do curso
                            progress={userProgress[course.id] || 0}  // Passa o progresso do usuário (ou 0 caso não tenha progresso)
                        />
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        // Se ocorrer um erro, uma função de reporte de erro é chamada
        reportError(error);
        return null;  // Caso ocorra erro, o componente retorna null para evitar que a aplicação quebre
    }
}
