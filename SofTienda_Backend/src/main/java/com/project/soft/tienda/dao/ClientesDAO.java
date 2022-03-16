package com.project.soft.tienda.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.soft.tienda.model.Clientes;

// Parámetros de MongoRepository --> <DTO, tipo de dato de la PK>
public interface ClientesDAO extends MongoRepository<Clientes, Integer>{
	public Clientes findByCedula(long cedula);
}
