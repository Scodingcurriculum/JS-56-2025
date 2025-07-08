// Traffic Light Simulation
    let currentLight = "red";

    function changeLight() {
      // Turn all lights gray
      document.getElementById("red").style.backgroundColor = "gray";
      document.getElementById("yellow").style.backgroundColor = "gray";
      document.getElementById("green").style.backgroundColor = "gray";

      // Turn on the current light
      if (currentLight === "red") {
        document.getElementById("red").style.backgroundColor = "red";
        currentLight = "yellow";
      } else if (currentLight === "yellow") {
        document.getElementById("yellow").style.backgroundColor = "yellow";
        currentLight = "green";
      } else if (currentLight === "green") {
        document.getElementById("green").style.backgroundColor = "green";
        currentLight = "red";
      }
    }

    // Change light every 2 seconds
    setInterval(changeLight, 2000);