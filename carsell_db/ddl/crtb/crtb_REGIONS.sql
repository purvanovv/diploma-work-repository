prompt executing script crtb_REGIONS.sql in schema &&sapp

CREATE TABLE &&sapp..REGIONS(
  ID NUMBER (15) NOT NULL,
  REGION_NAME VARCHAR2(100 CHAR) NOT NULL
)
LOGGING;