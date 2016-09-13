package ejb;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import jpa.Task;


@Stateless
public class ManageTaskBean implements TaskRemote{

	
	 @PersistenceContext(unitName = "EmpMgmtPU")
	    private EntityManager entityManager;
	 
	    public ManageTaskBean() {
	 
	    }
	 
	    public void addTask(Task task) {
	        entityManager.persist(task);
	    }

}
