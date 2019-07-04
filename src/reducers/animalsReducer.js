import { UPDATE_ANIMALS } from '../actions/animal-actions'

export default function animalsReducer(prevState = [], { type, payload }) {
  switch (type) {
    case UPDATE_ANIMALS:
      return payload
    default:
      return prevState
  }
  return prevState
}