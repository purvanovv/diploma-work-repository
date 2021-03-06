package tusofia.carsellservices.security;

import java.io.IOException;
import java.io.OutputStream;
import java.lang.invoke.MethodHandles;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.http.HttpStatus;
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
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import tusofia.carsellservices.exceptions.ApiError;
import tusofia.carsellservices.exceptions.AuthorizeException;
import tusofia.carsellservices.model.User;
import tusofia.carsellservices.util.Constants;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

	private final static Logger securityLog = LoggerFactory
			.getLogger("security." + MethodHandles.lookup().lookupClass().getCanonicalName());

	private final String jwtSecret;

	public JwtAuthorizationFilter(AuthenticationManager authenticationManager, String jwtSecret) {
		super(authenticationManager);
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

		} catch (AuthorizeException authException) {
			OutputStream out = response.getOutputStream();
			ApiError apiError = new ApiError(HttpStatus.UNAUTHORIZED, authException.getMessage());
			response.setStatus(apiError.getStatus().value());
			ObjectMapper mapper = new ObjectMapper();
			mapper.writeValue(out, apiError);
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
				throw new AuthorizeException("Токена е изтекъл");
			} catch (UnsupportedJwtException exception) {
				securityLog.warn(
						"Request to parse unsupported JWT : {} failed : {}" + token + "  " + exception.getMessage());
				throw new AuthorizeException("Грешен формат на токена");
			} catch (MalformedJwtException exception) {
				securityLog
						.warn("Request to parse invalid JWT : {} failed : {}" + token + "  " + exception.getMessage());
				throw new AuthorizeException("Невалиден токен");
			} catch (SignatureException exception) {
				securityLog.warn("Request to parse JWT with invalid signature : {} failed : {}" + token + "  "
						+ exception.getMessage());
				throw new AuthorizeException("Невалиден подпис на токена");
			} catch (IllegalArgumentException exception) {
				securityLog.warn(
						"Request to parse empty or null JWT : {} failed : {}" + token + "  " + exception.getMessage());
				throw new AuthorizeException("Не е изпратен токен");
			}
		}

		return null;
	}
}
