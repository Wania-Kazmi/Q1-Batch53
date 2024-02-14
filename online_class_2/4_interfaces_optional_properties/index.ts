//interface optional property
interface Book {
  title: string;
  author?: string; // Optional property
  publicationYear?: number; // Optional property
}

// A book with all properties
const completeBook: Book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  publicationYear: 1937,
};

// A book with only the title and author
const partialBook: Book = {
  title: "Meditations",
  author: "Marcus Aurelius",
};

// A book with only the title
const titleOnlyBook: Book = {
  title: "The Little Prince",
};
