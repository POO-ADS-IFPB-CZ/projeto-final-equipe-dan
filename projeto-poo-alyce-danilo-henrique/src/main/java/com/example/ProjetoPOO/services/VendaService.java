package mp.projetopoo.services;

import mp.projetopoo.models.Venda;
import mp.projetopoo.repositories.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class VendaService {
    @Autowired
    private VendaRepository vendaRepository;

    public Venda registrarVenda(Venda venda) {
        return vendaRepository.save(venda);
    }

    public void deletarVenda(Long id) {
        vendaRepository.deleteById(id);
    }

    public Optional<Venda> getVenda(Long id) {return vendaRepository.findById(id); }

    public Venda atualizarVenda(Venda venda) {return vendaRepository.save(venda); }
    public List<Venda> listarVendas() {
        return vendaRepository.findAll();
    }
}
