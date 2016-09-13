package ejb;

import java.util.ArrayList;

import javax.ejb.Remote;

import jpa.Task;


@Remote
public interface TaskRemote {
	public void addTask(Task task);

	public ArrayList<Task> getTasks();
}

