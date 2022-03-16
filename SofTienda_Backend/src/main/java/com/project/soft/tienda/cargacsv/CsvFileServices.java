package com.project.soft.tienda.cargacsv;

import java.io.IOException;
import java.io.InputStream;
import java.io.Writer;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.soft.tienda.dao.ProductoRepository;
import com.project.soft.tienda.model.Productos;


@Service
public class CsvFileServices {
	
	@Autowired
	ProductoRepository productoRepository;

	// Store Csv File's data to database
	public void store(InputStream file) {
		try {
			// Using ApacheCommons Csv Utils to parse CSV file
			List<Productos> lstProductos = ApacheCommonsCsvUtil.parseCsvFile(file);
			
			// Using OpenCSV Utils to parse CSV file
			// List<Customer> lstCustomers = OpenCsvUtil.parseCsvFile(file);
			
			// Save customers to database
			productoRepository.saveAll(lstProductos);
		} catch(Exception e) {
			throw new RuntimeException("FAIL! -> message = " + e.getMessage());
		}
	}
	
	// Load Data to CSV File
	/*
	 * public void loadFile(Writer writer) throws IOException { try {
	 * List<Productos> productos = (List<Productos>) productoRepository.findAll();
	 * 
	 * // Using ApacheCommons Csv Utils to write Customer List objects to a Writer
	 * ApacheCommonsCsvUtil.customersToCsv(writer, productos);
	 * 
	 * // Using Open CSV Utils to write Customer List objects to a Writer //
	 * OpenCsvUtil.customersToCsv(writer, customers); } catch(Exception e) { throw
	 * new RuntimeException("Fail! -> Message = " + e.getMessage()); } }
	 */
}