interface User {
  id: string;
  name: string;
}

type Users = User[];

export const users: Users = [
  { id: "1", name: "Karlo" },
  { id: "2", name: "Marko" },
  { id: "3", name: "Leon" },
];
