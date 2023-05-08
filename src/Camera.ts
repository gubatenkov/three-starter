import { PerspectiveCamera, Scene } from 'three'

import Sizes from './Utils/Sizes'
import Experience from './Experience'

export default class Camera {
  sizes: Sizes
  scene: Scene
  perspectiveCamera: PerspectiveCamera

  constructor() {
    const { sizes, scene } = Experience.getInstance()
    this.sizes = sizes
    this.scene = scene
    this.setupCamera()
  }

  private setupCamera() {
    this.perspectiveCamera = new PerspectiveCamera(
      50,
      this.sizes.aspect,
      0.1,
      100
    )
    this.perspectiveCamera.position.set(3, 3, 3)
    this.perspectiveCamera.lookAt(0, 0, 0)
    this.scene.add(this.perspectiveCamera)
  }

  resize() {
    this.perspectiveCamera.aspect = this.sizes.aspect
    this.perspectiveCamera.updateProjectionMatrix()
  }

  update() {
    this.perspectiveCamera.aspect = this.sizes.aspect
    this.perspectiveCamera.updateProjectionMatrix()
  }
}
