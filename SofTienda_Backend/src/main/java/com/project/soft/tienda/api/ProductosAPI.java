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

import com.project.soft.tienda.dao.ProductosDAO;
import com.project.soft.tienda.model.Productos;

@RestController // esta es una clase REST
@RequestMapping("productos")
@CrossOrigin("http://localhost:3000")
public class ProductosAPI {
	@Autowired // inyecta la dependencia de todos los métodos del JPA para clienteDAO
	private ProductosDAO productoDao;

	@PostMapping("/guardar")
	public void guardar(@RequestBody Productos producto) {// Request convierte en un objeto Java desde un JSon
		productoDao.save(producto);
	}

	@GetMapping("/listar")
	public List<Productos> listar() {
		return productoDao.findAll();
	}
	
	@GetMapping("/listar/{codigo}")
	public Productos listarProducto(@PathVariable("codigo") Integer codigo) {
		return productoDao.findByCodigo(codigo);
	}
	

	@DeleteMapping("/eliminar/{id}")
	public void eliminar(@PathVariable("id") Integer id) {
		productoDao.deleteById(id);
	}

	@PutMapping("/actualizar")
	public void actualizar(@RequestBody Productos producto) {
		productoDao.save(producto);
	}
	
	// Esta es la API encargada de la carga de archivo CSV.
	@PutMapping("/archivo")
	public void cargarArchivo(@RequestBody Productos producto) {
		productoDao.save(producto);
	}
}
