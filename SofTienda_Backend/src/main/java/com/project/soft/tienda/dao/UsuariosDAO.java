package com.project.soft.tienda.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.soft.tienda.model.Usuarios;

public interface UsuariosDAO extends MongoRepository<Usuarios, Long> {
	
	public Usuarios findByUsername(String username);

}
