package wasdev.webservices;

import java.util.ArrayList;

import javax.annotation.security.PermitAll;
import javax.ejb.EJB;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import jpa.Task;
import jpa.UserTask;
import ejb.AuthService;
import ejb.TaskRemote;
import ejb.UserRemote;

@Path("/action")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ActionResource {

    @EJB(beanName="ManageUserBean")
    UserRemote userRemote;
    
    @EJB(beanName="ManageTaskBean")
    TaskRemote taskRemote;
    
    @EJB(beanName="ManageUserTaskBean")
    ejb.UserTaskRemote UserTaskRemote;

    
    @POST
    @Path("/addUser")
    public void addUser(@Context HttpServletRequest request,  jpa.User user) {
       userRemote.addUser(user);
    }
    
    @POST
    @Path("/addTask")
    public void addTask(@Context HttpServletRequest request,  jpa.Task task) {
       taskRemote.addTask(task);
    }
    
    @GET
    @Path("/getTask")
    public ArrayList<Task> getTask(@Context HttpServletRequest request) {
    	return taskRemote.getTasks();
    }
    
    @POST
    @Path("/addUserTask")
    public void addUserTask(@Context HttpServletRequest request,  UserTask userTask) {
       UserTaskRemote.addUserTask(userTask);
    }
    
    @GET
    @Path("/getUserTask")
    public ArrayList<Task> getUserTask(@Context HttpServletRequest request) {
    	return taskRemote.getTasks();
    }
    
    @GET
    public void getTest(){}
}
