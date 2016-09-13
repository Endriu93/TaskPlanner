package ejb;

import javax.ejb.Remote;

import jpa.User;

@Remote
public interface UserRemote {
	public void addUser(User user);
}
