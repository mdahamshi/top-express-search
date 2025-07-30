export class UsersStorage {
  constructor() {
    this.storage = [
      {
        id: 0,
        firstName: "Sarah",
        lastName: "",
        email: "sarah@email.com",
        age: 4,
        bio: "انا بحب بابا",
        protected: true,
      },
      {
        id: 1,
        firstName: "Salmah",
        lastName: "",
        email: "salmah@email.com",
        age: 3,
        bio: "وانا كمان بحب بابا",
        protected: true,
      },
      {
        id: 2,
        firstName: "Mohammad",
        lastName: "",
        email: "mmd@email.com",
        age: 3,
        bio: "",
        protected: false,
      },
      {
        id: 4,
        firstName: "Amina",
        lastName: "",
        email: "amina123@email.com",
        age: 2,
        bio: "",
        protected: true,
      },
      {
        id: 5,
        firstName: "Yousef",
        lastName: "K.",
        email: "yousef.k@email.com",
        age: 30,
        bio: "Full-stack developer and chess enthusiast.",
        protected: false,
      },
      {
        id: 6,
        firstName: "Lina",
        lastName: "Saleh",
        email: "lina.saleh@email.com",
        age: 28,
        bio: "Graphic designer and cat lover.",
        protected: false,
      },
      {
        id: 7,
        firstName: "Khalid",
        lastName: "",
        email: "khalid@email.com",
        age: 40,
        bio: "",
        protected: true,
      },
    ];
    this.id = 8;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = {
      protected: false,
      id,
      firstName,
      lastName,
      email,
      age,
      bio,
    };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    if (!this.storage[id].protected)
      this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    if (!this.storage[id].protected) delete this.storage[id];
  }
}

export const usersStorage = new UsersStorage();
