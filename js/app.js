const Highlight = ({children, color}) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
  </span>
);

const NavItem = ({className, href, children, logo}) => (
  <li className={`mh2-ns f6 f4-l tc ${className}`}>
    <a className="white no-underline" href={href}>
      {logo ? <img src="../images/logo.svg" className="db center logo" /> : children}
    </a>
  </li>
  );

const Nav = () => (
  <nav className='pt3 pt4-ns mb4 mb0-ns'>
    <ul className='list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0'>
    {menu.map(item => (
      <NavItem {...item} />
    ))}
    </ul>
  </nav>
);

class Attraction extends React.Component {
  constructor(props){
    super(props);
    // default state
    this.state = {
      showInfo: false
    };
  }

  render() {
    const {title, description, className, image} = this.props;
    const {showInfo} = this.state;
    return (
      <div className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`} onClick={() => this.setState({showInfo: true})}>
        <div className="relative">
          <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
          style = {{
            transform: showInfo ? 'none' : 'translateY(-100%)'
          }}
        >
            <div>
              <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>
              <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
            </div>
          </div>
          <img src={`../images/${image}`} className="db" />
        </div>
      </div>
    );
  }
};

const Intro = () => (
  <div className='m-auto-ns f4 f3-m f2-l tc w-8-l normal'>
    <div className='mb3 mb4-ns'>
      <Highlight color='aqua'>Lost in Tokyo</Highlight> is a directory of fun places to see, play in and <Highlight color='yellow'>explore</Highlight>, in <Highlight color='blue'>Tokyo</Highlight>, Japan.
    </div>
    <div>
      From <Highlight color='blue'>museums</Highlight> and <Highlight color='blue'>galleries</Highlight>, to <Highlight color='pink'>Robot Restaurants</Highlight> and <Highlight color='pink'>kitten cafes</Highlight>, Tokyo is the gift that keeps on giving. <Highlight color='yellow'>Dattebayo!</Highlight>
    </div>
  </div>
);

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      <Nav />
      <Intro />
    </div>
    <div className="flex flex-wrap container">
      {attractions.map(attraction => (
        <Attraction {...attraction} />
      ))}
    </div>
  </div>
);

ReactDOM.render(<App />,
document.getElementById('root'));
