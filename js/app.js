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

const Overlay = ({showInfo, title, description, link}) => (
  <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
    style={{
      transform: showInfo ? 'none' : 'translateY(-100%)'
    }}
    >
    <div>
      <h1 className="f5 f4-ns mt0 mb2 regular black normal lh-title"><a href={link}>{title}</a></h1>
      <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
    </div>
  </div>
)

// class components give us more advanced functionality

class Attraction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: false
    };
    // here we tell our method toggleInfo about this by using helper method bind
    // otherwise setState will not work cause it won't know about this
    this.toggleInfo = this.toggleInfo.bind(this)
    this.closeInfo = this.closeInfo.bind(this)
  }

  // this is our toggle method
  toggleInfo() {
    // running setState like this gives us the previousState and props
    this.setState((prevState, props) => ({
      // doing this will turn true to false and false to true
      showInfo: !prevState.showInfo,
    }));
  }

  closeInfo() {
    // run setState the regular way to close the overlay so it does not relay on a previouse state
    this.setState({
      showInfo: false,
    })
  }

  render() {
    const {title, description, className, image, link} = this.props
    const {showInfo} = this.state
    // same as saying the following
    // const title = this.props.title

    return (
      <div
        className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}
        onMouseMove={this.toggleInfo}
        // remove the showInfo on mouseLeave
        onMouseLeave={this.closeInfo}
      >
        <div className="relative">
          <Overlay {...this.props} {...this.state}/>
          <img src={`../images/${image}`} className="db" />
        </div>
      </div>
    )
  }
}

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
