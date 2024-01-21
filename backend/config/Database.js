import mysql2 from "mysql2";

const createDBConnection = async () => {
  try {
    const connection = await mysql2
      .createConnection({
        port: 3306,
        host: "localhost",
        database: "it-project",
        user: "root",
        password: "",
      })
      .promise();

    console.log("Connected to the database!");

    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    return;
  }
};

export const connection = await createDBConnection();

export const getAllUser = async () => {
  const query = "SELECT * FROM `users`";
  try {
    const response = await connection.query(query);
    return response[0];
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
};

export const addUser = async (firstName, lastName, email, password) => {
  const query = "INSERT INTO `users` (`first_name`, `last_name`, `email`, `password`, `is_admin`) VALUES (?,?,?,?,?)";

  const res = await connection.query(query, [firstName, lastName, email, password, 0]);
  return res;
};

export const getUserEmail = async (email) => {
  const query = "SELECT * FROM `users` WHERE email = ? ";

  const res = await connection.query(query, [email]);
  return res[0];
};

export const getUserToken = async (token) => {
  const query = "SELECT * FROM `users` WHERE refresh_token = ? ";

  const res = await connection.query(query, [token]);
  return res;
};

export const updateRefreshToken = async (refresh_token, id) => {
  const query = "UPDATE `users` SET refresh_token = ? WHERE id = ?;";

  const res = await connection.query(query, [refresh_token, id]);
  console.log(res);
  return res;
};

export const deleteRefreshToken = async (id) => {
  const query = "UPDATE `users` SET refresh_token = NULL WHERE id = ?";

  const res = await connection.query(query, [id]);
  return res;
};
