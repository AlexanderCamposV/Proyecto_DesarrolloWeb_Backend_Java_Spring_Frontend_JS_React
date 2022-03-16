package com.project.soft.tienda.cargacsv;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVPrinter;
import org.apache.commons.csv.CSVRecord;

import org.springframework.web.multipart.MultipartFile;

import com.project.soft.tienda.model.Productos;

public class ApacheCommonsCsvUtil {
	private static String csvExtension = "csv";
	
	
	public static void customersToCsv(Writer writer, List<Productos> productos) throws IOException {
		try (CSVPrinter csvPrinter = new CSVPrinter(writer,
				CSVFormat.DEFAULT.withHeader("codigo", "nombre", "nitproveedor",  "preciocompra", "ivacompra", "precioventa"));) {
			for (Productos producto : productos) {
				List<String> data = Arrays.asList(String.valueOf(producto.getCodigo()), String.valueOf(producto.getIvacompra()),
						String.valueOf(producto.getNitproveedor()), producto.getNombre(), String.valueOf(producto.getPreciocompra()), String.valueOf(producto.getPrecioventa()));
				csvPrinter.printRecord(data);
			}
			csvPrinter.flush();
		} catch (Exception e) {
			System.out.println("Writing CSV error!");
			e.printStackTrace();
		}
	}

	public static List<Productos> parseCsvFile(InputStream is) {
		BufferedReader fileReader = null;
		CSVParser csvParser = null;
		List<Productos> productos = new ArrayList<Productos>();
		try {
			fileReader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
			csvParser = new CSVParser(fileReader,
					CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());

			Iterable<CSVRecord> csvRecords = csvParser.getRecords();

			for (CSVRecord csvRecord : csvRecords) {
				Productos producto = new Productos(Integer.parseInt(csvRecord.get("codigo")),
						csvRecord.get("nombre"),
						csvRecord.get("nitproveedor"), 
						Double.parseDouble(csvRecord.get("preciocompra")), 
						Integer.parseInt(csvRecord.get("ivacompra")),
						Double.parseDouble(csvRecord.get("precioventa")));
				productos.add(producto);
			}
		} catch (Exception e) {
			System.out.println("Reading CSV Error!");
			e.printStackTrace();
		} finally {
			try {
				fileReader.close();
				csvParser.close();
			} catch (IOException e) {
				System.out.println("Closing fileReader/csvParser Error!");
				e.printStackTrace();
			}
		}
		return productos;
	}
	
	public static boolean isCSVFile(MultipartFile file) {
		String extension = file.getOriginalFilename().split("\\.")[1];		
		if(!extension.equals(csvExtension)) {
			return false;
		}		
		return true;
	}
}