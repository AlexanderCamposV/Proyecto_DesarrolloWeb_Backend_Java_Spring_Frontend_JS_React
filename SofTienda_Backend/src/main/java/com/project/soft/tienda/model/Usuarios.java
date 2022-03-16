package com.project.soft.tienda.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_usuarios")
public class Usuarios {
	
	@Id
	private int cedula;
	private String rol;
	private String nombre;
	private String email;
	private String username;
	private String password;
	
	public Usuarios(int cedula, String rol, String nombre, String email, String username, String password) {
		super();
		this.cedula = cedula;
		this.rol = rol;
		this.nombre = nombre;
		this.email = email;
		this.username = username;
		this.password = password;
	}

	public Usuarios() {
		super();
	}

	public int getCedula() {
		return cedula;
	}

	public void setCedula(int cedula) {
		this.cedula = cedula;
	}

	public String getRol() {
		return rol;
	}

	public void setRol(String rol) {
		this.rol = rol;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Usuarios [cedula=" + cedula + ", rol=" + rol + ", nombre=" + nombre + ", email=" + email + ", username="
				+ username + ", password=" + password + "]";
	}
	
}