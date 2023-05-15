export interface Dog {
  name: string
  age: number
}

export interface DogsState {
  dogs: Record<string, Dog>
}
