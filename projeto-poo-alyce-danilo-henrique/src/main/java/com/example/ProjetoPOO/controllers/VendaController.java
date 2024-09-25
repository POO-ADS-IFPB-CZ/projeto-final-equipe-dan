package mp.projetopoo.controllers;

import mp.projetopoo.models.Venda;
import mp.projetopoo.services.VendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/vendas")
public class VendaController {
    @Autowired
    private VendaService vendaService;

    @PostMapping
    public ResponseEntity<Venda> registrarVenda(@RequestBody Venda venda) {
        return ResponseEntity.ok(vendaService.registrarVenda(venda));
    }
    @GetMapping
    public ResponseEntity<List<Venda>> listarVendas() {
        return ResponseEntity.ok(vendaService.listarVendas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Venda>> buscarVendaPorId(@PathVariable Long id) { return ResponseEntity.ok(vendaService.getVenda(id));}

    @PutMapping("/{id}")
    public ResponseEntity<Venda> atualizarVenda(@RequestBody Venda venda) {return ResponseEntity.ok(vendaService.atualizarVenda(venda));}

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarVenda(@PathVariable Long id) {
        vendaService.deletarVenda(id);
        return ResponseEntity.noContent().build();
    }
}

