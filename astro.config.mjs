// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: "validate-collections",
        enforce: "post",
        transform(code, id) {
          if (id.includes("astro:content")) {
            console.warn("Validando datos de las colecciones...");
          }
          return code;
        },
      },
    ],
  },
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        context: "server",
        access: "public",
      }),
      SCORE_API_ENDPOINT: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },
  output: "server",
});
