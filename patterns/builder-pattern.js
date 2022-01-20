class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  build() {
    return this.user;
  }
}

const user = new UserBuilder("Sean")
  .setAge(22)
  .setAddress("1 Main st.")
  .setPhone("111-222-444")
  .build();

/////////////////// Another way of implementing this pattern /////////////////////////////

// class User {
//   constructor(name, { phone = "default-value", address, age } = {}) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.phone = phone;
//   }
// }

// const user = new User("Bob");
// console.log(user);
