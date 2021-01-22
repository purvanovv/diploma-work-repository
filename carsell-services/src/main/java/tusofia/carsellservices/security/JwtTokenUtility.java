package tusofia.carsellservices.security;

import java.sql.Date;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import tusofia.carsellservices.model.User;
import tusofia.carsellservices.util.Constants;

public class JwtTokenUtility {

	private String jwtSecret;

	public JwtTokenUtility(String jwtSecret) {
		this.jwtSecret = jwtSecret;
	}

	public String buildToken(User user, long jwtExpirationTime) {

		byte[] signingKey = jwtSecret.getBytes();

		return Jwts.builder().signWith(Keys.hmacShaKeyFor(signingKey), SignatureAlgorithm.HS512)
				.setHeaderParam("typ", Constants.TOKEN_TYPE).setIssuer(Constants.TOKEN_ISSUER)
				.setAudience(Constants.TOKEN_AUDIENCE).setSubject(user.getUsername())
				.setExpiration(new Date(jwtExpirationTime)).compact();
	}
}
