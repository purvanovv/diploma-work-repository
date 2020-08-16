prompt executing script crtb_ANNOUNCEMENTS.sql in schema &&sapp

CREATE TABLE &&sapp..ANNOUNCEMENTS(
  ID NUMBER (15) NOT NULL,
  MAIN_CATEGORY_ID NUMBER(15) NOT NULL,
  BRAND VARCHAR2 (60 CHAR) NOT NULL,
  MODEL VARCHAR2 (60 CHAR) NOT NULL,
  ENGINE_TYPE  VARCHAR2 (60 CHAR) NOT NULL,
  CONDITION VARCHAR2 (60 CHAR) NOT NULL,
  HORSE_POWER NUMBER (10) NOT NULL,
  GEARBOX_TYPE VARCHAR2 (60 CHAR) NOT NULL,
  SUB_CATEGORY_ID  NUMBER (10) NOT NULL,
  CUBATURE NUMBER (10) NOT NULL,
  COOLING_TYPE VARCHAR2 (60 CHAR) NOT NULL,
  ENGINE_CATEGORY NUMBER (1) NOT NULL,
  PRICE NUMBER (10) NOT NULL,
  CURRENCY VARCHAR2 (10 CHAR) NOT NULL,
  DATE_OF_MANUFACTURE DATE NOT NULL,
  MILEAGE NUMBER (10) NOT NULL,
  COLOR VARCHAR2 (20 CHAR) NOT NULL,
  REGION VARCHAR2 (60 CHAR) NOT NULL,
  CITY VARCHAR2 (60 CHAR) NOT NULL,
  PERIOD_ID NUMBER(15) NOT NULL,
  AD_VALID_FROM DATE NOT NULL,
  AD_VALID_TO DATE NOT NULL,
  DESCRIPTION VARCHAR2 (2000 CHAR),
  CREATED_ON DATE,
  CREATED_BY VARCHAR2(60 CHAR),
  DELETE_FLAG CHAR(1),
  MODIFIED_BY VARCHAR2(60 CHAR),
  MODIFIED_ON DATE,
  DELETE_BY VARCHAR2(60 CHAR)
)
LOGGING;