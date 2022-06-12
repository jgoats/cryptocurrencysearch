let express = require("express");
let app = express();
let cors = require("cors");
require('dotenv').config();
let port = process.env.PORT;

app.use(express.json());

/*app.use(cors({
    origin: "https://justinssoftware.com",
    credentials: true
}));*/

app.get("/", (req, res) => {
    res.send("hello from main page");
})
app.get("/coins", (req, res) => {
    // contain a string
    let input = req.body.crypto;
    let coins = [
        ["bitcoin", { id: "bitcoin" }],
        ["etherium", { id: "etherium" }],
        ["tether", { id: "tether" }],
        ["usd-coin", { id: "usd-coin" }],
        ["binancecoin", { id: "binancecoin" }],
        ["cardano", { id: "cardano" }],
        ["xrp", { id: "ripple" }],
        ["binance-usd", { id: "binance-usd" }],
        ["solana", { id: "solana" }],
        ["dogecoin", { id: "dogecoin" }],
        ["polkadot", { id: "polkadot" }],
        ["wrapped-bitcoin", { id: "wrapped-bitcoin" }],
        ["tron", { id: "tron" }],
        ["avalanche", { id: "avalanche-2" }],
        ["dai", { id: "dai" }],
        ["shiba-inu", { id: "shiba-inu" }],
        ["leo-token", { id: "leo-token" }],
        ["cronos", { id: "crypto-com-chain" }],
        ["polygon", { id: "matic-network" }],
        ["litecoin", { id: "litecoin" }],
        ["chainlink", { id: "chainlink" }],
        ["ftx", { id: "ftx-token" }],
        ["chain", { id: "chain-2" }],
        ["stellar", { id: "stellar" }],
        ["near-protocol", { id: "near" }],
        ["monero", { id: "monero" }],
        ["bitcoin-cash", { id: "bitcoin-cash" }],
        ["okb", { id: "okb" }],
        ["etherium-classic", { id: "ethereum-classic" }],
        ["algorand", { id: "algorand" }],
        ["cosmos-hub", { id: "cosmos" }],
        ["flow", { id: "flow" }],
        ["uniswap", { id: "uniswap" }],
        ["vechain", { id: "vechain" }],
        ["theta-fuel", { id: "theta-fuel" }],
        ["tezos", { id: "tezos" }],
        ["hedera", { id: "hedera-hashgraph" }],
        ["kucoin", { id: "kucoin-shares" }],
        ["apecoin", { id: "apecoin" }],
        ["the-sandbox", { id: "the-sandbox" }],
        ["frax", { id: "frax" }],
        ["filecoin", { id: "filecoin" }],
        ["internet", { id: "internet-computer" }],
        ["axie-infinity", { id: "axie-infinity" }],
        ["descentraland", { id: "decentraland" }],
        ["ceth", { id: "compound-ether" }],
        ["theta-network", { id: "theta-token" }],
        ["elrond", { id: "elrond-erd-2" }],
        ["true-usd", { id: "true-usd" }],
        ["aave", { id: "aave" }],
        ["eos", { id: "eos" }],
        ["cusdc", { id: "compound-usd-coin" }],
        ["helium", { id: "helium" }],
        ["huobi-btc", { id: "huobi-btc" }],
        ["z-cash", { id: "zcash" }],
        ["bitcoin-sv", { id: "bitcoin-cash-sv" }],
        ["huobi", { id: "huobi-token" }],
        ["defichain", { id: "defichain" }],
        ["the-graph", { id: "the-graph" }],
        ["klaytn", { id: "klay-token" }],
        ["maker", { id: "maker" }],
        ["bittorrent", { id: "bittorrent" }],
        ["pax-dollar", { id: "paxos-standard" }],
        ["ecash", { id: "ecash" }],
        ["iota", { id: "iota" }],
        ["quant", { id: "quant-network" }],
        ["thorchain", { id: "thorchain" }],
        ["neutrino-usd", { id: "neutrino" }],
        ["gate", { id: "gatechain-token" }],
        ["fantom", { id: "fantom" }],
        ["neo", { id: "neo" }],
        ["radix", { id: "radix" }],
        ["terra-luna-classic", { id: "terra-luna" }],
        ["waves", { id: "waves" }],
        ["usdd", { id: "usdd" }],
        ["cdai", { id: "cdai" }],
        ["nexo", { id: "nexo" }],
        ["zilliqa", { id: "zilliqa" }],
        ["pancakeswap", { id: "pancakeswap-token" }],
        ["arweave", { id: "arweave" }],
        ["pax-gold", { id: "pax-gold" }],
        ["chiliz", { id: "chiliz" }],
        ["bitdao", { id: "bitdao" }],
        ["loopring", { id: "loopring" }],
        ["dash", { id: "dash" }],
        ["osmosis", { id: "osmosis" }],
        ["kusama", { id: "kusama" }],
        ["cusdt", { id: "compound-usdt" }],
        ["synthetix-network", { id: "havven" }],
        ["basic-attention", { id: "basic-attention-token" }],
        ["stepn", { id: "stepn" }],
        ["enjin-coin", { id: "enjincoin" }],
        ["amp", { id: "amp-token" }],
        ["stacks", { id: "blockstack" }],
        ["gala", { id: "gala" }],
        ["celo", { id: "celo" }],
        ["fei-usd", { id: "fei-usd" }],
        ["kava", { id: "kava" }],
        ["flex-coin", { id: "flex-coin" }],
        ["gnosis", { id: "gnosis" }],
        ["decred", { id: "decred" }],
        ["tether-gold", { id: "tether-gold" }],
        ["harmony", { id: "harmony" }],
        ["xdc-crowd-sale", { id: "xdce-crowd-sale" }],
        ["convex-finance", { id: "convex-finance" }],
        ["lido-dao", { id: "lido-dao" }],
        ["curve-dao", { id: "curve-dao-token" }],
        ["nem", { id: "nem" }],
        ["mina-protocol", { id: "mina-protocol" }],
        ["holo", { id: "holotoken" }],
        ["1inch", { id: "1inch" }],
        ["qtum", { id: "qtum" }],
        ["ecomi", { id: "ecomi" }],
        ["nexus-mutual", { id: "nxm" }],
        ["tokenize-xchange", { id: "tokenize-xchange" }],
        ["okc", { id: "oec-token" }],
        ["bitcoin-gold", { id: "bitcoin-gold" }],
        ["iost", { id: "iostoken" }],
        ["magic-internet-money", { id: "magic-internet-money" }],
        ["compound", { id: "compound-governance-token" }],
        ["safemoon", { id: "safemoon-2" }],
        ["omg-network", { id: "omisego" }],
        ["maiar-dex", { id: "maiar-dex" }],
        ["frax-share", { id: "frax-share" }],
        ["olympus", { id: "olympus" }],
        ["liquity-usd", { id: "liquity-usd" }],
        ["evmos", { id: "evmos" }],
        ["everdome", { id: "everdome" }],
        ["moonbeam", { id: "moonbeam" }],
        ["kadena", { id: "kadena" }],
        ["xido-finance", { id: "xido-finance" }],
        ["serum", { id: "serum" }],
        ["0x", { id: "0x" }],
        ["iotex", { id: "iotex" }],
        ["bancor-network", { id: "bancor" }],
        ["titanswap", { id: "titanswap" }],
        ["link", { id: "link" }],
        ["livepeer", { id: "livepeer" }],
        ["just", { id: "just" }],
        ["ankr", { id: "ankr" }],
        ["songbird", { id: "songbird" }],
        ["audius", { id: "audius" }],
        ["genimi-dollar", { id: "gemini-dollar" }],
        ["safemoon[old]", { id: "safemoon" }],
        ["juno", { id: "juno-network" }],
        ["tenset", { id: "tenset" }],
        ["icon", { id: "icon" }],
        ["etherium-name-service", { id: "ethereum-name-service" }],
        ["golem", { id: "golem" }]
    ];
    let result = coins.filter((item) => {
        if (item[0].indexOf(input) != -1) {
            return item
        }
    })
    res.json({
        result: coins
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`listening on port ${port}`);
});