import binance, { AggregatedTrade } from 'binance-api-node';


const client = binance({
    apiKey: process.env.BINANCE_API_KEY,
    apiSecret: process.env.BINANCE_API_SECRET,
});

const limit = 1000;

export const getTradesForThePeriod = async (symbol: string, startTime: number, endTime: number): Promise<AggregatedTrade[]> => {
    let trades = await client.aggTrades({symbol: 'BTCUSDT', limit});
    if(trades.length < limit) {
        return trades;
    }

    let fromId = trades[trades.length - 1].aggId + 1;

    while(true) {
        const currTrades = await client.aggTrades({symbol: 'BTCUSDT', limit, fromId: fromId.toString() });
        
        if(currTrades.length === 0) break;

        trades.push(...currTrades);

        fromId = currTrades[currTrades.length - 1].aggId + 1;

    }

    console.log(trades);
    console.log(trades.length);

    return trades;
    
};

  
export const analizeTradesHistory = async (symbol: string, startTime: string, endTime: string): Promise<void> => {
    const startTimestamp = new Date(startTime).getTime();
    const endTimestamp = new Date(endTime).getTime();
    const trades = await getTradesForThePeriod(symbol, startTimestamp, endTimestamp);
    console.log(trades);
    
};

/*
{
    aggId: 3193754617,
    symbol: 'BTCUSDT',
    price: '66934.78000000',
    quantity: '0.01008000',
    firstId: 3930271321,
    lastId: 3930271321,
    timestamp: 1729064846185,
    isBuyerMaker: true,
    wasBestPrice: true
  }
*/