async function login(event) {
    event.preventDefault();

    const login = document.getElementById('loginUsuario').value;
    const senha = document.getElementById('senhaUsuario').value;

    try {
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, senha })
        });

        if (response.ok) {
            document.getElementById('loginSection').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
            document.getElementById('headerContent').style.display = 'block';
            atualizarListaClientes();
            atualizarListaProdutos();
            atualizarListaVendas();
        } else {
            alert("Login ou senha incorretos!");
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert("Ocorreu um erro ao tentar realizar o login.");
    }
}


function adicionarCliente() {
    const nome = document.getElementById('nomeCliente').value;
    const cpf = document.getElementById('cpfCliente').value;

    fetch('http://localhost:8080/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, cpf }),
    }).then(response => {
        if (response.ok) {
            alert("Cliente cadastrado com sucesso!");
            atualizarListaClientes();
        } else {
            alert("Erro ao cadastrar cliente.");
        }
    });
}

function toggleVendaForm() {
    const form = document.getElementById('vendaForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function toggleClienteForm() {
    const form = document.getElementById('clienteForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function toggleProdutoForm() {
    const form = document.getElementById('produtoForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}


function editarCliente() {
    const id = prompt("Informe o ID do cliente a ser editado:");
    const nome = document.getElementById('nomeCliente').value;
    const cpf = document.getElementById('cpfCliente').value;

    fetch(http://localhost:8080/clientes/${id}, {
    method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome, cpf }),
}).then(response => {
    if (response.ok) {
        alert("Cliente atualizado com sucesso!");
        atualizarListaClientes();
    } else {
        alert("Erro ao atualizar cliente.");
    }
});
}

// Função para excluir cliente
function excluirCliente(id) {
    if (confirm("Tem certeza que deseja excluir este cliente?")) {
        fetch(http://localhost:8080/clientes/${id}, {
        method: 'DELETE',
    }).then(response => {
        if (response.ok) {
            alert("Cliente excluído com sucesso!");
            atualizarListaClientes();
        } else {
            alert("Erro ao excluir cliente.");
        }
    });
}
}



// Função para listar clientes
function atualizarListaClientes() {
    fetch('http://localhost:8080/clientes')
        .then(response => response.json())
        .then(clientes => {
            const listaClientes = document.getElementById('listaClientes');
            listaClientes.innerHTML = '';  // Limpa a lista

            clientes.forEach(cliente => {
                const clienteDiv = document.createElement('div');
                clienteDiv.className = 'cliente';
                clienteDiv.innerHTML = `
                    <p><strong>ID:</strong> ${cliente.id}</p>
                    <p><strong>Nome:</strong> ${cliente.nome}</p>
                    <p><strong>CPF:</strong> ${cliente.cpf}</p>
                    <button onclick="excluirCliente(${cliente.id})">
                        <i class="fa fa-trash"></i> Excluir
                    </button>
                `;
                listaClientes.appendChild(clienteDiv);
            });
        });
}

// Função para adicionar produto
function adicionarProduto() {
    const nome = document.getElementById('nomeProduto').value;
    const valorUnitario = document.getElementById('valorProduto').value;
    const quantidade = document.getElementById('quantidadeProduto').value;

    fetch('http://localhost:8080/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, valorUnitario, quantidade }),
    }).then(response => {
        if (response.ok) {
            alert("Produto cadastrado com sucesso!");
            atualizarListaProdutos();
        } else {
            alert("Erro ao cadastrar produto.");
        }
    });
}

// Função para editar produto
function editarProduto() {
    const id = prompt("Informe o ID do produto a ser editado:");
    const nome = document.getElementById('nomeProduto').value;
    const valorUnitario = document.getElementById('valorProduto').value;
    const quantidade = document.getElementById('quantidadeProduto').value;

    fetch(http://localhost:8080/produtos/${id}, {
    method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome, valorUnitario, quantidade }),
}).then(response => {
    if (response.ok) {
        alert("Produto atualizado com sucesso!");
        atualizarListaProdutos();
    } else {
        alert("Erro ao atualizar produto.");
    }
});
}

// Função para excluir produto
function excluirProduto(id) {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
        fetch(http://localhost:8080/produtos/${id}, {
        method: 'DELETE',
    }).then(response => {
        if (response.ok) {
            alert("Produto excluído com sucesso!");
            atualizarListaProdutos();
        } else {
            alert("Erro ao excluir produto.");
        }
    });
}
}

// Função para listar produtos
function atualizarListaProdutos() {
    fetch('http://localhost:8080/produtos')
        .then(response => response.json())
        .then(produtos => {
            const listaProdutos = document.getElementById('listaProdutos');
            listaProdutos.innerHTML = '';  // Limpa a lista

            produtos.forEach(produto => {
                const produtoDiv = document.createElement('div');
                produtoDiv.className = 'produto';
                produtoDiv.innerHTML = `
                    <p><strong>ID:</strong> ${produto.id}</p>
                    <p><strong>Nome:</strong> ${produto.nome}</p>
                    <p><strong>Valor Unitário:</strong> ${produto.valorUnitario}</p>
                    <p><strong>Quantidade:</strong> ${produto.quantidade}</p>
                    <button onclick="excluirProduto(${produto.id})">
                        <i class="fa fa-trash"></i> Excluir
                    </button>
                `;
                listaProdutos.appendChild(produtoDiv);
            });
        });
}


// Função para adicionar vendas
async function adicionarVenda() {
    const clienteId = document.getElementById('clienteVenda').value;
    const produtoId = document.getElementById('produtoVenda').value;
    const formaPagamento = document.getElementById('formaPagamento').value;
    const quantidade = document.getElementById('quantidadeVenda').value;

    const venda = {
        cliente: { id: clienteId },
        produto: { id: produtoId },
        formaPagamento,
        quantidade,
    };

    fetch('http://localhost:8080/vendas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(venda),
    }).then(response => {
        if (response.ok) {
            alert("Venda cadastrada com sucesso!");
            atualizarListaVendas();
            esconderFormularioVenda();
        } else {
            alert("Erro ao cadastrar venda.");
        }
    });
}

let vendaEdicaoId = null;

function editarVenda(id) {
    vendaEdicaoId = id; // Guarda o ID da venda a ser editada

    fetch(http://localhost:8080/vendas/${id})
.then(response => response.json())
        .then(venda => {
            document.getElementById('clienteVenda').value = venda.cliente.id;
            document.getElementById('produtoVenda').value = venda.produto.id;
            document.getElementById('formaPagamento').value = venda.formaPagamento;
            document.getElementById('quantidadeVenda').value = venda.quantidade;

            toggleVendaForm(); // Mostra o formulário
        });
}



function cancelarVenda() {
    vendaEdicaoId = null; // Reseta o ID da venda em edição
    document.getElementById('vendaForm').style.display = 'none';
    document.getElementById('clienteVenda').value = '';
    document.getElementById('produtoVenda').value = '';
    document.getElementById('formaPagamento').value = '';
    document.getElementById('quantidadeVenda').value = '';
}

// Função para listar vendas
function atualizarListaVendas() {
    fetch('http://localhost:8080/vendas')
        .then(response => response.json())
        .then(vendas => {
            const listaVendas = document.getElementById('listaVendas');
            listaVendas.innerHTML = '';  // Limpa a lista

            vendas.forEach(venda => {
                const clienteNome = venda.cliente ? venda.cliente.nome : 'N/A';
                const produtoNome = venda.produto ? venda.produto.nome : 'N/A';

                const vendaDiv = document.createElement('div');
                vendaDiv.className = 'venda';
                vendaDiv.innerHTML = `
                    <p><strong>ID:</strong> ${venda.id}</p>
                    <p><strong>Cliente ID:</strong> ${venda.cliente.id} (${clienteNome})</p>
                    <p><strong>Produto ID:</strong> ${venda.produto.id} (${produtoNome})</p>
                    <p><strong>Forma de Pagamento:</strong> ${venda.formaPagamento || 'N/A'}</p>
                    <p><strong>Quantidade:</strong> ${venda.quantidade || 'N/A'}</p>
                    <button onclick="editarVenda(${venda.id})">
                        <i class="fa fa-edit"></i> Editar
                    </button>
                    <button onclick="excluirVenda(${venda.id})">
                        <i class="fa fa-trash"></i> Excluir
                    </button>
                `;
                listaVendas.appendChild(vendaDiv);
            });
        });
}

function excluirVenda(id) {
    if (confirm("Tem certeza que deseja excluir esta venda?")) {
        fetch(http://localhost:8080/vendas/${id}, {
        method: 'DELETE',
    }).then(response => {
        if (response.ok) {
            alert("Venda excluída com sucesso!");
            atualizarListaVendas();
        } else {
            alert("Erro ao excluir cliente.");
        }
    });
}
}

function mostrarSecao(secaoId) {

    const secoes = document.querySelectorAll('.section');
    secoes.forEach(secao => {
        secao.style.display = 'none';
    });


    const secaoSelecionada = document.getElementById(secaoId);
    secaoSelecionada.style.display = 'block';
}