CREATE TYPE eng_category AS ENUM (
  'foreman',
  'technician',
  'technologist',
  'master'
);

CREATE TYPE worker_category AS ENUM (
  'electrician',
  'welder',
  'plumber',
  'concreter',
  'paver',
  'driver'
);

CREATE TYPE machinery_type AS ENUM (
  'crane',
  'bulldozer',
  'excavator',
  'paver'
);

CREATE TYPE building_type AS ENUM (
  'dwelling building',
  'school',
  'tunnel',
  'road'
);

CREATE TYPE type_of_work AS ENUM (
  'concreting',
  'asphalting',
  'painting',
  'welding',
  'plumbing',
  'electrical',
  'excavation'
);

CREATE TYPE material AS ENUM (
  'steel, kg',
  'paint. kg',
  'concrete, kg',
  'asphalt, m^2',
  'fuel, l',
  'water pipe, m'
);

CREATE TABLE Employee (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  surname varchar NOT NULL
);

CREATE TABLE Engineer (
  id SERIAL PRIMARY KEY,
  category eng_category,
  department int
);

CREATE TABLE Worker (
  id SERIAL PRIMARY KEY,
  category worker_category,
  administration int,
  brigadier int NOT NULL
);

CREATE TABLE Administration (
  id SERIAL PRIMARY KEY,
  name varchar,
  head int
);

CREATE TABLE Department (
  id SERIAL PRIMARY KEY,
  name varchar,
  head int,
  administration int
);

CREATE TABLE Machinery (
  id SERIAL PRIMARY KEY,
  administration int,
  machinery_t machinery_type
);

CREATE TABLE Building (
  id SERIAL PRIMARY KEY,
  name varchar,
  department int,
  building_t building_type
);

CREATE TABLE Construction_work (
  id SERIAL PRIMARY KEY,
  building_id int,
  work_t type_of_work,
  machinery_id int,
  brigadier_id int
);

CREATE TABLE Building_materials (
  id SERIAL PRIMARY KEY,
  material_t material,
  cnt int
);

CREATE TABLE Report (
  work_id int NOT NULL UNIQUE,
  start_date date,
  end_date date,
  estimated_start_date date NOT NULL,
  estimated_end_date date NOT NULL,
  estimated_material int NOT NULL,
  spent_material int
);



ALTER TABLE Engineer ADD FOREIGN KEY (id) REFERENCES Employee (id);

ALTER TABLE Engineer ADD FOREIGN KEY (department) REFERENCES Department (id);

ALTER TABLE Worker ADD FOREIGN KEY (id) REFERENCES Employee (id);

ALTER TABLE Worker ADD FOREIGN KEY (administration) REFERENCES Administration (id);

ALTER TABLE Worker ADD FOREIGN KEY (brigadier) REFERENCES Worker (id);

ALTER TABLE Department ADD FOREIGN KEY (head) REFERENCES Engineer (id);

ALTER TABLE Department ADD FOREIGN KEY (administration) REFERENCES Administration (id);

ALTER TABLE Administration ADD FOREIGN KEY (head) REFERENCES Engineer (id);

ALTER TABLE Machinery ADD FOREIGN KEY (administration) REFERENCES Administration (id);

ALTER TABLE Building ADD FOREIGN KEY (department) REFERENCES Department (id);

ALTER TABLE Construction_work ADD FOREIGN KEY (building_id) REFERENCES Building (id);

ALTER TABLE Construction_work ADD FOREIGN KEY (machinery_id) REFERENCES Machinery (id);

ALTER TABLE Construction_work ADD FOREIGN KEY (brigadier_id) REFERENCES Worker (id);

ALTER TABLE Report ADD FOREIGN KEY (work_id) REFERENCES Construction_work (id);


insert into Employee (name, surname) values ('James', 'Smith');
insert into Engineer (id, category) values (1, 'foreman');
insert into Employee (name, surname) values ('John', 'Johnson');
insert into Engineer (id, category) values (2, 'foreman');

insert into Administration (name, head) values ('urban', 1);
insert into Administration (name, head) values ('highway', 2);


insert into Employee (name, surname) values ('Robert', 'Williams');
insert into Engineer (id, category) values (3, 'foreman');
insert into Employee (name, surname) values ('Michael', 'Brown');
insert into Engineer (id, category) values (4, 'foreman');
insert into Employee (name, surname) values ('William', 'Jones');
insert into Engineer (id, category) values (5, 'technician');
insert into Employee (name, surname) values ('David', 'Garcia');
insert into Engineer (id, category) values (6, 'technician');
insert into Employee (name, surname) values ('Richard', 'Miller');
insert into Engineer (id, category) values (7, 'technician');
insert into Employee (name, surname) values ('Charles', 'Davis');
insert into Engineer (id, category) values (8, 'technician');
insert into Employee (name, surname) values ('Joseph', 'Rodriguez');
insert into Engineer (id, category) values (9, 'technologist');
insert into Employee (name, surname) values ('Thomas', 'Lopez');
insert into Engineer (id, category) values (10, 'technologist');
insert into Employee (name, surname) values ('Christopher', 'Gonzalez');
insert into Engineer (id, category) values (11, 'technologist');
insert into Employee (name, surname) values ('Daniel', 'Wilson');
insert into Engineer (id, category) values (12, 'technologist');
insert into Employee (name, surname) values ('Paul', 'Anderson');
insert into Engineer (id, category) values (13, 'technologist');
insert into Employee (name, surname) values ('Mark', 'Thomas');
insert into Engineer (id, category) values (14, 'master');
insert into Employee (name, surname) values ('Donald', 'Taylor');
insert into Engineer (id, category) values (15, 'master');
insert into Employee (name, surname) values ('George', 'Moore');
insert into Engineer (id, category) values (16, 'master');
insert into Employee (name, surname) values ('Kenneth', 'Jackson');
insert into Engineer (id, category) values (17, 'master');
insert into Employee (name, surname) values ('Steven', 'Martin');
insert into Engineer (id, category) values (18, 'master');

insert into Department (name, head, administration) values ('buildings', 3, 1);
insert into Department (name, head, administration) values ('roads', 4, 2);
insert into Department (name, head, administration) values ('tunnels', 15, 2);

update Engineer set Department=1 where Engineer.id<9 and Engineer.id!=2;
update Engineer set Department=2 where (Engineer.id>8 and Engineer.id<15) or Engineer.id=2;
update Engineer set Department=2 where Engineer.id>14 and Engineer.id<19;

insert into Employee (name, surname) values ('Edward', 'Lee');
insert into Worker (id, category, administration, brigadier) values (19, 'electrician', 1, 19);
insert into Employee (name, surname) values ('Brian', 'Perez');
insert into Worker (id, category, administration, brigadier) values (20, 'electrician', 1, 19);
insert into Employee (name, surname) values ('Ronald', 'Thompson');
insert into Worker (id, category, administration, brigadier) values (21, 'electrician', 1, 19);
insert into Employee (name, surname) values ('Anthony', 'White');
insert into Worker (id, category, administration, brigadier) values (22, 'electrician', 2, 22);
insert into Employee (name, surname) values ('Kevin', 'Harris');
insert into Worker (id, category, administration, brigadier) values (23, 'electrician', 2, 22);
insert into Employee (name, surname) values ('Jason', 'Sanchez');
insert into Worker (id, category, administration, brigadier) values (24, 'electrician', 2, 22);
insert into Employee (name, surname) values ('Matthew', 'Clark');
insert into Worker (id, category, administration, brigadier) values (25, 'electrician', 2, 22);
insert into Employee (name, surname) values ('Gary', 'Ramirez');
insert into Worker (id, category, administration, brigadier) values (26, 'welder', 1, 26);
insert into Employee (name, surname) values ('Timothy', 'Lewis');
insert into Worker (id, category, administration, brigadier) values (27, 'welder', 1, 26);
insert into Employee (name, surname) values ('Jose', 'Robinson');
insert into Worker (id, category, administration, brigadier) values (28, 'welder', 2, 28);
insert into Employee (name, surname) values ('Larry', 'Walker');
insert into Worker (id, category, administration, brigadier) values (29, 'welder', 2, 26);
insert into Employee (name, surname) values ('Jeffrey', 'Young');
insert into Worker (id, category, administration, brigadier) values (30, 'plumber', 1, 30);
insert into Employee (name, surname) values ('Frank', 'Allen');
insert into Worker (id, category, administration, brigadier) values (31, 'plumber', 1, 30);
insert into Employee (name, surname) values ('Scott', 'King');
insert into Worker (id, category, administration, brigadier) values (32, 'plumber', 1, 30);
insert into Employee (name, surname) values ('Eric', 'Wright');
insert into Worker (id, category, administration, brigadier) values (33, 'plumber', 1, 30);
insert into Employee (name, surname) values ('Stephen', 'Scott');
insert into Worker (id, category, administration, brigadier) values (34, 'concreter', 1, 34);
insert into Employee (name, surname) values ('Andrew', 'Torres');
insert into Worker (id, category, administration, brigadier) values (35, 'concreter', 1, 34);
insert into Employee (name, surname) values ('Raymond', 'Nguyen');
insert into Worker (id, category, administration, brigadier) values (36, 'concreter', 2, 36);
insert into Employee (name, surname) values ('Gregory', 'Hill');
insert into Worker (id, category, administration, brigadier) values (37, 'concreter', 2, 36);
insert into Employee (name, surname) values ('Joshua', 'Flores');
insert into Worker (id, category, administration, brigadier) values (38, 'concreter', 2, 36);
insert into Employee (name, surname) values ('Jerry', 'Green');
insert into Worker (id, category, administration, brigadier) values (39, 'concreter', 2, 36);
insert into Employee (name, surname) values ('Dennis', 'Adams');
insert into Worker (id, category, administration, brigadier) values (40, 'paver', 2, 40);
insert into Employee (name, surname) values ('Walter', 'Nelson');
insert into Worker (id, category, administration, brigadier) values (41, 'paver', 2, 40);
insert into Employee (name, surname) values ('Patrick', 'Baker');
insert into Worker (id, category, administration, brigadier) values (42, 'paver', 2, 40);
insert into Employee (name, surname) values ('Dennis', 'Adams');
insert into Worker (id, category, administration, brigadier) values (43, 'driver', 2, 43);
insert into Employee (name, surname) values ('Walter', 'Nelson');
insert into Worker (id, category, administration, brigadier) values (44, 'driver', 2, 44);
insert into Employee (name, surname) values ('Patrick', 'Baker');
insert into Worker (id, category, administration, brigadier) values (45, 'driver', 2, 45);

insert into Machinery (administration, machinery_t) values (1, 'crane');
insert into Machinery (administration, machinery_t) values (1, 'crane');
insert into Machinery (administration, machinery_t) values (1, 'crane');
insert into Machinery (administration, machinery_t) values (1, 'bulldozer');
insert into Machinery (administration, machinery_t) values (1, 'bulldozer');
insert into Machinery (administration, machinery_t) values (2, 'bulldozer');
insert into Machinery (administration, machinery_t) values (2, 'bulldozer');
insert into Machinery (administration, machinery_t) values (2, 'bulldozer');
insert into Machinery (administration, machinery_t) values (1, 'excavator');
insert into Machinery (administration, machinery_t) values (1, 'excavator');
insert into Machinery (administration, machinery_t) values (2, 'excavator');
insert into Machinery (administration, machinery_t) values (2, 'excavator');
insert into Machinery (administration, machinery_t) values (2, 'paver');
insert into Machinery (administration, machinery_t) values (2, 'paver');
insert into Machinery (administration, machinery_t) values (2, 'paver');

insert into Building (name, department, building_t) values ('school', 1, 'school');
insert into Building (name, department, building_t) values ('living house 1', 1, 'dwelling building');
insert into Building (name, department, building_t) values ('living house 2', 1, 'dwelling building');
insert into Building (name, department, building_t) values ('tunnel under river', 3, 'tunnel');
insert into Building (name, department, building_t) values ('main highway', 2, 'road');
insert into Building (name, department, building_t) values ('highway to the airport', 2, 'road');

insert into Construction_work (building_id, brigadier_id, machinery_id, work_t) values (1, 34, 9, 'concreting');
insert into Building_materials (material_t, cnt) values ('concrete, kg', 25);
insert into Report (work_id, start_date, end_date, estimated_start_date, estimated_end_date, estimated_material, spent_material) values (1, '2022-05-10', '2022-05-15', '2022-05-10', '2022-05-14', 1, 1);

insert into Construction_work (building_id, brigadier_id, work_t) values (1, 26, 'welding');
insert into Building_materials (material_t, cnt) values ('steel, kg', 4);
insert into Building_materials (material_t, cnt) values ('steel, kg', 5);
insert into Report (work_id, start_date, end_date, estimated_start_date, estimated_end_date, estimated_material, spent_material) values (2, '2022-05-13', '2022-05-20', '2022-05-13', '2022-05-21', 2, 3);

insert into Construction_work (building_id, brigadier_id, work_t) values (1, 30, 'plumbing');
insert into Building_materials (material_t, cnt) values ('water pipe, m', 125);
insert into Report (work_id, estimated_start_date, estimated_end_date, estimated_material) values (3, '2022-06-05', '2022-06-15', 4);

insert into Construction_work (building_id, brigadier_id, machinery_id, work_t) values (2, 34, 10, 'concreting');
insert into Building_materials (material_t, cnt) values ('concrete, kg', 75);
insert into Building_materials (material_t, cnt) values ('concrete, kg', 85);
insert into Report (work_id, start_date, end_date, estimated_start_date, estimated_end_date, estimated_material, spent_material) values (4, '2022-05-17', '2022-05-24', '2022-05-16', '2022-05-25', 5, 6);


insert into Construction_work (building_id, brigadier_id, work_t) values (2, 19, 'electrical');
insert into Building_materials (material_t, cnt) values ('steel, kg', 14);
insert into Building_materials (material_t, cnt) values ('steel, kg', 12);
insert into Report (work_id, estimated_start_date, estimated_end_date, estimated_material, spent_material) values (5, '2022-06-16', '2022-06-25', 7, 8);

insert into Construction_work (building_id, brigadier_id, work_t) values (3, 30, 'plumbing');
insert into Building_materials (material_t, cnt) values ('water pipe, m', 500);
insert into Report (work_id, estimated_start_date, estimated_end_date, estimated_material) values (6, '2022-07-16', '2022-07-25', 9);

insert into Construction_work (building_id, brigadier_id, machinery_id, work_t) values (4, 43, 11, 'excavation');
insert into Building_materials (material_t, cnt) values ('fuel, l', 500);
insert into Building_materials (material_t, cnt) values ('fuel, l', 600);
insert into Report (work_id, start_date, end_date, estimated_start_date, estimated_end_date, estimated_material, spent_material) values (7, '2022-05-16', '2022-05-28', '2022-05-16', '2022-05-25', 10, 11);

insert into Construction_work (building_id, brigadier_id, work_t) values (4, 28, 'welding');
insert into Building_materials (material_t, cnt) values ('steel, kg', 50);
insert into Building_materials (material_t, cnt) values ('steel, kg', 45);
insert into Report (work_id, start_date, estimated_start_date, estimated_end_date, estimated_material, spent_material) values (8, '2022-05-25', '2022-05-25', '2022-05-30', 12, 13);

insert into Construction_work (building_id, brigadier_id, machinery_id, work_t) values (5, 40, 15, 'asphalting');
insert into Building_materials (material_t, cnt) values ('asphalt, m^2', 12300);
insert into Building_materials (material_t, cnt) values ('asphalt, m^2', 12350);
insert into Report (work_id, start_date, estimated_start_date, estimated_end_date, estimated_material, spent_material) values (9, '2022-05-15', '2022-05-15', '2022-05-25', 14, 15);

insert into Construction_work (building_id, brigadier_id, machinery_id, work_t) values (6, 40, 14, 'asphalting');
insert into Building_materials (material_t, cnt) values ('asphalt, m^2', 50000);
insert into Report (work_id, estimated_start_date, estimated_end_date, estimated_material) values (10,  '2022-06-15', '2022-06-25', 16);