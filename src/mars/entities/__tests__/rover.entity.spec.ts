import { Direction } from "../../enums/rover.enum"
import { Rover } from "../rover.entity"

describe('', () => {

  it('return valid rover entity ', () => {
    const testsList = [
      {
        input: { 
          direction: Direction.N,
          position: { x: 1, y: 2}
        },
        expect: {
          direction: "N",
          position: { x: 1, y: 2}
        }
      },
      {
        input: { 
          direction: Direction.S,
          position: { x: 3, y: 5}
        },
        expect: {
          direction: "S",
          position: { x: 3, y: 5}
        }
      },
      {
        input: { 
          direction: Direction.E,
          position: { x: 9, y: 10}
        },
        expect: {
          direction: "E",
          position: { x: 9, y: 10}
        }
      },
      {
        input: { 
          direction: Direction.W,
          position: { x: 2, y: 3}
        },
        expect: {
          direction: "W",
          position: { x: 2, y: 3}
        }
      },
    ]

    testsList.forEach(i => {
      expect(new Rover(i.input).toJSON()).toStrictEqual(i.expect)
    })
  })
})