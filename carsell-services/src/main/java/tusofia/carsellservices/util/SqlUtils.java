package tusofia.carsellservices.util;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import org.springframework.core.io.DefaultResourceLoader;

public class SqlUtils {
	
	public static String getClasspathResource(String sqlPath, String sqlFileName) {
		try (InputStream is = new DefaultResourceLoader()
				.getResource(sqlPath + System.getProperty("file.separator") + sqlFileName).getInputStream()) {
			return readFully(is);
		} catch (IOException e1) {
			throw new RuntimeException("Failed to read resource. " + sqlFileName, e1);
		}
	}

	private static String readFully(InputStream inputStream) throws IOException {
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		byte[] buffer = new byte[1024];
		int length = 0;
		while ((length = inputStream.read(buffer)) != -1) {
			baos.write(buffer, 0, length);
		}

		return new String(baos.toByteArray(), StandardCharsets.UTF_8);
	}

	public static String getBoolean(Boolean bool) {
		if (bool != null) {
			return bool ? "Y" : "N";
		} else {
			return null;
		}
	}

	public static Boolean getBoolean(String boolString) {
		if (boolString != null) {
			return boolString.toLowerCase().equals("y") ? true : false;
		} else {
			return null;
		}
	}
}
