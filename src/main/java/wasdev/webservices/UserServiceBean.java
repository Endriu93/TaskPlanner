package wasdev.webservices;

import java.util.Set;
import java.util.UUID;

import javax.ejb.EJB;
import javax.ejb.Stateless;

@Stateless(name = "UserService")
public class UserServiceBean implements UserService {

	@Override
	public User findByUsernameAndPassword(String username, String password)
	{
		//TODO
		User user = new User();
		user.setAuthToken(User.TEST_AUTH_TOKEN);
		user.setAuthRole(User.TEST_AUTH_ROLE);

		return user;
	}

	@Override
	public void save(User user)
	{
		// TODO Auto-generated method stub
		
	}

	@Override
	public User findByUsernameAndAuthToken(String authId, String authToken)
	{
		//TODO
		User user = new User();
		user.setAuthToken(User.TEST_AUTH_TOKEN);
		user.setAuthRole(User.TEST_AUTH_ROLE);

		return user;
	}

}
