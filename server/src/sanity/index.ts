import sanityClient from '@sanity/client'

const client= sanityClient({
    projectId: 'ut10azo5',
    dataset: 'production',
    apiVersion: '2021-12-28',
    token: 'skVclnSWpRAk8FEhyCA2luvI78KUFsbDR31hCtP0g0s0knOXPBc9Z1N1j42eaqEpI7dYwvnLKeJVXY6Llo9yNO8GhmSm8Krajn1np1ZjZ3U8PhmtocIWBKuWbtyIfkyPCkKGC6BZIEvWMyD5SJIBC27pWQO23zGC5B3cyvWOBySjyT88XGMu',
    useCdn: false,
})

export default client