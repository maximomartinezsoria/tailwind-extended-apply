# Tailwind Extended Apply
responsive variants are now allowed with tailwind's apply. 
Example: @apply sm:w-1/2

## Usage
1. Install tailwind.
```
npm i tailwindcss
```
2. Install Tailwind Extended Apply.
```
npm i tailwind-extended-apply
```
3. Add or edit `postcss.config.js` file. It's important to keep `require('tailwind-extended-apply')` above `require('tailwindcss')`.
```
module.exports = {
  plugins: [
    // ...
    require('tailwind-extended-apply'),
    require('tailwindcss'),
    // ...
  ]
}
```

## Author

- [**Maximo Martinez Soria**](https://maximomartinezsoria.com) - _Fullstack Developer_