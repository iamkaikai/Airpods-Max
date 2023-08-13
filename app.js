const connectLivereload = require("connect-livereload");

const app = express();

app.use(connectLivereload());