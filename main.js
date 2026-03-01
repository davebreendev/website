const influences = [`
          <h2>Influence 1 H2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <ul>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
          </ul>`,
          `
          <h2>Influence 2 H2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <ul>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
          </ul>`,
          `
          <h2>Influence 3 H2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <ul>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
          </ul>`,
          `
          <h2>Influence 4 H2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <ul>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
          </ul>`,
          `
          <h2>Influence 5 H2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <ul>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
            <li>Resource Item</li>
          </ul>`
]

let influence = document.getElementById('influence');

let influenceLabel = document.getElementById('influence-label');

let previous = document.getElementById('previous');
let next = document.getElementById('next');

let influenceIndex = 0;
console.log(`influenceIndex: ${influenceIndex}`);

let loadPrevious = function() {
    console.log(`influenceIndex: ${influenceIndex}`);
    if (influenceIndex > 0) {
        influenceIndex -= 1;
    }
    influenceLabel.innerHTML = influences[influenceIndex];
    influence.style.backgroundImage = `url(/home/gendev/workspace/images/portfolio/influence${influenceIndex}.jpg)`
    next.disabled = false;
    if (influenceIndex === 0) {
        previous.disabled = true;
    }
    console.log(`influenceIndex: ${influenceIndex}`);
};

let loadNext = function() {
    console.log(`influenceIndex: ${influenceIndex}`);
    if (influenceIndex < influences.length - 1) {
        influenceIndex += 1;
    }
    influenceLabel.innerHTML = influences[influenceIndex];
    influence.style.backgroundImage = `url(/home/gendev/workspace/images/portfolio/influence${influenceIndex}.jpg)`;
    previous.disabled = false;
    if (influenceIndex === influences.length -1) {
        next.disabled = true;
    }
    console.log(`influenceIndex: ${influenceIndex}`);
};

previous.addEventListener('click', loadPrevious);
next.addEventListener('click', loadNext);
