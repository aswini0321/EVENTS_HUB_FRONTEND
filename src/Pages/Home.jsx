import React from 'react';
import './CSS/Home.css';

const Home = () => {
  return (
    <div>

      <header className="header">
        <a className="logo">
          <i className=""></i>TECH_CONNECT
        </a>
        <nav className="nav-items">
          <a href="/login">LOGIN</a>
          <a href="/signup">REGISTER</a>
        </nav>
      </header>
      <main>
        <div className="hero">
          <div>
            <h2>Welcome to Events Hub</h2>
            <p>Your go-to platform for tech resources to discover hackathons, coding contests, ideathons, and workshops.</p>
          </div>
        </div>

        <div className="content-boxes">
          <div className="content-box">
            <img src="https://www.shutterstock.com/image-vector/hackathon-text-green-rectangle-shape-260nw-2423781609.jpg" alt="Community" />
            <div className="text-overlay">
              <p>At Events Hub, we bring you the latest hackathons happening across colleges, universities, and online platforms.Be ready to take on challenges, there’s always a hackathon waiting for you!</p>
            </div>
          </div>
          <div className="content-box">
            <img src="https://media.istockphoto.com/id/894378684/vector/workshop-prime-white-round-button.jpg?s=612x612&w=0&k=20&c=bRQB67ZgXkXcAl4PMTLELjupsDLz90JDOJeEcpdRuec=" alt="Resources" />
            <div className="text-overlay">
              <p>we connect students with workshops that cover everything from coding and AI to cloud computing,web development, and more. So practice real-world skills and stay ahead in your tech journey.</p>
            </div>
          </div>
          <div className="content-box">
            <img src="https://static.vecteezy.com/ti/vettori-gratis/p1/44587933-un-mano-tenere-un-palloncino-con-il-parola-codifica-vettoriale.jpg" alt="Events" />
            <div className="text-overlay">
              <p>At Events Hub, students can explore coding challenges, contests, and projects that push their skills to the next level.Events Hub helps you code, create, and excel in your journey.</p>
            </div>
          </div>
        </div>

        <div className="heros">
          <div>
            <p>🌟 Stay updated with the latest tech events across campuses and online.</p>

            <p>💡 Connect with opportunities that sharpen your problem-solving and coding skills.</p>

            <p>🤝 Collaborate with peers and build projects that make an impact.</p>

            <p>🏆 Challenge yourself in competitive environments and boost your confidence.</p>
          </div>
          <div>
            <img src="https://sm.mashable.com/t/mashable_in/photo/default/best-laptops-copy-1_3rct.1248.jpg" alt="image"></img>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="copy">&copy; 2024 Developer</div>
        <div className="bottom-links">
          <div className="links">
            <span>More Info</span>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="links">
            <span>Social Links</span>
            <a href="#">
              <i className="fab fa-facebook"></i> {/* Facebook icon */}
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i> {/* Twitter icon */}
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i> {/* Instagram icon */}
            </a>
          </div>
        </div>
      </footer>



    </div>
  );
};

export default Home;
