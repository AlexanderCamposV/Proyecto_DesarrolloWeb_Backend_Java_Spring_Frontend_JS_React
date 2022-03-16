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

import com.project.soft.tienda.dao.VentasDAO;
import com.project.soft.tienda.model.Ventas;

@RestController // esta es una clase REST
@RequestMapping("ventas")
@CrossOrigin("http://localhost:3000")
public class VentasAPI {
	@Autowired // inyecta la dependencia de todos los métodos del JPA para DAO
	private VentasDAO ventaDao;

	@PostMapping("/guardar")
	public void guardar(@RequestBody Ventas venta) {// Request convierte en un objeto Java desde un JSon
		ventaDao.save(venta);
	}

	@GetMapping("/listar")
	public List<Ventas> listar() {
		return ventaDao.findAll();
	}
	
	@GetMapping("/listar/{cedulacliente}")
	public List<Ventas> listarVenta(@PathVariable("cedulacliente") String cedulacliente) {
		return ventaDao.findByCedulacliente(cedulacliente);
	}

	@DeleteMapping("/eliminar/{codigo}")
	public void eliminar(@PathVariable("codigo") Integer codigo) {
		ventaDao.deleteById(codigo);
	}

	@PutMapping("/actualizar")
	public void actualizar(@RequestBody Ventas venta) {
		ventaDao.save(venta);
	}

}
