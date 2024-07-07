document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline-container');

    const events = [
        { year: '27/6/24', event: 'Arrived at JFK' },
        { year: '28/6/24', event: 'Orientation of Brooklyn - navigated via public transport: we went climbing and I learnt how to do bouldering. Furthermore, I learnt that in NY the train lines are alphabetically lettered rather than being allocated names like they are in England, and the main ones from Manhattan to Brooklyn are the J and Q lines.' },
        { year: '29/6/24', event: 'Shadowing a software engineer and watched a BRIC concert in the evening focusing on Mexican Music - I started to learn how to code in React (a framework that essentially makes coding in JS - a more core language - much easier) and I then learnt how diverse and inclusive Brooklyn is, as shown by the variety of events that they offer.' },
        { year: '30/6/24', event: 'Visited the Smorgasburg Food Market in Prospect Park where I tasted a variety of food from different cultures. For instance, I tried the American smash burger, and then a couple of Japanese bao buns. For desert, we shared a Portuguese custard tart' },
        { year: '1/7/24', event: 'Developed my HTML/CSS/JS skills by creating this website, trying to focus more on compartmentalisation and improving the timetable to make it look nicer and then walked around Prospect Park, even seeing turtles in the lake! '},
        { year: '2/7/24', event: 'Further explored the local park and continued to develop React skills. In the afternoon I took part in the Lloyds Banking Group Insight event which was hosted by Young Professionals which provided me the opportunity to see what skills are required to obtain jobs in technology and how careers can progress throughout a company, as one can jump from one position to the next within different departments without having to be stuck in one job all the time.'},
        { year: '3/7/24', event: 'Made a tic tac toe game using React (link to the game: )'},
        { year: '4/7/24', event: 'Independence day in America, so we went for a picnic in Lower Manhatten and watched the fireworks above the Hudson river (for the first time in 10 years). The park we were in fortunately allowed us to view both the New Jersey firework and the New York fireworks although both happened simultaneously. Every open space was packed with people, a few patriotically bearing flags, and the train lines were immovable for an hour and a half but overall it was a great experience!'},
        { year: '5/7/24', event: 'Familiarised myself with Github and started to connect it to VS code for easier deployment of repositories (projects)'},
        { year: '6/7/24', event: 'Visited Bryant Park in Midtown and then Soho - the shopping district'},
        { year: '7/7/24', event: 'something'},
        { year: '8/7/24', event: 'something'},
        { year: '9/7/24', event: 'something'},
        { year: '10/7/24', event: 'something'},
        { year: '11/7/24', event: 'something'},
        { year: '12/7/24', event: 'something'},
        { year: '13/7/24', event: 'something'},
        { year: '14/7/24', event: 'something'},
        { year: '15/7/24', event: 'something'},
        { year: '16/7/24', event: 'something'},
        { year: '17/7/24', event: 'something'},
        { year: '18/7/24', event: 'something'},
        { year: '19/7/24', event: 'something'},
        { year: '20/7/24', event: 'something'},
        { year: '21/7/24', event: 'something'},
        { year: '22/7/24', event: 'something'},
        { year: '23/7/24', event: 'something'},
        { year: '24/7/24', event: 'something'},
        { year: '25/7/24', event: 'something'},
        { year: '26/7/24', event: 'something'},
        { year: '27/7/24', event: 'Left New York from JFK. '},
        { year: '28/7/24', event: 'Landed in London Heathrow'},
        
        // Add more events as needed
    ];

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        eventElement.innerHTML = `<h3>${event.year}</h3><p>${event.event}</p>`;
        timelineContainer.appendChild(eventElement);
    });
});

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add fade-in class when element is in viewport
function addFadeIn() {
    document.querySelectorAll('.fade-in').forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('fade-in-visible');
        }
    });
}

// Initial check on page load
addFadeIn();

// Event listener for scroll events
document.addEventListener('scroll', function() {
    addFadeIn();
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function showItem(index) {
        if (index < 0) {
            currentIndex = totalItems - 1;
        } else if (index >= totalItems) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const itemWidth = carouselItems[currentIndex].clientWidth;
        const offset = -currentIndex * itemWidth;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}px)`;
    }

    document.querySelector('.carousel-control.prev').addEventListener('click', function() {
        showItem(currentIndex - 1);
    });

    document.querySelector('.carousel-control.next').addEventListener('click', function() {
        showItem(currentIndex + 1);
    });
});
