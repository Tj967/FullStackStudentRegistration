package com.mthree.fullstackregistration.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mthree.fullstackregistration.Student;
import com.mthree.fullstackregistration.service.IService;

@RestController
public class StudentController {
	@Autowired 
	IService service;
	
	@GetMapping(path="/students")
	public List<Student> getAllStudents(){
		System.out.println("Inside get all students");
		return service.findAll();	
	}
	
	@PostMapping(path="/students", consumes = "application/json")
	public Student createStudent(@RequestBody Student student,BindingResult result, Model model) {
		System.out.println("Inside new student");
		System.out.println(student);
		if(result.hasErrors()) {
			return student;
		} else {
			return service.save(student);
		}
	}
	
	@Transactional
	@DeleteMapping(path="/students/{id}")
	public void removeStudentById(@PathVariable int id) {
		System.out.println("Inside removeStudentById of StudentResource "+id);
		service.deleteById(id);
	}
	
	@GetMapping(path="/students/{id}")
	public Student retrieveStudentById(@PathVariable int id) {
		System.out.println("LOOKING FOR ID "+id);
		return service.findById(id);
	}
	
	@Transactional
	@PutMapping(path="/students/{id}")
	public void updateStudentById(@PathVariable int id, @RequestBody Student student) {
		System.out.println("Inside updateUserNameById of UserResource");
		System.out.println(student.getId()+" : "+student.getName()+" : "+student.getAge()+" : "+student.getMobileNumber());
		service.editStudent(student.getId(), student.getName(), student.getAge(), student.getMobileNumber());
	}
}
