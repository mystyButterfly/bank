import { CARDS } from "../fakeApi/CARDS";
import { USERS } from "../fakeApi/USERS";

export function checkLocalStoarage() {
  if (localStorage.getItem("users")) {
    null
  } else {
    localStorage.setItem("users", JSON.stringify(USERS));
    localStorage.setItem("cards", JSON.stringify(CARDS));
  }
}
