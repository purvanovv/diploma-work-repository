package tusofia.carsellservices;

import java.lang.invoke.MethodHandles;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;

public class ServletInitializer extends SpringBootServletInitializer {

	private final Logger businessLog = LoggerFactory
			.getLogger("business." + MethodHandles.lookup().lookupClass().getCanonicalName());

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(CarsellServicesApplication.class);
	}

	@Bean
	public ApplicationListener<ApplicationReadyEvent> startupListener() {
		return event -> businessLog.info("CARSELL-SERVICES started");
	}
}
