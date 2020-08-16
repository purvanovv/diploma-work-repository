connect &cadm

alter session set "_ORACLE_SCRIPT"=true;

@@sys/ROLE_RESOURCE.sql
@@sys/ROLE_CONNECT.sql
@@sys/ROLE_RW.sql
@@sys/ROLE_RO.sql

--
@@sys/PWD_VERIFY_FUNC.sql
@@sys/PROFILE_TECH.sql

-- Rolf Krissel, 23.01.2017
prompt create user &&sapp
-- Rolf Krissel, 23.01.2017
@@sys/USER_APP.sql
-- Rolf Krissel, 23.01.2017
prompt create user &&susr
-- Rolf Krissel, 23.01.2017
@@sys/USER_USR.sql
-- EOF
