// so this alllows me to use something very much similar to html
// so first part is to what to render and 2nd part is where to render it


/* Declarative Way : The reason we use react */
ReactDom.render(<h1>Hello, Everyone!</h1>,document.getElementById('root'));

/* Imperative Way : Dozen of lines in js */
const h1=document.createElement('h1');
h1.innerText='This is an imperative way of programming';
h1.textContent='Another way to do it';
h1.className='header';
document.getElementById('root').append(h1);


/* */
