package tusofia.carsellservices.exceptions;

public class TechnicalException extends RuntimeException {

	private static final long serialVersionUID = -6099846806375068705L;
	private String message;

	public TechnicalException(String message) {
		this.message = message;
	}

	public TechnicalException(String message, Throwable cause) {
		super(cause);
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
