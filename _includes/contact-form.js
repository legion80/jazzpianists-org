var form = document.getElementById("contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("contact-form-status");
    var data = new FormData(event.target);

    function failureHTML(errorHTML) {
        var innerHTML = `{% include contact-form-submission-failure.html %}`;
        return innerHTML.replace("~~~ERROR~~~", errorHTML);
    }

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        form.classList.add("submitted");
        if (response.ok) {
            status.innerHTML = `{% include contact-form-submission-failure.html %}`;
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = failureHTML(data["errors"].map(error => error["message"]).join("</li><li>"))
                } else {
                    status.innerHTML = failureHTML("submission occurred, responded with unknown error")
                }
            })
        }
    }).catch(error => {
        form.classList.add("submitted");
        status.innerHTML = failureHTML("fetch() call failed")
    });
}
form.addEventListener("submit", handleSubmit)
