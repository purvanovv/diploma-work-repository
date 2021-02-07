prompt Granting privileges for synonyms to &role_rw

GRANT SELECT ON &&sapp..APP_SEQ TO &role_rw;

GRANT SELECT, INSERT, DELETE, UPDATE ON &&sapp..ANNOUNCEMENT_VEHICLE TO &role_rw;
GRANT SELECT, INSERT, DELETE, UPDATE ON &&sapp..MAIN_CATEGORIES TO &role_rw;
GRANT SELECT, INSERT, DELETE, UPDATE ON &&sapp..SUB_CATEGORIES TO &role_rw;
GRANT SELECT, INSERT, DELETE, UPDATE ON &&sapp..MAKE_MODEL TO &role_rw;
GRANT SELECT, INSERT, DELETE, UPDATE ON &&sapp..REGIONS TO &role_rw;
GRANT SELECT, INSERT, DELETE, UPDATE ON &&sapp..REGION_CITIES TO &role_rw;
GRANT SELECT, INSERT, DELETE, UPDATE ON &&sapp..IMAGE_FILES TO &role_rw;
GRANT SELECT, INSERT, DELETE, UPDATE ON &&sapp..USER_INFO TO &role_rw;
GRANT SELECT, INSERT, DELETE, UPDATE ON &&sapp..USERS TO &role_rw;
