package com.project.soft.tienda.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.soft.tienda.model.Productos;

public interface ProductosDAO extends MongoRepository<Productos, Integer>{
	public Productos findByCodigo(Integer codigo);
}

