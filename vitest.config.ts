import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupVitest.ts'],
    include: ['src/**/*.vitest.{ts,tsx}'],
  },
})
