window.onload=()=>{
  const signin= document.querySelector("#signin");
  const signup=document.querySelector("#signup");
  signin.addEventListener('click',()=>{
    const email=document.querySelector("#esignin").value;
    const password=document.querySelector("#psignin").value;
    // console.log(email,password)
    const credential={
      email,
      password,
    }
    fetch("http://localhost/login-page-bootstrap/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credential),
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === "logged in") {
           alert("logedin");
        }else if(data.status==="user not found"){
          alert("user not found");
        }
        else{
          alert("wrong password");
        }
      }
)
}
)
}


