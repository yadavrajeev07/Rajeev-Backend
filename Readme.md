Chai Aur Backend ☕🚀
Welcome to Chai Aur Backend, a robust backend project built using Node.js, Express, and MongoDB! This repository is designed to provide a solid foundation for scalable and efficient backend development.

📌 Features
🚀 Express.js for building RESTful APIs
🛠️ Mongoose for MongoDB database management
🔐 JWT Authentication for secure user access
📄 Dotenv for environment variable management
♻️ Nodemon for live server reloading
📂 Project Structure
lua
Copy
Edit
📦 Chai Aur Backend
 ┣ 📂 src
 ┃ ┣ 📂 config
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 db
 ┃ ┣ 📂 middleware
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 utils
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 constants.js
 ┣ 📜 .env
 ┣ 📜 .gitignore
 ┣ 📜 package.json
 ┣ 📜 README.md
⚡ Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/yadavrajeev07/ChaiAurBackend.git
cd ChaiAurBackend
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Setup Environment Variables
Create a .env file in the root directory and add the following:

env
Copy
Edit
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database-name>
JWT_SECRET=your_secret_key
Replace <username>, <password>, and <database-name> with your actual MongoDB credentials.

4️⃣ Run the Server
sh
Copy
Edit
npm run dev
Server will start on http://localhost:8000

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/users	Get all users
POST	/api/login	User login
POST	/api/register	Register a new user
GET	/api/posts	Fetch all posts
🤝 Contributing
Feel free to fork this repository, create a new branch, and submit a pull request. Contributions are always welcome!

📜 License
This project is licensed under the MIT License.
