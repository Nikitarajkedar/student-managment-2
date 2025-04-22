package com.example.student.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.student.model.Student;
import com.example.student.repository.StudentRepository;

import springboot.emp.exception.ResourceNotFoundException;
import springboot.emp.model.Employee;

import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "http://localhost:4200") // frond end port no. add hear for connectivity

@RestController
@RequestMapping("api/student")
public class StudentController {
@Autowired
private StudentRepository studentRepository;

//get all record
@GetMapping("/allstd")
public List<Student> getAllStudent(){
	System.out.println("inside getAllStudent()");
	return studentRepository.findAll();   // all student data 
}

//get data by id
@GetMapping("/getbyid/{sid}")

public Student getUser(@PathVariable int  sid) {
	System.out.println("inside getUser()");
return studentRepository.findById(sid).orElse(null);
}
//to add data base data|

	@PostMapping ("/addstd")
	public Student addStudent(@RequestBody  Student s)
	{
		System.out.println("inside addStudent()");
	return studentRepository.save(s);
			
	}
//	@PutMapping("/{sid}")
//	public ResponseEntity<Student> updateuser(@PathVariable(value ="sid") int sid ,@Valid @RequestBody Student s) throws ResourceNotFoundException
//	{
//		System.out.println("inside updateuser()");
//		Student std= studentRepository.findById(sid)
//			.orElseThrow(()->new ResourceNotFoundException("student not found"+sid));
//		
//		std.setSname(s.getSname());
//		std.setEmailId(s.getEmailId());
//		std.setAddress(s.getAddress());
//		std.setContact(s.getContact());
//		std.setDepartment(s.getDepartment());
//		final Student updateuser = studentRepository.save(std);
//		
//	
//		
//		return ResponseEntity.ok(updateuser);
//		
//		
//	}
	
	
	 @PutMapping("/{sid}")
	    public Student updateuser( @RequestBody Student student ) {
	        return studentRepository.save(student);
	    }
	
	
//	@DeleteMapping("/{sid}")
//	public Map<String ,Boolean> deletedUser(@PathVariable(value="id") int sid)
//			throws ResourceNotFoundException {
//		Student std= studentRepository.findById(sid).orElseThrow(()->new ResourceNotFoundException("Student not found"+sid));
//		
//		studentRepository.delete(std);
//		Map<String,Boolean> response =new HashMap<>();
//		response.put("deleted",Boolean.TRUE);
//		
//		return response;
//		
//	}
	@DeleteMapping("/{sid}")
    public void deletedUser(@PathVariable int sid) {
    studentRepository.deleteById(sid);
    }
}



