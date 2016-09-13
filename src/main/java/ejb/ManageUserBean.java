package ejb;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import jpa.User;

@Stateless
public class ManageUserBean implements UserRemote{

	
	 @PersistenceContext(unitName = "EmpMgmtPU")
	    private EntityManager entityManager;
	 
	    public ManageUserBean() {
	 
	    }
	 
	    public void addUser(User user) {
	        entityManager.persist(user);
	    }

}
