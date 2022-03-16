package com.project.soft.tienda.cargacsv;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

import com.opencsv.bean.ColumnPositionMappingStrategy;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import com.project.soft.tienda.model.Productos;

public class CsvAProductos {
	
	public static List<Productos> parseCsvFile(InputStream is) {
		String[] CSV_HEADER = { "codigo", "nombre", "nitproveedor", "preciocompra", "ivacompra", "precioventa" };
		Reader fileReader = null;
		CsvToBean<Productos> csvToBean = null;	
		List<Productos> productos = new ArrayList<Productos>();
		try {
			fileReader = new InputStreamReader(is);	
			ColumnPositionMappingStrategy<Productos> mappingStrategy = new ColumnPositionMappingStrategy<Productos>();	
			mappingStrategy.setType(Productos.class);
			mappingStrategy.setColumnMapping(CSV_HEADER);	
			csvToBean = new CsvToBeanBuilder<Productos>(fileReader).withMappingStrategy(mappingStrategy).withSkipLines(1)
					.withIgnoreLeadingWhiteSpace(true).build();	
			productos = csvToBean.parse();
			return productos;
		} catch (Exception e) {
			System.out.println("Reading CSV Error!");
			e.printStackTrace();
		} finally {
			try {
				fileReader.close();
			} catch (IOException e) {
				System.out.println("Closing fileReader/csvParser Error!");
				e.printStackTrace();
			}
		}
		
		return productos;
	}


}
