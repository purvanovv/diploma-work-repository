package tusofia.carsellservices.exceptions;

import java.util.ArrayList;
import java.util.List;

public class BusinessExceptionModel {
	private int statusCode;

	private List<String> messages;

	public BusinessExceptionModel(int statusCode, String message) {
		super();
		this.statusCode = statusCode;
		this.messages = new ArrayList<String>();
		this.messages.add(message);
	}

	public BusinessExceptionModel(int statusCode, List<String> messages) {
		super();
		this.statusCode = statusCode;
		this.messages = messages;
	}

	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public List<String> getMessages() {
		return messages;
	}

	public void setMessages(List<String> messages) {
		this.messages = messages;
	}
}
