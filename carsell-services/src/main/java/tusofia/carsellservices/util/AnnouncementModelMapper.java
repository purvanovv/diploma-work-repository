package tusofia.carsellservices.util;

import org.modelmapper.ModelMapper;

import tusofia.carsellservices.model.Announcement;
import tusofia.carsellservices.model.MetaProps;
import tusofia.carsellservices.model.dtos.AnnouncementCreateDTO;

public class AnnouncementModelMapper {

	private ModelMapper modelMapper;

	public AnnouncementModelMapper(ModelMapper modelMapper) {
		this.modelMapper = modelMapper;
	}

	public Announcement convertToEntity(AnnouncementCreateDTO announcementCreateDTO) {
		Announcement announcement = modelMapper.map(announcementCreateDTO, Announcement.class);
		announcement.setMetaProps(new MetaProps());
		return announcement;
	}
}
