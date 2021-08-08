settingsCircularProgressBar = [
  //in every step of 5% i increase the degs by 18 points the reason being that the circle is 360. S0 5% of 360 is 18. The important thing to remembers is that at 0% i start from 90deg and then start adding 18 and that is until 50% then i keep the same the
  // it is imporntat to remember that at 50% the linearGradientDegStart: -90
  //At 80% i start positive again
  //After 50% the color also changes !
  {
    position: 0,
    linearGradientDegStart: 90,
    linearGradientDegEnd: 90,
    colorFirstGradient: "#ddd",
    CompletedProgressBar: "#00FF33",
  },
  {
    position: 5,
    linearGradientDegStart: 90,
    linearGradientDegEnd: 108,
    colorFirstGradient: "#ddd",
    CompletedProgressBar: "#00FF33",
  },
  {
    position: 10,
    linearGradientDegStart: 90,
    linearGradientDegEnd: 126,
    colorFirstGradient: "#ddd",
    CompletedProgressBar: "#00FF33",
  },
  {
    position: 15,
    linearGradientDegStart: 90,
    linearGradientDegEnd: 144,
    colorFirstGradient: "#ddd",
    CompletedProgressBar: "#00FF33",
  },
  {
    position: 20,
    linearGradientDegStart: 90,
    linearGradientDegEnd: 162,
    colorFirstGradient: "#ddd",
    CompletedProgressBar: "#00FF33",
  },
  {
    position: 25,
    linearGradientDegStart: 90,
    linearGradientDegEnd: 180,
    colorFirstGradient: "#ddd",
    CompletedProgressBar: "#00FF33",
  },
  {
    position: 30,
    linearGradientDegStart: 90,
    linearGradientDegEnd: 198,
    colorFirstGradient: "#ddd",
    CompletedProgressBar: "#00FF33",
  },
  {
    position: 35,
    linearGradientDegStart: 90,
    linearGradientDegEnd: 216,
    colorFirstGradient: "#ddd",
    CompletedProgressBar: "#00FF33",
  },
  {
    position: 40,
    linearGradientDegStart: 90,
    linearGradientDegEnd: 234,
    colorFirstGradient: "#ddd",
    CompletedProgressBar: "#00FF33",
  },
  {
    position: 45,
    linearGradientDegStart: 90,
    linearGradientDegEnd: 252,
    colorFirstGradient: "#ddd",
    CompletedProgressBar: "#ff9200",
  },

  // it is important to remember that at 50% the linearGradientDegStart: -90
  //After 50% the color also changes !
  {
    position: 50,
    linearGradientDegStart: -90,
    linearGradientDegEnd: 270,
    colorFirstGradient: "#ff9200",
    CompletedProgressBar: "#ff9200",
  },
  //Now i start substracting 8 degs from the linearGradientDegStart but i keep the linearGradientDegEnd static at 270 deg
  {
    position: 55,
    linearGradientDegStart: -72,
    linearGradientDegEnd: 270,
    colorFirstGradient: "#ff9200",
    CompletedProgressBar: "#ff9200",
  },
  {
    position: 60,
    linearGradientDegStart: -54,
    linearGradientDegEnd: 270,
    colorFirstGradient: "#ff9200",
    CompletedProgressBar: "#ff9200",
  },
  {
    position: 65,
    linearGradientDegStart: -36,
    linearGradientDegEnd: 270,
    colorFirstGradient: "#ff9200",
    CompletedProgressBar: "#ff9200",
  },
  {
    position: 70,
    linearGradientDegStart: -18,
    linearGradientDegEnd: 270,
    colorFirstGradient: "#ff9200",
    CompletedProgressBar: "#ff9200",
  },
  {
    position: 75,
    linearGradientDegStart: 0,
    linearGradientDegEnd: 270,
    colorFirstGradient: "#EF0107",
    CompletedProgressBar: "#EF0107",
  },
  //At 80% i start positive again
  {
    position: 80,
    linearGradientDegStart: 18,
    linearGradientDegEnd: 270,
    colorFirstGradient: "#EF0107",
    CompletedProgressBar: "#EF0107",
  },
  {
    position: 85,
    linearGradientDegStart: 36,
    linearGradientDegEnd: 270,
    colorFirstGradient: "#EF0107",
    CompletedProgressBar: "#EF0107",
  },
  {
    position: 90,
    linearGradientDegStart: 54,
    linearGradientDegEnd: 270,
    colorFirstGradient: "#EF0107",
    CompletedProgressBar: "#EF0107",
  },
  {
    position: 95,
    linearGradientDegStart: 72,
    linearGradientDegEnd: 270,
    colorFirstGradient: "#EF0107",
    CompletedProgressBar: "#EF0107",
  },
  {
    position: 100,
    linearGradientDegStart: 90,
    linearGradientDegEnd: 270,
    colorFirstGradient: "#EF0107",
    CompletedProgressBar: "#EF0107",
  },
];

//Start the functionality
// Search box
let search = document.querySelector(".search");
let searchIcon = document.querySelector(".search__icon");
let searchInput = document.querySelector(".search__input");
let searchClose = document.querySelector(".search__close");
let searchDelete = document.querySelector(".search__delete");
//number in the progress bar that shows the score
let progressBar1Score = document.getElementById("progress-bar-1-score");
let progressBar2Score = document.getElementById("progress-bar-2-score");
// Animated bar
let AnimatedSVGCirle1 = document.getElementById("AnimatedSVGCircle1");
let progressBar3Score = document.getElementById("progressBar3Score");

searchIcon.addEventListener("click", () => {
  search.classList.add("search-open");
  searchInput.focus();
});

searchClose.addEventListener("click", () => {
  search.classList.remove("search-open");
  //clear search field on close
  searchInput.value = "";
});

searchDelete.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
});

// functionality for search
let value_in_data;
searchInput.addEventListener("keyup", function (event) {
  event.preventDefault();

  if (event.keyCode === 13) {
    // code 13 === Enter button on keyboard
    console.log("Search input: ", searchInput.value);
    value_in_data = searchInput.value;

    //updating the text of the number
    progressBar1Score.innerHTML = searchInput.value;
    progressBar2Score.innerHTML = searchInput.value;
    //update the text of the number in the animated progress bar
    progressBar3Score.innerHTML = searchInput.value;

    // updating the paramters for the progress bar
    settingsCircularProgressBar.map(async (item) => {
      if (item.position == searchInput.value * 10) {
        console.log(item);
        // updating the css variables
        document.documentElement.style.setProperty(
          "--linearGradientDegStart",
          `${item.linearGradientDegStart}deg`
        );
        document.documentElement.style.setProperty(
          "--linearGradientDegEnd",
          `${item.linearGradientDegEnd}deg`
        );
        document.documentElement.style.setProperty(
          "--colorFirstGradient",
          `${item.colorFirstGradient}`
        );
        document.documentElement.style.setProperty(
          "--CompletedProgressBar",
          `${item.CompletedProgressBar}`
        );

        //Animated Progress bar

        // update the % of complete for the animated bar
        document.documentElement.style.setProperty(
          "--PercentageCompletedAnimatedBar",
          `${searchInput.value * 10}`
        );

        //now that i have added the % of complete i want to restart the animation
        AnimatedSVGCirle1.classList.remove("animatedBarSvgCircle");

        // wait another 1 sec
        await asyncDelay(10);
        AnimatedSVGCirle1.classList.add("animatedBarSvgCircle");
      }
    });
  }
});

// helper function to create async set timeout function
const asyncDelay = (ms) => new Promise((res) => setTimeout(res, ms));
