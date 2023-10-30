let forms = document.forms[0];
console.log(forms);
forms.addEventListener("submit", (event) => {
  event.preventDefault();
  let username = event.target[0].value;
  let email = event.target[1].value;
  let phonenumber = event.target[2].value;
  let pass = event.target[3].value;
  let cpass = event.target[4].value;
  let usersdata = JSON.parse(localStorage.getItem("usersdata")) || [];

  let valid = true;

  if (username.length <= 10) {
    document.getElementsByTagName("span")[0].style.display = "block";
    document.getElementById("username").style.border = "2px solid red";
    valid = false;
  } else {
    document.getElementsByTagName("span")[0].style.display = "none";
  }
  if (
    !(
      phonenumber[0] == "9" ||
      phonenumber[0] == "8" ||
      phonenumber[0] == "7" ||
      phonenumber[0] == "6"
    ) ||
    phonenumber.length !== 10
  ) {
    document.getElementsByTagName("span")[1].style.display = "block";
    document.getElementById("phonenumber").style.border = "2px solid red";
    valid = false;
  } else {
    document.getElementsByTagName("span")[1].style.display = "none";
  }

  if (pass.length < 8) {
    document.getElementsByTagName("span")[2].style.display = "block";
    valid = false;
  } else {
    document.getElementsByTagName("span")[2].style.display = "none";
  }

  if (pass != cpass) {
    document.getElementsByTagName("span")[3].style.display = "block";
    document.getElementById("cpass").style.border = "2px solid red";
    document.getElementById("pass").style.border = "2px solid red";
    valid = false;
  } else {
    document.getElementsByTagName("span")[3].style.display = "none";
  }

  if (valid) {
    if (
      usersdata.some((v) => {
        return v.email == email;
      })
    ) {
      alert("User already exists. Please login.");
      window.open("./Login.html", "_self");
    } else {
      let objdata = {
        username: username,
        email: email,
        phonenumber: phonenumber,
        password: pass,
        confirmpassword: cpass,
      };
      usersdata.push(objdata);
      localStorage.setItem("usersdata", JSON.stringify(usersdata));
      window.open("./successfull.html", "_self");
    }
  }
});
