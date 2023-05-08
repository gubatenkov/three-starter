import { DirectionalLight, Scene } from "three";

import Room from "./Room";
import Camera from "./Camera";
import Experience from "./Experience";
import ModelLoader from "./Utils/ModelLoader";

export default class World {
  scene: Scene;
  camera: Camera;
  loader: ModelLoader;
  room: Room;
  light: DirectionalLight;

  constructor() {
    const { scene, camera, loader } = Experience.getInstance();
    this.scene = scene;
    this.camera = camera;
    this.loader = loader;
    this.loader.on("LamboLoaded", () => {
      this.room = new Room();
    });
    this.addLight();
  }

  addLight() {
    this.light = new DirectionalLight("white", 3);
    this.light.castShadow = true;
    this.light.shadow.camera.far = 20;
    this.light.shadow.camera.near = 1;
    this.light.shadow.mapSize.set(1024, 1024);
    this.light.shadow.normalBias = 0.02;
    this.light.position.set(1.5, 7, 3);
    this.scene.add(this.light);
  }
}
