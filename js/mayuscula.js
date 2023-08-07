function capitalizeFirstLetter(input) {
    const inputValue = input.value;
    if (inputValue.length > 0) {
      const capitalizedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
      input.value = capitalizedValue;
    }
  }