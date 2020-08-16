-----------------------------------------------------------------------------
-- Template for common EBS variablenames
-- --------------------------------------------------------------------------
-- temporary password of the users during installation
-- [EBS-APDS] Line commented out by EBS Packaging Server.

-- Abbreviation of the application name
-- [EBS-APDS] Original line: DEFINE app=<application>
DEFINE app=CAR_SELL

----------------------------------
-- users (global information)
----------------------------------
-- bsll
DEFINE sapp=&&app._OWNER
DEFINE susr=&&app._USER
-- bsll
DEFINE pw_susr=Start*123s
DEFINE pw_sapp=Start*123s
----------------------------------
-- connects (local information)
----------------------------------
-- common
DEFINE cadm="/ as sysdba"
-- bsll
DEFINE csusr=&&susr./&&pw_susr
DEFINE csapp=&&sapp./&&pw_sapp
--DEFINE csusr=&&susr/&&pw_susr@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=dbkpogs139scan.rze.de.db.com)(Port=1523))(CONNECT_DATA=(SERVICE_NAME=vdb35.de.db.com)))
--DEFINE csapp=&&sapp/&&pw_sapp@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=dbkpogs139scan.rze.de.db.com)(Port=1523))(CONNECT_DATA=(SERVICE_NAME=vdb35.de.db.com)))

---------------------------------
-- roles (global information)
---------------------------------
-- common
DEFINE role_rw=&&app._OWNER_RW
DEFINE role_ro=&&app._OWNER_RO
DEFINE role_connect=&&app._CONNECT
DEFINE role_resource=&&app._RESOURCE
-- bsll

---------------------------------
-- profiles (global information)
---------------------------------
DEFINE profile_tech=&&app._DEFAULT

---------------------------------
-- pwd function (global information)
---------------------------------
DEFINE pwd_verify_func=&&app._VERIFY_FUNC

---------------------------------
-- tablespaces (local information)
---------------------------------
-- bsll
DEFINE tbs_default=USERS
DEFINE tbs_temp=TEMP
