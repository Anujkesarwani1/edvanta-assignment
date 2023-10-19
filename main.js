// Set the theme & mode for editor
let editor = ace.edit("editor", {
    theme: "ace/theme/ambiance",
    mode: "ace/mode/javascript",
});

const copyButton = document.getElementById("copy-button");
const saveButton = document.getElementById("save-button");
const lockButton = document.getElementById("lock-button");
const runButton = document.getElementById("run-button");

// Function to copy the code from the editor
copyButton.addEventListener("click", () => {
    const codeToCopy = editor.getValue();
    navigator.clipboard.writeText(codeToCopy)
        .then(() => alert("Code copied to clipboard"))
        .catch((err) => console.error("Copy failed: ", err));
});

// Function to save the code
saveButton.addEventListener("click", () => {
    alert("Code is saved!!")
})

// Function to lock/unlock the editor
let isEditorLocked = false;
lockButton.addEventListener("click", () => {
    isEditorLocked = !isEditorLocked;
    editor.setReadOnly(isEditorLocked);
    lockButton.textContent = isEditorLocked ? "Unlock" : "Lock";
});

// Function to run the code
runButton.addEventListener("click", () => {
    try {
        const codeToRun = editor.getValue();
        const result = eval(codeToRun);
        alert("Code executed. Check result in console");
    } catch (error) {
        alert("Code execution error: " + error);
    }
});