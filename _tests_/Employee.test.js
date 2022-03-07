const Employee = require("../library/Employee");

test('Testing the Employee Class',() => {
    const nameTestData = "TechWiz"
    const emailTestData = "tech@faang.com"
    const newHire = new Employee(nameTestData,emailTestData)
    console.log(newHire)
    expect(typeof(newHire)).toBe("object")
    expect(newHire.name).toEqual(nameTestData)
    expect(newHire.getEmail()).toEqual(`<a href="mailto:${emailTestData}">${emailTestData}</a>`)
    expect(newHire.getName()).toEqual(nameTestData)
    expect(newHire.email).toEqual(emailTestData)
    expect(newHire.getRole()).toEqual("Employee")
    expect(isNaN(newHire.getId())).toBe(false)
});

