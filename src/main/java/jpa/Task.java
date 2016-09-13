package jpa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Task {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long taskId;
  private String name;
  private User user;

  public Long getId() {
    return taskId;
  }

  public void setId(Long id) {
    this.taskId = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
  
  @ManyToOne
  public User getUser(){
	  return user;
  }
  
  public void setUser(User user){
	  this.user = user; 
  }

} 

