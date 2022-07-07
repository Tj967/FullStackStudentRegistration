package com.mthree.fullstackregistration;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity()
@Table(name="stu")
public class Student{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name="name")
	private String name;
	@Column(name="age")
	private int age;
	@Column(name="mobileNumber")
	private int mobileNumber;
	
	public Student() {}
	
	public Student(String name, int age, int mobileNumber) {
		super();
		this.name = name;
		this.age = age;
		this.mobileNumber = mobileNumber;
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
	public int getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(int mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	@Override
	public String toString() {
		return "Student [name=" + name + ", age=" + age + ", mobileNumber=" + mobileNumber + "]";
	}
	
	
}
