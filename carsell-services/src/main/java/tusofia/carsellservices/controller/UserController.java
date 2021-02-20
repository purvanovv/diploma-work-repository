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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import tusofia.carsellservices.exceptions.EmailExistsException;
import tusofia.carsellservices.model.ResponseMessage;
import tusofia.carsellservices.model.User;
import tusofia.carsellservices.model.UserInfo;
import tusofia.carsellservices.service.UserService;

@RestController
@RequestMapping(path = "api")
public class UserController {
	private UserService userService;

	private final Logger businessLog = LoggerFactory
			.getLogger("business." + MethodHandles.lookup().lookupClass().getCanonicalName());

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@RequestMapping(value = "/users/userInfo", method = RequestMethod.GET)
	public ResponseEntity<UserInfo> getUserInfo(@RequestParam Long userId) {
		businessLog.info("Calling getUserInfo for userId={}", userId);
		UserInfo userInfo = userService.getUserInfoByUserId(userId);
		businessLog.info("Call to getUserInfo for userId={} completed", userId);
		return new ResponseEntity<UserInfo>(userInfo, HttpStatus.OK);
	}

	@RequestMapping(value = "/users/userInfo", method = RequestMethod.PUT)
	public ResponseEntity<ResponseMessage> updateUserInfo(@RequestBody UserInfo userInfo) throws EmailExistsException {
		businessLog.info("Calling updateUserInfo for userId={}", userInfo.getUserId());
		User user = userService.getUserByEmail(userInfo.getEmail());
		if (user != null && user.getId() != userInfo.getId()) {
			throw new EmailExistsException("Потребител с имейл " + userInfo.getEmail() + " съществува.", (short) 407);
		}
		userService.updateUserInfo(userInfo);
		businessLog.info("Call to updateUserInfo for userId={} completed", userInfo.getUserId());
		String message = "Updated the user info successfully";
		return new ResponseEntity<ResponseMessage>(new ResponseMessage(message), HttpStatus.OK);
	}
}
