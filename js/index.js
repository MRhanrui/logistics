

// 创建函数
function create(newArr){
    document.querySelector('.city').innerHTML = ''
    let ob = f(newArr);
    let ul = document.querySelector('#body .city');
    for(let city in ob){
        let countyObj = ob[city];
        let li = document.createElement('li');
        li.classList.add('title')
        li.innerHTML = city;
        ul.appendChild(li);
        for(county in countyObj){
            // let countyHtml = ob[city];
            if(county != 'undefined'){
                let li = document.createElement('li');
                li.classList.add('btn')
                li.innerHTML = county;
                ul.appendChild(li);
            }
        }
    }
}
create(Arr);

// 搜索函数
document.querySelector('.input').oninput = function (e) {
    create(search(e.target.value))
}

let search  = function (k) {
    return Arr.filter(v => {
            let total = v.name + v.city + v.county + v.address
                + (v.phone && v.phone.join(''));
            return total.indexOf(k) != -1;
        }
    )
}
console.log(search('忻州'))