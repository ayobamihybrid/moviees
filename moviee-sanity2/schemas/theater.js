import {defineType} from 'sanity'

export default defineType({
  name: 'theater',
  title: 'Theater',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      title: 'Location',
      name: 'Location',
      type: 'reference',
      to: [{type: 'location'}],
    },
  ],
})
