// Componente principal da aplicação
function App() {
    // Estado para armazenar as informações do usuário, como nome, nível, pontos e avatar
    const [user, setUser] = React.useState({
        name: 'Dr. Silva', // Nome do usuário
        level: 2, // Nível do usuário (1: Iniciante, 2: Intermediário, 3: Avançado, etc.)
        points: 1250, // Pontuação do usuário
        avatar: 'https://creatorspace.imgix.net/users/clkbhz6h306hqp1012rx8wevn/jUmwBLbJSjrNByVO-profile-pic%2520(42).png?w=300&h=300' // Link para o avatar do usuário
    });

    // Estado para armazenar os cursos disponíveis na plataforma
    const [courses, setCourses] = React.useState([
        {
            id: 1,
            title: 'Gestão do Estresse no Ambiente Hospitalar', // Título do curso
            description: 'Aprenda técnicas para lidar com o estresse no trabalho', // Descrição do curso
            points: 100, // Pontos ganhos ao completar o curso
            coverImage: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Imagem de capa do curso
        },
        {
            id: 2,
            title: 'Comunicação Efetiva com Pacientes', 
            description: 'Desenvolva habilidades de comunicação para melhor atendimento',
            points: 150,
            coverImage: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            title: 'Bem-estar e Autocuidado',
            description: 'Práticas para manter o equilíbrio entre vida pessoal e profissional',
            points: 120,
            coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ]);

    // Estado para armazenar o progresso do usuário em cada curso
    const [userProgress, setUserProgress] = React.useState({
        1: 60, // Progresso no primeiro curso (60%)
        2: 30, // Progresso no segundo curso (30%)
        3: 0 // Progresso no terceiro curso (0%)
    });

    try {
        // Retorna o layout da aplicação com o cabeçalho e o dashboard de cursos
        return (
            <div className="app-container" data-name="app">
                {/* Componente de Cabeçalho que exibe as informações do usuário */}
                <Header user={user} />
                {/* Componente de Dashboard que exibe os cursos e o progresso do usuário */}
                <Dashboard 
                    courses={courses} // Lista de cursos
                    userProgress={userProgress} // Progresso do usuário nos cursos
                />
            </div>
        );
    } catch (error) {
        // Caso ocorra um erro, chama a função de reporte de erro
        reportError(error);
        return null; // Retorna null caso ocorra um erro na renderização
    }
}

// Seleciona o elemento com id "root" no HTML para renderizar o componente React
const root = ReactDOM.createRoot(document.getElementById('root'));
// Renderiza o componente App dentro do elemento root
root.render(<App />);
