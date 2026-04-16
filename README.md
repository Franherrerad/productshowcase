# 🛍️ Vue Product Showcase

![Demo](https://github.com/Franherrerad/productshowcase/blob/main/docs/demo.gif)


> Proyecto final del **Módulo 7**: Desarrollo de Aplicaciones Front-End con Framework Vue
> Plataforma: **Alkemy**

---

##  Descripción

Vue Product Showcase es una SPA (Single Page Application) que permite visualizar un catálogo de productos obtenidos desde una API externa. La aplicación incluye filtrado por categoría, manejo de estados (carga, error y vacío), pruebas automatizadas y una interfaz moderna con soporte para modo claro y oscuro.

---

##  Decisiones técnicas

| Herramienta               | Justificación                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------- |
| **Vue 3 (Options API)**   | Permite estructurar la aplicación de forma clara mediante data, computed y métodos |
| **Vuex 4**                | Gestión centralizada del estado para productos y filtros                           |
| **Vuetify 3**             | Librería UI para diseño moderno, responsive y tema claro/oscuro                    |
| **Axios**                 | Consumo de API REST y manejo de peticiones asincrónicas                            |
| **Jest + Vue Test Utils** | Pruebas unitarias de componentes                                                   |
| **Cypress**               | Pruebas end-to-end simulando interacción del usuario                               |

---

##  Estructura del proyecto

```
productshowcase/
├── public/
│   └── index.html
├── src/
│   ├── main.js                   ← Configuración Vue + Vuetify
│   ├── App.vue                   ← Componente principal
│   ├── components/
│   │   ├── ProductCard.vue       ← Tarjeta de producto
│   │   └── ProductList.vue       ← Lista de productos
│   ├── store/
│   │   ├── index.js              ← Configuración Vuex
│   │   └── modules/
│   │       ├── products.js       ← Manejo de productos
│   │       └── filters.js        ← Manejo de filtros
│   ├── plugins/
│   │   └── vuetify.js            ← Configuración Vuetify
│   └── tests/
│       └── unit/
│           ├── ProductCard.spec.js
│           └── App.spec.js
├── cypress/
├── package.json
├── jest.config.js
├── babel.config.js
```

---

## Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar proyecto
npm run serve
# → http://localhost:8080

# 3. Ejecutar pruebas unitarias
npm run test:unit

# 4. Ejecutar pruebas E2E
npx cypress open
```

---

## Funcionalidades implementadas

* Visualización de productos desde API externa
* Filtro por categoría
* Manejo de estados: carga, error y sin resultados
* Componentes reutilizables
* Gestión de estado con Vuex
* Interfaz moderna con Vuetify
* Modo claro / oscuro
* Diseño responsive
* Pruebas unitarias con Jest
* Pruebas end-to-end con Cypress

---

## Lecciones cubiertas

### Lección 1 — Componentes y ciclo de vida

* Creación de componentes reutilizables (`ProductCard`, `ProductList`)
* Uso del ciclo de vida `mounted` para inicialización

---

### Lección 2 — Consumo de API

* Uso de Axios para obtener productos
* Manejo de estados: loading, error, vacío
* Implementación de filtro por categoría

---

### Lección 3 — Vuex

* Centralización del estado global
* Separación en módulos (`products`, `filters`)
* Uso de getters, mutations y actions

---

### Lección 4 — Pruebas

* Prueba unitaria de `ProductCard`
* Prueba unitaria de `App`
* Prueba E2E con Cypress para flujo de usuario

---

## Lección 5 — UI y diseño

* Integración de Vuetify
* Uso de componentes visuales (`v-card`, `v-btn`, etc.)
* Implementación de tema claro/oscuro
* Diseño responsive

---

##  Evidencias de pruebas

Las pruebas unitarias fueron ejecutadas exitosamente:

* 2 suites de pruebas ejecutadas
* 2 pruebas aprobadas
* 0 errores



---

##  Demo


* Vista principal
* Filtro por categoría
* Modo oscuro
* Diseño responsive

---

##  Autora

**Francisca Herrera**

---

## Conclusión

Este proyecto permitió aplicar conceptos clave del desarrollo frontend moderno utilizando Vue.js. Se logró construir una aplicación funcional, modular y escalable, incorporando buenas prácticas como gestión de estado, pruebas automatizadas y diseño responsive, lo que representa una base sólida para futuros desarrollos.

---
