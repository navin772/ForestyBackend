export default {
    name: 'article',
    title: 'Articles',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text'
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'user' }]
        }
    ]
}