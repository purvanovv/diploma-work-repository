prompt executing script crtb_REGION_CITIES.sql in schema &&sapp

CREATE TABLE &&sapp..REGION_CITIES(
  ID NUMBER (15) NOT NULL,
  CITY_NAME VARCHAR2(100 CHAR) NOT NULL,
  REGION_ID NUMBER (15) NOT NULL
)
LOGGING;