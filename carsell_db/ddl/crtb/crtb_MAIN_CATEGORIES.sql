prompt executing script crtb_MAIN_CATEGORIES.sql in schema &&sapp

CREATE TABLE &&sapp..MAIN_CATEGORIES(
  ID NUMBER (15) NOT NULL,
  NAME VARCHAR2(60 CHAR) NOT NULL
)
LOGGING;