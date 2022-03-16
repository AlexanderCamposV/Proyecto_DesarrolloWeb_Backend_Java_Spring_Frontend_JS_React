package com.project.soft.tienda.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.soft.tienda.model.Proveedores;

public interface ProveedoresDAO extends MongoRepository<Proveedores, Integer>{
	public Proveedores findByNitproveedor(long nitproveedor);
}
