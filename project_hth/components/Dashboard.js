// Função do componente Dashboard, que recebe os cursos e o progresso do usuário como props
function Dashboard({ courses, userProgress }) {
    try {
        // Retorna o JSX que representa o conteúdo do painel (Dashboard)
        return (
            <div className="container mx-auto mt-8 px-4" data-name="dashboard">
                {/* Grid para exibir os cursos */}
                <div className="courses-grid" data-name="courses-grid">
                    {/* Mapeia a lista de cursos para exibir um cartão para cada um */}
                    {courses.map(course => (
                        // Componente CourseCard para cada curso, com a chave sendo o ID do curso
                        <CourseCard
                            key={course.id}
                            course={course}  // Passa os dados do curso para o componente
                            progress={userProgress[course.id] || 0}  // Passa o progresso do usuário para o curso
                        />
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        // Caso ocorra um erro, ele é capturado e a função reportError é chamada
        reportError(error);
        return null;  // Retorna null caso ocorra um erro, não renderizando nada
    }
}
