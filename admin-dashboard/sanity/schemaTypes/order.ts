export default {
    name : 'order',
    title : 'Order',
    type : 'document',
    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string'
        },
        {
            name : 'email',
            title : 'Email',
            type : 'string'
        },
        {
            name : 'orderDate',
            title : 'Order Date',
            type : 'datetime'
        },
        {
            name : 'phone',
            title : 'Phone',
            type : 'number'
        },
        {
            name : 'address',
            title : 'Address',
            type : 'string'
        },
        {
            name : 'city',
            title : 'City',
            type : 'string'
        },
        {
            name : 'zipCode',
            title : 'Zip Code',
            type : 'string'
        },
        {
            name : 'cartItems',
            title : 'Cart Items',
            type : 'array',
            of : [{type : 'reference', to : { type : 'product' } }]
        },
        {
            name : 'total',
            title : 'Total',
            type : 'number'
        },
        {
            name : 'discount',
            title : 'Discount',
            type : 'number'
        },
        {
            name : 'status',
            title : 'Status',
            type : 'string',
            options : {
                list : [
                    {
                        title : 'Pending',
                        value : 'pending'
                    },
                    {
                        title : 'Processing',
                        value : 'processing'
                    },
                    {
                        title : 'Shipped',
                        value : 'shipped'
                    },
                ], 
                layout : 'radio'
            },
            initialValue : 'pending'
        },
    ],
};