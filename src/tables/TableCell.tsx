import {FC} from "react";

interface Istring {
    item: any
    width: number
    isHead: boolean
}

const TableCell: FC<Istring> = (cell) => {

    return (
        <div className="table__cell" style={{alignItems:'center' ,display:'inline-block',
            border: cell.isHead ? '1px solid black' : '1px solid gray', width:`${cell.width}%`,
            background: cell.isHead ? 'lightblue' : 'white'}}>
            {cell.item}
        </div>
    )
}
export default TableCell;