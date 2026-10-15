const cats = [
 {id:1,name:"Luna",age:"2 lata",status:"adoption",label:"Do adopcji",personality:"Czuła • spokojna",desc:"Miłośniczka miękkich kocyków i cichych wieczorów. Najchętniej zasypia obok człowieka.",img:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=80"},
 {id:2,name:"Filemon",age:"4 lata",status:"cafe",label:"Mieszkaniec kawiarni",personality:"Towarzyski • łakomczuch",desc:"Pierwszy wita gości i pilnuje, żeby nikt nie pił kawy bez odpowiedniej dawki głasków.",img:"https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=700&q=80"},
 {id:3,name:"Pestka",age:"8 miesięcy",status:"adoption",label:"Do adopcji",personality:"Energetyczna • ciekawska",desc:"Mała odkrywczyni, która kocha zabawki na sznurku i obserwowanie świata przez okno.",img:"https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=700&q=80"},
 {id:4,name:"Marcel",age:"5 lat",status:"cafe",label:"Mieszkaniec kawiarni",personality:"Dostojny • łagodny",desc:"Koci dżentelmen. Zwykle drzemie na parapecie, ale zawsze znajdzie czas na przywitanie.",img:"https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=700&q=80"},
 {id:5,name:"Mgiełka",age:"3 lata",status:"adoption",label:"Do adopcji",personality:"Delikatna • wierna",desc:"Na początku nieśmiała, ale gdy zaufa, zamienia się w najwierniejszą przyjaciółkę.",img:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=700&q=80"},
 {id:6,name:"Pixel",age:"1,5 roku",status:"cafe",label:"Mieszkaniec kawiarni",personality:"Psotnik • wesoły",desc:"Zawsze w centrum wydarzeń. Uwielbia kartonowe pudełka i zabawę w chowanego.",img:"https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=700&q=80"},
 {id:7,name:"Karmel",age:"6 lat",status:"adoption",label:"Do adopcji",personality:"Przytulaśny • spokojny",desc:"Wielki fan drzemek i delikatnego czesania. Idealny kompan do leniwych poranków.",img:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=700&q=80"},
 {id:8,name:"Zuzia",age:"2,5 roku",status:"cafe",label:"Mieszkanka kawiarni",personality:"Niezależna • elegancka",desc:"Sama wybiera, kiedy ma ochotę na pieszczoty. Jej ulubione miejsce to fotel przy regale.",img:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=700&q=80"},
 {id:9,name:"Bąbel",age:"10 miesięcy",status:"adoption",label:"Do adopcji",personality:"Wesoły • odważny",desc:"Mały wulkan energii z ogromnym sercem. Potrzebuje domu pełnego zabawy i czułości.",img:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=700&q=80"},
 {id:10,name:"Nori",age:"7 lat",status:"cafe",label:"Mieszkanka kawiarni",personality:"Mądra • wyciszona",desc:"Kocia seniorka z klasą. Lubi spokojne towarzystwo i ciepłe promienie słońca.",img:"https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=700&q=80"},
 {id:11,name:"Tosia",age:"1 rok",status:"adoption",label:"Do adopcji",personality:"Wścibska • czuła",desc:"Mała obserwatorka, która wszędzie zagląda. Gdy już się wybawi, chętnie wtula się w kolana.",img:"https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=700&q=80"},
 {id:12,name:"Borys",age:"3 lata",status:"adoption",label:"Do adopcji",personality:"Przyjazny • cierpliwy",desc:"Spokojny kocur, który lubi towarzystwo i powolne mruganie. Szuka domu, w którym będzie mógł rozkwitnąć.",img:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=700&q=80"}
];
const products = [
 {id:101,name:"Leśna uczta",desc:"Mokra karma z indykiem, 400 g",price:8.90,emoji:"🥫",img:"https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=500&q=80"},
 {id:102,name:"Chrupki łosoś",desc:"Pełnoporcjowa karma sucha, 1 kg",price:24.90,emoji:"🐟",img:"https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=500&q=80"},
 {id:103,name:"Kocie przysmaki",desc:"Małe kąski treningowe, 80 g",price:12.50,emoji:"🦴",img:"https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&w=500&q=80"},
 {id:104,name:"Delikatny pasztet",desc:"Karma dla wrażliwych brzuszków, 200 g",price:6.50,emoji:"🍲",img:"https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=500&q=80"}
];
const grid=document.querySelector("#cat-grid"), productGrid=document.querySelector("#product-grid");
const money=n=>n.toLocaleString("pl-PL",{style:"currency",currency:"PLN"});
const CART_KEY="mruczekikawa-cart-v1";
function loadCart(){
 try {
  const raw=JSON.parse(localStorage.getItem(CART_KEY)||"{}");
  return new Map(Object.entries(raw).map(([id,qty])=>[Number(id),Math.max(0,Number(qty)||0)]).filter(([,qty])=>qty>0));
 } catch { return new Map(); }
}
const cart=loadCart();
function saveCart(){try{localStorage.setItem(CART_KEY,JSON.stringify(Object.fromEntries(cart)));}catch{}}
function changeQty(id,delta){const next=(cart.get(id)||0)+delta;if(next<=0)cart.delete(id);else cart.set(id,next);saveCart();updateCart();}
function renderCats(){
 const q=document.querySelector("#cat-search").value.trim().toLocaleLowerCase("pl-PL");
 const filter=document.querySelector("#cat-filter").value;
 const filtered=cats.filter(c=>(filter==="all"||c.status===filter)&&`${c.name} ${c.desc} ${c.personality}`.toLocaleLowerCase("pl-PL").includes(q));
 grid.innerHTML=filtered.length?filtered.map(c=>`<article class="cat-card"><div class="cat-photo"><img src="${c.img}" alt="Kot ${c.name}" loading="lazy"><span class="cat-badge ${c.status==="adoption"?"adopt":""}">${c.label}</span></div><div class="cat-info"><div class="cat-title"><h3>${c.name}</h3><span class="cat-age">${c.age}</span></div><p>${c.desc}</p><div class="cat-meta"><span class="personality">${c.personality}</span><button class="small-btn" data-cat="${c.id}">${c.status==="adoption"?"Poznaj mnie":"Moja historia"} ↗</button></div></div></article>`).join(""):`<div class="empty-state">Nie znaleźliśmy takiego kotka. Spróbuj zmienić wyszukiwanie 🐾</div>`;
 document.querySelector("#cat-results").textContent=`Pokazano ${filtered.length} z ${cats.length} kotów`;
}
function renderProducts(){productGrid.innerHTML=products.map(p=>`<article class="product-card"><div class="product-image">${p.img?`<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','<span class=product-emoji>${p.emoji}</span>')}`:`<span class="product-emoji">${p.emoji}</span>`}</div><h3>${p.name}</h3><p>${p.desc}</p><div class="product-bottom"><span class="price">${money(p.price)}</span><button class="add-btn" data-product="${p.id}" aria-label="Dodaj ${p.name} do koszyka">+</button></div></article>`).join("");}
function updateCart(){const count=[...cart.values()].reduce((s,n)=>s+n,0);document.querySelector("#cart-count").textContent=count;document.querySelector("#cart-summary").textContent=count?`${count} szt. w koszyku · ${money(cartTotal())}`:"Twój koszyk jest pusty";}
function cartTotal(){return products.reduce((sum,p)=>sum+p.price*(cart.get(p.id)||0),0)}
function showToast(message){const toast=document.querySelector("#toast");toast.textContent=message;toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),2400)}
document.querySelector("#cat-search").addEventListener("input",renderCats);document.querySelector("#cat-filter").addEventListener("change",renderCats);
grid.addEventListener("click",e=>{const btn=e.target.closest("[data-cat]");if(!btn)return;const c=cats.find(x=>x.id===Number(btn.dataset.cat));const dlg=document.querySelector("#adoption-dialog");document.querySelector("#adoption-content").innerHTML=`<span class="eyebrow">${c.status==="adoption"?"MOŻE TO WŁAŚNIE TWÓJ KOT?":"POZNAJ NAS LEPIEJ"}</span><h2>Cześć, jestem ${c.name}!</h2><img class="modal-cat" src="${c.img}" alt="Kot ${c.name}"><p>${c.desc}</p><p><strong>Wiek:</strong> ${c.age}<br><strong>Charakter:</strong> ${c.personality}</p>${c.status==="adoption"?`<p>Opowiedz nam, jak możemy się z Tobą skontaktować. Formularz przygotuje wiadomość do zespołu adopcyjnego.</p><form class="adoption-form" data-adoption-form="${c.id}"><label>Twoje imię<input name="name" required minlength="2" placeholder="Jak masz na imię?"></label><label>Adres e-mail<input name="email" type="email" required placeholder="imie@email.com"></label><label>Wiadomość<textarea name="message" rows="3" placeholder="Napisz kilka słów o domu, który chcesz zaoferować."></textarea></label><button class="btn btn-dark" type="submit">Zapytaj o ${c.name} ↗</button></form>`:`<p>${c.name} jest stałym mieszkańcem kawiarni. Wpadnij poznać go osobiście!</p><a class="btn btn-dark" href="#o-nas">Odwiedź kawiarnię ↗</a>`}`;dlg.showModal();});
document.querySelector("#adoption-content").addEventListener("submit",e=>{
 if(!e.target.matches("[data-adoption-form]"))return;
 e.preventDefault();
 const form=e.target, cat=cats.find(c=>c.id===Number(form.dataset.adoptionForm));
 const name=form.elements.name.value.trim(), email=form.elements.email.value.trim(), message=form.elements.message.value.trim();
 const subject=encodeURIComponent(`Zapytanie adopcyjne — ${cat.name}`);
 const body=encodeURIComponent(`Dzień dobry!\\n\\nChciał(a)bym dowiedzieć się więcej o adopcji kota ${cat.name}.\\n\\nImię: ${name}\\nE-mail: ${email}\\nWiadomość: ${message||"(brak dodatkowej wiadomości)"}\\n\\nProszę o kontakt w sprawie kolejnych kroków.`);
 document.querySelector("#adoption-dialog").close();
 window.location.href=`mailto:adopcje@mruczekikawa.pl?subject=${subject}&body=${body}`;
 showToast("Przygotowano wiadomość adopcyjną w programie pocztowym.");
});
productGrid.addEventListener("click",e=>{const btn=e.target.closest("[data-product]");if(!btn)return;const id=Number(btn.dataset.product);cart.set(id,(cart.get(id)||0)+1);updateCart();showToast("Dodano produkt do koszyka ♡");});
function showCheckout(){
 const content=document.querySelector("#checkout-content");
 const entries=products.filter(p=>(cart.get(p.id)||0)>0);
 content.innerHTML=entries.length?entries.map(p=>`<div class="checkout-line"><span class="checkout-product">${p.name}<small>${money(p.price)} / szt.</small></span><span class="quantity-control"><button type="button" data-qty="${p.id}" data-delta="-1" aria-label="Zmniejsz ilość">−</button><strong>${cart.get(p.id)}</strong><button type="button" data-qty="${p.id}" data-delta="1" aria-label="Zwiększ ilość">+</button><button type="button" class="remove-item" data-remove="${p.id}" aria-label="Usuń produkt">Usuń</button></span><strong>${money(p.price*cart.get(p.id))}</strong></div>`).join("")+`<div class="checkout-total"><span>Razem</span><span>${money(cartTotal())}</span></div>`:`<p>Twój koszyk jest pusty. Dodaj coś pysznego dla swojego pupila!</p>`;
 document.querySelector("#checkout-form").style.display=entries.length?"block":"none";
 document.querySelector("#checkout-dialog").showModal();
}
document.querySelector("#checkout-content").addEventListener("click",e=>{
 const qty=e.target.closest("[data-qty]"), remove=e.target.closest("[data-remove]");
 if(qty){changeQty(Number(qty.dataset.qty),Number(qty.dataset.delta));showCheckout();}
 if(remove){cart.delete(Number(remove.dataset.remove));saveCart();updateCart();showCheckout();}
});
document.querySelector("#checkout-btn").addEventListener("click",showCheckout);
document.querySelector("#checkout-form").addEventListener("submit",e=>{
 e.preventDefault();
 const email=e.currentTarget.querySelector('input[type="email"]').value.trim();
 const lines=products.filter(p=>(cart.get(p.id)||0)>0).map(p=>`${p.name} — ${cart.get(p.id)} szt. x ${money(p.price)} = ${money(p.price*cart.get(p.id))}`);
 if(!lines.length){showToast("Koszyk jest pusty.");return;}
 const subject=encodeURIComponent("Zamówienie ze sklepiku Mruczek & Kawa");
 const body=encodeURIComponent(`Dzień dobry!\\nChcę złożyć zamówienie:\\n\\n${lines.join("\\n")}\\n\\nRazem: ${money(cartTotal())}\\nE-mail kontaktowy: ${email}\\n\\nProszę o informację dotyczącą dostępności i dostawy.`);
 document.querySelector("#checkout-dialog").close();
 window.location.href=`mailto:hej@mruczekikawa.pl?subject=${subject}&body=${body}`;
 showToast("Przygotowano wiadomość e-mail z zamówieniem.");
});
document.querySelectorAll(".modal-close").forEach(b=>b.addEventListener("click",()=>b.closest("dialog").close()));
document.querySelectorAll("dialog").forEach(d=>d.addEventListener("click",e=>{if(e.target===d)d.close()}));
const menuToggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.textContent=open?"×":"☰"});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰"}));
renderCats();renderProducts();updateCart();
