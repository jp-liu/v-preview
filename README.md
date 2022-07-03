# v-preview

A file preview component of Vuejs, which can realize any type of file by extension

## Install VPreview

```bash
# with npm
npm install -D v-preview

# or with yarn
yarn add -D v-preview

# or with pnpm
pnpm add -D v-preview
```

## Usage

### Simple

```js
import Vue from 'vue'
import VPreview from 'v-preview'

// This is the simplest way to use, and there is no need to worry about selecting components
Vue.use(VPreview)

// In vue sfc
<template>
<div>
  <v-preview :data="image"></v-preview>
</div>
</template>

<script>
export default {
  data() {
    return {
      // image: ['./pic.png'] or
      image: [
        { src: './pic.png', type: 'png' },
        { src: './word.docx', type: 'docx' },
        { src: './excel.xlsx', type: 'xlsx' },
        { src: './pdf.pdf', type: 'pdf' },
        { src: 'http://xxx.mp4', type: 'pdf' },
      ]
    }
  }
}
</script>
```

#### Options

// TODO options in preview

### Switch operation

By switching the specified type, only the previewer of the corresponding type can be loaded, and the package size can be reduced through the tree shaking of EsBuild

```js
import Vue from 'vue'
import VPreview from 'v-preview'

// You can enable only the preview features you need
Vue.use(VPreview, {
  image: false,
  pdf: true,
  word: false,
  excel: true
})

// In vue sfc
<template>
<div>
  <v-preview :data="image"></v-preview>
</div>
</template>

<script>
export default {
  data() {
    return {
      // image: ['./pic.png'] or
      image: [
        { src: './pic.png', type: 'png' },
        { src: './word.docx', type: 'docx' },
        { src: './excel.xlsx', type: 'xlsx' },
        { src: './pdf.pdf', type: 'pdf' },
        { src: 'http://xxx.mp4', type: 'pdf' },
      ]
    }
  }
}
</script>
```
