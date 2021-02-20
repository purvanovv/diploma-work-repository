package tusofia.carsellservices.exceptions;

public class EmailExistsException extends BusinessException{

	public EmailExistsException(String mesage, Short errorCode) {
		super(mesage, errorCode);
	}

}
