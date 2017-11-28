config = {
    gasPrice: 5000000000,
    gasLimit: 200000,
    network: {
        mainnet: {
            chainId: 1,
            url: ''
        },

        testnet: {
            chainId: 3,
            url: 'https://api.myetherapi.com/rop'
        }
    },
    target: 0.1,
    receiverAddress: '0xDB526BeDb534cCA762Abf049D56C8A103d8DfA95'
}
module.exports = config;