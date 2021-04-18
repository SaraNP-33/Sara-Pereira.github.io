import React from "react";
// import projectOne from "../images/projects/imgOne.jpg";
import projectOne from "../images/projects/qsm.jpg";
import projectTwo from "../images/projects/googleBooks.jpg";
import projectThree from "../images/projects/reactGame.jpg";
import projectFour from "../images/projects/scraper.jpg";
import projectFive from "../images/projects/bookApp.jpg";
import projectSix from "../images/projects/bamazon.jpg";
import projectSeven from "../images/projects/liriBot.jpg";
import projectEight from "../images/projects/hangman.jpg";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons"
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    // projectOne
    const openPopupboxProjectOne = () => {
        const content = (
            <>
    <img className = "portfolio-image-popupbox" src={projectOne} alt="Project One"/>
    <p>Queen St Market is an e-commerce store where the user can shop for a product, view the details of a product, 
              add it to the cart and checkout. 
              The user must sign-up and log in in order to access the cart and checkout pages of the app.</p>
    <b>Demo: </b> <a className="hyper-link" href="https://queen-st-market.herokuapp.com/">https://queen-st-market.herokuapp.com/</a>
    <br/>
    <b>GitHub: </b> <a className="hyper-link" href="https://github.com/niashagrant/mern-store">https://github.com/niashagrant/mern-store</a>
    </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            enable: true,
            text: "Queen Street Market"
          },
          fadeIn: true,
          fadeInSpeed: 500
        },
      });
    }


    const popupboxConfigProjectOne = {
        titleBar: {
            enable: true,
            text: "Queen Street Market"
        },
        fadeIn: true,
        fadeInSpeed: 500
        }

    // projectTwo
    const openPopupboxProjectTwo = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectTwo} alt="Project Two"/>
            <p>Google Book Search is a MERN app using Google API that allows users to search for books, save them and delete them as well as connect to the Google Books Url to purchase the books or simply view more details.</p>
            <b>Demo: </b> <a className="hyper-link" href="https://google-books-search-171113.herokuapp.com/">https://google-books-search-171113.herokuapp.com/</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33/googleBooks">https://github.com/SaraNP-33/googleBooks</a>
          </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            enable: true,
            text: "Google Books"
          },
          fadeIn: true,
          fadeInSpeed: 500
        },
      });
    }
    
    const popupboxConfigProjectTwo = {
        titleBar: {
            enable: true,
            text: "Google Books"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // projectThree
    const openPopupboxProjectThree = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectThree} alt="Project Three"/>
            <p>A memory game create with REACT. The user clicks on an image which prompts them to shuffle. if the user clicks on the same image twice they lose.</p>
            <b>Demo: </b> <a className="hyper-link" href="https://saranp-33.github.io/ClickyGame/">https://saranp-33.github.io/ClickyGame/</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33/ClickyGame">https://github.com/SaraNP-33/ClickyGame</a>
          </>
    )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Scrubs React Game"
              },
              fadeIn: true,
              fadeInSpeed: 500
            },
          });
        }
            
    const popupboxConfigProjectThree = {
        titleBar: {
            enable: true,
            text: "Scrubs React Game"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // projectFour
    const openPopupboxProjectFour = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectFour} alt="Project Four"/>
            <p>This app was built using Express as a server, MongoDB the Database along with Mongoose as a ODM and Handlebars as the template. The dependencies used to scrape were axios and cheerio.</p>
            <b>Demo: </b> <a className="hyper-link" href="https://damp-eyrie-19615.herokuapp.com/">https://damp-eyrie-19615.herokuapp.com/</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33/Scraper">https://github.com/SaraNP-33/Scraper</a>
          </>
    )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Recipe Scraper"
              },
              fadeIn: true,
              fadeInSpeed: 500
            },
          });
        }
            
    const popupboxConfigProjectFour = {
        titleBar: {
            enable: true,
            text: "Recipe Scraper"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // projectFive
    const openPopupboxProjectFive = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectFive} alt="Project Five"/>
            <p>A simple full stack app. When the user adds a book, this book is saved in MySQL database. This app uses Express to communicate the user input to the database and Handlebars as the UI.</p>
            <b>Demo: </b> <a className="hyper-link" href="https://morning-sea-53877.herokuapp.com/">https://morning-sea-53877.herokuapp.com/</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33/bookapp2">https://github.com/SaraNP-33/bookapp2</a>
          </>
    )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Book App"
              },
              fadeIn: true,
              fadeInSpeed: 500
            },
          });
        }
            
    const popupboxConfigProjectFive = {
        titleBar: {
            enable: true,
            text: "Book App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    // projectSix
    const openPopupboxProjectSix = () => {
        const content = (
          <>
            <img className = "portfolio-image-popupbox" src={projectSix} alt="Project Six"/>
            <p>A node and mySQL app demonstrating the correlation of a database with user input activity. This is a back end exercise only, meaning the results are seen only on the console.</p>
            <b>Demo: </b> <a className="hyper-link" href="#">This is a CLI app</a>
            <br/>
            <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33/bamazon">https://github.com/SaraNP-33/bamazon</a>
          </>
    )
        PopupboxManager.open({ content });
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                enable: true,
                text: "Bamazon"
              },
              fadeIn: true,
              fadeInSpeed: 500
            },
          });
        }

        const popupboxConfigProjectSix = {
          titleBar: {
              enable: true,
              text: "Bamazon"
          },
          fadeIn: true,
          fadeInSpeed: 500
      }

// projectSeven
const openPopupboxProjectSeven = () => {
  const content = (
    <>
      <img className = "portfolio-image-popupbox" src={projectSeven} alt="Project Seven"/>
      <p>A node application that retrieves information on music, concerts and movies from 3 different API's. Axios, is the middleware being used to perform the api calls, and we use the inbuilt node method of readFile and writeFile to process the information.</p>
      <b>Demo: </b> <a className="hyper-link" href="#">This is a CLI App</a>
      <br/>
      <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33/LiriBot">https://github.com/SaraNP-33</a>
    </>
)
  PopupboxManager.open({ content });
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Liribot"
        },
        fadeIn: true,
        fadeInSpeed: 500
      },
    });
  }

  const popupboxConfigProjectSeven = {
    titleBar: {
        enable: true,
        text: "Liribot"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

// projectEight
const openPopupboxProjectEight = () => {
  const content = (
    <>
      <img className = "portfolio-image-popupbox" src={projectEight} alt="Project Eight"/>
      <p> A vanilla Javascript application that allows the user to play a Hangman inspired game</p>
      <b>Demo: </b> <a className="hyper-link" href=" https://saranp-33.github.io/Word-Guess-Game/"> https://saranp-33.github.io/Word-Guess-Game/</a>
      <br/>
      <b>GitHub: </b> <a className="hyper-link" href="https://github.com/SaraNP-33/Word-Guess-Game">https://github.com/SaraNP-33/Word-Guess-Game</a>
    </>
)
  PopupboxManager.open({ content });
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Hangman"
        },
        fadeIn: true,
        fadeInSpeed: 500
      },
    });
  }

  const popupboxConfigProjectEight = {
    titleBar: {
        enable: true,
        text: "Hangman"
    },
    fadeIn: true,
    fadeInSpeed: 500
}

    return (
        <div className="portfolio-wrapper" id="portfolio">
            <div className="container">
                <h2 className="text-uppercase text-center py-3">portfolio</h2>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxProjectOne}>
                        <img className = "portfolio-image" src={projectOne} alt="Project One"/>
                        <div className="overlay"></div>
                        <h4 className="title">Queen Street Market</h4>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectTwo}>
                        <img className = "portfolio-image" src={projectTwo} alt="Project Two"/>
                        <div className="overlay"></div>
                        <h4 className="title">Google Books</h4>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxProjectThree}>
                        <img className = "portfolio-image" src={projectThree} alt="Project Three"/>
                        <div className="overlay"></div>
                        <h4 className="title">Scrubs React Game</h4>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxProjectFour}>
                        <img className = "portfolio-image" src={projectFour} alt="Project Four"/>
                        <div className="overlay"></div>
                        <h4 className="title">Recipe Scraper</h4>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box"  onClick={openPopupboxProjectFive}>
                        <img className = "portfolio-image" src={projectFive} alt="Project Five"/>
                        <div className="overlay"></div>
                        <h4 className="title">Book App</h4>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectSix}>
                        <img className = "portfolio-image" src={projectSix} alt="Project Six"/>
                        <div className="overlay"></div>
                        <h4 className="title">Bamazon</h4>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectSeven}>
                        <img className = "portfolio-image" src={projectSeven} alt="Project Seven"/>
                        <div className="overlay"></div>
                        <h4 className="title">Liribot</h4>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* - */}
                    <div className="portfolio-image-box" onClick={openPopupboxProjectEight}>
                        <img className = "portfolio-image" src={projectEight} alt="Project Eight"/>
                        <div className="overlay"></div>
                        <h4 className="title">Hangman</h4>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigProjectOne} />
            <PopupboxContainer {...popupboxConfigProjectTwo} />
            <PopupboxContainer {...popupboxConfigProjectThree} />
            <PopupboxContainer {...popupboxConfigProjectFour} />
            <PopupboxContainer {...popupboxConfigProjectFive} />
            <PopupboxContainer {...popupboxConfigProjectSix} />
            <PopupboxContainer {...popupboxConfigProjectSeven} />
            <PopupboxContainer {...popupboxConfigProjectEight} />
        </div>
    )
}


export default Portfolio;
