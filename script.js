window.onload=()=>{
  const signin= document.querySelector("#signin");
  const signup=document.querySelector("#signup");
  signin.addEventListener('click',()=>{
    const email=document.querySelector("#esignin").value;
    const password=document.querySelector("#psignin").value;
    const text=document.querySelector("#text");
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
          console.log("login");
          console.log(data)
           text.innerText="hello "+data.name+" you are logged in";
        }else if(data.status==="user not found"){
          text.innerText="user not found";
        }
        else{
          text.innerText="wrong password";
        }
        }
      )
    }
  ) 
  let accounts = [];
  signup.addEventListener('submit',function(e) {
    e.preventDefault();
    const name=document.querySelector("#nsignup").value;
    const mail=document.querySelector("#esignup").value;
    const pass=document.querySelector("#psignup").value;
    const new_user={
      name,
      mail,
      pass,
    }
    fetch("http://localhost/login-page-bootstrap/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(new_user),
    })
      .then(response => response.json())
      .then(data =>{
        if(data.status==="success"){
          console.log("signup")
        }
      })
  })
}


