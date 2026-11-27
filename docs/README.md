# docs

## Carousels

Use `initial` to choose which image is shown when a carousel opens. The value is the image's position in the carousel, starting at 1. If omitted, the first image is shown. Values outside the available range are limited to the first or last image.

```md
[[carousel title="Example" steps=true start=1 initial=2]]
### First step
![First step](/assets/pictures/example-1.jpg)

### Second step
![Second step](/assets/pictures/example-2.jpg)
[[/carousel]]
```

`initial` does not change the step numbering. Use `start` to set the number of the first step.

