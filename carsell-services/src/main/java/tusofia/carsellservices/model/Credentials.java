package tusofia.carsellservices.model;

public class Credentials {
	private Long userId;

	private String username;

	private String token;

	private Long tokenExpired;

	public Credentials(Long userId, String username, String token, Long tokenExpired) {
		super();
		this.userId = userId;
		this.username = username;
		this.token = token;
		this.tokenExpired = tokenExpired;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
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

	public Long getTokenExpired() {
		return tokenExpired;
	}

	public void setTokenExpired(Long tokenExpired) {
		this.tokenExpired = tokenExpired;
	}

}
