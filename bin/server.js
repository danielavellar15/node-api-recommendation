const app = require('../src/app');
const connectDb = require("../src/db/connection");

const port = normalizaPort(process.env.PORT || '3100');

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
            return port;
        }
    return false;
}

app.listen(port, function () {
    console.log(`app listening on port ${port}`);

    connectDb().then(() => {
        console.log("MongoDb connected");
    });
})