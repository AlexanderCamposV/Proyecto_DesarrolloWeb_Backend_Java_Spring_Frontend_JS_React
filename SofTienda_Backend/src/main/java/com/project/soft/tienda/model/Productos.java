package com.project.soft.tienda.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_productos")
public class Productos {
	
	@Id
	private int codigo;
	private String nombre;
	private String nitproveedor;
	private double preciocompra;
	private int ivacompra;
	private double precioventa;
	
	public Productos(int codigo, String nombre, String nitproveedor, double preciocompra, int ivacompra,
			double precioventa) {
		super();
		this.codigo = codigo;
		this.nombre = nombre;
		this.nitproveedor = nitproveedor;
		this.preciocompra = preciocompra;
		this.ivacompra = ivacompra;
		this.precioventa = precioventa;
	}

	public Productos() {
		super();
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getNitproveedor() {
		return nitproveedor;
	}

	public void setNitproveedor(String nitproveedor) {
		this.nitproveedor = nitproveedor;
	}

	public double getPreciocompra() {
		return preciocompra;
	}

	public void setPreciocompra(double preciocompra) {
		this.preciocompra = preciocompra;
	}

	public int getIvacompra() {
		return ivacompra;
	}

	public void setIvacompra(int ivacompra) {
		this.ivacompra = ivacompra;
	}

	public double getPrecioventa() {
		return precioventa;
	}

	public void setPrecioventa(double precioventa) {
		this.precioventa = precioventa;
	}

	@Override
	public String toString() {
		return "Productos [codigo=" + codigo + ", nombre=" + nombre + ", nitproveedor=" + nitproveedor
				+ ", preciocompra=" + preciocompra + ", ivacompra=" + ivacompra + ", precioventa=" + precioventa + "]";
	}
	
}
