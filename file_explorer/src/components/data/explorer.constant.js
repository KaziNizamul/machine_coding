export const explorer = {
  id: crypto.randomUUID(),
  name: 'root',
  isFolder: true,
  items: [
    {
      id: crypto.randomUUID(),
      name: 'public',
      isFolder: true,
      items: [
        {
          id: crypto.randomUUID(),
          name: 'index.html',
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: 'package.json',
      isFolder: false,
      items: [],
    },
    {
      id: crypto.randomUUID(),
      name: 'package-lock.json',
      isFolder: false,
      items: [],
    },
    {
      id: crypto.randomUUID(),
      name: 'src',
      isFolder: true,
      items: [
        {
          id: crypto.randomUUID(),
          name: 'index.js',
          isFolder: false,
          items: [],
        },
      ],
    },
  ],
};
