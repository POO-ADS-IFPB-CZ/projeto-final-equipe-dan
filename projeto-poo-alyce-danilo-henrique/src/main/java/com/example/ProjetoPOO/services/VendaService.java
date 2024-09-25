package mp.projetopoo.services;

import mp.projetopoo.models.Venda;
import mp.projetopoo.repositories.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

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

    public List<Venda> listarVendas() {
        return vendaRepository.findAll();
    }
}
