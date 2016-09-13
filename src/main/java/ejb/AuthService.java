package ejb;

import java.util.Set;

import wasdev.webservices.AuthAccessElement;
import wasdev.webservices.AuthLoginElement;

public interface AuthService {

	AuthAccessElement login(AuthLoginElement loginElement);

	boolean isAuthorized(String authId, String authToken, Set<String> rolesAllowed);

}
