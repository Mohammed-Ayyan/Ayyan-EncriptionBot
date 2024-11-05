// import { driver } from "/driver.js";
// import "../driver.js/dist/driver.css";
// import { driver } from "/driver.js";
// const driverObj = driver();
if (localStorage.getItem("userloggedin")===null) {
  // document.getElementById('null').style.display="none";
  Toastify({
    text: "Unlock all features by logging in! Click here to go to the login page.",
    
    // text:"Click here to go to login page",
    duration: 8000,
    destination: "login.html",
    // newWindow: true,
    close: true,
    gravity: "top",
    position: "center", 
    stopOnFocus: true, 
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    
}).showToast();
  
} else {
  
}


AOS.init();
const driver = window.driver.js.driver;
const driverObj1 = driver({
  popoverClass: "driverjs-theme",
  // allowClose:false,
  smoothScroll: true,
  showProgress: true,
  steps: [
    {
      element: ".h",
      popover: {
        title: 'Welcome to the Tour',
        description: 'Let me guide you through the features of this website.',
        side: "top",
        align: 'left'
      }
    },

    {
      element: '#texta',
      popover: {
        title: 'Message Box',
        description: 'Enter your message here to be encrypted.',
        side: "top",
        align: 'center'

      }
    },
    {
      element: '.select',
      popover: {
        title: 'Encryption Methods',
        description: 'Select your preferred encryption method from this dropdown.',
        side: "top",
        align: 'start'
      }
    },
    {
      element: '#but',
      popover: {
        title: 'Encrypt Button',
        description: 'Click here to encrypt the message you entered.',
        side: "top",
        align: 'start'
      }
    },
    // { 
    //   element: '#main', 
    //   popover: { 
    //     title: 'Encryption Methods', 
    //     description: 'Same Message With Different Encryption Methods', 
    //     side: "top",
    //     align: 'start' 
    //   } 
    // },
    // { 
    //   element: '.input0', 
    //   popover: { 
    //     title: 'Your Message', 
    //     description: 'Your message', 
    //     side: "top",
    //     align: 'start' 
    //   } 
    // },
    // { 
    //   element: '.sum', 
    //   popover: { 
    //     title: 'Encryption', 
    //     description: 'your Message Has been encrypted', 
    //     side: "top",
    //     align: 'start' 
    //   } 
    // },
    {
      element: '#glow',
      popover: {
        title: 'Theme Switcher',
        description: 'Toggle between light and dark themes by clicking this icon.',
        side: "top",
        align: 'start'
      }
    },
    {
      element: '#help',
      popover: {
        title: 'User guide',
        description: 'You can always Open this Guide when Ever you want by clicking this icon',
        side: "top",
        align: 'start'
      }
    },
    {
      element: '#history',
      popover: {
        title: 'History',
        description: 'click here to view privious session chats',
        side: "top",
        align: 'start'
      }
    },

    {
      element: '#asidebutton',
      popover: {
        title: 'Sidebar Menu',
        description: 'Click here to open the sidebar for additional options.',
        side: "top",
        align: 'start'
      }
    },
    {
      element: '.Decryptbtn2',
      popover: {
        title: 'Decryption Section',
        description: 'Click here to switch to the decryption section and decrypt your message.',
        side: "top",
        align: 'start'
      }
    },
    {
      // element: '.Decryptbtn2',
      popover: {
        title: 'Session Expiration Notice',
        description: 'This chat session will be saved when you exit. To retain previous chats, click the history icon and retrieve them before leaving.',
        side: 'top',
        align: 'start',
        popoverClass: 'notice-popover'
      }
      
    },
  ]
});
function Tour() {
  driverObj1.drive()

}
// const driver2 = window.driver.js.driver;

// const driverObj12 = driver({
//   popoverClass: "driverjs-theme",
//   // allowClose:false,
//   smoothScroll: true,
//   showProgress: true,
//   steps: [
//     // {
//     //   element: "#textad",
//     //   popover: {
//     //     title: 'Welcome to the Tour',
//     //     description: 'Let me guide you through the features of this website.',
//     //     side: "top",
//     //     align: 'left'
//     //   }
//     // },

//     {
//       element: '#textad',
//       popover: {
//         title: 'Message Box',
//         description: 'Enter your message here to be encrypted.',
//         side: "top",
//         align: 'center'

//       }
//     },
    
//     {
//       element: '.ab',
//       popover: {
//         title: 'Encrypt Button',
//         description: 'Click here to encrypt the message you entered.',
//         side: "top",
//         align: 'start'
//       }
//     },
//     {
//       element: '#history2',
//       popover: {
//         title: 'History',
//         description: 'click here to view privious session chats',
//         side: "top",
//         align: 'start'
//       }
//     },
//     {
//       element: '#Encryptbtn',
//       popover: {
//         title: 'Encryption Section',
//         description: 'Click here to switch back to the Encryption section and encrypt your message.',
//         side: "top",
//         align: 'start'
//       }
//     },
    
//   ]
// });
// function tour2(){
//   driverObj12.drive()
// }



// driverObj.drive()
function typing(name, out) {
  const log = name.split("")
  let typingelements = document.querySelectorAll("." + out)
  const lasttypingelement = typingelements[typingelements.length - 1]
  log.forEach((char, index) => {
    setTimeout(() => {
      lasttypingelement.innerHTML += char
    }, index * 20);
  })
}

function Encrypt() {
  let select = document.getElementById('EncryptionType').value;
  let string = document.getElementById("texta").value.trim()
  if (string != "") {
    let array = []
    array = string.split(" ")
    var array1 = []
    array.forEach(array => {
      let random = Math.random().toString(36).slice(2, select)
      let random1 = Math.random().toString(36).slice(2, select)
      let d = random + array.slice(1) + array[0] + random1
      array1.push(d)
    });
    let length1 = array1.length
    let index = Math.random() * length1
    let parseint = parseInt(index)
    array1.splice(parseint, 0, "ɱă ")
    let join = array1.join(" ")
    let final = join + " " + Math.random().toString(36).slice(2, select)
    console.log(final);
    let a = document.getElementById("outp")
    let out = document.getElementById('main').insertAdjacentHTML("beforeend", `<div class="container0" data-aos="zoom-in-up">
        <div class="input0">` + document.getElementById('texta').value + `
        </div>
        <div class="sum">
        <img class="imaged" src="ma.png" alt="">
        <div class="output0" id="typing"></div></div
    </div>`);
    typing(final, "output0")
    document.getElementById('texta').value = ""
    document.getElementById('main').scrollTop = document.getElementById('main').scrollHeight;
  } else {
    let error = document.getElementById("texta")
    error.value = "Click Enter and watch this placeholder text get Encrypted"
  }
}
footer.addEventListener("keypress", (Event) => {
  console.log(Event);
  // if (Event.key==="Shift"&"Enter") {

  // }
  if (Event.key === "Enter") {
    Event.preventDefault()
    Encrypt()
  }
})

function decrypt() {
  let string = document.getElementById("textad").value
  if (string != "") {
    if (string.includes("ɱă") == true) {
      let ayyanstring = string.trim()
      let array = []
      array = ayyanstring.split(" ")
      let trim = array.length - 1
      console.log(array[trim])
      const selectd = array[trim].length
      var array1 = []
      array.forEach(array => {
        if (array == "ɱă") {
          return
        } else {
          let c = array.slice(-selectd - 1, -selectd);
          let deecyr = c + array.slice(selectd, -selectd - 1);
          array1.push(deecyr)
        }
      });
      let join = array1.join(" ")
      console.log(join)
      let a = document.getElementById("outp")
      let out = document.getElementById('maind').insertAdjacentHTML("beforeend", `<div class="container0"  data-aos="zoom-in-up">
            <div class="input0">` + document.getElementById('textad').value + `
            </div>
            <div class="sum">
            <img class="imaged" src="ma.png" style="filter: invert(1);" alt="">
            <div class="outputd1">
            </div></div>
        </div>`);
      typing(join, "outputd1")
      document.getElementById('textad').value = ""
      document.getElementById('maind').scrollTop = document.getElementById('maind').scrollHeight;
    } else {
      let ayyanstring = string.trim()
      let array = []
      array = ayyanstring.split(" ")
      let trim = array.length - 1
      console.log(array[trim])
      const selectd = array[trim].length
      var array1 = []
      array.forEach(array => {
        let c = array.slice(-selectd - 1, -selectd);
        let deecyr = c + array.slice(selectd, -selectd - 1);
        array1.push(deecyr)
      });
      let join = array1.join(" ")
      console.log(join)
      let a = document.getElementById("outp")
      let out = document.getElementById('maind').insertAdjacentHTML("beforeend", `<div class="container0">
            <div class="input0">` + document.getElementById('textad').value + `
            </div>
            <div class="sum">
            <img class="imaged" src="ma.png" alt="">
            <div class="outputd1">
            </div></div>
        </div>`);
      typing("Enter the message which was encrypted by our Encryption Algorithm", "outputd1")
      document.getElementById('textad').value = ""
      document.getElementById('maind').scrollTop = document.getElementById('maind').scrollHeight;
    }
  } else {
    let error = document.getElementById("textad")
    error.value = "rfdyyanAbno 8o2sie1w i0vhet5um iprestBn4w hjrrogrammerPey8 3l4niacb ɱă semhetek8 04eorldWn3e iv9"
    // alert("Reveal the secret concealed in this enigmatic text!")
    Toastify({

      text: "Reveal the secret concealed in this enigmatic text!",
      position:"center",
      gravity:"top",
      duration: 3000
      
      }).showToast();
  }
}
footerd.addEventListener("keypress", (Event) => {
  console.log(Event);

  if (Event.key === "Enter") {
    Event.preventDefault()
    decrypt()
  }
})

function turnon(time) {
  let set = setInterval(() => {
    document.getElementById('glow').classList.toggle("glow")
  }, 100);
  setTimeout(() => {
    clearInterval(set)
  }, 1000);
  setTimeout(() => {
    document.getElementById('glow').classList.toggle("glow")
    document.getElementById('black').classList.toggle("dark-theme")
    document.getElementById('black').classList.toggle("light-theme")
    document.getElementById('svg').classList.toggle("svg")
  }, time);
}
// var duration = 1 * 1000;
// var animationEnd = Date.now() + duration;
// var skew = 1;

// function randomInRange(min, max) {
//   return Math.random() * (max - min) + min;
// }
document.getElementById('glow1').addEventListener("click",()=>{
  var duration = 1000;
  var animationEnd = Date.now() + duration;
  var skew = 1;
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  (function frame() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);
  
    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: (Math.random() * skew) - 0.2
      },
      colors: ['#ffffff'],
      shapes: ['circle'],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4)
    });
  
    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  }());
});


document.getElementById('asidebutton').addEventListener("click", () => {
  document.getElementById('aside').classList.toggle("aside3")
  document.getElementById('footer').classList.toggle("footer1")
  document.getElementById('main').classList.toggle("maine")
});
document.getElementById('asidebuttonl').addEventListener("click", () => {
  document.getElementById('asidel').classList.toggle("aside2")
  document.getElementById('footerd').classList.toggle("footerd1")
  document.getElementById('maind').classList.toggle("decryptout1")
});
document.getElementById('Decryptbtn').addEventListener("click", () => {
  document.getElementById('ha').classList.toggle("hiddenenc")
  document.getElementById('aside').classList.toggle("aside1")
  document.getElementById('ah').classList.toggle("hiddendec")
  document.getElementById('asidel').classList.remove("aside5");
  turnon(20)
});
document.querySelector(".Decryptbtn2").addEventListener("click", () => {
  document.getElementById('ha').classList.toggle("hiddenenc")
  document.getElementById('aside').classList.toggle("aside1")
  document.getElementById('ah').classList.toggle("hiddendec")
  document.getElementById('asidel').classList.remove("aside5");
  turnon(20)
})
document.getElementById('Encryptbtn').addEventListener("click", () => {
  document.getElementById('ah').classList.toggle("hiddendec")
  document.getElementById('asidel').classList.toggle("aside5")
  document.getElementById('ha').classList.toggle("hiddenenc")
  document.getElementById('aside').classList.remove("aside1")
  turnon(20)
});
document.querySelector(".Decryptbtne").addEventListener("click", () => {
  document.getElementById('ah').classList.toggle("hiddendec")
  document.getElementById('asidel').classList.toggle("aside5")
  document.getElementById('ha').classList.toggle("hiddenenc")
  document.getElementById('aside').classList.remove("aside1")
  turnon(20)
})


let userloggedi = localStorage.getItem("userloggedin");
let userloggedi1 = localStorage.getItem("userloggedi11");
console.log(userloggedi1);


document.getElementById('history').addEventListener("click", () => {
  if (localStorage.getItem(userloggedi || userloggedi1)!='\n        ') {
    window.onload = function () {

      document.getElementById('main').innerHTML = localStorage.getItem(userloggedi || userloggedi1);
  
    }
    window.onload()
    console.log('loaded');
  } else {
    Toastify({

        text: "No History Found",
        position:"center",
        gravity:"bottom",
        duration: 3000
        
        }).showToast();
  }
  // window.onload = function () {

  //   document.getElementById('main').innerHTML = localStorage.getItem(userloggedi || userloggedi1);

  // }
  // window.onload()
  // console.log('loaded');

});
document.getElementById('history2').addEventListener("click", () => {
  if ( localStorage.getItem(userloggedi+"dec" || userloggedi1)!='\n        ') {
    window.onload = function () {

      document.getElementById('maind').innerHTML = localStorage.getItem(userloggedi+"dec" || userloggedi1);
  
    }
    window.onload()
    console.log('loaded');
  } 
  else {
    Toastify({

      text: "No History Found",
      position:"center",
      gravity:"bottom",
      duration: 3000
      
      }).showToast();
    }

});

// document.getElementById('pageend').addEventListener("click", () => {
//   const mainElement = document.getElementById('main');
//   window.scrollTo({
//     left: 0,
//     bottom: mainElement.scrollHeight,
//     behavior: "smooth"
//   });


//   console.log('bottom');

// });
function scrollToTop() {
  let main=document.getElementById('main');
  
  window.scrollTo({top: `document.${main}.scrollHeight`, behavior: 'smooth'});
}

if (userloggedi1) {
  console.log('sign up');

  driverObj1.drive()
} else if (userloggedi) {
  console.log('login');

}
// function ayyan() {



// }

function retreve() {
  let set = localStorage.getItem("ayyan")


  document.getElementById('main').insertAdjacentHTML("afterbegin", set)


}

// let ov={
//   "ayyan":1,
//   "ayyan1":3,
//   "ayyan2":2,

// }
// ov.stringify

// window.addEventListener("onunload",(e)=>{
//   event.preventDefault(e)
//   alert("are you sure")
// })
window.onbeforeunload = function (event) {
  // event.preventDefault(event)
  // alert("ayyan")
  // return"are you sure"
  let retu = document.querySelector('.encryptout');
  let dec=document.querySelector(".decryptout")
  // let stringify = retu.innerHTML
  // // localStorage.setItem(userloggedi, "")
  // localStorage.removeItem(userloggedi)
  // let addhistory=stringify+localStorage.getItem(userloggedi)
  // if (retu.trim()!='\n        ') {
    
    localStorage.setItem(userloggedi || userloggedi1,retu.innerHTML)
    localStorage.setItem(userloggedi+"dec" || userloggedi1,dec.innerHTML)
  // }
  localStorage.removeItem("userloggedi11")
  // localStorage.removeItem("userloggedin")
  localStorage.removeItem(userloggedi1 + 1)
  console.log('closed');



}
function updateLinks() {
  if (window.innerWidth < 1400) {
    const links = document.querySelectorAll(".change");

    links.forEach(link => {
      link.href = "ayyanfdg.html";
    });
  }
  
}

updateLinks();

window.addEventListener("resize", updateLinks);
// Toastify({
//   text: "This is a toast",
//   duration: 3000,
//   destination: "https://github.com/apvarun/toastify-js",
//   newWindow: true,
//   close: true,
//   gravity: "top", // `top` or `bottom`
//   position: "left", // `left`, `center` or `right`
//   stopOnFocus: true, // Prevents dismissing of toast on hover
//   style: {
//     background: "linear-gradient(to right, #00b09b, #96c93d)",
//   },
//   onClick: function(){} // Callback after click
// }).showToast();
// Toastify({

//   text: "This is a toast",
  
//   duration: 3000
  
//   }).showToast();
// onbeforeunload()
