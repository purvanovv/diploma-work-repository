prompt Granting privileges for synonyms to &role_ro

GRANT SELECT ON &&sapp..ANNOUNCEMENT_VEHICLE TO &role_ro;
GRANT SELECT ON &&sapp..MAIN_CATEGORIES TO &role_ro;
GRANT SELECT ON &&sapp..SUB_CATEGORIES TO &role_ro;
GRANT SELECT ON &&sapp..MAKE_MODEL TO &role_ro;
GRANT SELECT ON &&sapp..REGIONS TO &role_ro;
GRANT SELECT ON &&sapp..REGION_CITIES TO &role_ro;
GRANT SELECT ON &&sapp..IMAGE_FILES TO &role_ro;
GRANT SELECT ON &&sapp..USERS TO &role_ro;
GRANT SELECT ON &&sapp..USER_INFO TO &role_ro;