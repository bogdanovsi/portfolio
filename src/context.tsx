import logo from './images/9.png';
import appStore from './images/btn-app-store.png';
import googlePlay from './images/btn-google-play-store.png';

// @ts-ignore
import BezierEasing from 'bezier-easing';

// import screenCall from './images/Audio_Call.gif';
// import DatingGroup from './images/Dating_Group_Transition.gif';
// import Recommendatuins from './images/Recommendations_Transition.gif';
// import NewGroupChat from './images/New Group Chat.gif';
// import Swiping from './images/Swiping_Transition.gif';

import screenCallPoster from './images/Audio_Call--fit.gif';
import DatingGroupPoster from './images/Dating_Group_Transition--fit.gif';
import RecommendatuinsPoster from './images/Recommendations_Transition--fit.gif';
import NewGroupChatPoster from './images/New_Group_Chat--fit.gif';
import SwipingPoster from './images/Swiping_Transition--fit.gif';

const leftEasingGroupChat = BezierEasing(0.6, 0.16, 0.68, 1.05);
const sizeEasingGroupChat = BezierEasing(0.34, 1.05, 0.77, 0.64);

const leftEasingDate = BezierEasing(0.05, 0.48, 0.75, 0.6);
const sizeEasingDate = BezierEasing(0.62, 0.26, 0.28, 0.61);

const first = {
  leftEasing: BezierEasing(0.19, 0.57, 0.92, 0.85),
  topEasing: BezierEasing(0.52, 0.34, 1.0, 0.7),
  sizeEasing: BezierEasing(0.62, 0.26, 0.28, 0.61)
};
const second = {
  leftEasing: BezierEasing(0.62, 0.28, 0.0, 1.05),
  topEasing: BezierEasing(0.52, 0.34, 1.0, 0.7),
  sizeEasing: BezierEasing(0.62, 0.26, 0.28, 0.61)
};

const leftEasingGroup = BezierEasing(0.35, 0.92, 0.68, 0.1);
const sizeEasingGroup = BezierEasing(0.56, 0.32, 0.75, 0.49);

const urlContactUs = '/web/contact_us';
const urlJobs = '/web/jobs';

const errorMessage = 'Data has not been sent, try again.';
const accessMessage = 'Sent Successfully.';

export const Landing = {
  brand: { src: logo, href: '/', alt: 'B' },

  copyright: '2019 B Messenger',

  footerAddedLinks: [
    {
      title: 'Terms & Conditions',
      href: '/terms-conditions'
    },
    {
      title: 'Privacy Policy',
      href: '/privacy-policy'
    }
  ],

  submitContactUs: function(ev) {
    ev.preventDefault();

    let form = new FormData(ev.target);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', urlContactUs, true);
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alertInfo(accessMessage); 
      }
    };
    xhr.onerror = ev => {
      alertInfo(errorMessage, ' modal-info-alert--error'); 
    };
    xhr.send(form);
  },

  submitJobs: function(ev) {
    ev.preventDefault();

    let form = new FormData(ev.target);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', urlJobs, true);
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alertInfo(accessMessage); 
      }
    };
    xhr.onerror = ev => {
      alertInfo(errorMessage, ' modal-info-alert--error'); 
    };
    xhr.send(form);
  },

  buttonsStore: [
    {
      src: appStore,
      href: '#'
    },
    {
      src: googlePlay,
      href: '#'
    }
  ],

  blocksContent: [
    {
      poster: NewGroupChatPoster,
      title: 'Chats',
      description:
        'Chats are divided by the segmented controller into Personal chats, one-on-one, Group chats and Dating chats. Dating chats are held for 24 hours. If you have not written to each other during this time, match will disappear. So, you have to be bolder!',
      animateRoute: (() => {
        return ({ percentScroll }, elem) => {
          let step = percentScroll / 100;
          let leftValue = leftEasingGroupChat(step);

          if (step > 0.5) step = 1 - step;

          const size = limit(sizeEasingGroupChat(step), 0.9);

          requestAnimationFrame(() => {
            elem.style.transformOrigin = 'all';
            
            elem.style.left = 100 - (25 + leftValue * 100) + '%';

            elem.style.opacity = step * 1.8;

            elem.style.transform = `scale(${size * 15})`;
          })
        };
      })()
    },
    {
      poster: SwipingPoster,
      title: 'Group Chat',
      description: 'Create group for discussion (240 members.)',
      animateRoute: (() => {
        return ({ percentScroll }, elem) => {
          
          let step = percentScroll / 100;

          let leftValue = leftEasingGroupChat(step)
          if (step > 0.5) step = 1 - step;

          const size = limit(sizeEasingGroupChat(step), 0.9);
          
          requestAnimationFrame(() => {
            elem.style.left = 25 + leftValue * 100 + '%';

            elem.style.transformOrigin = 'all';
          
            elem.style.opacity = step * 1.8;

            elem.style.transform = `scale(${size * 15})`;
          });
        };
      })()
    },
    {
      poster: screenCallPoster,
      title: 'Audio Call',
      description: 'No time to write - call! One on one and in group (12 members)',
      animateRoute: (() => {
        return ({ percentScroll }, elem) => {
          let step = percentScroll / 100;
          let stepInvert = 1 - step;
          let sizeEase = sizeEasingDate(stepInvert);
          let leftEase = leftEasingDate(stepInvert)
          const size = limit(0.6, sizeEase);

          requestAnimationFrame(() => {
            elem.style.transformOrigin = 'all';
            
            elem.style.left = 100 - (15 + leftEase * 100) + '%';
            
            elem.style.opacity = step * 1.4;
  
            if (percentScroll >= 50) elem.style.left = 100 - 74 + '%';
            
            elem.style.transform = `scale(${size * 20})`;
          })
        };
      })()
    },
    {
      poster: DatingGroupPoster,
      title: 'Date',
      description:
        'Finde new friends. The familiar Swipe Left or Right feature needs no introduction. Preferences will help you quickly find the person you are interested in. You can change the standard options such as gender and age. Also, in profile settings, you can specify your wishes. Don’t be scared, they are visible only to you if the person in Discover has the same. The same way works Where to go: Paris, Reykjavik ... may be you go travelling together?',
      animateRoute: (() => {
        return ({ percentScroll }, elem) => {
          let step = percentScroll / 100;
          let stepInvert = 1 - step;
          let sizeEase = sizeEasingDate(stepInvert);
          let leftEase = leftEasingDate(stepInvert)
          const size = limit(0.6, sizeEase);
          
          requestAnimationFrame(() => {
            elem.style.transformOrigin = 'all';
            elem.style.opacity = step * 1.4;

            elem.style.left = 15 + leftEase * 100 + '%';
            if (percentScroll >= 50) elem.style.left = 74 + '%';
            
            elem.style.transform = `scale(${size * 20})`;
          });
        };
      })()
    },
    {
      poster: RecommendatuinsPoster,
      title: 'Recommend',
      description: 'Here you can recomend match for your friends. Сause you know them like no other!',
      animateRoute: (() => {
        return ({ percentScroll }, elem) => {
          let step = percentScroll / 100;

          elem.style.transformOrigin = 'all';
          elem.style.display = 'block';
          elem.style.opacity = step * 1.2;

          if (percentScroll < 51) {
            const size = limit(0.5, first.sizeEasing(step));
            let leftLimit = limit(first.leftEasing(step), 0.65);
            let topLimit = limit(first.topEasing(step), 0.3);

            requestAnimationFrame(() => {
              elem.style.transformOrigin = 'all';
              elem.style.display = 'block';
              elem.style.opacity = step * 1.2;

              elem.style.left = 50 - leftLimit * 100 + '%';
              elem.style.top = 50 - topLimit * 100 + '%';
              elem.style.transform = `scale(${size * 25})`;
            });
          } else {
            let stepFix = step - 0.51;

            const left = -0.14 - second.leftEasing(stepFix);
            const size = 12.5 - second.sizeEasing(stepFix) * 25;

            let leftLimit = second.topEasing(step - 0.51);

            requestAnimationFrame(() => {
              elem.style.transformOrigin = 'all';
              elem.style.display = 'block';
              elem.style.opacity = step * 1.2;

              elem.style.left = left * 100 + '%';
              elem.style.top = 20 + leftLimit * 800 + '%';

              elem.style.transform = `scale(${size})`;
            })
          }
        };
      })()
    },
    {
      poster: screenCallPoster,
      title: 'Group',
      description:
        'We know - you missed. Create groups in Discover: choose the purpose of your gathering, invite your friends, letting them scan the qr-code and form a cool gang!',
      animateRoute: (() => {
        return ({ percentScroll }, elem) => {
          let step = percentScroll / 100;
          let leftStep = leftEasingGroup(step);
          
          requestAnimationFrame(() => {
            elem.style.transformOrigin = 'all';
            
            elem.style.left = -100 + leftStep * 300 + '%';
            
            if (step > 0.5) step = 1 - step;
            
            elem.style.opacity = step * 1.6;
  
            const size = limit(sizeEasingGroup(step) * 32, 15);
  
            elem.style.transform = `scale(${size})`;
          })
        };
      })()
    }
  ]
};

function limit(v: number, max: number) {
  if (v < max) return v;
  return max;
}

function alertInfo(msg: string, addedCls?: string) {
  let modalInfo = document.createElement('div');
  let addcls = addedCls ? addedCls : "";
  modalInfo.className = 'modal-info-alert ' + addcls;

  let p = document.createElement('p');

  p.style.margin = '0';

  p.innerHTML = msg;

  modalInfo.appendChild(p);

  document.body.appendChild(modalInfo);

  setTimeout(() => {
    document.body.removeChild(modalInfo);
  }, 1500);
}
