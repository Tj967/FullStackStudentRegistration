package com.mthree.fullstackregistration.service;

import java.util.List;

import com.mthree.fullstackregistration.Student;

public interface IService {
	public List<Student> findAll();
	public Student save(Student student);
	public void deleteById(int id);
	public Student findById(int id);
	public void editStudent(int id, String name, int age, int mobileNumber);
}
