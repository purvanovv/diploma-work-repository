package tusofia.carsellservices.model;

public class ImageFile {
	private Long id;
	private String name;
	private String dataType;
	private byte[] data;
	private Long announcementId;

	public ImageFile(String name, String dataType, byte[] data, Long announcementId) {
		this.name = name;
		this.dataType = dataType;
		this.data = data;
		this.announcementId = announcementId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDataType() {
		return dataType;
	}

	public void setDataType(String dataType) {
		this.dataType = dataType;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public Long getAnnouncementId() {
		return announcementId;
	}

	public void setAnnouncementId(Long announcementId) {
		this.announcementId = announcementId;
	}

}
