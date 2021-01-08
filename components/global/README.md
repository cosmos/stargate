# GLOBAL

## Global components

Since v1.4.0 and Nuxt v2.13.0, you can now put your components in components/global/ directory so you don't have to import them in your pages.

```
components/
  global/
    Hello.vue
content/
  home.md
```

Then in content/home.md, you can use <hello></hello> component without having to worry about importing it in your page.

Ref: https://content.nuxtjs.org/writing#vue-components