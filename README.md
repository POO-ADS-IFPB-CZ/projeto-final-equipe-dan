[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/or_OlRY9)

Tecnologias Utilizadas

-Spring Boot: Para construção de APIs RESTful, gerenciamento de dependências e configuração automática.
Spring Framework: Oferece suporte a injeção de dependência, programação orientada a aspectos e gerenciamento de transações, facilitando a construção de aplicações escaláveis.
-Hibernate (JPA): Para mapeamento objeto-relacional e interação com o banco de dados.
-MySQL: Como sistema de gerenciamento de banco de dados.
-JUnit 5: Para testes automatizados e verificação de funcionalidades.
-Maven: Utilizado como ferramenta de gerenciamento de projetos, facilitando a gestão de dependências, construção do projeto e execução de testes.
-JavaScript: Para interatividade no front-end, utilizando a Fetch API para comunicação com a API backend.

Principais Funcionalidades

-Gerenciamento de Clientes:
Cadastro de novos clientes.
Atualização e remoção de informações de clientes.
Listagem de todos os clientes cadastrados.
-Gerenciamento de Produtos:
Adição, atualização e exclusão de produtos no sistema.
Listagem de produtos disponíveis na loja.
-Registro de Vendas:
Registro de novas vendas, associando produtos a clientes.
Listagem de todas as vendas realizadas.
Remoção de registros de vendas.
-Autenticação de Usuários:
Sistema de login para usuários (vendedores e gerentes) utilizando um nome de usuário e senha.

**JavaScript - Interatividade do Sistema
O código JavaScript é responsável por gerenciar a interatividade do front-end do sistema. As principais funções incluem:
Login: Envia os dados de login para a API e, em caso de sucesso, oculta a seção de login e exibe o conteúdo principal.
Adicionar, Editar e Excluir Clientes: Permite a manipulação de registros de clientes, atualizando a lista após cada operação.
Gerenciamento de Produtos: Adiciona, edita e exclui produtos, atualizando a lista de produtos após as operações.
Gerenciamento de Vendas: Permite registrar, editar e excluir vendas, mantendo a lista de vendas sempre atualizada.
Formulários Dinâmicos: Permite a exibição e ocultação dos formulários de venda, cliente e produto conforme necessário.
Atualização das Listas: Utiliza a Fetch API para buscar dados atualizados sobre clientes, produtos e vendas, garantindo que a interface do usuário esteja sempre sincronizada com o servidor.

**Configuração do Banco de Dados
Conexão com o MySQL configurada no application.properties, incluindo URL, nome de usuário e senha.
Uso do Hibernate para gerenciar o esquema do banco de dados e exibir as consultas SQL executadas.
Conclusão
O sistema é uma solução integrada que facilita o gerenciamento eficiente de clientes, produtos e vendas em uma loja de roupas femininas. Utilizando Spring Boot e Spring Framework para garantir um desenvolvimento ágil e organizado, Maven para facilitar o gerenciamento de dependências e construir o projeto, e JavaScript para proporcionar uma experiência de usuário dinâmica e interativa, criando uma aplicação funcional que atende às necessidades do negócio.
