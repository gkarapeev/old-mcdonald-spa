export const UPDATE_ANIMALS = 'animals:updateAnimal'

export function updateAnimals(newAnimals) {
  return {
    type: UPDATE_ANIMALS,
    payload: {
      animals: newAnimals
    }
  }
}