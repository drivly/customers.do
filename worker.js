export const api = {
  icon: '🚀',
  name: 'customers.do',
  description: 'Customer Management API',
  url: 'https://customers.do/api',
  type: 'https://apis.do/saas',
  endpoints: {
    listCategories: 'https://customers.do/api',
    getCategory: 'https://customers.do/:type',
  },
  site: 'https://customers.do',
  login: 'https://customers.do/login',
  signup: 'https://customers.do/signup',
  subscribe: 'https://customers.do/subscribe',
  repo: 'https://github.com/drivly/customers.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://customers.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
