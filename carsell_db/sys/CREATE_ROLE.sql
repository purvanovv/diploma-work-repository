define role2create=&&1
--
set serveroutput on size unlimited
set verify off
--
declare
  	dynsql		varchar2(2000);
	v_loc_count	number;

	procedure exec_st ( p_sql in varchar2) as
	begin
    		execute immediate p_sql;
    		dbms_output.put_line(p_sql);
  		exception
  			when others then
				dbms_output.put_line('Fehler bei ' || p_sql);
  	end;

begin
  	SELECT count(*) INTO v_loc_count from dba_roles where ROLE = upper('&&role2create');
  	IF (v_loc_count = 0) THEN
		dynsql:='create role &&role2create';
		exec_st(dynsql);
	ELSE
		dbms_output.put_line('Rolle &&role2create existiert bereits');
	END IF;
end;
/
--
-- EOF
