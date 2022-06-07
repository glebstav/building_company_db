import React, {ChangeEvent, FC, useState} from 'react';
import Table from "./tables/Table";
import Selections from "./Selections";
import {QUERY_TABLES, TABLES} from "./constants";
import {getNamesByTableNames, getQuery, getTableByTableName} from "./api";


const App: FC = () => {

    const [queryType, changeQuery] = useState({needSelection: false, query:'', names:[''], num: -1, data: [], type:'Employee'})
    const setTable = async (select: string) => {
        changeQuery({needSelection: false, query: '', names: [''], num: -1, data: await getTableByTableName(select), type: select})
    };

    const setTableFromQuery = async (select?: string) => {
        changeQuery({needSelection: queryType.needSelection, query: queryType.query, names: queryType.names, num: queryType.num,
            data: await getQuery(queryType.num, select), type: `query${queryType.num}`});
    };

    const setQuery = async (queryTitle: string) => {
        let needSelections: boolean = true;
        let tableName: string = 'Department';
        switch (queryTitle) {
            case (QUERY_TABLES[0]):
                needSelections = false;
                break;
            case (QUERY_TABLES[1]):
                needSelections = false;
                break;
            case (QUERY_TABLES[3]):
                tableName = 'Administration';
                break;
            case (QUERY_TABLES[5]):
                tableName = 'Administration';
                break;
            case (QUERY_TABLES[6]):
                tableName = 'Building';
                break;
            case (QUERY_TABLES[7]):
                tableName = 'Administration';
                break;
            case (QUERY_TABLES[8]):
                tableName = 'Building';
                break;
            case (QUERY_TABLES[9]):
                tableName = 'Building';
                break;
            case (QUERY_TABLES[10]):
                tableName = 'Building';
                break;
            case (QUERY_TABLES[11]):
                needSelections = false;
                tableName = '';
                break;
            case (QUERY_TABLES[13]):
                tableName = 'Administration';
                break;
            case (QUERY_TABLES[14]):
                needSelections = false;
                tableName = '';
                break;
            case (QUERY_TABLES[16]):
                tableName = 'Administration';
                break;
            default:
                break;
        }
        if (needSelections) {
            changeQuery({needSelection: true, query: tableName,
                names: await getNamesByTableNames(tableName), num: QUERY_TABLES.indexOf(queryTitle), data: queryType.data, type: queryType.type})
        } else {
            console.log(QUERY_TABLES.indexOf(queryTitle));
            changeQuery({needSelection: false, query: '', names: [''], num: QUERY_TABLES.indexOf(queryTitle), data: await getQuery(QUERY_TABLES.indexOf(queryTitle)), type: `query${QUERY_TABLES.indexOf(queryTitle)}`});
        }
    }
    return (
        <div>
             <div style={{display: "inline-block"}}>
            <Selections tables={TABLES} onChange={(e: ChangeEvent<HTMLSelectElement>) => setTable(e.target.value)} ></Selections>
            <Selections tables={QUERY_TABLES} onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setQuery(e.target.value);
            }} ></Selections>
                 {queryType.needSelection ? <div ><div style={{margin: '10px', display: "inline-block"}}>{queryType.query+': '}</div>
                     <Selections  tables={queryType.names} onChange={(e: ChangeEvent<HTMLSelectElement>) => setTableFromQuery(e.target.value)} ></Selections>
                 </div> : <div></div>}
             </div>
          <Table type={queryType.type} data={queryType.data} />
        </div>
    );


};

export default App;