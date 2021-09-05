package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")


public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long id;
	
	@Column(name = "first_name")
	public String firstName;
	
	@Column(name = "Last_name")
	public String lastName;
	
	@Column(name = "email")
	public String emalId;
	
	public Employee(){
		
	}
	
	public Employee(String firstName, String lastName, String emalId) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emalId = emalId;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmalId() {
		return emalId;
	}
	public void setEmalId(String emalId) {
		this.emalId = emalId;
	}
	
	
}
