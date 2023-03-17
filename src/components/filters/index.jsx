import { useState } from "react"
import { FILTERS } from "../../constants/filters"
import "./index.css"
export const Filters = () => {
    const extendedFilters = FILTERS.map(x=>{
        return {
            ...x,display:"show"
        }
    })
    const [filters,setFilters] = useState(extendedFilters);

    const createFilters = (data,type,groupName) => {
        return (
            <div>
                {data.map((item, index) => {
                    return (<div className="ml-2 px-3 " key={item.key}>
                        <input type={type} name={groupName} value={item.value} />
                        <label className="ml-3 px-2">{item.value}</label>
                    </div>)
                })}
            </div>
        )
    }
    const createHeading = () => {
        return (
            <div>
                {filters.map((item, index) => {
                    return (
                        <div key={item.index} className="px-2 " >
                            <a href="#" className="h6" onClick={()=>{
                            let newFilters = filters.map(x=>x);
                            newFilters.forEach((x,i)=>{
                              if(i==index){
                                item.display= item.display=='show'?'hide':'show';
                              }
                           });
                           setFilters(newFilters);
                        }}>{item.value}</a>
                           <div className={item.display}> {createFilters(item.range,item.type,item.key)}</div>
                        </div>
                    )
                })}
            </div>
        )

    }

    return (
        <div className="col-md-5">
            {createHeading()}
        </div>
    )
}

