// Function to calculate BMI
function calculateBMI(weight, height) {
    // Validate inputs
    if (!Number.isFinite(weight) || !Number.isFinite(height)) {
      throw new Error("Invalid input. Please provide numbers for weight and height.");
    }
  
    // Convert height to meters (assuming height is provided in centimeters)
    height = height / 100;
  
    // Calculate BMI
    const bmi = weight / (height * height);
  
    // Determine and return BMI category based on calculated value
    if (bmi < 18.5) {
      return { bmi: bmi, category: "Underweight" };
    } else if (bmi < 25) {
      return { bmi: bmi, category: "Normal weight" };
    } else if (bmi < 30) {
      return { bmi: bmi, category: "Overweight" };
    } else {
      return { bmi: bmi, category: "Obese" };
    }
  }
  
  // Example usage
  const results = calculateBMI(70, 170);
  console.log(`BMI: ${results.bmi}`);
  console.log(`Category: ${results.category}`);
  