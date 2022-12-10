require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remember modify hover forest furnace spot'; 
let testAccounts = [
"0xbcedbccdeee8aba78737dc8bc2084116e5056c52fab46b6b7f562b8705c6f83b",
"0x23f69f4517d7faf70eab90d41d97a9c3031448a75bc726e1044ab89501fdef0c",
"0x3c7db953e740fbc4caba8927a1f99542c736607f2909fd000e0f23bad288b4df",
"0xb8e3854a32c75c37acb582102747c9d52ef31915ee7b4219e6a258842e18185c",
"0x5330edc304468c7d02e81293fe1a3162bf93cf855c8f82c832e6607a042930a5",
"0xdc695dea80f8cf5e68415ba6e32a751c7dfb921901abfc5ab01903e23ea437d2",
"0xaa71bbc061484ca27921be32e86fab6fb4362b2df5578b0bb23da534eb725215",
"0xac309221d44fce78f282d26341d7454c04966faa54af2b4a57e3654b4ca841ac",
"0xd6344782362d6e9ef1d3dbb7544c3eb798e774822d70033b9c3e1808f2157ff4",
"0x0c2aac7444ba5118c20d84e75c619a4a11d904643a363b39738e6d13c465dd27"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

