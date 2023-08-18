# typewriter-qwik

Typewriter effect for Qwik applications


# Install

`npm install typewriter-qwik`

# Usage

### With Snnipet (still need import)
 ```js
 qtypewriter
 ```

### Manual

```JS
import { Typewriter } from "qwik-typewriter";

export default component$(() => {
  return (
    <>
        <p>
          Hello World! I´m a <Typewriter {/* Props */} />
        </p>
    </>
  );
});
```

# Component Props

| props    | Type   | Optional | Description                               | Default                         | Usage                            |
| -------- | ------ | -------- | ----------------------------------------- | ------------------------------- | -------------------------------- |
| words    | array  | Required | Array of strings for the words            | ex: `['Developer', 'Musician']` |                                  |
| css      | string | Optional | css classname to be set for the component | ex: `typewritercss`             | .typewritercss {font-size:2rem;} |
| writeT   | number | Optional | Character typing speed in milliseconds    | 150                             |                                  |
| unwriteT | number | Optional | Character deleting speed in milliseconds  | 50                              |                                  |

# Contribute

All contributions or ⭐ are welcome:  [Github Repository](https://github.com/Meerkap/qwik-typewriter) 
