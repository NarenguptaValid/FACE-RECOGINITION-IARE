/* =========================
   LOGIN
   ========================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value;

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("loginMessage");


        /*
         * Temporary frontend login.
         *
         * Backend authentication will replace this later.
         */

        if (username === "admin" && password === "admin") {

            message.textContent = "Login successful.";

            message.style.color = "green";


            setTimeout(function() {

                window.location.href =
                    "dashboard.html";

            }, 500);

        }

        else {

            message.textContent =
                "Invalid username or password.";

            message.style.color = "red";

        }

    });

}


/* =========================
   REGISTER STUDENT
   ========================= */

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("studentName").value;

        const studentId =
            document.getElementById("studentId").value;

        const department =
            document.getElementById("department").value;


        const message =
            document.getElementById("registerMessage");


        if (name && studentId && department) {

            message.textContent =
                "Student registration completed.";

            message.style.color = "green";


            /*
             * Backend integration will later:
             *
             * 1. Capture face data
             * 2. Save student information
             * 3. Automatically train/update the model
             *
             * No Train Model button is required.
             */

        }

    });

}


/* =========================
   ATTENDANCE
   ========================= */

function startAttendance() {

    alert(
        "Face recognition attendance will be connected to the backend."
    );

}


/* =========================
   SEARCH ATTENDANCE
   ========================= */

function searchAttendance() {

    const searchInput =
        document.getElementById("searchAttendance");

    const searchValue =
        searchInput.value.toLowerCase();


    const table =
        document.getElementById("attendanceTable");

    const rows =
        table.getElementsByTagName("tbody")[0]
             .getElementsByTagName("tr");


    for (let i = 0; i < rows.length; i++) {

        const rowText =
            rows[i].textContent.toLowerCase();


        if (rowText.includes(searchValue)) {

            rows[i].style.display = "";

        }

        else {

            rows[i].style.display = "none";

        }

    }

}