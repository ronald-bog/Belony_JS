import { promises as fs } from "fs";

export async function note(route, archivo) {
  return fs
    .writeFile(route, archivo, "utf-8")
    .then(() => {
      console.log(" Se Guarda correctamente el archivo");
    })
    .catch(() => {
      console.log("Error writing");
    });
}
