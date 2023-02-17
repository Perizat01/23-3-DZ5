function booksWithU(bookList) {
  const booksWithU = [];
  const otherBooks = [];
  bookList.forEach(book => {
    if (book.toLowerCase().includes('у')) {
      booksWithU.push(book);
    } else {
      otherBooks.push(book);
    }
  });
  return { booksWithU, otherBooks };
}
const bookList = ["Ранние журавли", " В огне", "На берегах Иссык-Куля", " Люди наших дней", "Азиатские белые горы"];

console.log(booksWithU(bookList));
