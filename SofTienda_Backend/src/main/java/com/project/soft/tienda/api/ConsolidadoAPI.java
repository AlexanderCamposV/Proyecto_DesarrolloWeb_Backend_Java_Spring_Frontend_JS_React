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

import com.project.soft.tienda.dao.ConsolidadoDAO;
import com.project.soft.tienda.model.Consolidado;

@RestController // esta es una clase REST
@RequestMapping("consolidado")
@CrossOrigin("http://localhost:3000")
public class ConsolidadoAPI {
	@Autowired // inyecta la dependencia de todos los métodos del JPA para clienteDAO
	private ConsolidadoDAO consolidadoDao;

	@PostMapping("/guardar")
	public void guardar(@RequestBody Consolidado consolidado) {// Request convierte en un objeto Java desde un JSon
		consolidadoDao.save(consolidado);
	}

	@GetMapping("/listar")
	public List<Consolidado> listar() {
		return consolidadoDao.findAll();
	}
	
	
	@DeleteMapping("/eliminar/{id}")
	public void eliminar(@PathVariable("id") Integer id) {
		consolidadoDao.deleteById(id);
	}

	@PutMapping("/actualizar")
	public void actualizar(@RequestBody Consolidado consolidado) {
		consolidadoDao.save(consolidado);
	}


}
