package com.sowndarya.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sowndarya.demo.Entity.Patient;
import com.sowndarya.demo.Repository.HosRepo;

@Service
public class HospitalService {
	@Autowired
	private HosRepo hp;
	
	
	public Patient savedetails(Patient p)
	{
		return hp.save(p);
	}
	public List<Patient> getAllDetails()
	{
		List<Patient> arr=new ArrayList<>();
		arr=hp.findAll();
		return arr;
		
	}
	 public void deleteDepartmentById(int id)
     {
    	 hp.deleteById(id);
     }
     public Patient update(int id,Patient s)
     {
    	 return hp.saveAndFlush(s);
     }
	
	

}
