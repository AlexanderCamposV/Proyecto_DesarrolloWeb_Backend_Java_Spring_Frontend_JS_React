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

import com.project.soft.tienda.dao.ProveedoresDAO;
import com.project.soft.tienda.model.Proveedores;


@RestController // esta es una clase REST
@RequestMapping("proveedores")
@CrossOrigin("http://localhost:3000")
public class ProveedoresAPI {
	@Autowired // inyecta la dependencia de todos los métodos del JPA para clienteDAO
	private ProveedoresDAO proveedoresDao;

	@PostMapping("/guardar")
	public void guardar(@RequestBody Proveedores proveedor) {// Request convierte en un objeto Java desde un JSon
		proveedoresDao.save(proveedor);
	}

	@GetMapping("/listar")
	public List<Proveedores> listar() {
		return proveedoresDao.findAll();
	}
	
	@GetMapping("/listar/{nitproveedor}")
	public Proveedores listarProveedor(@PathVariable("nitproveedor") long nitproveedor) {
		return proveedoresDao.findByNitproveedor(nitproveedor);
	}
		

	@DeleteMapping("/eliminar/{id}")
	public void eliminar(@PathVariable("id") Integer id) {
		proveedoresDao.deleteById(id);
	}

	@PutMapping("/actualizar")
	public void actualizar(@RequestBody Proveedores proveedor) {
		proveedoresDao.save(proveedor);
	}
}