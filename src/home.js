import './home.css';

function createElementWithClass(ele) {
    let elementClass = ele.split('.');
    let newElement = document.createElement(elementClass[0]);
    newElement.classList.add(elementClass[1]);
    return newElement;
}

function createElementWithText(ele, str) {
    let element = document.createElement(ele);
    element.textContent = str;
    return element;
}

// takes an element with class content (a div)
// and appends elements to content
export default (content) => {
    // create title container
    let title_container = createElementWithClass('div.title-container');
    let title_container_p = createElementWithText('p', 'Moonlight Diner');

    title_container.appendChild(title_container_p);
    content.appendChild(title_container);

    // create ratings container
    let ratings_container = createElementWithClass('div.ratings-container');
    let ratings_container_p = createElementWithText('p', 'Ratings');
    ratings_container.appendChild(ratings_container_p);
    let ratings_container_div1 = document.createElement('div');
    let ratings_container_div1_p1 = createElementWithText('p', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."');
    let ratings_container_div1_p2 = createElementWithText('p', '- Diner Enthusiast');

    let ratings_container_div2 = document.createElement('div');
    let ratings_container_div2_p1 = createElementWithText('p', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."');
    let ratings_container_div2_p2 = createElementWithText('p', '- Diner Enthusiast');

    let ratings_container_div3 = document.createElement('div');
    let ratings_container_div3_p1 = createElementWithText('p', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."');
    let ratings_container_div3_p2 = createElementWithText('p', '- Diner Enthusiast');

    content.appendChild(ratings_container);
    ratings_container.appendChild(ratings_container_div1);
    ratings_container_div1.appendChild(ratings_container_div1_p1);
    ratings_container_div1.appendChild(ratings_container_div1_p2);
    ratings_container.appendChild(ratings_container_div2);
    ratings_container_div2.appendChild(ratings_container_div2_p1);
    ratings_container_div2.appendChild(ratings_container_div2_p2);
    ratings_container.appendChild(ratings_container_div3);
    ratings_container_div3.appendChild(ratings_container_div3_p1);
    ratings_container_div3.appendChild(ratings_container_div3_p2);

    // hours container
    let hours_container = createElementWithClass('div.hours-container');
    let hours_container_p = createElementWithText('p', 'Hours');
    let hours_container_ol = document.createElement('ol');
    let hours_container_ol_li1 = createElementWithText('li', 'Monday: 9pm - 5pm');
    let hours_container_ol_li2 = createElementWithText('li', 'Tuesday: 9pm - 5pm');
    let hours_container_ol_li3 = createElementWithText('li', 'Wednesday: 9pm - 5pm');
    let hours_container_ol_li4 = createElementWithText('li', 'Thursday: 9pm - 5pm');
    let hours_container_ol_li5 = createElementWithText('li', 'Friday: 9pm - 5pm');
    let hours_container_ol_li6 = createElementWithText('li', 'Saturday: Closed');
    let hours_container_ol_li7 = createElementWithText('li', 'Sunday: Closed');

    content.appendChild(hours_container);
    hours_container.appendChild(hours_container_p);
    hours_container.appendChild(hours_container_ol);
    hours_container_ol.appendChild(hours_container_ol_li1);
    hours_container_ol.appendChild(hours_container_ol_li2);
    hours_container_ol.appendChild(hours_container_ol_li3);
    hours_container_ol.appendChild(hours_container_ol_li4);
    hours_container_ol.appendChild(hours_container_ol_li5);
    hours_container_ol.appendChild(hours_container_ol_li6);
    hours_container_ol.appendChild(hours_container_ol_li7);

    // location container
    let location_container = createElementWithClass('div.location-container');
    let location_container_p = createElementWithText('p', 'Location');
    let location_container_div = document.createElement('div');
    let location_container_div_p = createElementWithText('p', '9999 NE 99th AVE, Dark Side, Moon, 99999');

    content.appendChild(location_container);
    location_container.appendChild(location_container_p);
    location_container.appendChild(location_container_div);
    location_container_div.appendChild(location_container_div_p);
}