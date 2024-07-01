document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline-container');

    const events = [
        { year: '27/6/24', event: 'Arrived at JFK' },
        { year: '28/6/24', event: 'Orientation of Brooklyn - navigated via public transport: we went climbing and I learnt how to do bouldering. Furthermore, I learnt that in NY the train lines are alphabetically lettered rather than being allocated names like they are in England, and the main ones from Manhattan to Brooklyn are the J and Q lines.' },
        { year: '29/6/24', event: 'Shadowing a software engineer and watched a BRIC concert in the evening focusing on Mexican Music - I started to learn how to code in React (a framework that essentially makes coding in JS - a more core language - much easier) and I then learnt how diverse and inclusive Brooklyn is, as shown by the variety of events that they offer.' },
        { year: '30/6/24', event: 'Visited the Smorgasburg Food Market where I tasted a variety of food from different cultures. For instance, I tried the American smash burger, and then a couple of Japanese bao buns. For desert, we shared a Portuguese custard tart' },
        // Add more events as needed
    ];

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        eventElement.innerHTML = `<h3>${event.year}</h3><p>${event.event}</p>`;
        timelineContainer.appendChild(eventElement);
    });
});
