// get elements
var preObject = document.getElementById("object")
var ulList      = document.getElementById("list")

// create references
var dbRefObject = firebase.database().ref().child("object")
var dbRefList   = dbRefObject.child("hobbies")

// sync object changes
dbRefObject.on("value", snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 1);
})

// sync list changes
dbRefList.on("child_added", snap => {
  const li = document.createElement("li")
  li.innerText = snap.val()
  ulList.appendChild(li)
})
