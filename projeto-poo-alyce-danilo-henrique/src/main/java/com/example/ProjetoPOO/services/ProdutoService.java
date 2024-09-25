package mp.projetopoo.services;

import mp.projetopoo.models.Produto;
import mp.projetopoo.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository produtoRepository;

    public Produto adicionarProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto atualizarProduto(Long id, Produto produtoAtualizado) {
        Produto produtoExistente = produtoRepository.findById(id).orElseThrow(() -> new RuntimeException("Produto não encontrado."));
        produtoExistente.setNome(produtoAtualizado.getNome());
        produtoExistente.setValorUnitario(produtoAtualizado.getValorUnitario());
        produtoExistente.setQuantidade(produtoAtualizado.getQuantidade());
        return produtoRepository.save(produtoExistente);
    }

    public void excluirProduto(Long id) {
        produtoRepository.deleteById(id);
    }

    public List<Produto> listarProdutos() {
        return produtoRepository.findAll();
    }
}
