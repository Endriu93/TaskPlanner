package ejb;

import java.util.Set;
import java.util.UUID;

import javax.ejb.EJB;
import javax.ejb.Stateless;

import wasdev.webservices.AuthAccessElement;
import wasdev.webservices.AuthLoginElement;
import wasdev.webservices.User;

@Stateless(name = "AuthService")
public class AuthServiceBean implements AuthService {

	@EJB(beanName="UserServiceBean")
    UserService userService;
	
    @Override
    public AuthAccessElement login(AuthLoginElement loginElement) {
        User user = userService.findByUsernameAndPassword(loginElement.getUsername(), loginElement.getPassword());
        if (user != null) {
//            user.setAuthToken(UUID.randomUUID().toString());
        	user.setAuthToken(User.TEST_AUTH_TOKEN);
            userService.save(user);
            return new AuthAccessElement(loginElement.getUsername(), user.getAuthToken(), user.getAuthRole());
        }
        return null;
    }
    
    @Override
    public boolean isAuthorized(String authId, String authToken, Set<String> rolesAllowed) {
        User user = userService.findByUsernameAndAuthToken(authId, authToken);
        if (user != null) {
            return rolesAllowed.contains(user.getAuthRole());
        } else {
            return false;
        }
    }

}
