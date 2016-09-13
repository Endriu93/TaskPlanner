package ejb;

import java.util.ArrayList;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import jpa.User;
import jpa.UserTask;

@Stateless
public class ManageUserTaskBean implements UserTaskRemote{

	
	 @PersistenceContext(unitName = "EmpMgmtPU")
	    private EntityManager entityManager;
	 
	    public ManageUserTaskBean() {
	 
	    }
	 
	    public void addUser(User user) {
	        entityManager.persist(user);
	    }

		@Override
		public void addUserTask(UserTask userTask) {
	        entityManager.persist(userTask);
		}

		@Override
		public ArrayList<UserTask> getUserTask(User user) {
			return null;
		}

}
