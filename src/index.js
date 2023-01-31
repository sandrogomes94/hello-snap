module.exports.onRpcRequest = async ({ origin, request }) => {
  switch (request.method) {
    case 'hello':
      return 'world!';

    default:
      throw new Error('Method not found.');
  }
};