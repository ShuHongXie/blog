const middleware = {}

middleware['common'] = require('../middleware/common.ts')
middleware['common'] = middleware['common'].default || middleware['common']

export default middleware
