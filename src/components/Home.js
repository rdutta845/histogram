import React, { useState } from "react";
import Json from '../service.json';
import { Link } from "react-router-dom";

const Home = (props) => {
    const [header, setHeader] = useState([{title: 'Concept Name', asc: true, desc: true, key: 'conceptName', type: 'string'}, {title: 'Type', asc: true, desc: true, key: 'statType', type: 'string'}, {title: 'Unique Value',asc: true, desc: true, key: 'uniqueCount', type: 'number'}, {title:'Missing Value',asc: true, desc: true, key: 'nullCount', type: 'number'}]);
    const [data, setData] = useState(Json); 
    const compare = (a,b) => {
        if(a>b) {
            return -1;
        } else {
            return 1;
        }
    }
    const sort = (ind, sortOrdr, key) => {
        const newHeader = [...header];
        const jsonData = sortOrdr === 'asc' ? [...data.sort((a,b) => compare(a[key],b[key]))] : [...data.sort((a,b) => compare(b[key],a[key]))];
        
        newHeader[ind] = {title: newHeader[ind].title, key: newHeader[ind].key, asc: true, desc: true};
        newHeader[ind][sortOrdr] = false;
        setHeader(newHeader);
        setData(jsonData);
        
    }
    return(
        <React.Fragment>
            <table>
                <thead>
    <tr>{header.map( (val, index) => <th key={`${val.title}#${index}`}><span className="header-value">{val.title}</span>{val.asc && <span className="sort-by-before" onClick={sort.bind(this,index, 'asc', val.key)} />}{val.desc && <span className="sort-by-after" onClick={sort.bind(this,index,'desc', val.key)}/>}</th>)}</tr>
                </thead>
                <tbody>
                    {
                        data.map( (val, index) => {
                            return(
                                <tr key={`${val}#${index}`}>
                                    <td><Link to={{pathname: `/chart/${val.cid}`, state: val}} className="link" >{val.conceptName}</Link></td>
                                    <td>{val.statType}</td>
                                    <td>{val.uniqueCount}</td>
                                    <td>{val.nullCount}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}
export default Home;