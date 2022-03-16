package com.project.soft.tienda.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.soft.tienda.cargacsv.ApacheCommonsCsvUtil;
import com.project.soft.tienda.cargacsv.CsvFileServices;
import com.project.soft.tienda.cargacsv.Message;
import com.project.soft.tienda.cargacsv.Response;

@RestController
@RequestMapping("productos")
@CrossOrigin("http://localhost:3000")
public class ProductosCargaCSV {
	@Autowired
	CsvFileServices csvFileServices;

	@PostMapping("/single")
	public Response uploadSingleCSVFile(@RequestParam("csvfile") MultipartFile csvfile) {

		Response response = new Response();

		// Checking the upload-file's name before processing
		if (csvfile.getOriginalFilename().isEmpty()) {
			response.addMessage(new Message(csvfile.getOriginalFilename(),
					"No selected file to upload! Please do the checking", "fail"));

			return response;
		}

		// checking the upload file's type is CSV or NOT

		if (!ApacheCommonsCsvUtil.isCSVFile(csvfile)) {
			response.addMessage(new Message(csvfile.getOriginalFilename(), "Error: this is not a CSV file!", "fail"));
			return response;
		}

		try {
			// save file data to database
			csvFileServices.store(csvfile.getInputStream());
			response.addMessage(new Message(csvfile.getOriginalFilename(), "Upload File Successfully!", "ok"));
		} catch (Exception e) {
			response.addMessage(new Message(csvfile.getOriginalFilename(), e.getMessage(), "fail"));
		}

		return response;
	}
}