import {
  Scene,
  PCFShadowMap,
  WebGLRenderer,
  SRGBColorSpace,
  CineonToneMapping,
  NoToneMapping,
  Color,
} from 'three'

import type Camera from './Camera'
import type Sizes from './Utils/Sizes'
import Experience from './Experience'

export default class Renderer {
  sizes: Sizes
  scene: Scene
  camera: Camera
  canvas: HTMLCanvasElement
  renderer: WebGLRenderer

  constructor() {
    const { sizes, scene, camera, canvas } = Experience.getInstance()
    this.sizes = sizes
    this.scene = scene
    this.camera = camera
    this.canvas = canvas
    this.initRenderer()
  }

  private initRenderer() {
    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    })
    this.renderer.outputColorSpace = SRGBColorSpace
    this.renderer.toneMapping = CineonToneMapping
    this.renderer.toneMappingExposure = 1.75
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = PCFShadowMap
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(this.sizes.pixelRatio)
  }

  update() {
    this.renderer.render(this.scene, this.camera.perspectiveCamera)
  }

  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(this.sizes.pixelRatio)
  }
}
