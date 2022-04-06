const Manager = require("../library/Manager");

test('Testing the Employee Class',() => {
    const nameTestData = "TechWiz"
    const emailTestData = "tech@faang.com"
    const zoomTestData = "https://zoom.us/j/99564707973?pwd=VkhkNFh1RWNXN2x0cXh5elB4bkc4QT09"
    const newHire = new Manager(nameTestData,emailTestData,zoomTestData)
    console.log(newHire)
    expect(typeof(newHire)).toBe("object")
    expect(newHire.name).toEqual(nameTestData)
    expect(newHire.getEmail()).toEqual(`<a href="mailto:${emailTestData}">${emailTestData}</a>`)
    expect(newHire.getName()).toEqual(nameTestData)
    expect(newHire.email).toEqual(emailTestData)
    expect(newHire.getRole()).toEqual("Manager")
    expect(newHire.getZoomLink()).toBe(`${zoomTestData}`)
    expect(isNaN(newHire.getId().split("#")[1])).toBe(false)
});

