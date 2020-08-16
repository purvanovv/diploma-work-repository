create user &sapp identified by "&pw_sapp"
default tablespace &tbs_default temporary tablespace &tbs_temp
profile &profile_tech;

-- grant roles
grant &role_connect to &sapp;
grant &role_resource to &sapp;

-- Rolf Krissel, 23.01.2017
grant &role_ro 		to &&sapp with ADMIN OPTION;
grant &role_rw 		to &&sapp with ADMIN OPTION;
grant CREATE JOB 	to &&sapp;
-- Rolf Krissel, 23.01.2017

-- TS quotas
alter user &sapp quota unlimited on &tbs_default;
