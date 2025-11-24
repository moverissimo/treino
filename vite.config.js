import { defineConfig } from 'vite'
import react from '@vitejs/treino'

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 }
})
