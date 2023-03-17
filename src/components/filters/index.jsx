import { FILTERS } from "../../constants/filters"

export const Filters = () => {
    const createFilters = (data,type,groupName) => {
        return (
            <div>
                {data.map((item, index) => {
                    return (<div><input type={type} name={groupName} value={item.value} />
                        {item.value}
                    </div>)
                })}
            </div>
        )
    }
    const createHeading = () => {
        return (
            <div>
                {FILTERS.map((item, index) => {
                    return (
                        <div key={item.key}>
                            <h6>{item.value}</h6>
                            {createFilters(item.range,item.type,item.key)}
                        </div>
                    )
                })}
            </div>
        )

    }

    return (
        <div className="col-md-3">
            {createHeading()}
        </div>
    )
}

