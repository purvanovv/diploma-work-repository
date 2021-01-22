package tusofia.carsellservices.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import tusofia.carsellservices.model.User;
import tusofia.carsellservices.model.UserInfo;
import tusofia.carsellservices.model.dtos.SignupDTO;
import tusofia.carsellservices.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	private UserRepository userRepository;

	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.userRepository = userRepository;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.getUserByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException(
					String.format("Потребител с потребителско име \" %s \" не е намерен!", username));
		}
		return user;
	}

	@Override
	public void registerUser(SignupDTO createUserDTO) {
		String bCryptedPassword = bCryptPasswordEncoder.encode(createUserDTO.getPassword());
		User user = new User(createUserDTO.getUsername(), bCryptedPassword);
		Long userId = userRepository.createUser(user);
		UserInfo userInfo = new UserInfo(createUserDTO.getEmail(), createUserDTO.getUsername(),
				createUserDTO.getFirstName(), createUserDTO.getLastName(), createUserDTO.getTelephone(), userId,
				createUserDTO.getImage());
		userRepository.createUserInfo(userInfo);
	}

	@Override
	public UserInfo getUserInfoByUserId(Long userId) {
		return userRepository.getUserInfoByUserId(userId);
	}

	@Override
	public void updatePassword(String password, Long userId) {
		userRepository.updatePassword(password, userId);

	}

	@Override
	public void updateUserInfo(UserInfo userInfo) {
		userRepository.updateUserInfo(userInfo);

	}

}
