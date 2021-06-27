export function getAllProduct() {
  return fetch("http://localhost:9000/api/products")
    .then((res) => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        console.error("getAllProduct Error ===>", error);
        throw error;
      }
    );
}

// export function getProductDetails(id) {
//   return fetch(`http://localhost:9001/api/products/${no}`)
//     .then((res) => res.json())
//     .then(
//       (result) => {
//         return result;
//       },
//       (error) => {
//         console.error("getAllProduct Error ===>", error);
//         throw error;
//       }
//     );
// }
