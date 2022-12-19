"use strict"
 function myMove() {
            let id = null;
            const elem = document.getElementById("animate");
            let pos = 0;
            clearInterval(id);
            id = setInterval(frame, 2);
            function frame() {
              if (pos == 150) {
                clearInterval(id);
              } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + 200 + "px";
              }
            }
          }

          