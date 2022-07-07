package com.mthree.fullstackregistration.dao;

import java.util.List;

import com.mthree.fullstackregistration.Student;

public interface IDAO {
	public List<Student> findAll();
	public Student save(Student student);
	public void deleteById(int id);
	public Student findById(int id);
	public void editStudent(int id, String name, int age, int mobileNumber);
}
