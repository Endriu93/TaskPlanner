package wasdev.webservices;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AuthLoginElement implements Serializable {

	private String username;
    private String password;

    public AuthLoginElement(String username, String password) {
        this.username = username;
        this.password = password;
    }
    
    public AuthLoginElement(){}

	public String getUsername()
	{
		return username;
	}

	public String getPassword()
	{
		return password;
	}

}
