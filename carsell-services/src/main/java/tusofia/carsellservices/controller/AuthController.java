package tusofia.carsellservices.controller;

import java.lang.invoke.MethodHandles;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import tusofia.carsellservices.model.ResponseMessage;
import tusofia.carsellservices.model.dtos.SignupDTO;
import tusofia.carsellservices.service.UserService;

@RestController
@RequestMapping(path = "auth")
public class AuthController {
	private UserService userService;

	private final Logger businessLog = LoggerFactory
			.getLogger("business." + MethodHandles.lookup().lookupClass().getCanonicalName());

	@Autowired
	public AuthController(UserService userService) {
		this.userService = userService;
	}

	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public ResponseEntity<ResponseMessage> registerUser(@RequestBody SignupDTO createUserDTO) {
		businessLog.info("Calling registerUser for username={}", createUserDTO.getUsername());
		//userService.registerUser(createUserDTO);
		businessLog.info("Call to registerUser for username={} completed", createUserDTO.getUsername());
		String message = "User created successfully";
		return new ResponseEntity<ResponseMessage>(new ResponseMessage(message), HttpStatus.OK);
	}
}
