package tusofia.carsellservices.exceptions;

import java.util.List;

import tusofia.carsellservices.validation.ValidationResult;

public class ValidationException extends Exception {
	private static final long serialVersionUID = -399003707540067031L;

	private List<ValidationResult> validationErrors;

	public ValidationException(List<ValidationResult> validationErrors) {
		this.validationErrors = validationErrors;
	}

	public List<ValidationResult> getValidationErrors() {
		return validationErrors;
	}

	public void setValidationErrors(List<ValidationResult> validationErrors) {
		this.validationErrors = validationErrors;
	}

}
