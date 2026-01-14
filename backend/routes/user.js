import express from "express";
import bcrypt from "bcryptjs";
import db from "../database/db.js";

const router = express.Router();

// ✅ GET ALL USERS
router.get("/all", (req, res) => {
  const sql = "SELECT id, username, role FROM users";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    res.json(results);
  });
});

// ✅ GET SINGLE USER BY ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT id, username, role FROM users WHERE id = ?";

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(results[0]);
  });
});

// ✅ ADD NEW USER
router.post("/add", (req, res) => {
  const { username, password, role } = req.body;

  // Validation
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  // Hash password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    const sql = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";
    db.query(sql, [username, hashedPassword, role || "user"], (err) => {
      if (err) {
        console.error("Database error:", err);
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).json({ message: "Username already exists" });
        }
        return res.status(500).json({ message: "Database error", error: err.message });
      }
      res.status(201).json({ message: "User added successfully" });
    });
  });
});

// ✅ EDIT USER
router.put("/edit/:id", (req, res) => {
  const { id } = req.params;
  const { username, role, password } = req.body;

  // Validation
  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  // Check if user exists
  const checkSql = "SELECT * FROM users WHERE id = ?";
  db.query(checkSql, [id], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Build update query dynamically
    let sql = "UPDATE users SET username = ?, role = ?";
    let params = [username, role || "user"];

    // If password is provided, hash it and include in update
    if (password && password.trim() !== "") {
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({ message: "Error hashing password" });
        }

        sql += ", password = ?";
        params.push(hashedPassword);
        sql += " WHERE id = ?";
        params.push(id);

        db.query(sql, params, (err) => {
          if (err) {
            console.error("Database error:", err);
            if (err.code === "ER_DUP_ENTRY") {
              return res.status(409).json({ message: "Username already exists" });
            }
            return res.status(500).json({ message: "Database error", error: err.message });
          }
          res.json({ message: "User updated successfully" });
        });
      });
    } else {
      sql += " WHERE id = ?";
      params.push(id);

      db.query(sql, params, (err) => {
        if (err) {
          console.error("Database error:", err);
          if (err.code === "ER_DUP_ENTRY") {
            return res.status(409).json({ message: "Username already exists" });
          }
          return res.status(500).json({ message: "Database error", error: err.message });
        }
        res.json({ message: "User updated successfully" });
      });
    }
  });
});

// ✅ DELETE USER
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  // Check if user exists
  const checkSql = "SELECT * FROM users WHERE id = ?";
  db.query(checkSql, [id], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete user
    const deleteSql = "DELETE FROM users WHERE id = ?";
    db.query(deleteSql, [id], (err) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Database error", error: err.message });
      }
      res.json({ message: "User deleted successfully" });
    });
  });
});

export default router;
