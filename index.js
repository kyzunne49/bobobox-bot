const fetch = require ('node-fetch');
const cheerio = require ('fetch');



const GetDataHeadernya = () => new Promise ((resolve, reject) => {
    fetch ('https://api.bobobox.co.id/clients/v1/register', {
    })
})



(async () => {
    const testHeader = await GetDataHeadernya();
    console.log(testHeader);
})