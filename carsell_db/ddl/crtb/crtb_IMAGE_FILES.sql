prompt executing script crtb_IMAGE_FILES.sql in schema &&sapp

CREATE TABLE &&sapp..IMAGE_FILES(
  ID NUMBER (15) NOT NULL,
  NAME VARCHAR2 (1000 CHAR) NOT NULL,	
  TYPE VARCHAR2 (1000 CHAR) NOT NULL,
  DATA BLOB NOT NULL,
  ANNOUNCEMENT_ID NUMBER(15) NOT NULL
)
LOGGING;