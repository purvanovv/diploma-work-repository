package tusofia.carsellservices.security;

import java.io.OutputStream;
import java.lang.invoke.MethodHandles;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.util.StringUtils;

import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.IOException;
import io.jsonwebtoken.security.SignatureException;
import tusofia.carsellservices.exceptions.AuthorizeException;
import tusofia.carsellservices.model.User;
import tusofia.carsellservices.util.Constants;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

	private final static Logger securityLog = LoggerFactory
			.getLogger("security." + MethodHandles.lookup().lookupClass().getCanonicalName());

	private final JwtTokenUtility jwtTokenUtility;

	private final long jwtValidationTime;

	private final String jwtSecret;

	public JwtAuthorizationFilter(AuthenticationManager authenticationManager, JwtTokenUtility jwtTokenUtility,
			long jwtValidationTime,String jwtSecret) {
		super(authenticationManager);
		this.jwtTokenUtility = jwtTokenUtility;
		this.jwtValidationTime = jwtValidationTime;
		this.jwtSecret = jwtSecret;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws IOException, ServletException, java.io.IOException {

		try {
			UsernamePasswordAuthenticationToken authentication = getAuthentication(request);
			if (authentication == null) {
				filterChain.doFilter(request, response);
				return;
			}

			SecurityContextHolder.getContext().setAuthentication(authentication);
			User user = new User();
			user.setUsername(authentication.getName());

			long jwtExpirationTime = System.currentTimeMillis() + jwtValidationTime;
			String token = jwtTokenUtility.buildToken(user, jwtExpirationTime);

			response.setHeader(Constants.TOKEN_HEADER, token);
			response.setHeader(Constants.TOKEN_EXPIRED, Long.toString(jwtExpirationTime));

		} catch (AuthorizeException authException) {
			OutputStream out = response.getOutputStream();

			response.setStatus(Constants.HTTP_STATUS_UNAUTHORIZED);
			ObjectMapper mapper = new ObjectMapper();
			mapper.writeValue(out, "Няма потребителски права!");

			out.flush();
		}

		filterChain.doFilter(request, response);

	}

	private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {

		String token = request.getHeader(Constants.TOKEN_HEADER);
		if (!StringUtils.isEmpty(token) && token.startsWith(Constants.TOKEN_PREFIX)) {
			try {
				byte[] signingKey = jwtSecret.getBytes();

				Jws<Claims> parsedToken = Jwts.parser().setSigningKey(signingKey)
						.parseClaimsJws(token.replace("Bearer ", ""));

				String username = parsedToken.getBody().getSubject();
				MDC.put("username", username);
				

				if (!StringUtils.isEmpty(username)) {
					return new UsernamePasswordAuthenticationToken(username, null, null);
				}
			}

			catch (ExpiredJwtException exception) {
				securityLog
						.warn("Request to parse expired JWT : {} failed : {}" + token + "  " + exception.getMessage());
				throw new AuthorizeException(exception.getMessage());
			} catch (UnsupportedJwtException exception) {
				securityLog.warn(
						"Request to parse unsupported JWT : {} failed : {}" + token + "  " + exception.getMessage());
				throw new AuthorizeException(exception.getMessage());
			} catch (MalformedJwtException exception) {
				securityLog
						.warn("Request to parse invalid JWT : {} failed : {}" + token + "  " + exception.getMessage());
				throw new AuthorizeException(exception.getMessage());
			} catch (SignatureException exception) {
				securityLog.warn("Request to parse JWT with invalid signature : {} failed : {}" + token + "  "
						+ exception.getMessage());
				throw new AuthorizeException(exception.getMessage());
			} catch (IllegalArgumentException exception) {
				securityLog.warn(
						"Request to parse empty or null JWT : {} failed : {}" + token + "  " + exception.getMessage());
				throw new AuthorizeException(exception.getMessage());
			}
		}

		return null;
	}
}
