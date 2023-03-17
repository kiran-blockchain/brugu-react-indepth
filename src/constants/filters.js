export const FILTERS = [
    {
        key: "Price",
        value: "Price",
        type: "checkbox",
        range: [{
            key: "100", value: "100"
        },
        {
            key: "500", value: "500"
        },
        {
            key: "1000", value: "1000"
        },
        {
            key: "2000", value: "2000"
        }]
    },
    {
        key: "Brand",
        value: "Brand",
        type: "radio",
        range: [{
            key: "iPhone", value: "iPhone"
        },
        {
            key: "Samsung", value: "Samsung"
        }
        ]
    },
    {
        key: "Ratings",
        value: "Ratings",
        type: "checkbox",
        range: [{
            key: "1", value: "1"
        },
        {
            key: "2", value: "2"
        },
        {
            key: "3", value: "3"
        },
        {
            key: "4", value: "4"
        },
        {
            key: "5", value: "5"
        }]
    }]