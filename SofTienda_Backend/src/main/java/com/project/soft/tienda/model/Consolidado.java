package com.project.soft.tienda.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_consolidado")
public class Consolidado {
	
	@Id
	private Integer id;
	private String ciudad;
	private double totalventas;
	
	public Consolidado(Integer id, String ciudad, double totalventas) {
		super();
		this.id = id;
		this.ciudad = ciudad;
		this.totalventas = totalventas;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public double getTotalventas() {
		return totalventas;
	}

	public void setTotalventas(double totalventas) {
		this.totalventas = totalventas;
	}
}
