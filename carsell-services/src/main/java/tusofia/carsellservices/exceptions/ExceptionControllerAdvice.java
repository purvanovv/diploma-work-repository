package tusofia.carsellservices.exceptions;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import tusofia.carsellservices.model.ResponseMessage;

@RestControllerAdvice
public class ExceptionControllerAdvice {
	@ExceptionHandler(value = ValidationException.class)
	public ResponseEntity<Map<String, String>> handleValidationException(ValidationException e) {
		Map<String, String> errors = new HashMap<String, String>();
		e.getValidationErrors().forEach((error) -> {
			String validationType = error.getValidaitonType().toString();
			String message = error.getMessage();
			errors.put(validationType, message);
		});
		return new ResponseEntity<Map<String, String>>(errors, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(value = TechnicalException.class)
	public ResponseEntity<ResponseMessage> handleTechnicalException(TechnicalException e) {
		return new ResponseEntity<ResponseMessage>(new ResponseMessage(e.getMessage()),
				HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(value = BusinessException.class)
	public ResponseEntity<ResponseMessage> handleBusinessException(BusinessException e) {
		return new ResponseEntity<ResponseMessage>(new ResponseMessage(e.getMessage()),
				HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
