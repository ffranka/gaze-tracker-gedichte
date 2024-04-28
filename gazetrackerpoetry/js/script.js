function test() {
  console.log('hi');
}

test();

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    this.classList.add('visible'); // Add 'visible' class on mouseover
  });

  function test() {
    console.log('hi');
  }
  
  test();
  
  // Define the isCursorInsideElement function outside of any loops or functions
  function isCursorInsideElement(cursorX, cursorY, element) {
    const rect = element.getBoundingClientRect(); // Get bounding box of the element
    return cursorX >= rect.left && cursorX <= rect.right && cursorY >= rect.top && cursorY <= rect.bottom;
  }
  
  // Get all grid items
  const gridItems = document.querySelectorAll('.grid-item');
  
  // Loop through grid items
  gridItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      this.classList.add('visible'); // Add 'visible' class on mouseover
    });
  });
  
  // Add event listener to track cursor movement
  document.addEventListener

  
  // Function to smoothly transition text and apply blur effect
function transitionText(element, newText) {
  // Apply initial blur effect
  let blurAmount = 0;
  const blurInterval = setInterval(function() {
    blurAmount += 0.5; // Increment blur amount smoothly
    element.style.filter = `blur(${blurAmount}px)`; // Apply blur effect
    if (blurAmount >= 5) {
      clearInterval(blurInterval); // Stop the blur animation when blur amount reaches 5
      // Change the text content
      element.textContent = newText;
      // Smoothly remove blur effect
      const blurRemoveInterval = setInterval(function() {
        blurAmount -= 0.5; // Decrement blur amount smoothly
        element.style.filter = `blur(${blurAmount}px)`; // Apply blur effect
        if (blurAmount <= 0) {
          clearInterval(blurRemoveInterval); // Stop the blur removal animation when blur amount reaches 0
          element.style.filter = 'none'; // Remove blur effect completely
        }
      }, 20); // Adjust the interval for smoother transition
    }
  }, 20); // Adjust the interval for smoother transition
}

// Add event listener for hovering over the autor element
document.querySelector('.autor').addEventListener('mouseover', function() {
  // Call the transitionText function to smoothly transition the text
  transitionText(this, '↓ LELO');
});

// Add event listener for mouseout to revert the text
document.querySelector('.autor').addEventListener('mouseout', function() {
  // Call the transitionText function to smoothly transition the text back to the original
  transitionText(this, 'PAULINE');
});

// Add event listener for clicking on the autor element to scroll to section 4
document.querySelector('.autor').addEventListener('click', function() {
  document.getElementById('section4').scrollIntoView({ behavior: 'smooth' });
});

// Function to handle transition and click events for autor elements
function handleAutorEvents(autorElement, hoverText, clickTarget, originalText) {
  // Add event listener for hovering over the autor element
  autorElement.addEventListener('mouseover', function() {
    // Call the transitionText function to smoothly transition the text
    transitionText(this, hoverText);
  });

  // Add event listener for mouseout to revert the text
  autorElement.addEventListener('mouseout', function() {
    // Call the transitionText function to smoothly transition the text back to the original
    transitionText(this, originalText);
  });

  // Add event listener for clicking on the autor element to scroll to the specified target
  autorElement.addEventListener('click', function() {
    document.getElementById(clickTarget).scrollIntoView({ behavior: 'smooth' });
  });
}


// Call handleAutorEvents for "LELO"
const leloAutor = document.querySelector('#section4 .autor');
handleAutorEvents(leloAutor, '↓ FEMI', 'section5', 'LELO');

// Call handleAutorEvents for "FEMI"
const femiAutor = document.querySelector('#section5 .autor');
handleAutorEvents(femiAutor, '↑', 'section1', 'FEMI');


});
