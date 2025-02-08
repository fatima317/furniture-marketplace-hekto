export default {
    name : "order",
    type : "document",
    title : "Order",
    fields : [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "email",
            title: "Email",
            type: "string"
        },
        {
            name: "phone",
            title: "Phone",
            type: "number"
        },
        {
            name: "address",
            title: "Address",
            type: "string"
        },
        {
            name: "city",
            title: "City",
            type: "string"
        },
        {
            name: "zipCode",
            title: "Zip Code",
            type: "string"
        },
        {
            name: "discount",
            title: "Discount",
            type: "number"
        },
        {
            name: "cartItems",
            title: "Cart Items",
            type: "array",
            of: [{ type: "reference", to: {type: "product"}}]
        },
        {
            name: "total",
            title: "Total",
            type: "number"
        },
        {
            name: "status",
            title: "Order Status",
            type: "string",
            options: {
                list: [
                    {title: "Pending", value: "pending"},
                    {title: "Completed", value: "completed"},
                    {title: "Cancelled", value: "cancelled"}
                ],
                layout: "radio"
            },
            initialValue : "pending"
        }
    ]
}