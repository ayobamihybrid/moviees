import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: '78omp1gi',
  dataset: 'production',
  useCdn: true,
  token:
    'skjoH9oBGF79mYkDne1b8BdFFCayk6A3m6ctNBXeV2ZNIDxOk3tPViANTHU1AzYjeJECZtneP19fqmdqZIjivTotwaD2Y30JACHQcOF93BkqzSnmYiCA3h0ontBp2ypmM6dATiyg4HrTEdwthBYUV6GtPM13NMkspt0apecc2J51KH4juUKl',
  apiVersion: '2023-08-31',
})
