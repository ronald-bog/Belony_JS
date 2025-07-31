import { promises as fs } from "fs";

export async function leer(route) {
  return fs
    .readFile(route, "utf-8")
    .then((data) => {
      console.log("se lee correctamente");
      return data;
    })
    .catch(() => {
      console.log("error reading");
    });
}
