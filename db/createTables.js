module.exports = async (db) => {
  await db.execute(`
  CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(40) not null,
    email varchar(40) not null,
    password varchar(10) not null
  );
  `);

  await db.execute(`
  CREATE TABLE IF NOT EXISTS moods(
    id INT AUTO_INCREMENT PRIMARY KEY,
    mood varchar(40) not null,
    mood_value int not null,
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
  `);
};
