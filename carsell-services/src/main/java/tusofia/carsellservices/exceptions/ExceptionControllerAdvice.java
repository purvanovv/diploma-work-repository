package tusofia.carsellservices.exceptions;

import java.lang.invoke.MethodHandles;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionControllerAdvice {
	private final Logger technicalLog = LoggerFactory
			.getLogger("technical." + MethodHandles.lookup().lookupClass().getCanonicalName());

	@ExceptionHandler(value = ValidationException.class)
	public ResponseEntity<ApiError> handleValidationException(ValidationException e) {
		technicalLog.error("[handleValidationException] message: {}", e.getMessage(), e);
		ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST, e.getMessage());
		e.getValidationErrors().forEach((error) -> {
			String validationType = error.getValidaitonType().toString();
			String message = error.getMessage();
			apiError.getErrors().add(String.format("validationType: %s,message: %s", validationType, message));
		});
		return new ResponseEntity<ApiError>(apiError, apiError.getStatus());
	}

	@ExceptionHandler(value = BusinessException.class)
	@ResponseBody
	public ResponseEntity<ApiError> handleBusinessException(BusinessException e) {
		technicalLog.error("[handleBusinessException] message: {}", e.getMesage(), e);
		ApiError apiError = new ApiError(HttpStatus.METHOD_NOT_ALLOWED, e.getMesage());
		return new ResponseEntity<ApiError>(apiError, apiError.getStatus());
	}

	@ExceptionHandler(value = TechnicalException.class)
	public ResponseEntity<ApiError> handleTechnicalException(TechnicalException e) {
		technicalLog.error("[handleTechnicalException] message: {}", e.getMessage(), e);
		ApiError apiError = new ApiError(HttpStatus.BAD_GATEWAY, e.getMessage());
		return new ResponseEntity<ApiError>(apiError, apiError.getStatus());
	}

	@ExceptionHandler(value = AuthorizeException.class)
	public ResponseEntity<ApiError> handleAuthenticateException(AuthorizeException e) {
		technicalLog.error("[handleAuthenticateException] message: {}", e.getMessage(), e);
		ApiError apiError = new ApiError(HttpStatus.UNAUTHORIZED, e.getMessage());
		return new ResponseEntity<ApiError>(apiError, apiError.getStatus());
	}

	@ExceptionHandler(value = Exception.class)
	public ResponseEntity<ApiError> handleGlobalException(Exception e) {
		technicalLog.error("[handleGlobalException] message: {}", e.getMessage(), e);
		ApiError apiError = new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
		return new ResponseEntity<ApiError>(apiError, apiError.getStatus());
	}
	
	
}
