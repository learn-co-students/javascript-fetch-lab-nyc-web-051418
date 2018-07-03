const token = "#"
const myIssuePage = "https://api.github.com/repos/mattzuzolo/javascript-fetch-lab/issues"

function getIssues() {
  fetch(myIssuePage)
  .then(response => response.json())
  .then(json => console.log(json))
}

function showIssues(json) {
  const issues = document.getElementById("issues")
  issues.append(`<li>Issue: <a href="${this.url}">${this.title}</a><p>${this.body}</p></li>`);
}

function createIssue() {
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  let allInfo = {"title":title, "body":body};
  fetch(myIssuePage, {
    method: "POST",
    headers: {
      authorization: `token ${getToken()}`
    },
    body: JSON.stringify(allInfo)
  }).then(response =>getIssues());
}

function showResults(json) {
    let show = `<h1>Forked here: <a href="${this.url}", ${this.url}</a>`
    let result = document.getElementById("results"),append(show);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}`, {
    method: "POST",
    headers: {
      "authorization": `token ${getToken()}}`
    }
  }.then(response => { showResults(response)
  })
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '#'
}
