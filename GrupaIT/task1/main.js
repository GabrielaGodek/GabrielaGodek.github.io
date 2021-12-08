const button = document.querySelector('input[type="button"]')
even = [];
odd = [];
const ev = document.querySelector('.even');
const od = document.querySelector('.odd');

const getNumber = () => {

    for (let i = 0; i < 20; i++) {
        let num = Math.floor(Math.random() * 100) // mnoznik * 100 okresla przedział
        num % 2 == 0 ? even.push(num) : odd.push(num) //rozdzielenie parzystych od nieparzystych i przypisanie do odpowiednich tablic
    }

    //sortowanie tablic rosnąco
    even.sort(function (a, b) { return a - b });
    odd.sort(function (a, b) { return a - b });

    //przeiterowanie każdego elementu tablicy i przypisanie go do li
    const evenNumber = even.forEach((num) => {
        const td = document.createElement('li');
        ev.append(td)
        td.textContent = num;
    })
    const oddNumber = odd.forEach((num) => {
        const td = document.createElement('li');
        od.append(td)
        td.textContent = num;
    })

}

button.addEventListener('click', function(){
    if(even.length === 0){
        getNumber()
    } else {
        // ev.remove('li')
        // od.remove('li')
        ev.innerHTML = ''
        od.innerHTML = ''
        getNumber()
    }
});
