// Função principal do componente App
function App() {
    // Estado que mantém as informações do usuário, como nome, nível, pontos, avatar, streak, etc.
    const [user, setUser] = React.useState({
        name: 'Dr. Silva', // Nome do usuário
        level: 2, // Nível do usuário (provavelmente relacionado ao progresso)
        points: 1250, // Pontos acumulados
        avatar: 'https://creatorspace.imgix.net/users/clkbhz6h306hqp1012rx8wevn/jUmwBLbJSjrNByVO-profile-pic%2520(42).png?w=300&h=300', // URL do avatar do usuário
        streak: 7, // Número de dias consecutivos que o usuário manteve uma atividade (sequência)
        completedCourses: 5, // Número de cursos completos
        achievements: [ // Lista de conquistas que o usuário desbloqueou
            {
                id: 1,
                icon: '🌟',
                title: 'Primeiro Curso',
                description: 'Completou seu primeiro curso',
                unlocked: true, // Indica se a conquista foi desbloqueada
                unlockedDate: '2024-01-15' // Data em que a conquista foi desbloqueada
            },
            {
                id: 2,
                icon: '🔥',
                title: 'Sequência de 7 dias',
                description: 'Manteve uma sequência de 7 dias',
                unlocked: true,
                unlockedDate: '2024-01-20'
            },
            {
                id: 3,
                icon: '🏆',
                title: 'Mestre do Conhecimento',
                description: 'Complete 10 cursos',
                unlocked: false // A conquista ainda não foi desbloqueada
            }
        ],
        courses: [ // Lista de cursos que o usuário está participando
            {
                id: 1,
                title: 'Gestão do Estresse no Ambiente Hospitalar',
                description: 'Aprenda técnicas para lidar com o estresse no trabalho',
                points: 100, // Pontos que o curso oferece ao ser completado
                progress: 60, // Progresso do curso em porcentagem
                coverImage: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' // Imagem de capa do curso
            },
            {
                id: 2,
                title: 'Comunicação Efetiva com Pacientes',
                description: 'Desenvolva habilidades de comunicação para melhor atendimento',
                points: 150,
                progress: 30,
                coverImage: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 3,
                title: 'Bem-estar e Autocuidado',
                description: 'Práticas para manter o equilíbrio entre vida pessoal e profissional',
                points: 120,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 4,
                title: 'Primeiros Socorros Avançados',
                description: 'Técnicas avançadas de primeiros socorros em situações de emergência',
                points: 200,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 5,
                title: 'Ética Médica na Era Digital',
                description: 'Aspectos éticos da prática médica em ambiente digital',
                points: 180,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 6,
                title: 'Gestão de Equipes de Saúde',
                description: 'Liderança e gestão de equipes multidisciplinares',
                points: 160,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 7,
                title: 'Tecnologia na Medicina',
                description: 'Inovações tecnológicas na prática médica',
                points: 170,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 8,
                title: 'Saúde Mental no Trabalho',
                description: 'Cuidados com a saúde mental no ambiente profissional',
                points: 140,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 9,
                title: 'Prevenção de Infecções',
                description: 'Protocolos de prevenção e controle de infecções',
                points: 130,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 10,
                title: 'Nutrição Clínica',
                description: 'Fundamentos de nutrição para profissionais de saúde',
                points: 150,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 11,
                title: 'Segurança do Paciente',
                description: 'Práticas para garantir a segurança do paciente',
                points: 190,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 12,
                title: 'Humanização no Atendimento',
                description: 'Técnicas para um atendimento mais humanizado',
                points: 160,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 13,
                title: 'Gestão de Prontuários',
                description: 'Boas práticas na gestão de prontuários eletrônicos',
                points: 140,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 14,
                title: 'Telemedicina',
                description: 'Fundamentos e práticas em telemedicina',
                points: 180,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            },
            {
                id: 15,
                title: 'Pesquisa Clínica',
                description: 'Introdução à pesquisa clínica e metodologia',
                points: 200,
                progress: 0,
                coverImage: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            }
        ]
    });

    // Estado que controla se o perfil do usuário deve ser mostrado ou não
    const [showProfile, setShowProfile] = React.useState(false);

    // Função que altera o estado para mostrar o perfil
    const handleProfileClick = () => {
        setShowProfile(true);
    };

    // Função que altera o estado para voltar ao dashboard
    const handleBackClick = () => {
        setShowProfile(false);
    };

    try {
        // JSX do componente App
        return (
            <div className="app-container" data-name="app">
                {/* Exibe o cabeçalho com as informações do usuário */}
                <Header user={user} onProfileClick={handleProfileClick} />
                {/* Condicional para exibir o perfil ou o dashboard dependendo do estado showProfile */}
                {showProfile ? (
                    <Profile user={user} onBack={handleBackClick} />
                ) : (
                    <Dashboard 
                        courses={user.courses} // Passa a lista de cursos
                        userProgress={user.courses.reduce((acc, course) => ({
                            ...acc, // Para cada curso, adiciona o progresso ao objeto de progresso do usuário
                            [course.id]: course.progress
                        }), {})}
                    />
                )}
            </div>
        );
    } catch (error) {
        // Se ocorrer um erro, a função reportError será chamada para lidar com o erro
        reportError(error);
        return null; // Não renderiza nada em caso de erro
    }
}

// Inicialização do React no DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
