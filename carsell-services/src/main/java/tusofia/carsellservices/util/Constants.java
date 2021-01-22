package tusofia.carsellservices.util;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Constants {
	public final static List<String> availableImageFileTypes = Collections
			.unmodifiableList(Arrays.asList("image/jpeg"));

	public final static BigDecimal EUR = new BigDecimal(1.96);
	public final static BigDecimal USD = new BigDecimal(1.62);

	public static final String AUTH_LOGIN_URL = "/auth/signin";

	// JWT token defaults
	public static final String TOKEN_HEADER = "Authorization";
	public static final String TOKEN_EXPIRED = "Token-Expired";
	public static final String TOKEN_PREFIX = "Bearer ";
	public static final String TOKEN_TYPE = "JWT";
	public static final String TOKEN_ISSUER = "carsell-services";
	public static final String TOKEN_AUDIENCE = "carsell-client";
	public static final String DEFAULT_CHARSET = "UTF-8";
	public static final int HTTP_STATUS_UNAUTHORIZED = 401;
	public static final int HTTP_STATUS_ACCESS_DENIED = 403;
	public static final int BCRYPT_ROUND = 10;

}
