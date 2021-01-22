package tusofia.carsellservices.security;

import java.io.IOException;
import java.io.OutputStream;
import java.lang.invoke.MethodHandles;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import tusofia.carsellservices.model.JwtResponse;
import tusofia.carsellservices.model.User;
import tusofia.carsellservices.util.Constants;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private final JwtTokenUtility jwtJwtTokenUtility;

	private final long jwtValidationTime;

	private final Logger securityLog = LoggerFactory
			.getLogger("security." + MethodHandles.lookup().lookupClass().getCanonicalName());

	private final AuthenticationManager authenticationManager;

	public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtTokenUtility jwtTokenUtility,
			long jwtValidationTime) {
		this.jwtValidationTime = jwtValidationTime;
		this.authenticationManager = authenticationManager;
		this.jwtJwtTokenUtility = jwtTokenUtility;

		setFilterProcessesUrl(Constants.AUTH_LOGIN_URL);
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		securityLog.info("Attempt to authenticate with username " + username);
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,
				password);

		try {
			return authenticationManager.authenticate(authenticationToken);
		} catch (AuthenticationException authException) {

			securityLog.warn("Authentication error.Error message: " + authException.getMessage(), authException);
			throw authException;
		}

	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
			FilterChain filterChain, Authentication authentication) throws IOException {
		User user = ((User) authentication.getPrincipal());
		securityLog.info("Successful authentication");

		long jwtExpirationTime = System.currentTimeMillis() + jwtValidationTime;
		String token = jwtJwtTokenUtility.buildToken(user, jwtExpirationTime);

		JwtResponse dto = new JwtResponse(user.getId(), user.getUsername(), token, jwtExpirationTime);
		OutputStream out = response.getOutputStream();
		response.setContentType("application/json");
		ObjectMapper mapper = new ObjectMapper();
		mapper.writeValue(out, dto);
		out.flush();

	}

}
