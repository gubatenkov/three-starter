import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import Camera from '../Camera'
import Renderer from '../Renderer'
import Experience from '../Experience'

export default class DefaultControls {
  camera: Camera
  renderer: Renderer
  controls: OrbitControls

  constructor() {
    const { camera, renderer } = Experience.getInstance()
    this.camera = camera
    this.renderer = renderer
    this.initOrbitControls()
  }

  initOrbitControls() {
    this.controls = new OrbitControls(
      this.camera.perspectiveCamera,
      this.renderer.renderer.domElement
    )
    this.controls.update()
  }
}
