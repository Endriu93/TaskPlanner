package ejb;

import wasdev.webservices.User;

public interface UserService {

	User findByUsernameAndPassword(String username, String password);

	void save(User user);

	User findByUsernameAndAuthToken(String authId, String authToken);

}
