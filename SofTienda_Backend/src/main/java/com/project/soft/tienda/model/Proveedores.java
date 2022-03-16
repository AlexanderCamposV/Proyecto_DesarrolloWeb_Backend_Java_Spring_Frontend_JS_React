package com.project.soft.tienda.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_proveedores")
public class Proveedores {
	
	@Id
	private String nitproveedor;
	private String nombre;
	private String direccion;
	private String telefono;
	
	public Proveedores(String nitproveedor, String nombre, String direccion, String telefono) {
		super();
		this.nitproveedor = nitproveedor;
		this.nombre = nombre;
		this.direccion = direccion;
		this.telefono = telefono;
	}

	public Proveedores() {
		super();
	}

	public String getNitproveedor() {
		return nitproveedor;
	}

	public void setNitproveedor(String nitproveedor) {
		this.nitproveedor = nitproveedor;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	@Override
	public String toString() {
		return "Proveedores [nitproveedor=" + nitproveedor + ", nombre=" + nombre + ", direccion=" + direccion
				+ ", telefono=" + telefono + "]";
	}
	
}
