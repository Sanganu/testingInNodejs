const Intern = require("../library/Intern");

test('Testing the Employee Class',() => {
    const nameTestData = "TechWiz"
    const emailTestData = "tech@faang.com"
    const schoolTestData = "University of Denver"
    const newHire = new Intern(nameTestData,emailTestData,schoolTestData)
    console.log(newHire)
    expect(typeof(newHire)).toBe("object")
    expect(newHire.name).toEqual(nameTestData)
    expect(newHire.getEmail()).toEqual(`<a href="mailto:${emailTestData}">${emailTestData}</a>`)
    expect(newHire.getName()).toEqual(nameTestData)
    expect(newHire.email).toEqual(emailTestData)
    expect(newHire.getRole()).toEqual("Intern")
    expect(newHire.getSchool()).toEqual(`${schoolTestData}`)
    expect(isNaN(newHire.getId())).toBe(false)
});

