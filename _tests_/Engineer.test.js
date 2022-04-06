const Engineer = require("../library/Engineer");

test('Testing the Employee Class',() => {
    const nameTestData = "TechWiz"
    const emailTestData = "tech@faang.com"
    const githubTestData = "codejs"
    const newHire = new Engineer(nameTestData,emailTestData,githubTestData)
    console.log(newHire)
    expect(typeof(newHire)).toBe("object")
    expect(newHire.name).toEqual(nameTestData)
    expect(newHire.getEmail()).toEqual(`<a href="mailto:${emailTestData}">${emailTestData}</a>`)
    expect(newHire.getName()).toEqual(nameTestData)
    expect(newHire.email).toEqual(emailTestData)
    expect(newHire.getRole()).toEqual("Engineer")
    expect(newHire.getGithub()).toEqual(`<a href="https://github.com/${githubTestData}">GithubProfile</a>`)
    expect(isNaN(newHire.getId())).toBe(false)
});

