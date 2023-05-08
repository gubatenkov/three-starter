import type { Scene } from 'three'
import type { Asset, assets } from '../data'

import { EventEmitter } from 'events'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import Experience from '../Experience'

export default class ModelLoader extends EventEmitter<`${(typeof assets)[number]['name']}Loaded`> {
  scene: Scene
  assets = [] as readonly Asset[]
  items = {} as Record<Asset['name'], GLTF>
  queue = this.assets.length
  loaded = 0
  loaders = {} as {
    gltfLoader: GLTFLoader
    dracoLoader: DRACOLoader
  }

  constructor(assets: readonly Asset[]) {
    super()
    const { scene } = Experience.getInstance()
    this.scene = scene
    this.assets = assets
    this.initLoaders()
    this.loadAssets()
  }

  private initLoaders() {
    this.loaders.gltfLoader = new GLTFLoader()
    this.loaders.dracoLoader = new DRACOLoader()
    this.loaders.dracoLoader.setDecoderPath('/draco/')
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)
  }

  onLoadAsset(asset: Asset, gltf: GLTF) {
    this.items[asset.name] = gltf
    this.emit(`${asset.name}Loaded`)
    this.loaded++
  }

  loadAssets() {
    this.assets.forEach((a) => {
      this.loaders.gltfLoader.load(a.path, (gltf) => this.onLoadAsset(a, gltf))
    })
  }
}
