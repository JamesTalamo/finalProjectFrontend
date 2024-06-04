// for cahirs
let chairBtn = document.querySelector('#chairBtn')
chairBtn.addEventListener('click', (e) => {

    chairBtn.style.backgroundColor = 'white'
    bedsBtn.style.backgroundColor = '#EEEEEE'
    sofaBtn.style.backgroundColor = '#EEEEEE'
    deskBtn.style.backgroundColor = '#EEEEEE'

    let text1 = document.querySelectorAll('.page3-box-bot-text1')
    text1.forEach(element => element.innerText = 'Chair')

    let img = document.querySelectorAll('.page3-images');
    img.forEach((element, index) => {
        let value = (index % 4) + 1;
        element.src = `./imgAsset/page3-asset-${value}.png`;
        element.style.width = '60%'
    });

    let text2 = document.querySelectorAll('.page3-box-bot-text2')
    text2[0].innerText = 'Sakarias Armchair'
    text2[1].innerText = 'Baltsar Chair'
    text2[2].innerText = 'Anjay Chair'
    text2[3].innerText = 'Nyantuy Chair'

    let text3 = document.querySelectorAll('.page3-price')
    text3[0].innerText = '₱ 11,500'
    text3[1].innerText = '₱ 7,500'
    text3[2].innerText = '₱ 13,500'
    text3[3].innerText = '₱ 17,500'

})

//for beds
let bedsBtn = document.querySelector('#bedsBtn');
bedsBtn.addEventListener('click', (e) => {

    chairBtn.style.backgroundColor = '#EEEEEE'
    bedsBtn.style.backgroundColor = 'white'
    sofaBtn.style.backgroundColor = '#EEEEEE'
    deskBtn.style.backgroundColor = '#EEEEEE'

    let text1 = document.querySelectorAll('.page3-box-bot-text1');
    text1.forEach(element => element.innerText = 'Beds');

    let img = document.querySelectorAll('.page3-images');
    img.forEach((element, index) => {
        let value = (index % 4) + 1;
        element.src = `./imgAsset/page3-asset-v2-${value}.png`;
        element.style.width = '80%'
    });

    let text2 = document.querySelectorAll('.page3-box-bot-text2')
    text2[0].innerText = 'Obsidian Bed'
    text2[1].innerText = 'Basalt Bed'
    text2[2].innerText = 'Antique Bed'
    text2[3].innerText = 'Psalm 35 Bed'

    let text3 = document.querySelectorAll('.page3-price')
    text3[0].innerText = '₱ 21,500'
    text3[1].innerText = '₱ 19,500'
    text3[2].innerText = '₱ 18,500'
    text3[3].innerText = '₱ 17,500'
});

//for sofa
let sofaBtn = document.querySelector('#sofaBtn')
sofaBtn.addEventListener('click', (e) => {

    chairBtn.style.backgroundColor = '#EEEEEE'
    bedsBtn.style.backgroundColor = '#EEEEEE'
    sofaBtn.style.backgroundColor = 'white'
    deskBtn.style.backgroundColor = '#EEEEEE'

    let text1 = document.querySelectorAll('.page3-box-bot-text1')
    text1.forEach(element => element.innerText = 'Sofa')

    let img = document.querySelectorAll('.page3-images');
    img.forEach((element, index) => {
        let value = (index % 4) + 1;
        element.src = `./imgAsset/page3-asset-v3-${value}.png`;
        element.style.width = '80%'
    });

    let text2 = document.querySelectorAll('.page3-box-bot-text2')
    text2[0].innerText = 'Kazuma Sofa'
    text2[1].innerText = 'Darkness Sofa'
    text2[2].innerText = 'Megumin Sofa'
    text2[3].innerText = 'Aqua Sofa'

    let text3 = document.querySelectorAll('.page3-price')
    text3[0].innerText = '₱ 11,500'
    text3[1].innerText = '₱ 17,500'
    text3[2].innerText = '₱ 13,500'
    text3[3].innerText = '₱ 11,500'
})

//for lamps
let deskBtn = document.querySelector('#deskBtn')
deskBtn.addEventListener('click', (e) => {

    chairBtn.style.backgroundColor = '#EEEEEE'
    bedsBtn.style.backgroundColor = '#EEEEEE'
    sofaBtn.style.backgroundColor = '#EEEEEE'
    deskBtn.style.backgroundColor = 'white'

    let text1 = document.querySelectorAll('.page3-box-bot-text1')
    text1.forEach(element => element.innerText = 'Desk')

    let img = document.querySelectorAll('.page3-images');
    img.forEach((element, index) => {
        let value = (index % 4) + 1;
        element.src = `./imgAsset/page3-asset-v4-${value}.png`;
        element.style.width = '75%'
    });

    let text2 = document.querySelectorAll('.page3-box-bot-text2')
    text2[0].innerText = 'Desk of Despair'
    text2[1].innerText = 'Desk of Wisdom'
    text2[2].innerText = 'Desk of Faith'
    text2[3].innerText = 'Desk of Truth'

    let text3 = document.querySelectorAll('.page3-price')
    text3[0].innerText = '₱ 8,500'
    text3[1].innerText = '₱ 7,500'
    text3[2].innerText = '₱ 7,500'
    text3[3].innerText = '₱ 9,500'
})



// for chat forum section
let chatBtn = document.querySelector('#chatBtn')
chatBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let chatTemplate = document.querySelector('#chat-template')
    if (chatTemplate.style.display === 'none') {
        chatTemplate.style.display = 'block'
    } else {
        chatTemplate.style.display = 'none'
    }

    let mainTemplate = document.querySelector('body')
    if (mainTemplate.style.overflow !== 'hidden') {
        mainTemplate.style.overflow = 'hidden'
        mainTemplate.style.overflowX = 'hidden'
    } else {
        mainTemplate.style.overflow = 'scroll'
        mainTemplate.style.overflowX = 'hidden'
    }

})


let allMessages;

let apiCallAllMessage = async () => {
    try {
        const res = await fetch('https://finalprojectbackend-hci-bscs2.onrender.com/api');
        if (!res.ok) throw new Error('INVALID');
        const data = await res.json();
        
        allMessages = data;
        
        updateMessages(); 
    } catch (error) {
        console.warn(error);
    }
};

apiCallAllMessage(); 

let updateMessages = () => {
    let chatTextContainer = document.querySelector('#chat-text-container');
    chatTextContainer.innerHTML = '';

    allMessages.forEach((element) => {
        let box = document.createElement('div');
        box.classList.add('chat-box');

        let boxName = document.createElement('div');
        boxName.classList.add('chat-box-design1-name');
        boxName.innerText = element.name;

        let boxMsg = document.createElement('div');
        boxMsg.classList.add('chat-box-design2-msg');
        boxMsg.innerText = element.message;

        box.appendChild(boxName);
        box.appendChild(boxMsg);

        chatTextContainer.appendChild(box);
    });
};

let submitBtn = document.querySelector('#submitForm');
submitBtn.addEventListener('submit', async (e) => {
    e.preventDefault();

    let name = document.getElementById('chat-input1').value;
    let message = document.getElementById('chat-textarea').value;

    const obj = {
        name: name,
        message: message
    };

    let URL = "https://finalprojectbackend-hci-bscs2.onrender.com/api";

    try {
        const res = await fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

        if (!res.ok) throw new Error('INVALID');

        await apiCallAllMessage();

        document.getElementById('chat-input1').value = '';
        document.getElementById('chat-textarea').value = '';
    } catch (error) {
        console.log(error.message);
    }
});


//refresh msg
let refreshBtn = document.querySelector('#refreshBtn')
refreshBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    console.log('Refreshing messages')
    apiCallAllMessage()
    updateMessages()
})