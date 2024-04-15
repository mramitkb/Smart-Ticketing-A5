// Scroll to View Ticket Section
document.addEventListener('DOMContentLoaded', function(){
    function scrollToBuyTicketSection(){
        const buyTicketSection = document.getElementById('greenline-paribahan');
        buyTicketSection.scrollIntoView({behavior: 'smooth'});
    }

    const buyTicketBtn = document.getElementById('buy-ticket-btn');
    buyTicketBtn.addEventListener('click', scrollToBuyTicketSection);
})


// Get Single Seat with click

const allSeats = document.getElementsByClassName('seats');
let count = 0;
let forty = 0;
for(const seat of allSeats){
    
    seat.addEventListener('click', function(event){
        count = count + 1;

        // Seat count
        seat.classList.add('bg-[#23CF27]', 'text-white');
        setInnerText('seat-count', count);

        // 40 seat decrease
        const fortySeats = document.getElementById('40-seats').innerText;
        const convertFortySeats = parseInt(fortySeats);
        forty = convertFortySeats - 1;
        setInnerText('40-seats', forty);


        // New child add
        // const seatName = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[7].childNodes[7].childNodes[7].innerText;
        const seatName = seat.innerText;
        console.log(seatName)

        // add them to the cart list
        const addList = document.getElementById('selected-seat');
        const li = document.createElement('li');
        // li.classList.add = 'flex';
        const p = document.createElement('p');
        p.innerText = seatName;
        const p2 = document.createElement('p')
        p2.innerText = 'Economy'
        const p3 = document.createElement('p');
        const perSeatPrice = document.getElementById('per-seat-price').innerText;
        const convertPerSeatPrice = parseInt(perSeatPrice);
        p3.innerText = convertPerSeatPrice;
        
        li.appendChild(p)
        li.appendChild(p2)
        li.appendChild(p3)
        // li.innerText = p + p2 + p3;
        addList.appendChild(li)
        
    })
}


// setInnerText
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}