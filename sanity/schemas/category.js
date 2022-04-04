
export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields : [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'The name  of the category'
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
            description: `The category's color`
        },
        {
            name: 'parent',
            title: 'Parent',
            type: 'reference',
            to: [{type: 'category'}],
            description: 'The parent category (if any)'
        },
        {
            name: 'children',
            title: 'Children',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{type: 'category'}],
            }],
            description: 'The children categories (if any)'
        }
    ],
    preview: {
        select: {
            title: 'name',
        }
    }
}