console.log("JavaScript file is being read.");

const currButton = document.getElementById('currButton')
const toastLiveExample = document.getElementById('liveToast')

if (currButton) {
    currButton.addEventListener('click', () => {
      //  console.log("clicked")
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
  }

const pricButton = document.getElementById("pricButton")
const priceModal = document.getElementById("exampleModal")

if (pricButton) {
    pricButton.addEventListener('click', () => {
    //    console.log("Clicked on Price1!")
        const priceShow = new bootstrap.Modal(priceModal)
        priceShow.show()

    })
}

const regButton = document.getElementById("regButton")
regModal = document.getElementById("exampleModalToggle")

if (regButton) {
    regButton.addEventListener('click', () => {
        console.log("Clicked on Register!")
        const regShow = new bootstrap.Modal(regModal)
        regShow.show()
    })
}

// document.addEventListener("DOMContentLoaded", function() {
//     // Get the HTML elements and update their values here
//     console.log("Loaded base on Auto")
//     // Get the HTML elements
//     const header = document.getElementById("headingOne");
//     const button = header.querySelector(".accordion-button");
//     const collapse = document.getElementById("collapseOne");
//     const body = collapse.querySelector(".accordion-body");

//     // Set the values for the placeholders
//     const id = "headingFour";
//     const target = "#collapseFour";
//     const controls = "collapseFour";
//     const section = "Section 4: Conclusion";
//     const text = "This is the 4th item's accordion body.";

//     // Update the HTML elements
//     header.setAttribute("id", id);
//     button.setAttribute("data-bs-target", target);
//     button.setAttribute("aria-controls", controls);
//     button.textContent = section;
//     collapse.setAttribute("id", target.slice(1)); // remove the # from the target value
//     collapse.setAttribute("aria-labelledby", id);
//     body.innerHTML = text;
//   });

const accordion = document.querySelector("#accordionExample");
const jsonURL = "example.json";

fetch(jsonURL)
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const section = document.createElement("div");
      section.classList.add("accordion-item");

      const heading = document.createElement("h2");
      heading.classList.add("accordion-header");
      heading.id = `heading${item.title.replace(/\s+/g, "")}`;

      const button = document.createElement("button");
      button.classList.add("accordion-button", "collapsed");
      button.type = "button";
      button.dataset.bsToggle = "collapse";
      button.dataset.bsTarget = `#collapse${item.title.replace(/\s+/g, "")}`;
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", `collapse${item.title.replace(/\s+/g, "")}`);
      button.innerHTML = item.title;

      heading.appendChild(button);
      section.appendChild(heading);

      const collapse = document.createElement("div");
      collapse.id = `collapse${item.title.replace(/\s+/g, "")}`;
      collapse.classList.add("accordion-collapse", "collapse");
      collapse.setAttribute("aria-labelledby", `heading${item.title.replace(/\s+/g, "")}`);
      collapse.setAttribute("data-bs-parent", "#accordionExample");

      const body = document.createElement("div");
      body.classList.add("accordion-body");
      
      let contentString = "<i class='fa fa-play-circle'></i> " + item.content;
      if (item.content1) {
        contentString += "<br><i class='fa fa-play-circle'></i> " + item.content1;
      }
      if (item.content2) {
        contentString += "<br><i class='fa fa-play-circle'></i> " + item.content2;
      }
      if (item.content3) {
        contentString += "<br><i class='fa fa-play-circle'></i> " + item.content3;
      }
      
      body.innerHTML = contentString;
      
      collapse.appendChild(body);
      section.appendChild(collapse);

      accordion.appendChild(section);
    });
  })
  .catch(error => console.log(error));

const toastLiveExample1 = document.getElementById('liveToast1')

document.body.addEventListener('click', event => {
    if (event.target.classList.contains('accordion-body')) {
      //console.log('Clicked on accordion body');
      const toast1 = new bootstrap.Toast(toastLiveExample1)
      toast1.show()
    }
  });
