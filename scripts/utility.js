
document.getElementById('buy-ticket-btn').addEventListener('click', function(){
    const buyTicketSection = document.getElementById('greenline-paribahan');
        buyTicketSection.scrollIntoView({behavior: 'smooth'});
})


// Get Single Seat with click
const allSeats = document.getElementsByClassName('seats');
let count = 0;
for(const seat of allSeats){
    
    seat.addEventListener('click', function(event){
        count = count + 1;

        // Seat count
        seat.classList.add('bg-[#23CF27]', 'text-white');
        setInnerText('seat-count', count);

        // 40 seat decrease
        const fortySeats = document.getElementById('40-seats').innerText;
        const convertFortySeats = parseInt(fortySeats);
        const forty = convertFortySeats - 1;
        setInnerText('40-seats', forty);

        // Seat Name
        const seatName = seat.innerText;
        
        // add them to the cart list
        const addList = document.getElementById('selected-seat');
        
        const li = document.createElement('li');
        li.classList.add('flex', 'items-center', 'justify-between')
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
        addList.appendChild(li)
        

        totalPrice('total-price', convertPerSeatPrice)
        grandTotal('grand-total', convertPerSeatPrice)
    })
}


// Total Price
function totalPrice(id, value){
    const totalPrice = document.getElementById(id).innerText;
    const convertTotalPrice = parseInt(totalPrice);
    const sum = convertTotalPrice + value;
    setInnerText('total-price', sum)
    // setInnerText('grand-total', sum)
}


// Grand Total
function grandTotal(category){
    const totalPrice = document.getElementById('total-price').innerText;
    const convertTotalPrice = parseInt(totalPrice);
    setInnerText('grand-total', convertTotalPrice);
}

// setInnerText
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}




// Coupon Apply Function
const couponApply = document.getElementById('coupon-input').addEventListener('keyup', function(event){
    const couponText = event.target.value;
    const applyButton = document.getElementById('apply-btn');
    if(couponText === 'NEW15' || couponText === 'Couple 20'){
        applyButton.removeAttribute('disabled');
    }
    else{
        applyButton.setAttribute('disabled', true)
    }
})


// Next Button Function for Phone Number
const phoneNumber = document.getElementById('phone-number').addEventListener('keyup', function(event){
    const number = event.target.value;
    const nextButton = document.getElementById('next');
    if(number === ''){
        nextButton.setAttribute('disabled', true);
    }
    else{
        nextButton.removeAttribute('disabled')
    }
    
})


    // // 20% Coupon
    document.getElementById('apply-btn').addEventListener('click', function(){
        const discount15 = document.getElementById('NEW15');
        const discount20 = document.getElementById('Couple-20');

        const totalPrice = document.getElementById('grand-total').innerText;
        const convertTotalPrice = parseInt(totalPrice);

        const discountAmount1 = convertTotalPrice * .15;
        const discountAmount2 = convertTotalPrice * .20;
        
        // total - discount
        const total = document.getElementById('total');
        const reduceAmount = convertTotalPrice - discountAmount1;
        const reduceAmount2 = convertTotalPrice - discountAmount2;
        setInnerText('grand-total', reduceAmount2)
        setInnerText('grand-total', reduceAmount)
    })
    
    