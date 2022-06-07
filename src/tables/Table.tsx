import React, {FC} from 'react';
import TableRow from "./TableRow";

interface ITable{
    type: string
    data: any[]
}

const Table: FC<ITable> = (table) => {
    return (
             <div className='table'>
                 <TableRow rowData={table.data[0]} isHead={true} type={table.type} />
                {table.data.map((data) => <TableRow rowData={data} isHead={false} type={table.type} />)}
            </div>
    )
};
export default Table;