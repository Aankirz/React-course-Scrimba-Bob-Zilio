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


/*JSX is just another version of JS that looks like html: Best way to learn is to compare with JS */

/*
console.log(h1): <h1 class="header">Hello world</h1>
*/
// When you give JSX 
const element = <h1 className="header">This is JSX</h1>
console.log(element)

/*
output:
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 so JSX is just like a fn when its run return us  object that could be intepreted by React
 */

// JSX
ReactDOM.render(element, document.getElementById("root"))

//or u can just wrap the whole code in a variable
const page=
(<div>
<h1 className="header">This is JSX</h1>
<p>This is a paragraph</p>, 

</div>)

console.log(page);
/*{
    type: "div",
     key: null,
     ref: null,
     props: {
        children: [
            {type: "h1", key: null, ref: null, props: {className: "header", children: "This is JSX"}, _owner: null, _store: {}}, {type: "p", key: null, ref: null, props: {children: "This is a paragraph"}, _owner: null, _store: {}}
        ]
             }, 
    _owner: null, _store: {}
    } */


ReactDOM.render(
    page,
    document.getElementById("root")
)
//  so it shows an error: beacuse it renders only a single parent element and both of these are siblings.
// so we need to wrap them with a parent, so we can render them as siblings

/*
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar=(
    <nav>
        <h1>Wisata</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>

)

ReactDOM.render(navbar,document.getElementById('root'));
   
// UPDATE: React 18
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)

// ReactDOM.render(navbar, document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)