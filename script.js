
fetch('./data.json')
    .then(response => response.json())
    .then(data => {

        const amountOfDay = document.querySelectorAll('.chart-main-amount'),
              diagram = document.querySelectorAll('.chart-main-diagram'),
              weekday = document.querySelectorAll('.chart-main-weekday');
        

        data.forEach((item, i) => {

            weekday[i].innerText = item.day;
            amountOfDay[i].innerText = item.amount;

        });


        const today = new Date();
        const dayOfWeek = today.getDay();
        const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sut", "sun"];
        const currentDay = daysOfWeek[dayOfWeek];

        weekday.forEach((item, i) => {
            if (item.innerText === currentDay) {
                item.previousElementSibling.style.background = 'var(--primary-cyan)';  
            }
        });
    })
    .catch(error => console.error('Error', error));

