define profile2create=&&1
--
set serveroutput on size unlimited
set verify off
--
declare
	cursor c1 is
		select 	*
		from 	dba_profiles
		where 	PROFILE = upper('&&profile2create')
		;

  	dynsql		varchar2(2000);
	v_loc_count	number;

	procedure exec_st ( p_sql in varchar2) as
	begin
    		execute immediate p_sql;
    		dbms_output.put_line(p_sql);
  		exception
  			when others then
				dbms_output.put_line('Fehler bei '||p_sql);
  	end;

begin
  	SELECT count(*) INTO v_loc_count from dba_profiles where PROFILE = upper('&&profile2create');
  	IF (v_loc_count = 0) THEN
		dynsql:='create profile &&profile2create limit PASSWORD_VERIFY_FUNCTION &&pwd_verify_func';
		exec_st(dynsql);
	ELSE
		dynsql:='alter profile &&profile2create limit PASSWORD_VERIFY_FUNCTION &&pwd_verify_func';
		exec_st(dynsql);
	END IF;
end;
/
--
-- EOF
