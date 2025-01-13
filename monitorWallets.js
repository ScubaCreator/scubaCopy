const { Connection, PublicKey } = require("@solana/web3.js");
const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

//lowkey who knows what this does but it connects to the solana network so idk cool?

//monitor transactions/swaps

async function walletTransactions(walletAdress){
    const wallet = new PublicKey(walletAdress);
    onsole.log(`Monitoring transactions for wallet: ${walletAddress}`);

    connection.onLogs(wallet, (log) => {
        console.log('transaction!:', log);
    });
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter wallet addresses (comma-separated): ", async (input) => {
    const wallets = input.split(",").map((addr) => addr.trim());
    wallets.forEach((wallet) => {
        try {
            walletTransactions(wallet);
        } catch (error) {
            console.error(`Error monitoring wallet ${wallet}:`, error.message);
        }
    });

    console.log("Monitoring started. Press Ctrl+C to exit.");
    rl.close();
});