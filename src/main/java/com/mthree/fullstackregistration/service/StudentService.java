package com.mthree.fullstackregistration.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mthree.fullstackregistration.Student;
import com.mthree.fullstackregistration.dao.IDAO;

@Service
public class StudentService implements IService {
	@Autowired
	private IDAO dao;
	
	@Override
	public List<Student> findAll() {
		return dao.findAll();
	}

	@Override
	public Student save(Student student) {
		return dao.save(student);
	}

	@Override
	public void deleteById(int id) {
		dao.deleteById(id);
	}

	@Override
	public Student findById(int id) {
		return dao.findById(id);
	}

	@Override
	public void editStudent(int id, String name, int age, int mobileNumber) {
		dao.editStudent(id, name, age, mobileNumber);
	}
	

}
