const form = document.getElementById('surveyForm');
        const submitBtn = document.getElementById('submitBtn');
        const popup = document.getElementById('popup');
        const formValues = document.getElementById('formValues');

        submitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            let values = '<ul>';
            formData.forEach((value, key) => {
                values += `<li><strong>${key}:</strong> ${value}</li>`;
            });
            values += '</ul>';
            formValues.innerHTML = values;
            popup.style.display = 'block';
        });

        document.querySelector('.close').addEventListener('click', function () {
            popup.style.display = 'none';
            form.reset();
        });