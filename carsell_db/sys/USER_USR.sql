create user &susr identified by "&pw_susr"
default tablespace &tbs_default temporary tablespace &tbs_temp
profile &profile_tech;

-- grant roles
grant &role_connect to &susr;
grant &role_rw to &susr;

-- TS quotas
