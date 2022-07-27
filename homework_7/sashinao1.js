let msg = document.querySelector('.message');

let alert_txt = `<p> This alert is attached to "male" and "female" options.</p>`;

let type = `<div>
<label for="txt">Type your gender: </label>
<input type="text" name="txt" id="txt" />
</div>`;

let options = document.querySelectorAll('input[name="gender"]');

options.forEach((option) => {
  option.addEventListener('change', function () {
    let value = this.value;

    switch (value) {
      case 'male':
        msg.innerHTML = alert_txt;
        msg.classList.add('alert');
        msg.classList.remove('type');
        break;

      case 'female':
        msg.innerHTML = alert_txt;
        msg.classList.add('alert');
        msg.classList.remove('type');
        break;

      case 'other':
        msg.innerHTML = type;
        msg.classList.add('type');
        msg.classList.remove('alert');
        break;

      default:
        break;
    }
  });
});
