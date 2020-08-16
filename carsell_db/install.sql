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

@ddl/crtb/crtb_ANNOUNCEMENTS.sql
@ddl/crtb/crtb_ENUM_ITEM_BASES.sql
@ddl/crtb/crtb_MAIN_CATEGORIES.sql
@ddl/crtb/crtb_SUB_CATEGORIES.sql

-- -----------------------------------------------
prompt create primary keys for tables staging area
-- -----------------------------------------------

@ddl/crpk/crpk_ANNOUNCEMENTS_PK.sql
@ddl/crpk/crpk_ENUM_ITEM_BASES_PK.sql
@ddl/crpk/crpk_MAIN_CATEGORIES_PK.sql
@ddl/crpk/crpk_SUB_CATEGORIES_PK.sql

-- -----------------------------------------------
prompt create foreign keys for tables staging area
-- -----------------------------------------------

@ddl/crfk/crfk_ANNOUNCEMENTS_FK.sql
@ddl/crfk/crfk_SUB_CATEGORIES_FK.sql

-- -----------------------------------------------
prompt create sequences
-- -----------------------------------------------

@ddl/crsq/crsq_ANNOUNCEMENTS.sql

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
@@dml/ins_ENUM_ITEM_BASES.sql

DISCONNECT
