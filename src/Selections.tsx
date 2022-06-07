import React, {FC} from 'react';


interface Iselect {
    tables: string[]
    onChange: any
}

const Selections: FC<Iselect> = ({tables, onChange}) => {
    return (
        <select style={{margin: '10px', background: "lightgray", fontSize:'15px'}} onChange={onChange}>
            {tables.map((opt) => {return <option>{opt}</option>})}
        </select>
    );
};

export default Selections;