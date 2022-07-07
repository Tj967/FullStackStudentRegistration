package com.mthree.fullstackregistration.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.mthree.fullstackregistration.Student;

public interface StudentJPARepository extends IDAO, JpaRepository<Student, String> {
	@Modifying
	@Query("update Student s set s.name=?2, s.age=?3, s.mobileNumber=?4 where s.id=?1")
	public void editStudent(int id, String name, int age, int mobileNumber);
}
