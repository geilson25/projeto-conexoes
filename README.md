# Projeto Conexões (Front-End)

## Descrição

O **Projeto Conexões** é uma aplicação desenvolvida pelo **Grupo 01** do Mestrado Profissional em Engenharia de Software da **Cesar School 2024.2**. O objetivo do projeto é criar uma plataforma digital para o **Hospital Santa Joana**, com o propósito de promover boas práticas profissionais, autocuidado e bem-estar para os colaboradores, por meio de cursos e treinamentos.

Este repositório contém a parte do **front-end** da aplicação, desenvolvida em **React.js**.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- **src**: Contém todos os arquivos de código-fonte da aplicação.
  - **components**: Contém componentes reutilizáveis, como o `Header`, `Dashboard`, entre outros.
    - **profile**: Componentes específicos para a seção de perfil (por exemplo, `Achievements.js`, `ProfileCourses.js`, `ProfileHeader.js`, `ProfileStats.js`).
  - **App.js**: Componente principal da aplicação que gerencia os estados do usuário e cursos.
  - **index.js**: Arquivo de entrada para a aplicação, onde o React renderiza a aplicação no DOM.
  
- **public**: Contém arquivos públicos, como o `index.html` e a imagem do avatar do usuário.

## Como Rodar a Aplicação Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/projeto-conexoes.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd projeto-conexoes
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

5. Abra a aplicação no navegador, normalmente em `http://localhost:3000`.

## Como Contribuir

1. Faça um **fork** do repositório.
2. Crie uma branch para sua alteração:
   ```bash
   git checkout -b minha-branch
   ```
3. Faça as alterações no código e adicione as mudanças:
   ```bash
   git add .
   ```
4. Faça um commit:
   ```bash
   git commit -m "Descrição das mudanças"
   ```
5. Envie as mudanças para o seu repositório:
   ```bash
   git push origin minha-branch
   ```
6. Abra um **pull request** para a branch principal (`master`) do repositório original.

### Convidando Outros para Contribuir no GitHub

1. **Acesse o repositório no GitHub**.
2. Clique em **Settings** (Configurações) no menu do repositório.
3. No menu lateral esquerdo, clique em **Manage access**.
4. Clique em **Invite a collaborator**.
5. Digite o nome de usuário ou e-mail de quem você deseja convidar e clique em **Add**.

Agora, os membros convidados podem acessar e contribuir no repositório. Eles podem clonar o repositório e enviar **pull requests** para contribuir com o código.

## Funcionalidades

- **Dashboard**: Exibe uma visão geral dos cursos do usuário, com informações sobre progresso, pontos, e status do curso.
- **Perfil do Usuário**: Exibe informações detalhadas sobre o usuário, como foto de perfil, nível, pontos totais, conquistas, sequência de dias consecutivos, etc.
- **Conquistas**: O usuário pode visualizar suas conquistas e o progresso em cada uma delas.
- **Cursos**: Exibe a lista de cursos com informações sobre o status de progresso, pontos ganhos, e opção de continuar ou iniciar o curso.

## Tecnologias Utilizadas

- **React**: Framework para construção de interfaces de usuário.
- **TailwindCSS**: Framework de CSS para estilização rápida e eficiente.
- **JavaScript/ES6**: Linguagem de programação principal para desenvolvimento.
- **ProgressBar**: Componente para exibir o progresso do usuário nos cursos.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
```

### Alterações feitas:
- Adicionada a descrição dos componentes de perfil (como `Achievements.js`, `ProfileCourses.js`, `ProfileHeader.js`, `ProfileStats.js`).
- Atualizado para refletir a estrutura mais detalhada do projeto e a seção de funcionalidades.
- A documentação agora está mais completa, abrangendo detalhes sobre as tecnologias utilizadas e explicando a estrutura do projeto com mais clareza.
