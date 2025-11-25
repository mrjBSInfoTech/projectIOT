import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "product_management",
  port: 3307,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Failed to connect to MySQL:", err.message);
    process.exit(1); // stop the server if DB connection fails
  }
  console.log("✅ Connected to MySQL!");
});

export default db;
