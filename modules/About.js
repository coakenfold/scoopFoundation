import React from 'react';
import NavLink from './NavLink';
import ThreeARow from './ThreeARow';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      pdfLightboxIsOpen: false
    };
    this.handlePDFLightBox = this.handlePDFLightBox.bind(this);
  }

  handlePDFLightBox() {
    this.setState(state => {
      return {pdfLightboxIsOpen: !state.pdfLightboxIsOpen}
    });
  }

  render() {
    const divStyle = {
      width: 'auto',
      height: '100%',
      backgroundImage: 'url(modules/assets/img01.jpg)',
      backgroundSize: 'cover'
    };
    const imgArray = [{
      img: 'modules/assets/thumbnails/About%20-%20Meet%20the%20team.jpg',
      link: 'meettheteam',
      path: '/team',
      text: 'Meet the Team'
    }, {
      img: 'modules/assets/thumbnails/impact.jpg',
      path: '/impact',
      link: '#impact',
      text: 'Impact'
    }, {
      img: 'modules/assets/thumbnails/About%20-%20Syrias%20Vibes.jpg',
      path: 'http://syriasvibes.com',
      link: '#syria',
      text: 'Syrias Vibes'
    }];
    return (
      <div>
        <section className="text-container center">
        <h1 className="purple">WHO?</h1>
        <br />
          <p>Created by two Irish brothers, SCOOP is a fundraising machine that aims to build schools and change the lives of impoverished children in Cambodia & India. Our Founders, Andy & Calvin, also created <a className="purple" href="//syriasvibes.com">Syrias Vibes</a> &mdash; an initiative that supports doctors, emergency rescue services and internally displaced people in Syria & Iraq.</p>
        </section>
        <section>
          <ThreeARow img={imgArray}/>
        </section>
        <section className="text-container about-align">
          <div style={{width:"47%", margin:"3%", marginRight:"5%"}}>
            <div className="about-title" style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <span className="orange">HOW?</span>
            </div>
            <p className="about-text">Working with local partner organisations and hiring local builders, we build schools that focus on free education and community development.</p>
            <p className="about-text">We have built a global community and work with grass root NGOs living and working on the ground in Cambodia, India and Syria. We also work with similar NGOs in Australia, Germany, Syria, Spain and England. <NavLink className="orange" to="/partners">Meet our Partners here.</NavLink></p>
          </div>
          <div style={{width:"47%", margin:"3%", marginLeft:"5%"}}>
            <div className="about-title" style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <span className="blue">WHY?</span>
            </div>
            <p className="about-text">The countries we work in have a huge amount of children living in poverty or engaging in child labour. They also rank as the most corrupt countries in the world, and children are the ones suffering.</p>
          </div>
        </section>
        <div className="report-container">
          <div className="home-impact-item" style={{width:"100%", height:"350px",backgroundImage:"url('modules/assets/report-banner.png')", backgroundSize:"cover", borderTopLeftRadius:"5px", borderTopRightRadius:"5px"}}></div>
          <div style={{height:"250px",fontSize:"1.2em", padding:"0 10px", backgroundColor:"#fff", textAlign:"center", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", borderLeft: "2px solid var(--purple)", borderRight: "2px solid var(--purple)", borderBottom: "2px solid var(--purple)", borderBottomLeftRadius:"5px", borderBottomRightRadius:"5px"}}>
            <p> The aim of our schools is to provide an education and social support to children and families living in poverty. This year, we have also extended our operations to Syria and the provision of medical care for displaced persons or those caught up in the war.</p>
            <span className="orange-inverse-btn" style={{fontSize:"1.2em"}} onClick={() => this.handlePDFLightBox()}>View the 2016 Annual Report</span>
          </div>
        </div>
        <section style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginBottom:"8%", fontSize:"1.5em"}}>
        <img src="modules/assets/donationchart.png" style={{width:"50%"}}/>
        <NavLink to="/donate"><span className="gallery-btn">Make a Donation</span></NavLink>
        </section>
        
        {this.state.pdfLightboxIsOpen &&
            (<div className="pdf-lightbox">
              <i onClick={() => this.handlePDFLightBox()} className="fa fa-times" aria-hidden="true"></i>
              <embed src="modules/assets/report2.pdf" />
            </div>)
          }

        <img className="home-bk" src="modules/assets/founders.png"/>
      </div>
      );
  }
};

export default About;