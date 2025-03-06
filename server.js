const express = require('express')
const app = express()
const cors = require ('cors')
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;


const connectdb = require('./config/Db')
connectdb()


app.use(express.json());

const allowedOrigins = [
	"http://localhost:5174",  // Local Dev
	"https://task-management-frontend-kohl.vercel.app" // Deployed Frontend
  ];
  
  app.use(cors({
	origin: function (origin, callback) {
	  if (!origin || allowedOrigins.includes(origin)) {
		callback(null, true);
	  } else {
		callback(new Error("Not allowed by CORS"));
	  }
	},
	credentials: true // If using cookies/authentication
  }));


//mount route
const taskroute = require ('./Routes/Taskroutes')
app.use('/api/v1' ,taskroute)


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})