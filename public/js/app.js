const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        let count = 0;
        count++;
        console.log(count);
        alert(`You can clicked the button only  ${count} times`);
    });
    });
