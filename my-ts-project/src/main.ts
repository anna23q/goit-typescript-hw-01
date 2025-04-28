import "./style.css";
// import {
//   age,
//   callback,
//   empty,
//   toggle,
//   username,
//   setBasic,
//   getBasic,
// } from "./basic/1";
import { age, callback, empty, toggle, username } from "./basic/1";
import { person } from "./basic/2";
import { mixType, status } from "./basic/3";
import { showMessage, customError, calc } from "./basic/4";
import { DayOfWeek, isWeekend } from "./basic/5";
import { mango, poly } from "./basic/6";
import { page1, page2 } from "./basic/7";
import { fetchData } from "./generics/1";
import { compare } from "./generics/2";
import { merge } from "./generics/3";
import { createOrUpdateUser } from "./generics/4";
import { RoleDescription, UserRole } from "./generics/5";
import Params from "./generics/6";

let basic: string = "";
let generics: string = "";

// ================= basic task - 1 =================

// setBasic(`basic task - 1`);
// console.log(`Serhii Karskyi`);
// console.log(getBasic());

console.log((basic = ` ================ basic task - 1 ================ `));
console.log(age);
console.log(username);
console.log(toggle);
console.log(empty);
console.log(callback(7));

// ================= /basic task - 1 =================

// ================= basic task - 2 =================

// setBasic(`basic task - 2`);
// console.log(getBasic());

console.log((basic = ` ================ basic task - 2 ================ `));
console.log(person);

// ================ /basic task - 2 =================

// ================= basic task - 3 =================

console.log((basic = ` ================ basic task - 3 ================ `));
// mixType("string", 5);
mixType([
  { stringA: "hello", numberB: 42 },
  { stringA: "Who are you? I am", numberB: 22 },
]);
status("enable", "disable");

// ================ /basic task - 3 =================

// ================= basic task - 4 =================

console.log((basic = ` ================ basic task - 4 ================ `));
showMessage("Hello world");
console.log(calc(23, 56));
try {
  customError();
} catch (error) {
  console.log(`Critical error`, error);
}

// ================ /basic task - 4 =================

// ================= basic task - 5 =================

console.log((basic = ` ================ basic task - 5 ================ `));
console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Thursday));
console.log(isWeekend(DayOfWeek.Wednesday));
console.log(isWeekend(DayOfWeek.Tuesday));
console.log(isWeekend(DayOfWeek.Friday));
console.log(isWeekend(DayOfWeek.Saturday));
console.log(isWeekend(DayOfWeek.Sunday));

// ================ /basic task - 5 =================

// ================= basic task - 6 =================

console.log((basic = ` ================ basic task - 6 ================ `));
console.log(mango);
console.log(poly);

// ================ /basic task - 6 =================

// ================ basic task - 7 =================

console.log((basic = ` ================ basic task - 7 ================ `));
console.log(page1);
console.log(page2);

// =============== /basic task - 7 =================

// ================================= generics ================================

// ================= generics task - 1 =================

async function runAll() {
  console.log((generics = ` ============== Generics task - 1 ============== `));

  interface User {
    id: string | number;
    name: string;
    email: string;
  }

  // async function getUserData() {
  try {
    const user = await fetchData<User>(
      "https://jsonplaceholder.typicode.com/users/7"
    );
    console.log(user);
  } catch (error) {
    console.error(error);
  }
  // }

  // getUserData();

  // ================ /generics task - 1 =================

  // ================= generics task - 2 =================

  console.log((generics = ` ============== Generics task - 2 ============== `));
  const obj1 = { name: "Banana", position: 1, color: "Yellow", weight: 15 };
  const obj2 = { name: "Cherry", position: 7, color: "Blue", weight: 17 };

  console.log(compare(obj1, obj2));

  // ================ /generics task - 2 =================

  // ================= generics task - 3 =================

  console.log((generics = ` ============== Generics task - 3 ============== `));

  const objA = { name: "Bob", age: 19 };
  const objB = { job: "Software-Developer", country: "Ireland" };

  console.log(merge(objA, objB));
  // ================ /generics task - 3 =================

  // ================= generics task - 4 =================

  console.log((generics = ` ============== Generics task - 4 ============== `));
  console.log(
    createOrUpdateUser({
      email: "user@mail.com",
      password: "password123",
    })
  );

  // ================ /generics task - 4 =================

  // ================= generics task - 5 =================

  console.log((generics = ` ============== Generics task - 5 ============== `));
  console.log(RoleDescription[UserRole.admin]);
  console.log(RoleDescription[UserRole.editor]);
  console.log(RoleDescription[UserRole.guest]);

  // ================ /generics task - 5 =================

  // ================= generics task - 6 =================

  console.log((generics = ` ============== Generics task - 6 ============== `));
  const newParams: Params = {
    email: "user@example.com",
    firstName: "Bobik",
    lastName: "Shmobik",
    phone: "380508969114",
  };

  console.log(newParams);

  // ================ /generics task - 6 =================
}

runAll();
