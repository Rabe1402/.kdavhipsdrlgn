let message: string = "Hello World!!"
console.log(message)
let user_name: string = "Korbinian"
const age: number = 16

let count = 0 
let counterreset_timer: number | undefined;

const button_counter = document.getElementById("counter") as HTMLButtonElement;
const originalText_counter = button_counter.textContent;

button_counter.addEventListener("click", () => {
    clearTimeout(counterreset_timer); 
    count++; 
    button_counter.textContent = "" + count; 

    counterreset_timer = setTimeout(() => {
        button_counter.textContent = originalText_counter;
        count == 0; 

    }, 5000);
});

const button_tontechnik = document.getElementById("tontechnik-button") as HTMLButtonElement;
const originalText_tontechnik = button_tontechnik.textContent;

button_tontechnik.addEventListener("click", () => {
  button_tontechnik.textContent = "to bee added!";

  
  setTimeout(() => { 
    button_tontechnik.textContent = originalText_tontechnik
    }, 2000);
  
});

const button_astro = document.getElementById("astrofotografie-button") as HTMLButtonElement;
const originalText_astro = button_astro.textContent;

button_astro.addEventListener("click", () => {
  button_astro.textContent = "to bee added!";

  setTimeout(() => {
    button_astro.textContent = originalText_astro
  }, 2000);
});

const button_coding = document.getElementById("coding-button") as HTMLButtonElement;
const originalText_coding = button_coding.textContent;

button_coding.addEventListener("click", () => {
  button_coding.textContent = "to bee added!";

  setTimeout(() => {
    button_coding.textContent = originalText_coding
  }, 2000);
});

const button_homelab = document.getElementById("homelab-button") as HTMLButtonElement;
const originalText_homelab = button_homelab.textContent;

button_homelab.addEventListener("click", () => {
  button_homelab.textContent = "to bee added!";

  setTimeout(() => {
    button_homelab.textContent = originalText_homelab
  }, 2000);
});
