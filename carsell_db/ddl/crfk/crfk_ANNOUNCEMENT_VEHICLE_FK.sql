ALTER TABLE &&sapp.."ANNOUNCEMENT_VEHICLE" ADD CONSTRAINT ANNOUNCEMENT_VEHICLE_MAIN_CATEGORY_FK FOREIGN KEY (MAIN_CATEGORY_ID) REFERENCES &&sapp.."MAIN_CATEGORIES" (ID) ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE &&sapp.."ANNOUNCEMENT_VEHICLE" ADD CONSTRAINT ANNOUNCEMENT_VEHICLE_SUB_CATEGORY_FK FOREIGN KEY (SUB_CATEGORY_ID) REFERENCES &&sapp.."SUB_CATEGORIES" (ID) ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE &&sapp.."ANNOUNCEMENT_VEHICLE" ADD CONSTRAINT ANNOUNCEMENT_USER_INFO_FK FOREIGN KEY (USER_INFO_ID) REFERENCES &&sapp.."USER_INFO" (ID) ON DELETE SET NULL NOT DEFERRABLE;