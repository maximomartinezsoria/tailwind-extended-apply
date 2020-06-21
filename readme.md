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
3. 
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