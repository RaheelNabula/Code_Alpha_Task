let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnValue = e.target.innerHTML;

        if (btnValue === '=') {
            try {
                                string = eval(string);
                input.value = string;
            } catch {
                                input.value = 'Error';
            }
        } else if (btnValue === 'AC') {
                        string = '';
            input.value = string;
        } else if (btnValue === 'DEL') {
                        string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
                        string += btnValue;
            input.value = string;
        }
    });
});
