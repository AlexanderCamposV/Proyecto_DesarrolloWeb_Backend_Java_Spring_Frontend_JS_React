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

import com.project.soft.tienda.dao.ClientesDAO;
import com.project.soft.tienda.model.Clientes;


@RestController // esta es una clase REST
@RequestMapping("clientes")
@CrossOrigin("http://localhost:3000")
public class ClientesAPI {
	@Autowired // inyecta la dependencia de todos los métodos del JPA para clienteDAO
	private ClientesDAO clienteDAO;

	@PostMapping("/guardar")
	public void guardar(@RequestBody Clientes cliente) {// Request convierte en un objeto Java desde un JSon
		clienteDAO.save(cliente);
	}

	@GetMapping("/listar")
	public List<Clientes> listar() {
		return clienteDAO.findAll();
	}
	
	@GetMapping("/listar/{cedula}")
	public Clientes listarCliente(@PathVariable("cedula") Integer cedula) {
		return clienteDAO.findByCedula(cedula);
	}

	@DeleteMapping("/eliminar/{id}")
	public void eliminar(@PathVariable("id") Integer id) {
		clienteDAO.deleteById(id);
	}

	@PutMapping("/actualizar")
	public void actualizar(@RequestBody Clientes cliente) {
		clienteDAO.save(cliente);
	}
}
