package tusofia.carsellservices.repository;

import tusofia.carsellservices.model.User;
import tusofia.carsellservices.model.UserInfo;

public interface UserRepository {
	public User getUserByUsername(String username);

	public UserInfo getUserInfoByUserId(Long userId);

	public Long createUser(User user);

	public Long createUserInfo(UserInfo userInfo);

	public void updatePassword(String password, Long userId);

	public void updateUserInfo(UserInfo userInfo);
}
