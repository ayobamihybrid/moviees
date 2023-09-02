import {defineType} from 'sanity'

export default defineType({
    title: 'location',
    name: 'location',
    type: 'document',
    fields: [
        {
            title: 'City',
            name: 'city',
            type: 'string'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'string'
        }
    ]
})