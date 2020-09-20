package tusofia.carsellservices.exceptions;

public class BusinessException extends Exception {

	private static final long serialVersionUID = 8663427028623783207L;
	private String mesage;
	private Short errorCode;

	public BusinessException(String mesage, Short errorCode) {
		this.mesage = mesage;
		this.errorCode = errorCode;
	}

	public String getMesage() {
		return mesage;
	}

	public Short getErrorCode() {
		return errorCode;
	}

}
