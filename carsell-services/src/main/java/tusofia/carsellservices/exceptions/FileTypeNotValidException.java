package tusofia.carsellservices.exceptions;

public class FileTypeNotValidException extends BusinessException {

	private static final long serialVersionUID = 4727972235442850847L;

	public FileTypeNotValidException(String mesage, Short errorCode) {
		super(mesage, errorCode);
	}
}
