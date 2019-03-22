const Highlight = ({ children, color }) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
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

// in ES6 version of JS we won't need to type up props.className
// we only use our properties directly like so and won't use props anymore
const NavItem = ({className, href, children, logo}) => (
  <li className={`mh2-ns f6 f4-l tc ${className}`}>
    <a className='white no-underline' href={href}>
    {/* we check to see if NavItem has a logo prop we render our logo if not we render the children prop instead */}
    {logo ? <img src="../images/logo.svg" className="db center logo" /> : children}</a>
  </li>
);

const Nav = () => (
  <nav className='pt3 pt4-ns mb4 mb0-ns'>
    <ul className='list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0'>{menu.map(item => (
      <NavItem {...item} />
    ))}
    </ul>
  </nav>
);

const Attraction = ({title, description, image, className}) => (
  <div className={className}>
    <h1>{title}</h1>
    <p>{description}</p>
    <img src={`../images/${image}`}/>
  </div>
);

const App = () => ( < div >
  <div className = "min-vh-100 ph4 flex flex-column" >
    { /* our navigation component */ }
    <Nav />
    <Intro />
    </div>
    <div className = "flex flex-wrap container" >
      {attractions.map(attraction =>(
        <Attraction {...attraction} />
      ))}
    </div>
  </div>
);

ReactDOM.render( < App / > , document.getElementById('root'))
