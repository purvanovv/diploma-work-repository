package tusofia.carsellservices.exceptions;

public class AuthorizeException extends RuntimeException{
	private final String message;

	public AuthorizeException(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}
}
