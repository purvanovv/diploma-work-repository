package tusofia.carsellservices.exceptions;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

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
}
