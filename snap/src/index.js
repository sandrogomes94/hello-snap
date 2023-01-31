module.exports.onRpcRequest = async ({ origin, request }) => {
  try{
    const name = request.params['name'];
    switch (request.method) {
      case 'hello':
        return `hello ${name}`;
  
      default:
        throw new Error('Method not found.');
    }
  }catch(error){
    // console.log(error);
    return "Invalid request!";
  }
};