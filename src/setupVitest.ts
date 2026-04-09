import matchers from '@testing-library/jest-dom/matchers'
import { expect, vi } from 'vitest'

expect.extend(matchers)

vi.mock('firebase/firestore', () => ({
  collection: vi.fn(() => ({})),
  onSnapshot: vi.fn(
    (_ref: unknown, callback: (snap: { docs: unknown[] }) => void) => {
      callback({ docs: [] })
      return vi.fn()
    },
  ),
}))
