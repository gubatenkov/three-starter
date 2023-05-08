import { Scene } from "three";

import World from "./World";
import Camera from "./Camera";
import Time from "./Utils/Time";
import Sizes from "./Utils/Sizes";
import Renderer from "./Renderer";
import DefaultControls from "./Utils/OrbitControls";
import ModelLoader from "./Utils/ModelLoader";
import { assets } from "./data";
import TexturesLoader from "./Utils/TextureLoader";

/* Singletone implementation
 * https://refactoring.guru/design-patterns/singleton/typescript/example
 */
class Experience {
  private static instance: Experience;
  canvas: HTMLCanvasElement;
  scene: Scene;
  camera: Camera;
  sizes: Sizes;
  renderer: Renderer;
  time: Time;
  world: World;
  controls: DefaultControls;
  loader: ModelLoader;
  textureLoader: TexturesLoader;

  private constructor() {}

  static getInstance() {
    if (!Experience.instance) {
      Experience.instance = new Experience();
      Experience.instance.init();
    }
    return Experience.instance;
  }

  private init() {
    this.canvas = document.querySelector("canvas")!;
    this.scene = new Scene();
    this.sizes = new Sizes();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.time = new Time();
    this.loader = new ModelLoader(assets);
    this.world = new World();
    this.controls = new DefaultControls();
    this.textureLoader = new TexturesLoader();

    this.time.on("TimeFrame", () => this.update());
    this.sizes.on("ScreenResize", () => this.resize());
  }

  private resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  private update() {
    this.camera.update();
    this.renderer.update();
  }
}

export default Experience;
