package com.sowndarya.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sowndarya.demo.Entity.Patient;
import com.sowndarya.demo.Service.HospitalService;


@CrossOrigin("http//:localhost3000")
@RestController
public class ApiController {
	@Autowired
	private HospitalService hserve;
	
	@GetMapping("/getPatient")
	public List<Patient> getDetails(){
		return hserve.getAllDetails();
	}
	
	@PostMapping("/addPatient")
	public Patient postDetails(@RequestBody Patient s) {
		return hserve.savedetails(s);
	}
	
		@DeleteMapping("/delete/{id}")
		public void delete(@PathVariable("id") int id)
		{
			hserve.deleteDepartmentById(id);
		}
		@PutMapping("/update/{id}")
		public Patient update(@PathVariable int id,@RequestBody Patient s)
		{
			return hserve.update(id, s);
		
		
	}
	

}
