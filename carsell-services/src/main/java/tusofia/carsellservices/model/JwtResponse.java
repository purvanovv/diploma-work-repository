package tusofia.carsellservices.model;

public class JwtResponse {
	private long id;

	private String username;

	private String token;

	private long tokenExpired;

	public JwtResponse(long id, String username, String token, long tokenExpired) {
		super();
		this.id = id;
		this.username = username;
		this.token = token;
		this.tokenExpired = tokenExpired;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public long getTokenExpired() {
		return tokenExpired;
	}

	public void setTokenExpired(long tokenExpired) {
		this.tokenExpired = tokenExpired;
	}

}
