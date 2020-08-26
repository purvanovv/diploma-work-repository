package tusofia.carsellservices.util;

import java.util.List;
import java.util.stream.Collectors;

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

	public AnnouncementVehicleCreateDTO convertToDTO(AnnouncementVehicle announcementVehicle) {
		return modelMapper.map(announcementVehicle, AnnouncementVehicleCreateDTO.class);
	}

	public List<AnnouncementVehicleCreateDTO> convertToDTOs(List<AnnouncementVehicle> announcementVehicles) {
		if (null != announcementVehicles) {
			return announcementVehicles.stream().map(a -> convertToDTO(a)).collect(Collectors.toList());
		}
		return null;
	}
}
