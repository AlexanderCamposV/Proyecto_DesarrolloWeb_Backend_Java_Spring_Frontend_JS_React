package com.project.soft.tienda.model;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_ventas")
public class Ventas {
	
	@Id
	private Integer codigo;
	private String cedulacliente;
	private ArrayList<DetalleVentas> detalleventas;
	private Integer ivaventa;
	private double totalventa;
	private double valorventa;
	
	public Ventas(Integer codigo, String cedulacliente, ArrayList<DetalleVentas> detalleventas, Integer ivaventa,
			double totalventa, double valorventa) {
		super();
		this.codigo = codigo;
		this.cedulacliente = cedulacliente;
		this.detalleventas = detalleventas;
		this.ivaventa = ivaventa;
		this.totalventa = totalventa;
		this.valorventa = valorventa;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getCedulacliente() {
		return cedulacliente;
	}

	public void setCedulacliente(String cedulacliente) {
		this.cedulacliente = cedulacliente;
	}

	public ArrayList<DetalleVentas> getDetalleventas() {
		return detalleventas;
	}

	public void setDetalleventas(ArrayList<DetalleVentas> detalleventas) {
		this.detalleventas = detalleventas;
	}

	public Integer getIvaventa() {
		return ivaventa;
	}

	public void setIvaventa(Integer ivaventa) {
		this.ivaventa = ivaventa;
	}

	public double getTotalventa() {
		return totalventa;
	}

	public void setTotalventa(double totalventa) {
		this.totalventa = totalventa;
	}

	public double getValorventa() {
		return valorventa;
	}

	public void setValorventa(double valorventa) {
		this.valorventa = valorventa;
	}
}
