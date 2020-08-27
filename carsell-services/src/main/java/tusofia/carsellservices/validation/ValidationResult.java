package tusofia.carsellservices.validation;

public class ValidationResult {
	private ValidationType validaitonType;
	private String message;
	private Boolean validationResult;

	public ValidationResult(ValidationType validaitonType, String message, Boolean validationResult) {
		this.validaitonType = validaitonType;
		this.message = message;
		this.validationResult = validationResult;
	}

	public ValidationResult(Boolean validationResult) {
		this.validationResult = validationResult;
	}

	public ValidationType getValidaitonType() {
		return validaitonType;
	}

	public void setValidaitonType(ValidationType validaitonType) {
		this.validaitonType = validaitonType;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Boolean getValidationResult() {
		return validationResult;
	}

	public void setValidationResult(Boolean validationResult) {
		this.validationResult = validationResult;
	}

}
