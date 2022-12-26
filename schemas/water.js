export default {
    name: 'water',
    title: 'Water',
    type: 'document',
    fields: [
        {
            name: 'wateredBy',
            title: 'WateredBy',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'user' } }]
        },
        {
            name: 'wateredAt',
            title: 'WateredAt',
            type: 'array',
            of: [{ type: 'date' }]
        },
        {
            name: 'TreeWatered',
            title: 'TreeWatered',
            type: 'reference',
            to: { type: 'trees' }
        }
    ]
}