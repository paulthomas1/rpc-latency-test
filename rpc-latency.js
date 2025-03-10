// MegaETH RPC -> https://carrot.megaeth.com/rpc
// Monad RPC -> "https://testnet-rpc.monad.xyz"
// Monad Alchemy RPC -> https://dashboard.alchemy.com/chains/monad
// Monad Quicknode RPC -> https://dashboard.quicknode.com/endpoints/new/MONAD
// Somnia RPC -> https://dream-rpc.somnia.network/
// Somnia ANKR RPC -> https://www.ankr.com/rpc/somnia/

const { ethers } = require('ethers');

// Add RPC url here
const rpcUrl = "";
const provider = new ethers.JsonRpcProvider(rpcUrl);

let totalLatency = 0;
let requestCount = 0;

async function testLatency() {
  try {
    const start = Date.now();
    await provider.getBlockNumber();
    const latency = Date.now() - start;

    if (requestCount > 0) { // Ignore the first latency as often spike due to hitting load balancer
      totalLatency += latency;
      const averageLatency = totalLatency / requestCount;
      console.log(`Average RPC Latency: ${averageLatency.toFixed(2)} ms`);
    } else {
      console.log(`First latency (ignored): ${latency} ms`);
    }

    requestCount++;
  } catch (error) {
    console.error(`Error connecting to RPC: ${error}`);
  }
}

testLatency();

// Run latency check every 1 second
setInterval(testLatency, 1000);