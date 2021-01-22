package tusofia.carsellservices.security;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import com.fasterxml.jackson.databind.ObjectMapper;

import tusofia.carsellservices.util.Constants;

public class RestAuthenticationEntryPoint implements AuthenticationEntryPoint {

	@Override
	public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
			AuthenticationException authException) throws IOException {
		OutputStream out = httpServletResponse.getOutputStream();

		httpServletResponse.setStatus(Constants.HTTP_STATUS_UNAUTHORIZED);
		ObjectMapper mapper = new ObjectMapper();
		mapper.writeValue(out, "Няма потребителски права!");

		out.flush();
	}

}
