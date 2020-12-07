package tusofia.carsellservices.util;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;

import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.MetaProps;
import tusofia.carsellservices.model.dtos.AnnouncementVehicleCreateDTO;
import tusofia.carsellservices.model.dtos.AnnouncementVehiclePreviewDTO;

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

	public AnnouncementVehicleCreateDTO convertToCreateDTO(AnnouncementVehicle announcementVehicle) {
		return modelMapper.map(announcementVehicle, AnnouncementVehicleCreateDTO.class);
	}

	public AnnouncementVehiclePreviewDTO convertToPreviewDTO(AnnouncementVehicle source) {
		AnnouncementVehiclePreviewDTO target = modelMapper.map(source, AnnouncementVehiclePreviewDTO.class);
		target.setImageFiles(source.getImageFiles());
		return target;
	}

	public List<AnnouncementVehicleCreateDTO> convertToCreateDTOs(List<AnnouncementVehicle> announcementVehicles) {
		if (null != announcementVehicles) {
			return announcementVehicles.stream().map(a -> convertToCreateDTO(a)).collect(Collectors.toList());
		}
		return null;
	}

	public List<AnnouncementVehiclePreviewDTO> convertToPreviewDTOs(List<AnnouncementVehicle> announcementVehicles) {
		if (null != announcementVehicles) {
			return announcementVehicles.stream().map(a -> convertToPreviewDTO(a)).collect(Collectors.toList());
		}
		return null;
	}
}
