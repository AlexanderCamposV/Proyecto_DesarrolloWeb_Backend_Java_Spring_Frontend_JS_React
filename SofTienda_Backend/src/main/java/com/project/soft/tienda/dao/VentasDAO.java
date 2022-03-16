package com.project.soft.tienda.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.soft.tienda.model.Ventas;

// Parámetros de MongoRepository --> <DTO, tipo de dato de la PK>
public interface VentasDAO extends MongoRepository<Ventas, Integer>{
	public List<Ventas> findByCedulacliente(String cedulacliente);
}
