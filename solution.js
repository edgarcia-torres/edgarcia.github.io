    let form = document.querySelector('#Contact_information');
    let submitBtn = document.querySelector('#submit');
    let resetBtn = document.querySelector('#reset');

    submitBtn.onclick = (event) => {
      form.classList.add('was-validated');
    };

    resetBtn.onclick = (event) => {
      form.classList.remove('was-validated');
    };

    form.phone.oninput = (event) => {
        let phone = form.phone.value;
        let r = /^((\(\d{3}\))|(\d{3}))\s?\d{3}[\s-]?\d{4}$/;
        if (r.test(phone)) {
          form.phone.setCustomValidity('');
        } else {
          form.phone.setCustomValidity('Please input a valid phone number.');
        }
      };


    form["postal-code"].oninput = (event) => {
      let postalCode = form['postal-code'].value;
      let r = /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/;
      if (r.test(postalCode)) {
        form['postal-code'].setCustomValidity('');
      } else {
        form['postal-code'].setCustomValidity('Please input a valid Canadian postal code.');
      }
    };


    let optionHiring  = document.getElementById('Hiring');

    optionHiring.onchange  = handleChange;

    function handleChange(e) {
        let salaryDiv = document.getElementById("salary");
        let Textlabel = document.createTextNode("Hourly rate: Dolar/Hour")
        let label = document.createElement("label");
        label.className ="form-label";
        let span = document.createElement("span");
        let asterisk = document.createTextNode("*");
        span.appendChild(asterisk);
        span.className = "text-danger";
        label.appendChild(span);
        label.appendChild(Textlabel);



        let input = document.createElement("input");
        input.className="form-control";
        input.setAttribute("id", "hourRate");
        input.setAttribute("name", "hourRate");
        input.setAttribute("required", "true");
        input.setAttribute("autocomplete", "50");
        input.setAttribute("placeholder", "50");
        input.setAttribute("type", "number");



        salaryDiv.appendChild(label);
        salaryDiv.appendChild(input);

    }

    let optionComment  = document.getElementById('Comment');

    optionComment.onchange  = handleChange2;

    function handleChange2(e) {
        let salaryDiv = document.getElementById("salary");
        let child = salaryDiv.firstChild;
        while (child) {
            salaryDiv.removeChild(child);
            child = salaryDiv.lastElementChild;
          }
    }

    let optionQuestion  = document.getElementById('Question');

    optionQuestion.onchange  = handleChange3;

    function handleChange3(e) {
        let salaryDiv = document.getElementById("salary");
        let child = salaryDiv.firstChild;
        while (child) {
            salaryDiv.removeChild(child);
            child = salaryDiv.lastElementChild;
          }
    }