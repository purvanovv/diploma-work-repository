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

}
