package tusofia.carsellservices.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import tusofia.carsellservices.service.UserService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Value("${jwt.validation.time}")
	private long jwtValidationTime;

	@Value("${jwt.secret}")
	private String jwtSecret;

	private UserService userService;
	
	private BCryptPasswordEncoder encoder;

    @Autowired
	public void globalUserDetails(AuthenticationManagerBuilder auth,UserService userService,BCryptPasswordEncoder encoder) throws Exception {
		auth.userDetailsService(userService).passwordEncoder(encoder);
		this.userService = userService;
		this.encoder = encoder;
	}

	private static final String[] AUTH_WHITELIST = {
			// -- swagger ui
			"/v2/api-docs", "/swagger-resources", "/swagger-resources/**", "/configuration/ui",
			"/configuration/security", "/swagger-ui.html", "/webjars/**", "/version" , "/api/resetPassword"
			// other public endpoints of your API may be appended to this array
	};

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable().authorizeRequests().antMatchers(AUTH_WHITELIST).permitAll()
				.antMatchers("/announcements/**","/users/**").authenticated().and().exceptionHandling().accessDeniedHandler(accessDeniedHandler())
				.authenticationEntryPoint(authenticationEntryPoint()).and()
				.addFilter(new JwtAuthenticationFilter(authenticationManager(), jwtTokenUtility(),jwtValidationTime))
				.addFilter(new JwtAuthorizationFilter(authenticationManager(),jwtTokenUtility(),jwtValidationTime,jwtSecret)).sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}

	@Override
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userService).passwordEncoder(encoder);
	}

	@Bean
	RestAccessDeniedHandler accessDeniedHandler() {
		return new RestAccessDeniedHandler();
	}

	@Bean
	RestAuthenticationEntryPoint authenticationEntryPoint() {
		return new RestAuthenticationEntryPoint();
	}

	@Bean
	JwtTokenUtility jwtTokenUtility() {
		return new JwtTokenUtility(jwtSecret);
	}

}
