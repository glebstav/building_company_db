import {FC} from "react"
import TableCell from './TableCell'
interface IRow{
    rowData: any
    isHead: boolean
    type: string
}

const TableRow: FC<IRow> = (row) => {
    switch (row.type){
        case 'Employee':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"name"} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={"surname"} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
            return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.name} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.surname} width={20} isHead={row.isHead}></TableCell>
                </div>
            )
        case 'Engineer':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"category"} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={"department"} width={5} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.category} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.department} width={5} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'Worker':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"category"} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={"administration"} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={"brigadier"} width={5} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.category} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.administration} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.brigadier} width={5} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'Administration':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"name"} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={"head"} width={5} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.name} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.head} width={5} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'Department':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"name"} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={"administration"} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={"head"} width={5} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.name} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.administration} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.head} width={5} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'Machinery':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"machinery_t"} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={"administration"} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.machinery_t} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.administration} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'Building':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"name"} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={"department"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"building_t"} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.name} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.department} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.building_t} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'Construction_work':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"work_t"} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={"building_id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"machinery_id"} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.work_t} width={20} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.building_id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.machinery_id ? row.rowData.machinery_id : 'none'} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'Building_materials':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"cnt"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"material_t"} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.cnt} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.material_t} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'Report':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"work_id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"start_date"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"end_date"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"estimated_start_date"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"estimated_end_date"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"estimated_material"} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={"spent_material"} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.work_id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.start_date ? row.rowData.start_date : 'none'} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.end_date ? row.rowData.end_date : 'none'} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.estimated_start_date} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.estimated_end_date} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.estimated_material} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.spent_material ? row.rowData.spent_material : 'none'} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query0':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"Administration"} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={"name"} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={"surname"} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.administration} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.name} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.surname} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query1':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"Department"} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={"name"} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={"surname"} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.department} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.name} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.surname} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query2':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"surname"} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={"category"} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.surname} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.category} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query3':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"surname"} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={"category"} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.surname} width={10} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.category} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query4':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"Building name"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"estimated_start_date"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"estimated_end_date"} width={15} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.name} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.min} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.max} width={15} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query5':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"Building name"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"estimated_start_date"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"estimated_end_date"} width={15} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.name} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.min} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.max} width={15} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query6':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"brigadier"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"name"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"surname"} width={15} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.brigadier} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.name} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.surname} width={15} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query7':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"machinery_t"} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.machinery_t} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query8':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"id"} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={"machinery_t"} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.id} width={5} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.machinery_t} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query9':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"type_of_work"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"estimated_start_date"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"estimated_end_date"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"type_of_material"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"count"} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.type_of_work} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.estimated_start_date} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.estimated_end_date} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.type_of_material} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.cnt} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query10':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"type_of_work"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"start_date"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"end_date"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"type_of_material"} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={"count"} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.type_of_work} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.start_date ? row.rowData.start_date : 'none'} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.end_date ? row.rowData.end_date : 'none'} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.type_of_material ? row.rowData.type_of_material : 'none'} width={15} isHead={row.isHead}></TableCell>
                        <TableCell item={row.rowData.cnt ? row.rowData.cnt : 'none'} width={10} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query11':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"work_t"} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.work_t} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query12':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"work_t"} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.work_t} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query13':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"work_t"} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.work_t} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query14':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"material_t"} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.material_t} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query15':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"material_t"} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.material_t} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
        case 'query16':
            if (row.isHead)
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={"material_t"} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
            else
                return (<div className="table__row" style={{width: "100vw"}}>
                        <TableCell item={row.rowData.material_t} width={20} isHead={row.isHead}></TableCell>
                    </div>
                )
        default:
            return <div></div>
    }


};

export default TableRow;