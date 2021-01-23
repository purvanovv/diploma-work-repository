package tusofia.carsellservices.controller;

import java.lang.invoke.MethodHandles;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tusofia.carsellservices.model.JwtResponse;
import tusofia.carsellservices.model.ResponseMessage;
import tusofia.carsellservices.model.User;
import tusofia.carsellservices.model.dtos.SigninDTO;
import tusofia.carsellservices.model.dtos.SignupDTO;
import tusofia.carsellservices.security.JwtTokenUtility;
import tusofia.carsellservices.service.UserService;

@RestController
@RequestMapping(path = "api")
public class AuthController {
	@Value("${jwt.validation.time}")
	private long jwtValidationTime;

	private UserService userService;

	private AuthenticationManager authenticationManager;

	private JwtTokenUtility jwtTokenUtility;

	private final Logger businessLog = LoggerFactory
			.getLogger("business." + MethodHandles.lookup().lookupClass().getCanonicalName());

	private final Logger securityLog = LoggerFactory
			.getLogger("security." + MethodHandles.lookup().lookupClass().getCanonicalName());

	@Autowired
	public AuthController(UserService userService, AuthenticationManager authenticationManager,
			JwtTokenUtility jwtTokenUtility) {
		this.userService = userService;
		this.authenticationManager = authenticationManager;
		this.jwtTokenUtility = jwtTokenUtility;
	}

	@RequestMapping(value = "/auth/signup", method = RequestMethod.POST)
	public ResponseEntity<ResponseMessage> registerUser(@RequestBody SignupDTO createUserDTO) {
		businessLog.info("Calling registerUser for username={}", createUserDTO.getUsername());
		userService.registerUser(createUserDTO);
		businessLog.info("Call to registerUser for username={} completed", createUserDTO.getUsername());
		String message = "User created successfully";
		return new ResponseEntity<ResponseMessage>(new ResponseMessage(message), HttpStatus.OK);
	}

	@RequestMapping(value = "/auth/signin", method = RequestMethod.POST)
	public ResponseEntity<JwtResponse> authenticateUser(@RequestBody SigninDTO signinDTO) {
		businessLog.info("Calling authenticateUser for username={}", signinDTO.getUsername());
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
				signinDTO.getUsername(), signinDTO.getPassword());

		Authentication authentication = authenticationManager.authenticate(authenticationToken);
		User user = ((User) authentication.getPrincipal());
		securityLog.info("Successful authentication");

		long jwtExpirationTime = System.currentTimeMillis() + jwtValidationTime;
		String token = jwtTokenUtility.buildToken(user, jwtExpirationTime);

		JwtResponse dto = new JwtResponse(user.getId(), user.getUsername(), token, jwtExpirationTime);
		businessLog.info("Call to authenticateUser for username={} completed", signinDTO.getUsername());
		return new ResponseEntity<JwtResponse>(dto, HttpStatus.OK);
	}
}
