# Express Basic User Management App

A simple Express.js application that allows you to create, update, delete, and search users. The UI is rendered with EJS and styled using [PicoCSS](https://picocss.com/).

[Code at GitHub](https://github.com/mdahamshi/top-express-search)

[Live DEMO](https://link.dahamshi.xyz/top-express-search)

## 🚀 Features

- Create new users
- Update existing users
- Delete users (unless marked as protected)
- Search users by name or email
- Server-side rendering with EJS
- Clean and responsive styling with PicoCSS

## 🧪 Tech Stack

- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [PicoCSS](https://picocss.com/)
- Vanilla HTML + CSS

## 🔧 Installation

```bash
git clone https://github.com/YOUR_USERNAME/express-basic-user-management.git
cd express-basic-user-management
npm install
npm start
```

Visit: `http://localhost:3000`

## 📬 Routes

| Route           | Method | Description                    |
| --------------- | ------ | ------------------------------ |
| `/`             | GET    | List all users                 |
| `/create`       | GET    | Show create user form          |
| `/create`       | POST   | Submit new user                |
| `/:id/update`   | GET    | Show update form               |
| `/:id/update`   | POST   | Submit updated data            |
| `/:id/delete`   | POST   | Delete user (if not protected) |
| `/search?q=...` | GET    | Search users by name/email     |

## 🛡️ Notes

- Users with `protected: true` cannot be deleted or updated.
- All data is stored in-memory (`data.js`). No database is used.
- This is a learning/demo project only.

## 📃 License

[MIT](LICENSE)

---

**Made with ❤️ using Express and EJS**
