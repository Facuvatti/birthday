
function handleSubmit(event) {
  event.preventDefault();
  let form = event.target;
  let year = form.year.value;
  let month = form.month.value;
  let day = form.day.value;
  birthday = year+"-"+month+"-"+day;
  console.log(birthday);
  Cookies.set("birthday", birthday);
  return;
}
function howManyDays(timerId) {
  h2 = document.querySelector("#remaining");
  now = new Date();
  birthday = new Date(Cookies.get("birthday"))
  edad = now.getFullYear() - birthday.getFullYear();
  let nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
  // Si el cumpleaños de este año ya pasó, calcula el del próximo año

  
  
  if(birthday.getFullYear()<= now.getFullYear()){
    if (birthday.getMonth() == now.getMonth() && birthday.getDate() == now.getDate()) {
      age = now.getFullYear() - birthday.getFullYear();
      if(birthday.getFullYear() == now.getFullYear()){
        h1.textContent = "¡Acabas de nacer! 😲🤰";
      }
      if(age>0){
      h1.textContent = "🎉 ¡¡FELIZ CUMPLEAÑOS!! 🎉 WOW ya tenes " + age + " años";
      }
      // clearInterval(timerId);
    }  else {
    if(nextBirthday < now){
      nextBirthday.setFullYear(now.getFullYear() + 1);
    }
    remaining = nextBirthday - now;
    let mt = Math.floor(remaining/(1000*60*60*24*7*4));
    mt = mt>0 ? ` ${mt} meses` : "";
    remaining %= (1000*60*60*24*7*30);
    let w = Math.floor(remaining/(1000*60*60*24*7));
    w = w>0 ? ` ${w} semanas` : "";
    remaining %= (1000*60*60*24*7);
    let d = Math.floor(remaining/(1000*60*60*24));
    d = d>0 ? ` ${d} dias` : "";
    remaining %= (1000*60*60*24);
    let h = Math.floor(remaining/(1000*60*60));
    h = h>0 ? ` ${h} horas` : "";
    remaining %= (1000*60*60);
    let m = Math.floor(remaining/(1000*60));
    m = m>0 ? ` ${m} minutos` : "";
    remaining %= (1000*60);
    let s = Math.floor(remaining/(1000));
    s = s>0 ? ` ${s} segundos` : "";
    remaining %= (1000);
    h2.textContent = "Faltan" + mt + w + d + h + m + s + " para tu cumpleaños!!";
    if (nextBirthday < now) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
      }
    }
  }
}



let timerId = setInterval(() => {
  howManyDays(timerId);
}, 1000);

