##Setup

npm install ethers

Update rpc-latecny.js to have the RPC endpoint you want to test

// Add RPC url here
const rpcUrl = "";

MegaETH RPC -> https://carrot.megaeth.com/rpc
Monad RPC -> "https://testnet-rpc.monad.xyz"
Monad Alchemy RPC -> https://dashboard.alchemy.com/chains/monad
Monad Quicknode RPC -> https://dashboard.quicknode.com/endpoints/new/MONAD
Somnia RPC -> https://dream-rpc.somnia.network/
Somnia ANKR RPC -> https://www.ankr.com/rpc/somnia/

## Running

Try not to have other networked applications running as they can interfere with the test (if you want to be pure)

node rpc-latency.js