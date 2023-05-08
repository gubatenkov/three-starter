import { EventEmitter } from 'events'

export default class Sizes extends EventEmitter<'ScreenResize'> {
  width: number
  height: number
  aspect: number
  pixelRatio: number

  constructor() {
    super()
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.aspect = this.width / this.height
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    this.initListeners()
  }

  private initListeners() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.aspect = this.width / this.height
      this.pixelRatio = Math.min(window.devicePixelRatio, 2)
      this.emit('ScreenResize')
    })
  }
}
