// code to add eventlistener to button and grab values from fields
document.querySelector("#saveButton").addEventListener("click", event => {
    const creatorUserInput = document.querySelector("#creatorInput").value
    const colorUserInput = document.querySelector("#colorLabel").value
    const shapeUserInput = document.querySelector("#shapeInput").value
    const creationUserInput = document.querySelector("#creationInput").value


    // assign keys and values to object
    const legoToSave = {
        "creator": creatorUserInput,
        "color": colorUserInput,
        "shape": shapeUserInput,
        "creation": creationUserInput
    }
  //post object to database.json
    fetch("http://localhost:3000/legos", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(legoToSave)
})
})