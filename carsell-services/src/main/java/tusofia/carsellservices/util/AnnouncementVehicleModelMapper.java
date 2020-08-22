package tusofia.carsellservices.util;

import org.modelmapper.ModelMapper;

import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.MetaProps;
import tusofia.carsellservices.model.dtos.AnnouncementVehicleCreateDTO;

public class AnnouncementVehicleModelMapper {

	private ModelMapper modelMapper;

	public AnnouncementVehicleModelMapper(ModelMapper modelMapper) {
		this.modelMapper = modelMapper;
	}

	public AnnouncementVehicle convertToEntity(AnnouncementVehicleCreateDTO announcementVehicleCreateDTO) {
		AnnouncementVehicle announcementVehicle = modelMapper.map(announcementVehicleCreateDTO,
				AnnouncementVehicle.class);
		announcementVehicle.setMetaProps(new MetaProps());
		return announcementVehicle;
	}
}
