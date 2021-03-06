prompt executing script crtb_ANNOUNCEMENT_VEHICLE.sql in schema &&sapp

CREATE TABLE &&sapp..ANNOUNCEMENT_VEHICLE(
  ID NUMBER (15) NOT NULL,
  MAIN_CATEGORY_ID NUMBER(15) NOT NULL,
  MAKE VARCHAR2 (1000 CHAR) NOT NULL,
  MODEL VARCHAR2 (1000 CHAR) NOT NULL,
  ENGINE_TYPE  VARCHAR2 (1000 CHAR),
  CONDITION_TYPE VARCHAR2 (1000 CHAR),
  HORSE_POWER NUMBER (10),
  EMISSION_STANDART_TYPE VARCHAR2 (1000 CHAR),
  GEARBOX_TYPE VARCHAR2 (1000 CHAR),
  SUB_CATEGORY_ID  NUMBER (15) NOT NULL,
  COOLING_TYPE VARCHAR2 (1000 CHAR),
  NUMBER_OF_AXELS NUMBER (10),
  NUMBER_OF_SEATS NUMBER (10),
  WEIGHT_CAPACITY NUMBER (10),
  PRICE NUMBER (10) NOT NULL,
  CURRENCY VARCHAR2 (10 CHAR) NOT NULL,
  DATE_OF_MANUFACTURE DATE NOT NULL,
  MILEAGE NUMBER (10),
  COLOR VARCHAR2 (1000 CHAR),
  REGION VARCHAR2 (1000 CHAR) NOT NULL,
  CITY VARCHAR2 (1000 CHAR) NOT NULL,
  VALID_DAYS NUMBER(3) NOT NULL,
  CUBATURE NUMBER (10),
  ENGINE_CATEGORY_TYPE VARCHAR2 (1000 CHAR),
  VALID_FROM DATE NOT NULL,
  VALID_TO DATE NOT NULL,
  TOTAL_WEIGHT NUMBER(10),
  WORKING_VOLUME NUMBER(10),
  HOURS_OF_OPERATION NUMBER(10),
  NUMBER_OF_BEDS NUMBER(2),
  TOILET_TYPE VARCHAR (1000),
  HEATING_TYPE VARCHAR (1000),
  AIR_CONDITION_TYPE VARCHAR (1000),
  LENGTH_SIZE NUMBER(10),
  MATERIAL_TYPE VARCHAR (1000),
  WIDTH NUMBER(10),
  BICYCLE_SIZE NUMBER(10),
  NUMBER_OF_GEARS NUMBER(5),
  DESCRIPTION VARCHAR2 (2000 CHAR),  
  USER_INFO_ID NUMBER (15) NOT NULL,
  CREATED_ON DATE NOT NULL,
  CREATED_BY VARCHAR2(60 CHAR) NOT NULL,
  DELETE_FLAG CHAR(1) NOT NULL,
  MODIFIED_BY VARCHAR2(60 CHAR),
  MODIFIED_ON DATE,
  DELETE_BY VARCHAR2(60 CHAR)
)
LOGGING;