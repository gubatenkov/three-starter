// type TEvent = 'AssetLoaded' | 'TimeFrame' | 'ScreenResize'

declare module 'events' {
  export type Listener = (...args: any[]) => void

  export class EventEmitter<TEvent extends string> {
    static listenerCount(emitter: EventEmitter, type: TEvent): number
    static defaultMaxListeners: number

    eventNames(): Array<TEvent>
    setMaxListeners(n: number): this
    getMaxListeners(): number
    emit(type: TEvent, ...args: any[]): boolean
    addListener(type: TEvent, listener: Listener): this
    on(type: TEvent, listener: Listener): this
    once(type: TEvent, listener: Listener): this
    prependListener(type: TEvent, listener: Listener): this
    prependOnceListener(type: TEvent, listener: Listener): this
    removeListener(type: TEvent, listener: Listener): this
    off(type: TEvent, listener: Listener): this
    removeAllListeners(type?: TEvent): this
    listeners(type: TEvent): Listener[]
    listenerCount(type: TEvent): number
    rawListeners(type: TEvent): Listener[]
  }
}
