import { Request, Response } from "express";
const fetch = require('node-fetch');

class IndexController {
    public async index(req: Request, res: Response) {
      let img: string[] = ['https://design.duolingo.com/e69974f04b05dcf07f2a.svg', 'https://design.duolingo.com/6b59833e80abfee5a4e0.svg', 'https://design.duolingo.com/60aa5cd702b56a7a5e6b.svg','https://design.duolingo.com/cb98bfddd80fe680632d.svg', 'https://design.duolingo.com/0cafa0617837e6c7b204.svg', 'https://design.duolingo.com/61ed15447ba714a5e160.svg'];
      let imgDef=img[Math.floor(Math.random() * img.length)];
      let user=req.params.user;
      let url=`https://www.duolingo.com/2017-06-30/users?username=${user}`;
      fetch(url)
      .then((response: { json: () => any; }) => response.json())
      .then((data: any) => {
        let crowns=0;
        for(let result of data.users[0].courses){
          crowns+=result.crowns;
       }
        const unixTime = data.users[0].creationDate;
        const date = new Date(unixTime*1000);
        let html = `
<svg viewBox="0 0 495 195" width="495" height="195" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="clip0">
      <rect width="148.005" height="183.195" fill="white" transform="translate(0.497559 0.863525)"/>
    </clipPath>
    <style>
          .header {
            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
            fill: #58A6FF;
            animation: fadeInAnimation 0.8s ease-in-out forwards;
          }
          @supports(-moz-appearance: auto) {
            /* Selector detects Firefox */
            .header { font-size: 15.5px; }
          }
          
    .stat {
      font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #C3D1D9;
    }
    @supports(-moz-appearance: auto) {
      /* Selector detects Firefox */
      .stat { font-size:12px; }
    }
    .stagger {
      opacity: 0;
      animation: fadeInAnimation 0.3s ease-in-out forwards;
    }
    .rank-text {
      font: 800 24px 'Segoe UI', Ubuntu, Sans-Serif; fill: #C3D1D9; 
      animation: scaleInAnimation 0.3s ease-in-out forwards;
    }
    
    .bold { font-weight: 700 }
    .icon {
      fill: #1F6FEB;
      display: block;
    }
    
    .rank-circle-rim {
      stroke: #58A6FF;
      fill: none;
      stroke-width: 6;
      opacity: 0.2;
    }
    .rank-circle {
      stroke: #58A6FF;
      stroke-dasharray: 250;
      fill: none;
      stroke-width: 6;
      stroke-linecap: round;
      opacity: 0.8;
      transform-origin: -10px 8px;
      transform: rotate(-90deg);
      animation: rankAnimation 1s forwards ease-in-out;
    }
    
    @keyframes rankAnimation {
      from {
        stroke-dashoffset: 251.32741228718345;
      }
      to {
        stroke-dashoffset: 127.75574765469881;
      }
    }
  
  

          
    /* Animations */
    @keyframes scaleInAnimation {
      from {
        transform: translate(-5px, 5px) scale(0);
      }
      to {
        transform: translate(-5px, 5px) scale(1);
      }
    }
    @keyframes fadeInAnimation {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  
          
        </style>
  </defs>
  <rect data-testid="card-bg" x="0.5" y="0.5" rx="4.5" height="200.727" stroke="#e4e2e2" width="494" fill="#0D1117" stroke-opacity="1" style=""/>
  <g data-testid="card-title" transform="matrix(1, 0, 0, 1, 25, 35.000001)">
    <g transform="translate(0, 0)">
      <text x="0" y="0" class="header" data-testid="header" style="white-space: pre;">${data.users[0].name} Duolingo Stats</text>
    </g>
  </g>
  <g data-testid="main-card-body" transform="matrix(1, 0, 0, 1.021739, 0, 38.234208)" style="">
    <g data-testid="rank-circle" transform="translate(400, 47.5)">
      <circle class="rank-circle-rim" cx="-10" cy="8" r="40"/>
      <circle class="rank-circle" cx="-10" cy="8" r="40"/>
      <g class="rank-text" style="" transform="matrix(0.527976, 0, 0, 0.470112, -23.491877, 19.047945)">
        <title/>
        <image width="640" height="427" transform="matrix(0.095783, 0, 0, 0.110648, -38.469444, -18.145302)" style="" href="https://design.duolingo.com/60aa5cd702b56a7a5e6b.svg">
        </image>
      </g>
      <g clip-path="url(#clip0)" transform="matrix(0.276233, 0, 0, 0.282792, -31.346836, -18.36186)" style="">
        <svg width="100%" height="100%" viewBox="-100 -100 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <image cx="-70" cy="-10" x="10" y="20" width="100" height="1000" xlink:href="${imgDef}"/>
        </svg>
      </g>
    </g>
    <svg x="0" y="0">
      <g transform="translate(0, 0)">
        <g class="stagger" style="animation-delay: 450ms" transform="translate(25, 0)">
          <svg data-testid="icon" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
            <path fill-rule="evenodd" d=""/>
          </svg>
          <text class="stat bold" x="25" y="12.5" style="white-space: pre;"/>
          <text class="stat" x="190" y="12.5" data-testid="stars" style="white-space: pre;"/>
        </g>
      </g>
      <g transform="translate(0, 25)">
        <g class="stagger" style="animation-delay: 600ms" transform="translate(25, 0)">
          <svg data-testid="icon" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16"/>
          <text class="stat bold" x="25" y="12.5" style="white-space: pre;">Days on a roll<tspan x="25" dy="1em">​</tspan></text>
          <text class="stat" x="190" y="12.5" data-testid="commits" style="white-space: pre;">${data.users[0].streak}</text>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="matrix(0.637312, 0, 0, 0.623753, -0.099559, -2.810454)" style="">
            <g id="streak" transform="translate(1.000000, 1.000000)" fill-rule="nonzero">
              <g id="Group" fill="#FF9600" stroke="#FFFFFF" stroke-width="2">
                <path d="M0.068,15.675 L0.044,7.216 C0.039,5.334 1.25,3.942 3.056,4.246 C3.413,4.306 3.998,4.491 4.306,4.656 L5.997,5.561 L9.247,1.464 C9.79255754,0.776391272 10.6222536,0.37555895 11.5,0.37555895 C12.3777464,0.37555895 13.2074425,0.776391272 13.753,1.464 L20.523,10 C22.1231469,11.939276 22.9988566,14.3747884 23,16.889 C23,23.034 17.843,28 11.5,28 C5.157,28 0,23.034 0,16.889 C0,16.481 0.023,16.076 0.068,15.675 Z" id="Path"/>
              </g>
              <g id="Group" transform="translate(7.000000, 11.000000)" fill="#FFC800">
                <path d="M1.012,5.077 C1.02645313,5.04002851 1.04561094,5.00507392 1.069,4.973 L3.719,1.364 C3.89306825,1.12674185 4.1697362,0.986581193 4.464,0.986581193 C4.7582638,0.986581193 5.03493175,1.12674185 5.209,1.364 L7.732,4.8 C8.54117469,5.59477404 8.99791508,6.68079318 9,7.815 C9,10.208 6.985,12.148 4.5,12.148 C2.015,12.148 0,10.208 0,7.815 C0,6.776 0.38,5.823 1.012,5.077 L1.012,5.077 Z" id="Path"/>
              </g>
            </g>
          </g>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M 9.78 25 C 9.652 23.767 8.035 23.343 7.294 24.348 L 1.198 32.619 C 0.634 33.384 1.027 34.465 1.958 34.709 L 5.426 35.618 L 5.938 40.549 C 6.066 41.781 7.683 42.205 8.424 41.201 L 14.52 32.93 C 15.084 32.165 14.691 31.084 13.76 30.84 L 10.292 29.931 L 9.78 25 Z" fill="#FFD900" style=""/>
          <path d="M 2.394 33.713 C 2.079 33.63 2.048 33.203 2.349 33.078 L 4.759 32.071 C 4.976 31.981 5.221 32.127 5.237 32.358 L 5.357 34.033 C 5.373 34.264 5.152 34.442 4.924 34.381 L 2.394 33.713 Z" fill="#F7C100" style=""/>
          <path d="M 13.44 31.671 C 13.756 31.754 13.786 32.181 13.486 32.306 L 11.075 33.313 C 10.858 33.403 10.613 33.257 10.597 33.026 L 10.477 31.351 C 10.461 31.12 10.682 30.942 10.91 31.003 L 13.44 31.671 Z" fill="#FFEF8F" style=""/>
        </g>
      </g>
      <g transform="translate(0, 50)">
        <g class="stagger" style="animation-delay: 750ms" transform="translate(25, 0)">
          <text class="stat bold" x="25" y="12.5" style="white-space: pre;">Total experience<tspan x="25" dy="1em">​</tspan></text>
          <text class="stat" x="190" y="12.5" data-testid="prs" style="white-space: pre;">${data.users[0].totalXp}</text>
        </g>
      </g>
      <g transform="translate(0, 75)">
        <g class="stagger" style="animation-delay: 900ms" transform="translate(25, 0)">
          <text class="stat bold" x="25" y="12.5" style="white-space: pre;">Crowns</text>
          <text class="stat" x="190" y="12.5" data-testid="issues" style="white-space: pre;">${crowns}</text>
        </g>
      </g>
      <g transform="translate(0, 100)">
        <g class="stagger" style="animation-delay: 1050ms" transform="translate(25, 0)">
          <text class="stat bold" x="25" y="12.5" style="white-space: pre;">Joined in</text>
          <text class="stat" x="190" y="12.5" data-testid="contribs" style="white-space: pre;">${date.toLocaleDateString("en-US")}</text>
        </g>
      </g>
    </svg>
  </g>
  <g id="g-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="matrix(0.623533, 0, 0, 0.623533, 23.175885, 114.767122)" style="">
    <g id="juicy-crown" transform="translate(1.000000, 1.000000)" fill-rule="nonzero">
      <path d="M7.756,6.993 L12.632,1.882 C13.2378543,1.2469304 14.0729018,0.881084131 14.9504851,0.866238503 C15.8280684,0.851392876 16.6750122,1.18878575 17.302,1.803 L22.594,6.989 L25.437,4.728 C26.2761293,4.06050369 27.4491145,4.00759997 28.3449252,4.59684738 C29.2407359,5.1860948 29.656646,6.28414389 29.376,7.319 L25.67,20.971 C25.3391114,22.1908879 24.2319674,23.0380001 22.968,23.0380001 L6.908,23.0380001 C5.64366103,23.0382922 4.53598585,22.1912465 4.205,20.971 L0.555,7.518 C0.260731262,6.43355938 0.685695545,5.28174032 1.61378175,4.64828824 C2.54186795,4.01483615 3.76934805,4.03880272 4.672,4.708 L7.755,6.993 L7.756,6.993 Z" id="path-1" stroke="#FFFFFF" stroke-width="2" fill="#FFC800"/>
      <path d="M6.16,9.002 L7.259,9.944 C7.44099992,10.1000604 7.6777443,10.1770545 7.91672577,10.157906 C8.15570725,10.1387574 8.37717145,10.025049 8.532,9.842 L11.249,6.63 C11.5471503,6.27645891 12.0293501,6.13807859 12.4696049,6.27971432 C12.9098596,6.42135006 13.22092,6.81493261 13.257,7.276 L14.193,19.063 C14.218112,19.3800921 14.1096022,19.6932559 13.893686,19.9268329 C13.6777697,20.1604098 13.3740849,20.2931557 13.056,20.2930001 L8.576,20.2930001 C8.05674812,20.2927533 7.60326841,19.9416457 7.473,19.439 L4.965,9.747 C4.88514303,9.43484923 5.016732,9.10693867 5.29021683,8.93658232 C5.56370166,8.76622597 5.91603726,8.79269522 6.161,9.002 L6.16,9.002 Z" id="path-1" fill="#FFDE00"/>
    </g>
  </g>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M 32.452 155.453 C 36.87 155.453 40.452 151.872 40.452 147.453 C 40.452 143.035 36.87 139.453 32.452 139.453 C 28.034 139.453 24.452 143.035 24.452 147.453 C 24.452 151.872 28.034 155.453 32.452 155.453 Z M 31.308 144.025 C 31.308 143.394 31.82 142.883 32.451 142.883 C 33.082 142.883 33.594 143.394 33.594 144.025 L 33.594 147.559 L 35.724 149.688 C 36.17 150.135 36.17 150.858 35.724 151.305 C 35.277 151.751 34.554 151.751 34.107 151.305 L 31.683 148.88 C 31.654 148.851 31.627 148.821 31.601 148.79 C 31.419 148.587 31.308 148.319 31.308 148.025 L 31.308 144.025 Z" fill="#CDCDCD"/>
</svg>


    `;
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(html));
      }).catch((error: any) => {
        res.send("");
      });


    }
}

export const indexController = new IndexController();
