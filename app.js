// Booking simulation
const bookBtn = document.getElementById("bookBtn");
if (bookBtn) {
  bookBtn.addEventListener("click", () => {
    const doctor = document.getElementById("doctor").value;
    const patient = document.getElementById("patient").value;
    const phone = document.getElementById("phone").value;
    const time = document.getElementById("time").value;

    const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    appointments.push({doctor, patient, phone, time});
    localStorage.setItem("appointments", JSON.stringify(appointments));
    document.getElementById("msg").innerText = "Закажано успешно!";
  });
}

// Doctor dashboard
const tableBody = document.querySelector("#appointments tbody");
if (tableBody) {
  const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
  tableBody.innerHTML = appointments.map(a => <tr><td>${a.patient}</td><td>${a.phone}</td><td>${a.time}</td></tr>).join("");
}

// Chat & video simulation
const sendBtn = document.getElementById("sendBtn");
if (sendBtn) {
  const chatInput = document.getElementById("chatInput");
  const chatLog = document.getElementById("chatLog");
  sendBtn.addEventListener("click", () => {
    const msg = chatInput.value;
    if (!msg) return;
    chatLog.innerHTML += <p><b>Ти:</b> ${msg}</p>;
    chatInput.value = "";
  });
}