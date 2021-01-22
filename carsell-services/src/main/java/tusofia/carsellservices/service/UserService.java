package tusofia.carsellservices.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import tusofia.carsellservices.model.UserInfo;
import tusofia.carsellservices.model.dtos.SignupDTO;

public interface UserService extends UserDetailsService{
	public void registerUser(SignupDTO createUserDTO);
	
	public UserInfo getUserInfoByUserId(Long userId);
	
	public void updatePassword(String password, Long userId);

	public void updateUserInfo(UserInfo userInfo);
}
