import { FunctionComponent, useCallback } from "react";
import styles from "./PortfolioTemplate.module.css";

const PortfolioTemplate: FunctionComponent = () => {
  const onNstagramIconClick = useCallback(() => {
    window.open("https://www.instagram.com/tochukwuomeja");
  }, []);
  const onLinkednIconClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/tochukwu-omeja-8084b2260/");
  }, []);

  return (
    <div className={styles.portfolioTemplate}>
      <div className={styles.navigation}>
        <div className={styles.logo}></div>
        <div className={styles.menuItems}>
          <div className={styles.about}>About</div>
          <div className={styles.about}>Work</div>
          <div className={styles.about}>Contact</div>
        </div>
      </div>
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          <div className={styles.titleSubtitle}>
            <div
              className={styles.brandingImage}
            >{`Branding | Image making `}</div>
            <div className={styles.visualDesigner}>UI/UX Designer</div>
            <div className={styles.thisIsAContainer}>
              <p
                className={styles.thisIsA}
              >{`Hello, I'm Tochukwu Omeja, a UI/UX designer and Frontend Developer passionate about creating intuitive and visually appealing digital experiences. I specialize in turning user needs into beautiful, functional designs. `}</p>
            </div>
          </div>
        </div>
        <img className={styles.headerimage1Icon} alt="" src="/new pic.png" />
      </div>
      <div className={styles.skillsSection}>
        <div className={styles.cardsSection}>
          <div className={styles.skillsCard}>
            <img
              className={styles.skillsCardIcon}
              alt=""
              src="/skills-card-icon.svg"
            />
            <div className={styles.titleDescription}>
              <div className={styles.title}>Tools and Skills</div>
              <div className={styles.thisIsAContainer}>
                Proficient in industry-standard design software like Figma,
                Adobe XD, and Sketch.
              </div>
            </div>
          </div>
          <div className={styles.skillsCard}>
            <img
              className={styles.skillsCardIcon1}
              alt=""
              src="/skills-card-icon1.svg"
            />
            <div className={styles.titleDescription}>
              <div className={styles.title}>WireFraming</div>
              <div className={styles.thisIsAContainer}>
                I specialize in creating low-fidelity wireframes that serve as
                the blueprint for the final design.
              </div>
            </div>
          </div>
          <div className={styles.skillsCard}>
            <img
              className={styles.skillsCardIcon2}
              alt=""
              src="/skills-card-icon2.svg"
            />
            <div className={styles.titleDescription}>
              <div className={styles.title}>Frontend Development</div>
              <div className={styles.thisIsAContainer}>
                I'm dedicated to crafting the visual and interactive aspects of
                websites and web applications that engage users{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gallerySection}>
        <div className={styles.latestWork}>Latest work</div>
        <div className={styles.cardsSection1}>
          <div className={styles.galleryCard}>
            <img className={styles.imageIcon} alt="" src="/Screenshot.png" />
            <div className={styles.titleDescription3}>
              <div className={styles.brandingImage}>Ecommerce Landing Page</div>
              <div className={styles.thisIsAContainer}>
                <a
                  href="https://www.figma.com/proto/o2D0icUvRnp6w3sHfC3TsM/Untitled?type=design&node-id=1-5&t=kacRoYoCrf9UKgey-0&scaling=min-zoom&page-id=0%3A1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here
                </a>
              </div>
            </div>
          </div>
          <div className={styles.galleryCard}>
            <img className={styles.imageIcon} alt="" src="/Hero.png" />
            <div className={styles.titleDescription3}>
              <div className={styles.brandingImage}>
                Reastaurant Booking Template
              </div>
              <div className={styles.thisIsAContainer}>
                <a
                  href="https://www.figma.com/file/1RjPdDxKLNBLMtYLNlH4sJ/Untitled?type=design&node-id=0-1&mode=design&t=s20SEMV7TuGWrx8f-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here
                </a>
              </div>
            </div>
          </div>
          <div className={styles.galleryCard}>
            <img className={styles.imageIcon} alt="" src="/Group 1874.png" />
            <div className={styles.titleDescription3}>
              <div className={styles.brandingImage}>Hotel Booking Template</div>
              <div className={styles.thisIsAContainer}>
                <a
                  href="https://www.figma.com/proto/ZWOzKxRS6GYcmgwhvjplp4/Untitled?type=design&node-id=1-337&t=BHPm15mf8pcCp0V9-0&scaling=min-zoom&page-id=0%3A1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here
                </a>
              </div>
            </div>
          </div>
          <div className={styles.galleryCard}>
            <img className={styles.imageIcon} alt="" src="/LANDING PAGE.png" />
            <div className={styles.titleDescription3}>
              <div className={styles.brandingImage}>Website Landing Page</div>
              <div className={styles.thisIsAContainer}>
                <a
                  href="https://www.figma.com/file/tynYFUC1SIcwdN26dYVmBW/Adire-(Managed-Internship)?node-id=0%3A1&mode=dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here
                </a>
              </div>
            </div>
          </div>
          <div className={styles.galleryCard}>
            <img className={styles.imageIcon} alt="" src="/App Featyres.png" />
            <div className={styles.titleDescription3}>
              <div className={styles.brandingImage}>Blog Template</div>
              <div className={styles.thisIsAContainer}>
                <a
                  href="https://www.figma.com/file/TYWsFWVRkeXAD2HIXZiMks/Untitled?type=design&node-id=1-124&mode=design&t=o9brGsr3oUynzMyP-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.gallerySection}>
        <div className={styles.latestWork}>Testimonial</div>
        <div className={styles.cardsSection1}>
          <div className={styles.testimonialCard}>
            <div className={styles.brandingImage}>
              Tochukwu is an outstanding UI/UX designer and frontend developer.
              Their passion for creating beautiful and user-friendly digital
              experiences is remarkable.{" "}
            </div>
            <div className={styles.clientImageInfo}>
              <img
                className={styles.clientImageIcon}
                alt=""
                src="/solanke.jpeg"
              />
              <div className={styles.clientInfoStars}>
                <div className={styles.stars}>
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                </div>
                <div className={styles.nameCompany}>
                  <div className={styles.brandingImage}>Solanke</div>
                  <div className={styles.thisIsAContainer}>Product Manager</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.brandingImage}>
              I've had the privilege of working closely with Tochukwu on several
              projects, and I must say, their dedication to UI/UX design is
              truly impressive.
            </div>
            <div className={styles.clientImageInfo}>
              <img
                className={styles.clientImageIcon}
                alt=""
                src="/Chika.jpeg"
              />
              <div className={styles.clientInfoStars}>
                <div className={styles.stars}>
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                  <img className={styles.starIcon} alt="" src="/star.svg" />
                </div>
                <div className={styles.nameCompany}>
                  <div className={styles.brandingImage}>Chika Nwobi</div>
                  <div className={styles.thisIsAContainer}>Decagon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.letsWorkTogether}>Lets work together</div>
        <div className={styles.contactSectionContent}>
          <div className={styles.contactInfo}>
            <div className={styles.nameCompany}>
              <div className={styles.thisIsA10}>
                Feel free to get in touch with me if you have any inquiries,
                collaboration ideas, or just want to say hello! I'm always open
                to new opportunities and engaging with fellow enthusiasts. You
                can reach me via email at tochukwuomeja@gmail.com or connect
                with me on LinkedIn.
              </div>
            </div>
            <div className={styles.socialLinks}>
              <img
                className={styles.discordIcon}
                alt=""
                src="/nstagram.svg"
                onClick={onNstagramIconClick}
              />
              <img
                className={styles.discordIcon}
                alt=""
                src="/fa_linkedin-square.svg"
                onClick={onLinkednIconClick}
              />
              <p>09138334077</p>
            </div>
          </div>
          <div className={styles.contactForm}>
            <div className={styles.titleDescription}>
              <div className={styles.inputField}>
                <div className={styles.name}>Name</div>
              </div>
              <div className={styles.inputField}>
                <div className={styles.name}>Email</div>
              </div>
            </div>
            <div className={styles.button1}>
              <div className={styles.logo}>Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTemplate;
