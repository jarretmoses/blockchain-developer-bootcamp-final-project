declare namespace LvesContract {
  interface Entry {
    createdAt: string;
    text: string
  }

  interface User {
    isActive: boolean;
    entries: Entry[];
  }
}
