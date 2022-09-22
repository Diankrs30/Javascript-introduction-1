let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: 
  {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
// Mengubah data dengan menggunakan spread operator (Mengganti value dengan key yang sama)
let addData = {
    name: "Dian Kartika Ratna Sari",
    email: "diankrs30@gmail.com",
    hobby: "Watching"
}

let newData = {...data, ...addData};
console.log(newData);

// Mengambil data "street dan city" menggunakan destructuring
let {address : {street, city}} = data;
console.log(street, city);