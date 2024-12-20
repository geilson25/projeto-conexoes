// Componente para exibir os cursos do perfil do usuário
function ProfileCourses({ courses }) {
  try {
      // Renderiza a seção de cursos do perfil
      return (
          <div className="profile-courses" data-name="profile-courses">
              {/* Título da seção de cursos */}
              <h2 className="section-title">Meus Cursos</h2>
              <div className="courses-grid">
                  {/* Mapeia todos os cursos e exibe individualmente utilizando o componente CourseCard */}
                  {courses.map(course => (
                      <CourseCard 
                          key={course.id} // Chave única para cada curso
                          course={course} // Passa o curso como prop para o componente CourseCard
                          progress={course.progress} // Passa o progresso do curso como prop
                      />
                  ))}
              </div>
          </div>
      );
  } catch (error) {
      // Em caso de erro, chama uma função para reportar o erro
      reportError(error);
      return null; // Retorna null se houver erro
  }
}
