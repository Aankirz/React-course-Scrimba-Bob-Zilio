1. Why do we need to `import React from "react"` in our files?
   React 17 version to use react without any cdn or script code in html and since we are using react in dependencies.
   
   React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
   it would show json objects 
A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:
```
const page = (
    <>
    <h1>Hello</h1>
    <p>This is my website!</p>
    </>  //known as empty fragments in react
)
```
We need our JSX to be nested under a single parent element
 ReactDOM can't render siblings it can only render any single parent.

4. What does it mean for something to be "declarative" instead of "imperative"?
   Declarative means just tell the computer what to do and it will figur out how how to do it. But imperative means you need to tell the what and How to the computer.

5. What does it mean for something to be "composable"?
  When certain type of instances can be combined in a certain way to prduce the same type of thing.  
  We have small pieces that we can put together to make something
larger/greater than the individual pieces.