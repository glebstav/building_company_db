const express = require('express')

const PORT = 1337;

const app = express()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})
app.use(express.json())
app.listen(PORT, () => {console.log('ok')})

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'glebstav',
    port: 5432,
    host: 'localhost',
    database: 'building_company',
    password: 'root'
})

app.get('/', (req, res)=>{
    getData(req.query.table).then((result) => {res.json(result.rows)});
    return res
})


app.get('/names', (req, res)=>{
    console.log('имя')
    getData(req.query.table).then((result) => {res.json(result.rows.map((el)=>{return el.name}))});
    return res
})

app.get('/query', (req, res)=>{
    getQuery(req.query.id, req.query.name).then((result) => {res.json(result.rows)});
    return res
})
async function getData(table){
    return await pool.query(`select * from ${table}`)
}

async function getQuery(id, name){
    let result = null
    console.log(name)
    switch (parseInt(id)){
        case (0):
            result = await pool.query(`select Adm.name as Administration, Employee.name, 
                Employee.surname from Administration Adm 
                left join Engineer E on E.id=Adm.head left join Employee on Employee.id=E.id`)
            break;
        case (1):
            result = await pool.query(`select D.name as Department, Employee.name,
                Employee.surname from Department D left join Engineer E 
                on E.id=D.head left join Employee on Employee.id=E.id;`)
            break;
        case (2):
            result = await pool.query(`select E.surname, Engineer.category from Engineer left join Department D 
                on D.id=Engineer.department left join Employee E on E.id=Engineer.id where D.name='${name}';`)
            break;
        case (3):
            result = await pool.query(`select E.surname, Engineer.category from Engineer 
                left join Department D on D.id=Engineer.department left join Employee E on 
                E.id=Engineer.id left join Administration Adm on D.administration=Adm.id where Adm.name='${name}';`)
            break;
        case (4):
            result = await pool.query(`select B.name, min(R.estimated_start_date), max(R.estimated_end_date) from Building B left join Department D on B.department=D.id left join Construction_work on Construction_work.building_id=B.id left join Report R on R.work_id=Construction_work.id where D.name='${name}' group by B.name;`)
            break;
        case (5):
            result = await pool.query(`select B.name, min(R.estimated_start_date), max(R.estimated_end_date) from Building B left join Department D on B.department=D.id left join Construction_work on Construction_work.building_id=B.id left join Report R on R.work_id=Construction_work.id left join Administration Adm on D.administration=Adm.id where Adm.name='${name}' group by B.name;`)
            break;
        case (6):
            result = await pool.query(`select W.brigadier, E.name, E.surname from Building B left join Construction_work C on C.building_id=B.id left join Worker W on W.brigadier=C.brigadier_id left join Employee E on E.id=W.id where B.name='${name}';`)
            break;
        case (7):
            result = await pool.query(`select M.id, M.machinery_t from Machinery M left join Administration Adm on M.administration=Adm.id
                                       where Adm.name='${name}';`)
            break;
        case (8):
            result = await pool.query(`select M.id, M.machinery_t from Construction_work C left join Building B on C.building_id=B.id right join Machinery M on M.id=C.machinery_id where B.name='${name}';`)
            break;
        case (9):
            result = await pool.query(`select C.work_t as type_of_work , R.estimated_start_date, R.estimated_end_date, M.material_t as type_of_material, M.cnt from Building B left join Construction_work C on C.building_id=B.id left Join Report R on R.work_id=C.id left join Building_materials M on M.id=R.estimated_material where B.name='${name}';`)
            break;
        case (10):
            result = await pool.query(`select C.work_t as type_of_work , R.start_date, R.end_date, M.material_t as type_of_material, M.cnt from Building B left join Construction_work C on C.building_id=B.id left Join Report R on R.work_id=C.id left join Building_materials M on M.id=R.spent_material where B.name='${name}';`)
            break;
        case (11):
            result = await pool.query(`select C.work_t from Construction_work C left join Report R on R.work_id=C.id where R.estimated_end_date<R.end_date;`)
            break;
        case (12):
            result = await pool.query(`select C.work_t from Construction_work C left join Report R on R.work_id=C.id left join Building B on C.building_id=B.id left join Department D on D.id=B.department where R.estimated_end_date<R.end_date and D.name='${name}';`)
            break;
        case (13):
            result = await pool.query(`select C.work_t from Construction_work C left join Report R on R.work_id=C.id left join Building B on C.building_id=B.id left join Department D on D.id=B.department left join Administration Adm on Adm.id=D.administration where R.estimated_end_date<R.end_date and Adm.name='${name}';`)
            break;
        case (14):
            result = await pool.query(`select est_M.material_t from Report R left join Building_materials est_M on R.estimated_material=est_M.id left join Building_materials spent_M on R.spent_material=spent_M.id where est_M.cnt<spent_M.cnt;`)
            break;
        case (15):
            result = await pool.query(`select est_M.material_t from Report R left join Building_materials est_M on R.estimated_material=est_M.id left join Building_materials spent_M on R.spent_material=spent_M.id left join Construction_work C on C.id=R.work_id left join Building B on C.building_id=B.id left join Department D on D.id=B.department where est_M.cnt<spent_M.cnt and D.name='${name}';`)
            break;
        case (16):
            result = await pool.query(`select est_M.material_t from Report R left join Building_materials est_M on R.estimated_material=est_M.id left join Building_materials spent_M on R.spent_material=spent_M.id left join Construction_work C on C.id=R.work_id left join Building B on C.building_id=B.id left join Department D on D.id=B.department left join Administration Adm on Adm.id=D.administration where est_M.cnt<spent_M.cnt and Adm.name='${name}';`)
            break;
    }
    return result
}