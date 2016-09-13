package ejb;

import java.util.ArrayList;

import javax.ejb.Remote;

import jpa.User;
import jpa.UserTask;

@Remote
public interface UserTaskRemote {
	public void addUserTask(UserTask userTask);
	public ArrayList<UserTask> getUserTask(User user);
	public ArrayList<UserTask> getUserTasks();

}

