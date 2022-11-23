package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {
	@RequestMapping("employees")
	@CrossOrigin(origins="http://localhost:4200")
public List<Employee> getEmployee()
{	List<Employee> employees= new ArrayList<Employee>();
	employees.add(new Employee(1,"Somaanath"));
	employees.add(new Employee(2,"Vijay"));
	employees.add(new Employee(3,"Krishna"));
	employees.add(new Employee(4,"Udayamoorthy"));
	return employees;
}
	public void setEmployee(int id ,String name)
	{
		List<Employee> employees= new ArrayList<Employee>();
		employees.add(new Employee(id,name));
	}
}
