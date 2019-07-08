exports.create = {
  url: '/snapshot/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    description: {
      type: 'string',
      required: false
    }
  }
}

exports.list = {
  url: '/snapshot/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SNAPSHOTID: {
      type: 'string',
      required: false
    }
  }
}
