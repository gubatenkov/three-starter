import { Scene } from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

import Experience from "./Experience";

export default class Room {
  gltf: GLTF;
  scene: Scene;

  constructor() {
    const { scene, loader } = Experience.getInstance();
    this.scene = scene;
    this.gltf = loader.items.Lambo;
    const mesh = this.gltf.scene.children[0];
    mesh.scale.set(0.009, 0.009, 0.009);
    this.scene.add(mesh);
  }
}
