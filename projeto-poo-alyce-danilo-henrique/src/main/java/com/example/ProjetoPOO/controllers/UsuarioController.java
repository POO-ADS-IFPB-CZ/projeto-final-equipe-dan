package mp.projetopoo.controllers;

import mp.projetopoo.models.Usuario;
import mp.projetopoo.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {
        Usuario usuarioAutenticado = usuarioService.autenticar(usuario.getLogin(), usuario.getSenha());
        if (usuarioAutenticado != null) {
            return ResponseEntity.ok().build(); // Login bem-sucedido
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // Falha no login
        }
    }
}
