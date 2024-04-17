import Instagram from "@/shared/ui/icons/footer/instagram";
import "./styles.scss";
import Facebook from "@/shared/ui/icons/footer/facebook";
import Twitter from "@/shared/ui/icons/footer/twitter";
import { Logo } from "@/shared/ui/Logo/logo";

export const Footer = () => {
  return (
    <footer className="bg-darkblue">
      <div className="container flex flex-row justify-between py-[98px] px-[50px]">
        <div className="left-content">
          <div className="relative">
            <Logo className="text-white relative z-[100] font-jua" />
          </div>

          <div className="left-content__messengers">
            <div className="messengers-facebook">
              <Facebook />
            </div>
            <div className="messengers-instagram">
              <Instagram />
            </div>
            <div className="messengers-twitter">
              <Twitter />
            </div>
          </div>

          <div className="left-content__data">
            <p>2024 © All rights reserved </p>
          </div>
        </div>

        <div className="right-content">
          <div className="block1">
            <h2>Job Seekers</h2>
            <div className="block1-links">
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
            </div>
          </div>
          <div className="block2">
            <h2>About</h2>
            <div className="block2-links">
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
            </div>
          </div>
          <div className="block3">
            <h2>Nurzhan gey</h2>
            <div className="block3-links">
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
            </div>
          </div>
          <div className="block4">
            <h2>Partner with us</h2>
            <div className="block4-links">
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
              <a href="#">Artem Gay</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
