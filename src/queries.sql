#1

select Adm.name as Administration, Employee.name, Employee.surname from Administration Adm left join Engineer E on E.id=Adm.head left join Employee on Employee.id=E.id;

select D.name as Department, Employee.name, Employee.surname from Department D left join Engineer E on E.id=D.head left join Employee on Employee.id=E.id;

#2

select E.surname, Engineer.category from Engineer left join Department D on D.id=Engineer.department left join Employee E on E.id=Engineer.id where D.id=1;

select E.surname, Engineer.category from Engineer left join Department D on D.id=Engineer.department left join Employee E on E.id=Engineer.id left join Administration Adm on D.administration=Adm.id where Adm.id=2;

#3

select B.name, min(R.estimated_start_date), max(R.estimated_end_date) from Building B left join Department D on B.department=D.id left join Construction_work on Construction_work.building_id=B.id left join Report R on R.work_id=Construction_work.id where D.id=1 group by B.name;

select B.name, min(R.estimated_start_date), max(R.estimated_end_date) from Building B left join Department D on B.department=D.id left join Construction_work on Construction_work.building_id=B.id left join Report R on R.work_id=Construction_work.id left join Administration Adm on D.administration=Adm.id where Adm.id=2 group by B.name;

#4

select W.brigadier, E.name, E.surname from Building B left join Construction_work C on C.building_id=B.id left join Worker W on W.brigadier=C.brigadier_id left join Employee E on E.id=W.id where B.name='living house 1';

#5

select M.id, M.machinery_t from Machinery M left join Administration Adm on M.administration=Adm.id
where Adm.id=1;

#6

select M.id, M.machinery_t from Construction_work C left join Building B on C.building_id=B.id right join Machinery M on M.id=C.machinery_id where B.name='main highway';

select M.id, M.machinery_t from Construction_work C left join Building B on C.building_id=B.id right join Machinery M on M.id=C.machinery_id left join Report R on R.work_id=C.id where B.name='tunnel under river' and '2022-05-15'::date<=R.start_date and '2022-05-29'::date>=R.end_date;

#7

select C.work_t as type_of_work , R.estimated_start_date, R.estimated_end_date, M.material_t as type_of_material, M.cnt from Building B left join Construction_work C on C.building_id=B.id left Join Report R on R.work_id=C.id left join Building_materials M on M.id=R.estimated_material where B.name='tunnel under river';

#8

select C.work_t as type_of_work , R.start_date, R.end_date, M.material_t as type_of_material, M.cnt from Building B left join Construction_work C on C.building_id=B.id left Join Report R on R.work_id=C.id left join Building_materials M on M.id=R.spent_material where B.name='tunnel under river';

#9

select B.id, B.name from Building B left join Construction_work C on C.building_id=B.id left join Report R on R.work_id=C.id where C.work_t='welding' and '2022-04-15'::date<=R.start_date and '2022-06-29'::date>=R.end_date;

select B.id, B.name from Building B left join Construction_work C on C.building_id=B.id left join Report R on R.work_id=C.id left join Department D on D.id=B.department left join Administration Adm on Adm.id=D.administration where C.work_t='excavation' and '2022-04-15'::date<=R.start_date and '2022-06-29'::date>=R.end_date and Adm.name='highway';

#10

select C.work_t from Construction_work C left join Report R on R.work_id=C.id where R.estimated_end_date<R.end_date;

select C.work_t from Construction_work C left join Report R on R.work_id=C.id left join Building B on C.building_id=B.id left join Department D on D.id=B.department where R.estimated_end_date<R.end_date and D.name='tunnels';

select C.work_t from Construction_work C left join Report R on R.work_id=C.id left join Building B on C.building_id=B.id left join Department D on D.id=B.department left join Administration Adm on Adm.id=D.administration where R.estimated_end_date<R.end_date and Adm.name='urban';

#11

select est_M.material_t from Report R left join Building_materials est_M on R.estimated_material=est_M.id left join Building_materials spent_M on R.spent_material=spent_M.id where est_M.cnt<spent_M.cnt;

select est_M.material_t from Report R left join Building_materials est_M on R.estimated_material=est_M.id left join Building_materials spent_M on R.spent_material=spent_M.id left join Construction_work C on C.id=R.work_id left join Building B on C.building_id=B.id left join Department D on D.id=B.department where est_M.cnt<spent_M.cnt and D.name='roads';

select est_M.material_t from Report R left join Building_materials est_M on R.estimated_material=est_M.id left join Building_materials spent_M on R.spent_material=spent_M.id left join Construction_work C on C.id=R.work_id left join Building B on C.building_id=B.id left join Department D on D.id=B.department left join Administration Adm on Adm.id=D.administration where est_M.cnt<spent_M.cnt and Adm.name='highway';

#12

select C.work_t from Construction_work C left join Building B on B.id=C.building_id left join Report R on R.work_id=C.id where (B.name='school' or B.name='living house 1') and C.brigadier_id=34 and '2022-05-15'::date<=R.start_date and '2022-06-29'::date>=R.end_date group by C.work_t;

#13

select C.brigadier_id from Construction_work C left join Building B on B.id=C.building_id left join Report R on R.work_id=C.id where (B.name='school' or B.name='living house 1') and (C.work_t='concreting' or C.work_t='welding') and '2022-05-10'::date<=R.start_date and '2022-06-29'::date>=R.end_date group by C.brigadier_id;
