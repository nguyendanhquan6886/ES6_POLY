



    var users = [
        {id: 1, name: 'Quân', gender: 1},
        {id: 2, name: 'Dũng', gender: 2},
        {id: 3, name: 'Bắc', gender: 2},
        {id: 4, name: 'Nam', gender: 1}
    ]
    
    var app = document.querySelector('#app');
 users.forEach(function(value){
        const element = document.createElement('li');
        element.textContent = `${value.id}-${value.name}-${value.gender}`
        app.appendChild(element);
 })



 function add_arr(){
    let name = document.querySelector('#name').value;
    let id = document.querySelector('#id').value;
    let gender = document.querySelector('#gender').value;
    
    let obj = {
        id, name,  gender
    }
        
    users.push(obj);
    var app2=document.querySelector('#app2');
    
    users.forEach(function(value){
        const element = document.createElement('li');
        element.textContent = `${value.id}-${value.name}-${value.gender}`
        app2.appendChild(element);
    })
 }

 function bai3(){
    var app3 = document.querySelector('#app3');
    var element = document.createElement('li');
    var value = document.querySelector('#string').value;
    element.textContent = `${value.replace(/[&\/\\#,+()$~%.'":*?<>{}' ']/g, '').trim()}`
    app3.appendChild(element);
 }

 let classRoom = [
    "nguyễn tiến duẩn",
    "Hoàng Xuân Hiếu",
    "Hồ Sỹ Hưng",
    "Nguyễn Đức Thuận",
    "đoàn Minh Tùng",
    "Hồ Sỹ Hùng",
    "Lê Trung Hiếu",
    "đoàn vua dep trai vua hoc gioi Hữu Quý"]


    function lastname_fisrtname(){
classRoom.forEach(function(student){
   var index = (student.lastIndexOf(' '));
   var name = student.slice(index)
   
   var lastname = student.slice(0,index)
   
   
})}


    function deletearr(){
        classRoom.splice(Math.floor(Math.random()*classRoom.length),1)
    }
    function addarr(string){
        classRoom.splice(Math.floor(Math.random()*classRoom.length),0,string)
    }

    addarr('quân')
    console.log(classRoom);

   


 



 





 

 




   








