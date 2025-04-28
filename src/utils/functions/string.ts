export const toTitleCase = (str: String): String => {
    return str
      .toLowerCase() // pastikan semua huruf kecil
      .replace(/\b(\w)/g, (char) => char.toUpperCase()); // ubah pertama setiap kata menjadi kapital
  };
  