import { TextureLoader } from "three";

export default class TexturesLoader {
  loader;

  constructor() {
    this.loader = new TextureLoader();
  }

  load(path: string) {
    return this.loader.load(
      path,
      () => {},
      () => {},
      () => console.log("Error occurs when loading texture")
    );
  }
}
