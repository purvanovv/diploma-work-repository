package tusofia.carsellservices.config;

import javax.sql.DataSource;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import tusofia.carsellservices.util.AnnouncementVehicleModelMapper;
import tusofia.carsellservices.util.AnnouncementVehicleModelMapperConverter;
import tusofia.carsellservices.util.Constants;

@Configuration
public class AppConfig {

	@Value("${datasource.driverClassName}")
	private String driverClassName;

	@Value("${datasource.url}")
	private String url;

	@Value("${datasource.username}")
	private String username;

	@Value("${datasource.password}")
	private String password;

	@Bean
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName(driverClassName);
		dataSource.setUrl(url);
		dataSource.setUsername(username);
		dataSource.setPassword(password);
		return dataSource;
	}

	@Bean
	public AnnouncementVehicleModelMapperConverter announcementVehicleModelMapperConverter() {
		return new AnnouncementVehicleModelMapperConverter();
	}

	@Bean
	public NamedParameterJdbcTemplate namedParameterJdbcTemplate(DataSource dataSource) {
		return new NamedParameterJdbcTemplate(dataSource);
	}

	@Bean
	public ModelMapper modelMapper(AnnouncementVehicleModelMapperConverter announcementVehicleModelMapperConverter) {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setAmbiguityIgnored(true);
		modelMapper.addConverter(announcementVehicleModelMapperConverter.getPreviewConverter());
		return modelMapper;
	}

	@Bean
	public AnnouncementVehicleModelMapper AnnouncementModelMapper(ModelMapper modelMapper) {
		return new AnnouncementVehicleModelMapper(modelMapper);
	}
	
	@Bean
	public BCryptPasswordEncoder encoder() {
		return new BCryptPasswordEncoder(Constants.BCRYPT_ROUND);
	}

}
