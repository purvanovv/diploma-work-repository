prompt executing script crtb_MAKE_MODEL.sql in schema &&sapp

CREATE TABLE &&sapp..MAKE_MODEL(
  ID NUMBER (15) NOT NULL,
  MAKE VARCHAR2(1000 CHAR) NOT NULL,
  MODEL VARCHAR2(1000 CHAR) NOT NULL,
  MAIN_CATEGORY_ID NUMBER (15) NOT NULL
)
LOGGING;