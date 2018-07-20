create(Arr)
function create(newArr){
    let ul = document.querySelector('.body-address');
    ul.innerHTML = '';
    for(let details in newArr){
        let ul =  document.querySelector('.body-address');
        let li = document.createElement('li');
        li.classList.add('btn');
        if(newArr[details].phone){
            if(newArr[details].address){
                li.innerHTML = `<span>&#xe68a;</span>
            <div class="county">${newArr[details].county}</div>
			<div class="address">${newArr[details].address}</div>
			<a href="tel:${newArr[details].phone}">&#xe600;</a>`;
            }else {
                li.innerHTML = `<span>&#xe68a;</span>
            <div class="county">${newArr[details].county}</div>
			<div class="address">地址暂无</div>
			<a href="tel:${newArr[details].phone}">&#xe600;</a>`;
            }
        }


        ul.appendChild(li)
    }
}


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
