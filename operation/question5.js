function calculateSimpleInterest(principal, rate, time) {
    
    if (!Number.isFinite(principal) || !Number.isFinite(rate) || !Number.isFinite(time)) {
      throw new Error("Invalid input. Please provide numbers for principal, rate, and time.");
    }
  
    const simpleInterest = (principal * rate * time) / 100;
  
    
    console.log(`Simple Interest: ${simpleInterest}`);
  }
  
  // Example usage
  calculateSimpleInterest(10000, 5, 2); 
  