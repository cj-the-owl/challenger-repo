const {express, routes} = require('./controller')
const path = require('path')
const app = express();
const port = +process.env.PORT || 3000;
//static
app.use(express.static('./static'))
app.use(
    express.urlencoded({
        extended: false
    }),
    routes
)

routes.get('^/$|/challenger',
(req, res) => {
    res.sendFile(path.resolve(__dirname, './static/html/index.html'))
})
//require routes
// const routes = require("./routes");
//middleware
// app.use(express.json());
// app.use(cors());
//use routes
// app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is vibing on port ${port}`);
})