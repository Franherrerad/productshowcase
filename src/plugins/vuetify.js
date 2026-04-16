import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#2563eb",
          secondary: "#1f2937",
          background: "#f3f4f6",
          surface: "#ffffff"
        }
      },
      dark: {
        colors: {
          primary: "#60a5fa",
          secondary: "#111827",
          background: "#121212",
          surface: "#1e1e1e"
        }
      }
    }
  }
});