package tusofia.carsellservices.exceptions;

import java.lang.invoke.MethodHandles;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import tusofia.carsellservices.model.ResponseMessage;

@RestControllerAdvice
public class ExceptionControllerAdvice {
	private final Logger technicalLog = LoggerFactory
			.getLogger("technical." + MethodHandles.lookup().lookupClass().getCanonicalName());

	@ExceptionHandler(value = ValidationException.class)
	public ResponseEntity<Map<String, String>> handleValidationException(ValidationException e) {
		Map<String, String> errors = new HashMap<String, String>();
		e.getValidationErrors().forEach((error) -> {
			String validationType = error.getValidaitonType().toString();
			String message = error.getMessage();
			errors.put(validationType, message);
		});
		technicalLog.error("[handleValidationException] message: {}", e.getMessage(), e);
		return new ResponseEntity<Map<String, String>>(errors, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(value = TechnicalException.class)
	public ResponseEntity<ResponseMessage> handleTechnicalException(TechnicalException e) {
		technicalLog.error("[handleTechnicalException] message: {}", e.getMessage(), e);
		return new ResponseEntity<ResponseMessage>(new ResponseMessage(e.getMessage()),
				HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(value = BusinessException.class)
	public ResponseEntity<ResponseMessage> handleBusinessException(BusinessException e) {
		technicalLog.error("[handleBusinessException] message: {}", e.getMessage(), e);
		return new ResponseEntity<ResponseMessage>(new ResponseMessage(e.getMessage()),
				HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@ExceptionHandler(value = AuthenticationException.class)
	public ResponseEntity<ResponseMessage> handleAuthenticateException(AuthenticationException e) {
		technicalLog.error("[handleAuthenticateException] message: {}", e.getMessage(), e);
		return new ResponseEntity<ResponseMessage>(new ResponseMessage(e.getMessage()),
				HttpStatus.UNAUTHORIZED);
	}


//	@ExceptionHandler(value = Exception.class)
//	public ResponseEntity<ResponseMessage> handleGlobalException(Exception e) {
//		technicalLog.error("[handleGlobalException] message: {}", e.getMessage(), e);
//		return new ResponseEntity<ResponseMessage>(new ResponseMessage(e.getMessage()),
//				HttpStatus.INTERNAL_SERVER_ERROR);
//	}
	

}
