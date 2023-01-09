import React from "react";
import { data } from "./blog_data";
import '../App.css';

const Blog = () => {
  const {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
    img51
  } = data[0];
  const { line1, line2, line3, line4, line5 } = data[1];
  return (
         
    <>
    <div>
      <img id="top" src={img1} alt="logo" />
    </div>
    <div id="text">
      <img src={img2} alt="logo" />
    </div>
    <div id="input">
      <input type="text" placeholder="Search" />
    </div>
    <div id="hover">
      <div>COMPANY</div>
      <div>CULTURE</div>
      <div>COMMUNITY</div>
      <div className="dropdown">
        LIFESTYLE
        <div className="dropdown-content">
          <h3>Beauty</h3>
          <h3>Men</h3>
          <h3>Interiors</h3>
          <h3>Homecare</h3>
          <h3>TUG Videos</h3>
        </div>
      </div>
    </div>

    <div className="main">
      <h1>BEAUTY</h1>
      <div id="beauty">
        <div>
          <img src={img3} alt="logo" />
        </div>
        <div>
          <h2>Papaya Face Packs | DIY Beauty with 15 Facials At Home</h2>
          <p>December 20, 2022</p>
          <p>{line1}</p>
        </div>
        <div className="scrollbox">
          <div className="scroll">
            <div>
              <img src={img4} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img5} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img6} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img7} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img8} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img9} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img10} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img11} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img12} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img13} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img14} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img15} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img16} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
          <div className="scroll">
            <div>
              <img src={img17} alt="logo" />
            </div>
            <div>
              <p>Best Sheet Masks in India</p>
              <p>Beauty, Skincare</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="homecare">
      <div>
        <h1>HOMECARE</h1>
        <img src={img18} alt="" />
        <h1>Why Is Your AC Leaking?</h1>
        <p>OCTOBER 13, 2022</p>
        <p>{line2}</p>
      </div>
      <div>
        <h1>INTERIORS</h1>
        <img src={img19} alt="" />
        <h1>Wallpapers and Stencils Are a Great Way to Go, Here’s Why</h1>
        <p>OCTOBER 13, 2022</p>
        <p>{line3}</p>
      </div>
    </div>

    <div className="combo">
      <div className="scrollbox">
        <div className="scroll">
          <div>
            <img src={img23} alt="logo" />
          </div>
          <div>
            <p>WHY IS YOUR AC LEAKING?</p>
            <p>Appliance Repair, Homecare</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img24} alt="logo" />
          </div>
          <div>
            <p>
              ALL ABOUT URBAN COMPANY’S UNPARALLELED CLEANING TRAINING PROGRAM
            </p>
            <p>Home Deep Cleaning, Homecare</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img25} alt="logo" />
          </div>
          <div>
            <p>WATER PURIFIER BUYING GUIDE</p>
            <p>Company Updates, Homecare</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img26} alt="logo" />
          </div>
          <div>
            <p>WHY IS YOUR AC NOT TURNING ON?</p>
            <p>Appliance Repair, Homecare, Uncategorized</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img27} alt="logo" />
          </div>
          <div>
            <p>WHY YOU SHOULD BOOK URBAN COMPANY’S DISINFECTION SERVICE</p>
            <p>Homecare</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img28} alt="logo" />
          </div>
          <div>
            <p>
              SAFETY MEASURES TO FOLLOW WHEN GETTING YOUR AC INSTALLED AND
              SERVICED
            </p>
            <p>Appliance Repair, Homecare, Make Up</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img29} alt="logo" />
          </div>
          <div>
            <p>HOW TO ENSURE SAFETY DURING AC SERVICE & REPAIR</p>
            <p>Appliance Repair, Homecare, Make Up</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img30} alt="logo" />
          </div>
          <div>
            <p>
              5 QUESTIONS TO ASK YOURSELF BEFORE HIRING A HOME CLEANING
              SERVICE IN DUBAI
            </p>
            <p>Home Deep Cleaning, Homecare</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img12} alt="logo" />
          </div>
          <div>
            <p>Best Sheet Masks in India</p>
            <p>Beauty, Skincare</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img13} alt="logo" />
          </div>
          <div>
            <p>Best Sheet Masks in India</p>
            <p>Beauty, Skincare</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img14} alt="logo" />
          </div>
          <div>
            <p>Best Sheet Masks in India</p>
            <p>Beauty, Skincare</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img15} alt="logo" />
          </div>
          <div>
            <p>Best Sheet Masks in India</p>
            <p>Beauty, Skincare</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img16} alt="logo" />
          </div>
          <div>
            <p>Best Sheet Masks in India</p>
            <p>Beauty, Skincare</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img17} alt="logo" />
          </div>
          <div>
            <p>Best Sheet Masks in India</p>
            <p>Beauty, Skincare</p>
          </div>
        </div>
      </div>

      <div className="scrollbox">
        <div className="scroll">
          <div>
            <img src={img20} alt="logo" />
          </div>
          <div>
            <p>WALLPAPERS AND STENCILS ARE A GREAT WAY TO GO, HERE’S WHY</p>
            <p>Interiors, Painting</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img21} alt="logo" />
          </div>
          <div>
            <p>6 SMART PACKING AND MOVING TIPS YOU NEED TO KNOW</p>
            <p>Homecare, Packers and Movers</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img22} alt="logo" />
          </div>
          <div>
            <p>5 SIMPLE WAYS TO HELP YOU PREPARE FOR FATHERHOOD</p>
            <p>Trends</p>
          </div>
        </div>
      </div>
    </div>

    <div className="homecare">
      <div>
        <h1>COMMUNITY</h1>
        <img src={img31} alt="" />
        <h1>How Going from Unskilled to Skilled Changed Fursat Ali’s Life</h1>
        <p>OCTOBER 13, 2022</p>
        <p>{line4}</p>
      </div>
      <div>
        <h1>MEN</h1>
        <img src={img32} alt="" />
        <h1>Wallpapers and Stencils Are a Great Way to Go, Here’s Why</h1>
        <p>OCTOBER 13, 2022</p>
        <p>{line5}</p>
      </div>
    </div>

    <div className="combo">
      <div className="scrollbox">
        <div className="scroll">
          <div>
            <img src={img33} alt="logo" />
          </div>
          <div>
            <p>
              HOW GOING FROM UNSKILLED TO SKILLED CHANGED FURSAT ALI LIFE
            </p>
            <p>Community</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img34} alt="logo" />
          </div>
          <div>
            <p>RESPECT HAS BEEN SOMNATH’S BIGGEST WIN AT UC</p>
            <p>Community</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img35} alt="logo" />
          </div>
          <div>
            <p>BEING THE DAD HIS FATHER COULDN’T BE</p>
            <p>Community</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img36} alt="logo" />
          </div>
          <div>
            <p>MEET UC’S FIRST FEMALE RO TECHNICIAN</p>
            <p>Community</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img37} alt="logo" />
          </div>
          <div>
            <p>THE INCREDIBLE PARIHAR FAMILY</p>
            <p>Community</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img38} alt="logo" />
          </div>
          <div>
            <p>
              ADOPTING UNITED NATION’S SDGS TO BUILD A BETTER WORLD | URBAN
              COMPANY’S ESG INDIA REPORT
            </p>
            <p>Community, Company, Company Updates</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img39} alt="logo" />
          </div>
          <div>
            <p>NO DREAM IS TOO BIG FOR PREETI DUA | SALON PROFESSIONAL</p>
            <p>Community</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img40} alt="logo" />
          </div>
          <div>
            <p>
              BECOMING AN EQUAL PARTNER – HOW BEAUTICIAN SHALINI MADE IT
              HAPPEN
            </p>
            <p>Community, Make Up</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img41} alt="logo" />
          </div>
          <div>
            <p>GETTING BACK UP WHEN LIFE KNOCKED HER DOWN: RACHNA’S STORY</p>
            <p>Community, Make Up</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img42} alt="logo" />
          </div>
          <div>
            <p>
              FROM A DAILY-WAGE LABORER TO STAR CLEANER AT URBAN COMPANY:
              STORY OF RABIUL
            </p>
            <p>Community, Make Up</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img43} alt="logo" />
          </div>
          <div>
            <p>NO END TO DREAMING BIG FOR SUPERSTAR JYOTI</p>
            <p>Community, Make Up</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img44} alt="logo" />
          </div>
          <div>
            <p>THIS CARPENTER’S STORY HAS A LESSON FOR EVERYBODY</p>
            <p>Community</p>
          </div>
        </div>
      </div>

      <div className="scrollbox">
        <div className="scroll">
          <div>
            <img src={img45} alt="logo" />
          </div>
          <div>
            <p>BEST FACE WASH FOR PIMPLES FOR MEN</p>
            <p>Make Up, Men, Skincare</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img46} alt="logo" />
          </div>
          <div>
            <p>THE BEST FACE CREAM FOR MEN</p>
            <p>Make Up, Men, Skincare</p>
          </div>
        </div>
        <div className="scroll">
          <div>
            <img src={img47} alt="logo" />
          </div>
          <div>
            <p>THE BEST FACE WASH FOR MEN IN INDIA</p>
            <p>Make Up, Men, Skincare</p>
          </div>
        </div>
      </div>
    </div>
    <hr id="hr" />
    <div id="footer">
      <div>
        <img src={img48} alt="" />
      </div>
      <div>
        <img src={img49} alt="" />
      </div>
      <div>
        <img src={img50} alt="" />
      </div>
      <div>
        <img src={img51} alt="" />
      </div>
    </div>
    <p id="p">Copyright © 2022. All rights reserved by Urban Company</p>
  </>

  )
};

export default Blog;
