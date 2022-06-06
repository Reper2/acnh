var msgBox = new ACMsgBox({
    title: "Lloid",
    idDiv: "acnhmsgbox",
    textWriteInProcess: true,
    lines: {
        1: ["This page hasn't finished development yet."],
        2: ["Maybe check again some other time"],
        3: ["to see if it's ready yet. Redirecting in 10s..."]
    }
});

msgBox.draw(),
console.log('Message box successfully drawn.');