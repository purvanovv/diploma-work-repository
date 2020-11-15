package tusofia.carsellservices.util;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;

import tusofia.carsellservices.model.AnnouncementVehicle;
import tusofia.carsellservices.model.dtos.AnnouncementVehiclePreviewDTO;
import tusofia.carsellservices.model.enums.AirConditionType;
import tusofia.carsellservices.model.enums.ConditionType;
import tusofia.carsellservices.model.enums.CoolingType;
import tusofia.carsellservices.model.enums.Currency;
import tusofia.carsellservices.model.enums.EmissionStandartType;
import tusofia.carsellservices.model.enums.EngineCategoryType;
import tusofia.carsellservices.model.enums.EngineType;
import tusofia.carsellservices.model.enums.GearboxType;
import tusofia.carsellservices.model.enums.HeatingType;
import tusofia.carsellservices.model.enums.MaterialType;
import tusofia.carsellservices.model.enums.ToiletType;

public class AnnouncementVehicleModelMapperConverter {
	private Converter<AnnouncementVehicle, AnnouncementVehiclePreviewDTO> previewConverter;

	public AnnouncementVehicleModelMapperConverter() {
		previewConverter = new Converter<AnnouncementVehicle, AnnouncementVehiclePreviewDTO>() {

			@Override
			public AnnouncementVehiclePreviewDTO convert(
					MappingContext<AnnouncementVehicle, AnnouncementVehiclePreviewDTO> context) {
				AnnouncementVehiclePreviewDTO dest = new AnnouncementVehiclePreviewDTO();
				AnnouncementVehicle source = context.getSource();
				dest.setId(source.getId());
				dest.setMainCategory(source.getMainCategory());
				dest.setMake(source.getMake());
				dest.setModel(source.getModel());
				dest.setEngineType(EngineType.getValue(source.getEngineType()));
				dest.setConditionType(ConditionType.getValue(source.getConditionType()));
				dest.setHorsePower(source.getHorsePower());
				dest.setEmissionStandartType(EmissionStandartType.getValue(source.getEmissionStandartType()));
				dest.setGearboxType(GearboxType.getValue(source.getGearboxType()));
				dest.setSubCategory(source.getSubCategory());
				dest.setCoolingType(CoolingType.getValue(source.getCoolingType()));
				dest.setNumberOfAxels(source.getNumberOfAxels());
				dest.setNumberOfSeats(source.getNumberOfSeats());
				dest.setWeightCapacity(source.getWeightCapacity());
				dest.setPrice(source.getPrice());
				dest.setCurrency(Currency.getValue(source.getCurrency()));
				dest.setDateOfManufacture(DateUtils.getSubmissionDate(source.getDateOfManufacture()));
				dest.setMileage(source.getMileage());
				dest.setColor(source.getColor());
				dest.setRegion(source.getRegion());
				dest.setCity(source.getCity());
				dest.setValidDays(source.getValidDays());
				dest.setCubature(source.getCubature());
				dest.setEngineCategoryType(EngineCategoryType.getValue(source.getEngineCategoryType()));
				dest.setValidFrom(DateUtils.getSubmissionDate(source.getValidFrom()));
				dest.setTotalWeight(source.getTotalWeight());
				dest.setWorkingVolume(source.getWorkingVolume());
				dest.setHoursOfOperation(source.getHoursOfOperation());
				dest.setNumberOfBeds(source.getNumberOfBeds());
				dest.setToiletType(ToiletType.getValue(source.getToiletType()));
				dest.setHeatingType(HeatingType.getValue(source.getHeatingType()));
				dest.setAirConditionType(AirConditionType.getValue(source.getAirConditionType()));
				dest.setLengthSize(source.getLengthSize());
				dest.setMaterialType(MaterialType.getValue(source.getMaterialType()));
				dest.setWidth(source.getWidth());
				dest.setBicycleSize(source.getBicycleSize());
				dest.setNumberOfGears(source.getNumberOfGears());
				dest.setDescription(source.getDescription());
				dest.setMetaProps(source.getMetaProps());
				return dest;
			}

		};
	}

	public Converter<AnnouncementVehicle, AnnouncementVehiclePreviewDTO> getPreviewConverter() {
		return previewConverter;
	}

	public void setPreviewConverter(Converter<AnnouncementVehicle, AnnouncementVehiclePreviewDTO> previewConverter) {
		this.previewConverter = previewConverter;
	}

}
