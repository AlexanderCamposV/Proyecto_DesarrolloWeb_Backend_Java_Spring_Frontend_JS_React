package com.project.soft.tienda.api;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.soft.tienda.dao.UsuariosDAO;
import com.project.soft.tienda.model.Usuarios;

@RestController // esta es una clase REST
@RequestMapping("usuarios")
@CrossOrigin("http://localhost:3000")
public class UsuariosAPI {
	@Autowired // inyecta la dependencia de todos los métodos del JPA para DAO
	private UsuariosDAO usuarioDao;

	@PostMapping("/guardar")
	public void guardar(@RequestBody Usuarios usuario) {// Request convierte en un objeto Java desde un JSon
		usuarioDao.save(usuario);
	}

	@GetMapping("/listar")
	public List<Usuarios> listar() {
		return usuarioDao.findAll();
	}
	
	@GetMapping("/listar/{username}")
	public Usuarios listarUser(@PathVariable("username") String username) {
		return usuarioDao.findByUsername(username);
	}

	@DeleteMapping("/eliminar/{id}")
	public void eliminar(@PathVariable("id") long id) {
		usuarioDao.deleteById(id);
	}

	@PutMapping("/actualizar")
	public void actualizar(@RequestBody Usuarios usuario) {
		usuarioDao.save(usuario);
	}
}
