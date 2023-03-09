package com.sowndarya.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sowndarya.demo.Entity.Patient;

public interface HosRepo extends JpaRepository<Patient,Integer>{

}
