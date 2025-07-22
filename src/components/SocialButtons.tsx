import React from 'react';
import styled from 'styled-components';

const SocialButtons = () => {
  return (
    <StyledWrapper>
      <div className="button-container">
        <a 
          href="https://www.linkedin.com/in/srijan-telang-902088282/"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex-center"
        >
          <svg width="22px" className="btn-svg" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a 
          href="https://x.com/jodhumein"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex-center"
        >
          <svg viewBox="0 -2 20 20" width="22px" className="btn-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fff">
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
              <title>twitter [#154]</title>
              <desc>Created with Sketch.</desc>
              <defs />
              <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#fff">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
        <a 
          href="https://github.com/Srijan272002"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex-center"
        >
          <svg stroke="#fff" fill="#fff" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" className="btn-svg" width="22px" viewBox="0 0 20 20">
            <g strokeWidth={0} id="SVGRepo_bgCarrier" />
            <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
            <g id="SVGRepo_iconCarrier">
              <title>github [#fff142]</title>
              <desc>Created with Sketch.</desc>
              <defs />
              <g fillRule="evenodd" fill="none" strokeWidth={1} stroke="none" id="Page-1">
                <g fill="#fff" transform="translate(-140.000000, -7559.000000)" id="Dribbble-Light-Preview">
                  <g transform="translate(56.000000, 160.000000)" id="icons">
                    <path id="github-[#fff142]" d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
        <a 
          href="https://open.spotify.com/user/3165wwjkvmdl2uic3mh2zftnwely?si=2afdf838e91f4c81"
          target="_blank"
          rel="noopener noreferrer"
          className="button flex-center"
        >
          <svg width="22px" className="btn-svg" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .button {
    cursor: pointer;
    text-decoration: none;
    color: #ffff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #2d2e32;
    border: 2px solid #2d2e32;
    transition: all 0.45s;
  }

  .button:hover {
    transform: rotate(360deg);
    transform-origin: center center;
    background-color: #ffff;
    color: #2d2e32;
  }

  .button:hover .btn-svg {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(305deg)
      brightness(103%) contrast(103%);
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }`;

export default SocialButtons; 