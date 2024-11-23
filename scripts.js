function calculateProtein() {
    const weight = parseFloat(document.getElementById("weightProtein").value);
  
    if (weight > 0) {
      const proteinRequirement = (weight * 1.6).toFixed(2);
      document.getElementById("proteinResult").textContent = 
        `You need approximately ${proteinRequirement} grams of protein daily.`;
    } else {
      document.getElementById("proteinResult").textContent = 
        "Please enter a valid weight.";
    }
  }
  