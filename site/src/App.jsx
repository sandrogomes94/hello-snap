function App() {

  async function connect(){
    const conn = await ethereum.request({
      method: 'wallet_enable',
      params: [
        {
          wallet_snap: {
            'local:http://localhost:9000': {},
          },
        },
      ],
    });
    console.log(conn);
  }

  async function hello(){
    const hello = await ethereum.request({
      method: 'wallet_invokeSnap',
      params: ['local:http://localhost:9000',
        { 
          method: 'hello',
          params: {name: "world!"}
        }
      ],
    });
    console.log(hello);
  }

  return (
    <>
      <button onClick={connect}>Connect</button>
      <button onClick={hello}>Hello</button>
    </>
  )
}

export default App
