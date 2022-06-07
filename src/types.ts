export enum eng_category {
    'foreman',
    'technician',
    'technologist',
    'master'
}

export enum worker_category {
    'electrician',
    'welder',
    'plumber',
    'concreter',
    'paver',
    'driver'
}

export enum machinery_type {
    'crane',
    'bulldozer',
    'excavator',
    'paver'
}

export enum building_type {
    'dwelling building',
    'school',
    'tunnel',
    'road'
}

export enum type_of_work {
    'concreting',
    'asphalting',
    'painting',
    'welding',
    'plumbing',
    'electrical',
    'excavation'
}

export enum material {
    'steel, kg',
    'paint. kg',
    'concrete, kg',
    'asphalt, m^2',
    'fuel, l',
    'water pipe, m'
}



export interface Employee {
    id: number;
    name: string;
    surname: string;
}

export interface Engineer {
    id: number;
    category: eng_category;
    department: number;
}

export interface Worker {
    id: number;
    category: worker_category;
    administration: number;
    brigadier: number;
}

export interface Administration {
    id: number;
    name: string;
    head: number;
}

export interface Department {
    id: number;
    name: string;
    administration: number;
    head: number;
}

export interface Machinery {
    id: number;
    administration: number;
    machinery_t: machinery_type;
}

export interface Building {
    id: number;
    name: string;
    department: number;
    building_t: building_type;
}

export interface Construction_work {
    id: number;
    building_id: number;
    work_t: type_of_work;
    machinery_id: number;
}

export interface Building_materials {
    id: number;
    material_t: material;
    cnt: number;
}

export interface Report {
    work_id: number;
    start_date: string;
    end_date: string;
    estimated_start_date: string;
    estimated_end_date: string;
    estimated_material: number;
    spent_material: number;
}




