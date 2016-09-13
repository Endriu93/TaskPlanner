package wasdev.webservices;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AuthAccessElement implements Serializable {

    public static final String PARAM_AUTH_ID = "auth-id";
    public static final String PARAM_AUTH_TOKEN = "auth-token";

    private String authId;
    private String authToken;
    private String authPermission;

    public AuthAccessElement() {
    }

    public AuthAccessElement(String authId, String authToken, String authPermission) {
        this.authId = authId;
        this.authToken = authToken;
        this.authPermission = authPermission;
    }

	public Object getAuthId()
	{
		return authId;
	}

	public Object getAuthToken()
	{
		return authToken;
	}

}
