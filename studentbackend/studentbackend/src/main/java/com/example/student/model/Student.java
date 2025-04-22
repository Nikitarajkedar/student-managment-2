package com.example.student.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="student_data")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int sid;
	
	
	@Column(name="Student_Name",nullable = false)
	private String sname;
	
	@Column(name = "email_address", nullable = false)
	private String emailId;
	
	@Column(name = "address", nullable = false)
	private String address;
	
	@Column(name = "contact", nullable = false)
	private String contact;
	
	@Column(name = "department", nullable = false)
	private String department;

	public Student(int sid, String sname, String emailId, String address, String contact, String department) {
		super();
		this.sid = sid;
		this.sname = sname;
		this.emailId = emailId;
		this.address = address;
		this.contact = contact;
		this.department = department;
	}

	public Student() {
		
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	@Override
	public String toString() {
		return "Student [sid=" + sid + ", sname=" + sname + ", emailId=" + emailId + ", address=" + address
				+ ", contact=" + contact + ", department=" + department + "]";
	}
	
	
	
	
	
}
