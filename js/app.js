const Highlight = props => (
  <span className={`relative highlight highlight-${props.color}`}>
    <span className="relative z-2">{props.children}</span>
  </span>
)

const Intro = () => (
  <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    <div className="mb3 mb4-ns">
      <Highlight color='aqua'>Lost in Tokyo</Highlight> is a directory of fun places  to see, play in and <Highlight color='yellow'>explore</Highlight>, in <Highlight color='blue'>Tokyo</Highlight>, Japan.
    </div>
    <div>
      From <Highlight color='yellow'>museums</Highlight> and <Highlight color='blue'>galleries</Highlight>, to <Highlight color='pink'>robot restaurants</Highlight> and <Highlight color='pink'>kitten cafes</Highlight>, Tokyo is the gift that keeps on giving. <Highlight color='aqua'>Dattebayo</Highlight>!
    </div>
  </div>
);

console.log(menu);

const Nav = () => (
  <nav>
    <ul>{menu.map(item => (
      <li className={item.className}>
        <a href={item.href}>{item.children}</a>
      </li>
    ))}
    </ul>
  </nav>
);

const App = () => ( < div >
  <div className = "min-vh-100 ph4 flex flex-column" >
    { /* our navigation component */ }
    <Nav />
    <Intro />s
  </div>

    <div className = "flex flex-wrap container" >
    { /* our attractions list component */ }
    </div>
  </div>
);

ReactDOM.render( < App / > , document.getElementById('root'))
