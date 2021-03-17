let btn = document.getElementById('btn');
let list = document.getElementById('list')
btn.addEventListener('click',function(e){
    let item = list.lastElementChild.cloneNode(true)
    item.innerHTML = 'Newly Created Item'
    list.appendChild(item)
})

list.addEventListener('click',function(e){
    if(this.contains(e.target)){
        e.target.remove()
    }
})