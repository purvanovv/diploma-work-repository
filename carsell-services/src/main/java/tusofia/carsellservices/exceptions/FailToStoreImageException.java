package tusofia.carsellservices.exceptions;

public class FailToStoreImageException extends TechnicalException {

	private static final long serialVersionUID = 625418733383301732L;

	public FailToStoreImageException(String message) {
		super(message);
	}

	public FailToStoreImageException(String message, Throwable cause) {
		super(message, cause);
	}

}
