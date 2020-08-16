prompt Granting privileges for synonyms to &role_ro

GRANT SELECT ON &&sapp..VERSION TO &role_ro;

GRANT SELECT ON &&sapp..DOCUMENT TO &role_ro;
GRANT SELECT ON &&sapp..PROCESS TO &role_ro;
GRANT SELECT ON &&sapp..ACTION TO &role_ro;
GRANT SELECT ON &&sapp..PACKAGE TO &role_ro;
GRANT SELECT ON &&sapp..ONLINE_ENQUIRY_CONTRACTS TO &role_ro;
GRANT SELECT ON &&sapp..ONLINE_ENQUIRY_STATUS TO &role_ro;
GRANT SELECT ON &&sapp..RENDERING_DOCUMENT TO &role_ro;
GRANT SELECT ON &&sapp..CONTRACT TO &role_ro;
GRANT SELECT ON &&sapp..MONITOR_HOUSEKEEPING TO &role_ro;
GRANT SELECT ON &&sapp..CONTRACTS_HOUSEKEEPING_SEQ TO &role_ro;
