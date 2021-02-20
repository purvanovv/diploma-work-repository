package tusofia.carsellservices.exceptions;

public class UsernameExistsException extends BusinessException{

	public UsernameExistsException(String mesage, Short errorCode) {
		super(mesage, errorCode);
	}

}
