package com.accp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accp.domain.Student;
import com.accp.service.StudentService;
import com.github.pagehelper.PageInfo;

@RestController
@RequestMapping("/rest")
public class StudentRestController {
	
	@Autowired
	StudentService service;
	
	@GetMapping("/find")
	public PageInfo<Student> find(Integer pageNum,Integer pageSize,Student stu){
		return service.findByPage(pageNum, pageSize, stu);
	}

	@PostMapping("/delete")
	public String delete(Integer id) {
		return "id:"+id;
	}
	
	@PostMapping("/update")
	public String update(@RequestBody Student stu) {
		System.out.println(stu.getName());
		return "name:"+stu.getName();
	}
}
