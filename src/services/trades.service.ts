import binance from 'binance-api-node';


const client = binance({
    apiKey: process.env.BINANCE_API_KEY,
    apiSecret: process.env.BINANCE_API_SECRET,
});

  
export const analizeTradesHistory = async (): Promise<void> => {
    
};