package wasdev.webservices;

import java.util.Set;
import java.util.UUID;

import javax.ejb.EJB;
import javax.ejb.Stateless;

@Stateless(name = "AuthService")
public class AuthServiceBean implements AuthService {

	@EJB
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
