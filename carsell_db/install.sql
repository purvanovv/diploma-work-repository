----------------------------------
-- create database
----------------------------------
def

prompt
prompt wait until Script is finished and the logs are not increasing in size
SET ECHO ON
SET VERIFY ON
CONNECT &&csapp
alter session set nls_length_semantics='CHAR';

-- -------------------------------
prompt create tables staging area
-- -------------------------------

@ddl/crtb/crtb_ANNOUNCEMENT_VEHICLE.sql
@ddl/crtb/crtb_MAIN_CATEGORIES.sql
@ddl/crtb/crtb_SUB_CATEGORIES.sql
@ddl/crtb/crtb_MAKE_MODEL.sql
@ddl/crtb/crtb_REGIONS.sql
@ddl/crtb/crtb_REGION_CITIES.sql
@ddl/crtb/crtb_IMAGE_FILES.sql

-- -----------------------------------------------
prompt create primary keys for tables staging area
-- -----------------------------------------------

@ddl/crpk/crpk_ANNOUNCEMENT_VEHICLE_PK.sql
@ddl/crpk/crpk_MAIN_CATEGORIES_PK.sql
@ddl/crpk/crpk_SUB_CATEGORIES_PK.sql
@ddl/crpk/crpk_MAKE_MODEL_PK.sql
@ddl/crpk/crpk_REGIONS_PK.sql
@ddl/crpk/crpk_REGION_CITIES_PK.sql
@ddl/crpk/crpk_IMAGE_FILES_PK.sql

-- -----------------------------------------------
prompt create foreign keys for tables staging area
-- -----------------------------------------------

@ddl/crfk/crfk_ANNOUNCEMENT_VEHICLE_FK.sql
@ddl/crfk/crfk_SUB_CATEGORIES_FK.sql
@ddl/crfk/crfk_MAKE_MODEL_FK.sql
@ddl/crfk/crfk_REGION_CITIES_FK.sql
@ddl/crfk/crfk_IMAGE_FILES_FK.sql

-- -----------------------------------------------
prompt create sequences
-- -----------------------------------------------

@ddl/crsq/crsq_ANNOUNCEMENT_VEHICLE.sql
@ddl/crsq/crsq_IMAGE_FILES.sql

-- Rolf Krissel, 23.01.2017
-- -----------------------------------------------
prompt grants
-- -----------------------------------------------
@ddl/crgr/GRANTS_TO_ROLE_RW.sql
@ddl/crgr/GRANTS_TO_ROLE_RO.sql

-- -----------------------------------------------
prompt synonym
-- -----------------------------------------------
CONNECT &csusr
@ddl/crsy/crsy_usr_synonyms.sql

prompt load data
-- -----------------------------------------------
@@dml/ins_MAIN_CATEGORIES.sql
@@dml/ins_SUB_CATEGORIES.sql
@@dml/ins_MAKE_MODEL.sql
@@dml/ins_REGIONS.sql
@@dml/ins_REGION_CITIES.sql

DISCONNECT
