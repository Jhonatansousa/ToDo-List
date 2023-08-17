# ToDo List

Esta documentação oferece uma visão geral do aplicativo de Lista de Tarefas desenvolvido usando ReactJS, TypeScript e a biblioteca `@phosphor-icons/react` para ícones. O aplicativo permite aos usuários criar, gerenciar e marcar tarefas como concluídas. Abaixo, você encontrará uma descrição dos componentes do projeto, suas funcionalidades e uma explanação sobre os conceitos do ReactJS empregados no aplicativo.

## Componentes

### Componente Header

O componente `Header` exibe o logotipo do aplicativo e o título na parte superior.

**Recursos:**
- Exibição do logotipo e do título.

### Componente TaskArea

O componente `TaskArea` é a parte central do aplicativo, onde as tarefas são criadas, exibidas e gerenciadas.

**Recursos:**
- Campo de entrada para adicionar novas tarefas.
- Botão para criar novas tarefas, desativado quando a entrada está vazia.
- Lista de tarefas, cada uma com uma caixa de seleção de conclusão e um botão de exclusão.
- Contadores dinâmicos exibindo o número total de tarefas criadas e concluídas.

### Componente Task

O componente `Task` representa uma tarefa individual na lista de tarefas.

**Recursos:**
- Caixa de seleção para marcar uma tarefa como concluída.
- Botão para excluir uma tarefa.
- Altera dinamicamente a aparência com base no status de conclusão.

## Funcionalidades

- **Criação de Tarefas:** Os usuários podem adicionar novas tarefas digitando uma descrição da tarefa no campo de entrada e clicando no botão "Criar".

- **Conclusão de Tarefas:** Cada tarefa possui uma caixa de seleção que os usuários podem clicar para marcar uma tarefa como concluída. Isso atualiza a aparência da tarefa e atualiza o contador de tarefas concluídas.

- **Exclusão de Tarefas:** Os usuários podem excluir uma tarefa clicando no botão de exclusão. A tarefa será removida da lista, e o contador de tarefas concluídas se ajustará adequadamente.

## Conceitos do ReactJS Demonstrados

O aplicativo Lista de Tarefas também demonstra vários conceitos importantes do ReactJS:

- **State e useState:** O estado é usado para controlar os dados dinâmicos do aplicativo. O componente `TaskArea` utiliza o `useState` para gerenciar o estado das tarefas e o contador de tarefas concluídas.

- **Eventos e Manipulação de Eventos:** Através de eventos como `onChange` e `onClick`, o aplicativo responde às ações dos usuários. A função `handleCreateNewTask` responde ao evento de clique para adicionar novas tarefas.

- **Desestruturação:** A desestruturação é utilizada para simplificar a extração de propriedades de objetos. Isso é evidente no componente `Task`, onde as propriedades são desestruturadas para acessar facilmente os dados necessários.

- **Props e Componentização:** A passagem de props (propriedades) entre os componentes permite a reutilização de código. Os componentes `TaskArea` e `Task` recebem props para exibir e manipular tarefas.

- **Mapeamento e Listas:** O método `map` é usado para percorrer arrays e renderizar elementos. No componente `TaskArea`, o `map` é usado para renderizar a lista de tarefas.

## Tecnologias Utilizadas

- **ReactJS:** Uma biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript:** Um superset de JavaScript com tipagem estática que aprimora a qualidade do código e oferece uma experiência de desenvolvimento melhorada.
- **@phosphor-icons/react:** Uma biblioteca para adicionar ícones SVG ao aplicativo.

## Como Usar

1. Clone o repositório para sua máquina local.
2. Instale as dependências necessárias usando o gerenciador de pacotes de sua escolha.
3. Execute o aplicativo usando o comando especificado na documentação do projeto.
4. Use o campo de entrada para criar novas tarefas, marque tarefas como concluídas usando as caixas de seleção e exclua tarefas com os botões de exclusão.

## Acesso via GitHub Pages

Este aplicativo também está disponível online através do GitHub Pages. Você pode acessá-lo pelo link: [https://jhonatansousa.github.io/ToDo-List/](https://jhonatansousa.github.io/ToDo-List/)

## Conclusão

O aplicativo Lista de Tarefas oferece uma interface intuitiva para gerenciar tarefas de maneira eficaz, e demonstra a aplicação de diversos conceitos do ReactJS para criar uma experiência de usuário moderna e funcional. Seja organizando suas tarefas diárias ou gerenciando projetos, este aplicativo pode ser útil para manter suas tarefas sob controle.
