package com.sowndarya.demo.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="hospitalManagement")
public class Patient {
    @Id
    @Column(name="patientID")
    private int id;
    
    @Column(name="patientName")
    private String name;
    
    
    @Column(name="patientAge")
    private int age;
    
    @Column(name="patientAddress")
    private String address;
    
    @Column(name="doctorId")
    private int did;
    
    @Column(name="doctorName")
    private String dname;
    
    
    
    public Patient(int id, String name, int age, String address, int did, String dname) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.address = address;
		this.did = did;
		this.dname = dname;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public int getAge() {
		return age;
	}



	public void setAge(int age) {
		this.age = age;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public int getDid() {
		return did;
	}



	public void setDid(int did) {
		this.did = did;
	}



	public String getDname() {
		return dname;
	}



	public void setDname(String dname) {
		this.dname = dname;
	}



	public Patient()
    {
    	
    }
}