package wasdev.webservices;

public class User {

	public static String TEST_AUTH_TOKEN = "test_token";
	public static String TEST_AUTH_ROLE = "test_token";

	private String mAuthToken;
	private String mAuthRole;
	
	public void setAuthRole(String role)
	{
		mAuthRole = role;
	}
	
	public String getAuthRole()
	{
		return mAuthRole;
	}

	public String getAuthToken()
	{
		return mAuthToken;
	}

	public void setAuthToken(String token)
	{
		mAuthToken = token;
	}

}
