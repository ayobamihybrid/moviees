import {defineType} from 'sanity'

export default defineType({
  name: 'showtimes',
  title: 'Showtimes',
  type: 'document',
  fields: [
    {
      name: 'time',
      type: 'string',
    },
    {
      title: 'Movie',
      name: 'movie',
      type: 'reference',
      to: [{type: 'movie'}],
    },
    {
      title: 'Theater',
      name: 'theater',
      type: 'reference',
      to: [{type: 'theater'}],
    },
    {
      title: 'Row',
      name: 'row',
      type: 'array',
      of: [{type: 'row'}],
    },
  ],
})
