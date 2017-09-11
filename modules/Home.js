import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavLink from './NavLink';
import Gallery from './Gallery';
import Lightbox from 'react-images';

const galleryImages = [{
  src: 'modules/assets/gallery/1. Andy visits the original SCAO Centre in 2008.jpg',
  caption: 'Andy visits the original SCAO Centre in 2008'
}, {
  src: 'modules/assets/gallery/2. He helps them improve the centre and build more classrooms in 2009.jpg',
  caption: 'He helps them improve the centre and build more classrooms in 2009'
}, {
  src: 'modules/assets/gallery/3. Robotnik performs at our launch gig in 2010.jpg',
  caption: 'Robotnik performs at our launch gig in 2010'
}, {
  src: 'modules/assets/gallery/3a. Local Cambodian Teacher Srey Lat in 2009.jpg',
  caption: 'Local Cambodian Teacher Srey Lat in 2009'
}, {
  src: 'modules/assets/gallery/4. SCOOP co-founder George Gerard Mealy as auctioneer at the 1st SCOOP Art Auction in Pygmalion.jpg',
  caption: 'SCOOP co-founder George Gerard Mealy as auctioneer at the 1st SCOOP Art Auction in Pygmalion'
}, {
  src: 'modules/assets/gallery/4a.battle4supremacylr.jpg',
  caption: 'One of Conor Harrington\'s celebrated artworks was sold at one of our auctions in 2011.'
}, {
  src: 'modules/assets/gallery/5. Cast.ie\'s incredible trophy for the SCOOP Poker tournie - the very 1st SCOOP Event.jpg',
  caption: 'Cast.ie\'s incredible trophy for the SCOOP Poker tournie - the very 1st SCOOP Event'
}, {
  src: 'modules/assets/gallery/6. James Vincent McMorrow performs at an early SCOOP gig.jpg',
  caption: 'James Vincent McMorrow performs at an early SCOOP gig'
}, {
  src: 'modules/assets/gallery/7. Andy and co-founder Annmarie, with local teacher Srey Lat, visit the site of the 2nd school in Cambodia in 2010.png',
  caption: 'Andy and co-founder Annmarie, with local teacher Srey Lat, visit the site of the 2nd school in Cambodia in 2010'
}, {
  src: 'modules/assets/gallery/8. The 2nd school in Cambodia ready to open in 2011.jpg', 
  caption: 'The 2nd school in Cambodia ready to open in 2011'
}, {
  src: 'modules/assets/gallery/9. SCOOP supporters David Uda (artist) and Tanya Sweeney (journalist) with Andy visitinin ghe 2nd school in Cambodia.jpg',
  caption: 'SCOOP supporters David Uda (artist) and Tanya Sweeney (journalist) with Andy visiting the 2nd school in Cambodia'
}, {
  src: 'modules/assets/gallery/10 .Artist ADW creates a special artwork for us in 2010.jpg',
  caption: 'Artist ADW creates a special artwork for us in 2010'
}, {
  src: 'modules/assets/gallery/11. ADW\'s Elton which raised €900.jpg',
  caption: 'ADW\'s Elton which raised €900'
}, {
  src: 'modules/assets/gallery/12. The Better Than Socks event 2012.jpg',
  caption: 'The Better Than Socks event 2012'
}, {
  src: 'modules/assets/gallery/13. The SCOOP Ireland Team in 2014.jpg',
  caption: 'The SCOOP Ireland Team in 2014'
}, {
  src: 'modules/assets/gallery/14. The SCOOP Social - at this stage we have run every possible type of event imaginable.jpg',
  caption: 'The SCOOP Social - at this stage we have run every possible type of event imaginable'
}, {
  src: 'modules/assets/gallery/15. The SCOOP Australia Team 2015.jpg',
  caption: 'The SCOOP Australia Team 2015'
}, {
  src: 'modules/assets/gallery/16. SCOOP Australia 1st logo 2015.jpg',
  caption: 'SCOOP Australia 1st logo 2015'
}, {
  src: 'modules/assets/gallery/17. We partner up with The Jeevan School in Varanasi, India in 2010.jpg',
  caption: 'We partnered up with The Jeevan School in Varanasi, India in 2010'
}, {
  src: 'modules/assets/gallery/17a. The Jeevan School offers a home and safe haven for homeless children in the city.jpg',
  caption: 'The Jeevan School offers a home and safe haven for homeless children in the city'
}, {
  src: 'modules/assets/gallery/18. The site for The Jeevan Village in Varanasi 2014.jpg',
  caption: 'The site for The Jeevan Village in Varanasi 2014'
}, {
  src: 'modules/assets/gallery/19. Architects plan for The Jeevan Village.jpg',
  caption: 'Architects plan for The Jeevan Village'
}, {
  src: 'modules/assets/gallery/20. We partnered up with the Oktoberfest Festival in 2014.JPG',
  caption: 'We partnered up with the Oktoberfest Festival in 2014'
}, {
  src: 'modules/assets/gallery/21. New SCOOP logo in 2015.jpg',
  caption: 'New SCOOP logo in 2015'
}, {
  src: 'modules/assets/gallery/22. The site for the 3rd school in Cambodia 2016.jpg',
  caption: 'The site for the 3rd school in Cambodia 2016'
}, {
  src: 'modules/assets/gallery/23. Andy at the site for the 3rd school inj Cambodia in 2016.jpg',
  caption: 'Andy at the site for the 3rd school inj Cambodia in 2016'
}, {
  src: 'modules/assets/gallery/24. Laying the foundations for the 3rd school in Cambodia (2016).jpg',
  caption: 'Laying the foundations for the 3rd school in Cambodia (2016)'
}, {
  src: 'modules/assets/gallery/25. The building site for the 3rd school in Cambodia 2016.jpg',
  caption: 'The building site for the 3rd school in Cambodia 2016'
}, {
  src: 'modules/assets/gallery/26. Calvin and colleague with their ambulance in Syria (2016).jpg',
  caption: 'Calvin and colleague with their ambulance in Syria (2016)'
}, {
  src: 'modules/assets/gallery/27. Calvin at the site in Qamishli where 2 trucks full of explosives destroyed a city block (2016).jpg',
  caption: 'Calvin at the site in Qamishli where 2 trucks full of explosives destroyed a city block (2016)'
}, {
  src: 'modules/assets/gallery/28. Calvin at the Syrias Vibes launch in Dublin in October, 2016.jpg',
  caption: 'Calvin at the Syrias Vibes launch in Dublin in October, 2016'
}, {
  src: 'modules/assets/gallery/29. The Artist\'s Cook Book will launch in the summer of 2017.png',
  caption: 'The Artists\' Cook Book will launch in the summer of 2017'
}];

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCard: 2,
      lightboxIsOpen: false,
      currentImage: 0,
      pdfLightboxIsOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleImagesString = this.handleImagesString.bind(this);
  }

  isActive(cardNum) {
    if (cardNum === this.state.activeCard) {
      return 'card card-active';
    }
    return 'card';
  }

  handleClick(state) {
    this.setState({activeCard: state});
  }

  handleImagesString() {
    const imgObj = {};
    const curObj = {};
    this.state.images.forEach((str, idx) => {
      if (idx === 1 || idx % 5 === 0) {
        curObj.src = str;
      } else {
        curObj.srcset = [...curObj.srcset, str];
      }
    });
    return curObj;
  }

  openLightbox (event) {
    event.preventDefault();
    this.setState({
      currentImage: 0,
      lightboxIsOpen: true,
    });
  }

  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  handlePDFLightBox() {
    this.setState(state => {
      return {pdfLightboxIsOpen: !state.pdfLightboxIsOpen}
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  render() {
    return (
      <div>
<section className="home-sec1">
  <div style={{margin: "7%", padding: "1%"}}>
    <div style={{width:"48%", padding:"1%", color: "#fff"}}>
      <span className="home-text-sm" style={{}}>No child should live in poverty or danger.</span>
      <p className="home-text" style={{}}>We raise funds in different ways so we can help as many lives as possible.</p>
    </div>
    <NavLink to="/donate" className="home-donate-btn">Donate</NavLink>
  </div>
  <img className="home-img" style={{}} src="modules/assets/homepage.png"/>
</section>
        <center style={{margin:"30px auto", width:"70%", padding:"25px"}}>
        <h2 style={{fontSize:"2em"}} className="home-text">We build schools and strive to break the poverty cycle for children living in developing countries.</h2>
        </center>
        <section className="home-sec2">
          <div className={this.isActive(1)} onMouseOver={() => this.handleClick(1)}>
            <NavLink className="home-learnmore" to="/buildingprojects">
            <img src="modules/assets/BrickNBuilder-0.jpg"/>
            <h3>BUILDING PROJECTS</h3>
            <span>Help us create more spaces that transform children’s lives</span>
            </NavLink>
          </div>
          <div className={this.isActive(2)} onMouseOver={() => this.handleClick(2)}>
            <NavLink className="home-learnmore" to="/inclass">
            <img src="modules/assets/Classroom.jpg"/>
            <h3>THE SCHOOLS</h3>
            <span>Check out the projects that are already flourishing</span>
            </NavLink>
          </div>
          <div className={this.isActive(3)} onMouseOver={() => this.handleClick(3)}>
            <NavLink className="home-learnmore" to="/fundraise">
            <img src="modules/assets/Solar.jpg"/>
            <h3>FUNDRAISE</h3>
            <span>Your ideas and energy can change lives. Get involved today!</span>
            </NavLink>
          </div>
        </section>
        
        <center style={{margin: "auto", width: "50%"}}>
          
          <br/><br/>
        </center>

        <section className="home-sec3">
          <div style={{position: "absolute", top: 0, left: 0, width:"100%"}}>
            <img style={{width: "100%"}} src='modules/assets/resize_gallerybanner.png'/>
            <div className="gallery-bander">
              <span style={{color: "#fff", fontSize:"1.8em", paddingBottom: "10px", textShadow: "2px 4px 3px rgba(0,0,0,0.3)"}}>The <span className="orange" style={{fontWeight:"800", textShadow:"0px"}}>SCOOP</span> story so far ...</span>
              <span className="blue-inverse-btn" onClick={(e) => this.openLightbox(e)}>Visit the Gallery</span>
            </div>
          </div>
          <Lightbox
            currentImage={this.state.currentImage}
            images={galleryImages}
            isOpen={this.state.lightboxIsOpen}
            onClose={() => this.closeLightbox()}
            onClickNext={() => this.gotoNext()}
            onClickPrev={() => this.gotoPrevious()}
          />
        </section>

        <div className="empty-section"></div>

        <section>
          <div className="home-impact">
            <div className="home-impact-item" style={{height:"350px",backgroundImage:"url('modules/assets/img28.png')", backgroundSize:"cover"}}></div>
            <div className="home-impact-item" style={{height:"350px",fontSize:"1.5em", backgroundColor:"#fff", textAlign:"center", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", borderTop:"2px solid var(--blue)", borderRight:"2px solid var(--blue)", borderBottom:"2px solid var(--blue)", boxSizing: "border-box", borderTopRightRadius:"5px", borderBottomRightRadius:"5px"}}>
              <span style={{display:"block", margin:" 0 50px"}}>Our schools help steer children away from child labour and other forms of child abuse.</span>
              <br/>
              <NavLink to="/impact">
                <span className="orange-inverse-btn" style={{fontSize:"0.9em"}}>See more of our impact</span>
              </NavLink>
            </div>
          </div>
        </section>

        <div className="empty-section"></div>

        <div className="home-bottom-cards" style={{position:"relative"}}>
        <section className="home-sec4">
          <div className="home-bottomCard">
            <img width="100%" src="modules/assets/img31.jpg"/>
            <div className="home-bottomCardTxt orange-theme">
              <span>For all our news, project updates and events</span>
              <a style={{marginTop:"15px"}} className="home-orange-btn" href="http://scoopfoundationblog.wordpress.com" target="_blank">Blog</a>
            </div>
          </div>
          <div className="home-bottomCard">
            <img width="100%" src="modules/assets/report.png"/>
            <div className="home-bottomCardTxt blue-theme">
              <span style={{padding: "0 5px"}}>Check out our Annual Report for 2016</span>
              <span className="home-blue-btn" onClick={() => this.handlePDFLightBox()}>Report</span>
            </div>
          </div>
          <div className="home-bottomCard">
            <img width="100%" src="modules/assets/img32.jpg"/>
            <div className="home-bottomCardTxt purple-theme">
              <span style={{padding: "0 5px"}}>Support us now by picking up a Tee, our Artists' Cookbook and more!</span>
              <a href="https://scoopfoundation.squarespace.com/" target="_blank" className="home-purple-btn">Store</a>
            </div>
          </div>
        </section>

        
          </div>
        {this.state.pdfLightboxIsOpen &&
          (<div className="pdf-lightbox">
            <i onClick={() => this.handlePDFLightBox()} className="fa fa-times" aria-hidden="true"></i>
            <embed src="modules/assets/report2.pdf" />
          </div>)
        }
      </div>
      );
  }
}

export default Home;
