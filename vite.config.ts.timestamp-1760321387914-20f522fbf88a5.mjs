// vite.config.ts
import { defineConfig } from "file:///home/user/SOFTDEVNEXUS/node_modules/vite/dist/node/index.js";
import react from "file:///home/user/SOFTDEVNEXUS/node_modules/@vitejs/plugin-react/dist/index.js";
import { visualizer } from "file:///home/user/SOFTDEVNEXUS/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import viteCompression from "file:///home/user/SOFTDEVNEXUS/node_modules/vite-plugin-compression/dist/index.mjs";
import viteImagemin from "file:///home/user/SOFTDEVNEXUS/node_modules/vite-plugin-imagemin/dist/index.mjs";
import sitemap from "file:///home/user/SOFTDEVNEXUS/node_modules/vite-plugin-sitemap/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    visualizer({ filename: "./dist/stats.html", open: false }),
    // Análisis del bundle
    sitemap({ hostname: "https://www.softdevnexus.com" }),
    viteCompression({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      // Conserva los archivos originales
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz"
    }),
    viteCompression({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      // Conserva los archivos originales
      threshold: 10240,
      algorithm: "brotliCompress",
      ext: ".br"
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 65
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        // Elimina console.log y comentarios en producción
        drop_console: true,
        drop_debugger: true
      }
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          icons: ["lucide-react"]
        }
      }
    }
  },
  optimizeDeps: {
    include: ["lucide-react"]
  },
  server: {
    port: 5173,
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  },
  preview: {
    port: 4173
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS91c2VyL1NPRlRERVZORVhVU1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvdXNlci9TT0ZUREVWTkVYVVMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvdXNlci9TT0ZUREVWTkVYVVMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcbmltcG9ydCB2aXRlQ29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xuaW1wb3J0IHZpdGVJbWFnZW1pbiBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZW1pbic7XG5pbXBvcnQgc2l0ZW1hcCBmcm9tICd2aXRlLXBsdWdpbi1zaXRlbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgdmlzdWFsaXplcih7IGZpbGVuYW1lOiAnLi9kaXN0L3N0YXRzLmh0bWwnLCBvcGVuOiBmYWxzZSB9KSwgLy8gQW5cdTAwRTFsaXNpcyBkZWwgYnVuZGxlXG4gICAgc2l0ZW1hcCh7IGhvc3RuYW1lOiAnaHR0cHM6Ly93d3cuc29mdGRldm5leHVzLmNvbScgfSksXG4gICAgdml0ZUNvbXByZXNzaW9uKHtcbiAgICAgIHZlcmJvc2U6IHRydWUsXG4gICAgICBkaXNhYmxlOiBmYWxzZSxcbiAgICAgIGRlbGV0ZU9yaWdpbkZpbGU6IGZhbHNlLCAvLyBDb25zZXJ2YSBsb3MgYXJjaGl2b3Mgb3JpZ2luYWxlc1xuICAgICAgdGhyZXNob2xkOiAxMDI0MCxcbiAgICAgIGFsZ29yaXRobTogJ2d6aXAnLFxuICAgICAgZXh0OiAnLmd6JyxcbiAgICB9KSxcbiAgICB2aXRlQ29tcHJlc3Npb24oe1xuICAgICAgdmVyYm9zZTogdHJ1ZSxcbiAgICAgIGRpc2FibGU6IGZhbHNlLFxuICAgICAgZGVsZXRlT3JpZ2luRmlsZTogZmFsc2UsIC8vIENvbnNlcnZhIGxvcyBhcmNoaXZvcyBvcmlnaW5hbGVzXG4gICAgICB0aHJlc2hvbGQ6IDEwMjQwLFxuICAgICAgYWxnb3JpdGhtOiAnYnJvdGxpQ29tcHJlc3MnLFxuICAgICAgZXh0OiAnLmJyJyxcbiAgICB9KSxcbiAgICB2aXRlSW1hZ2VtaW4oe1xuICAgICAgZ2lmc2ljbGU6IHtcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXG4gICAgICAgIGludGVybGFjZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIG9wdGlwbmc6IHtcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXG4gICAgICB9LFxuICAgICAgbW96anBlZzoge1xuICAgICAgICBxdWFsaXR5OiA2NSxcbiAgICAgIH0sXG4gICAgICBwbmdxdWFudDoge1xuICAgICAgICBxdWFsaXR5OiBbMC42NSwgMC45XSxcbiAgICAgICAgc3BlZWQ6IDQsXG4gICAgICB9LFxuICAgICAgc3Znbzoge1xuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVZpZXdCb3gnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3JlbW92ZUVtcHR5QXR0cnMnLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICBhc3NldHNEaXI6ICdhc3NldHMnLFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICAvLyBFbGltaW5hIGNvbnNvbGUubG9nIHkgY29tZW50YXJpb3MgZW4gcHJvZHVjY2lcdTAwRjNuXG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIHZlbmRvcjogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbSddLFxuICAgICAgICAgIGljb25zOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDUxNzMsXG4gICAgaG9zdDogdHJ1ZSxcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHByZXZpZXc6IHtcbiAgICBwb3J0OiA0MTczXG4gIH1cbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVAsU0FBUyxvQkFBb0I7QUFDcFIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sYUFBYTtBQUVwQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXLEVBQUUsVUFBVSxxQkFBcUIsTUFBTSxNQUFNLENBQUM7QUFBQTtBQUFBLElBQ3pELFFBQVEsRUFBRSxVQUFVLCtCQUErQixDQUFDO0FBQUEsSUFDcEQsZ0JBQWdCO0FBQUEsTUFDZCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxrQkFBa0I7QUFBQTtBQUFBLE1BQ2xCLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNELGdCQUFnQjtBQUFBLE1BQ2QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1Qsa0JBQWtCO0FBQUE7QUFBQSxNQUNsQixXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxhQUFhO0FBQUEsTUFDWCxVQUFVO0FBQUEsUUFDUixtQkFBbUI7QUFBQSxRQUNuQixZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUixTQUFTLENBQUMsTUFBTSxHQUFHO0FBQUEsUUFDbkIsT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRSxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxRQUVSLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxJQUNkLG1CQUFtQjtBQUFBLElBQ25CLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLFFBQVEsQ0FBQyxTQUFTLGFBQWEsa0JBQWtCO0FBQUEsVUFDakQsT0FBTyxDQUFDLGNBQWM7QUFBQSxRQUN4QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
