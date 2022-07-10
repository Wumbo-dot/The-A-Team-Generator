const generateTeam = (team) =>{
    console.log(team);

    const html = [];
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width: 20px;>
            <div class="card-header">
            ${manager.name} 
            <br/>
            <i class="fas fa-mug-hot "></i>Manager</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.employeeID}</li>
            <li class="list-group-item">Email; <span id="email"><a href="mailto: ${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item>Office Number: ${manager.officeNumber}</li>

            </ul>
    </div>
        `;
                html.push(managerHtml);
    }

    const gerneratedEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
    <div class="card" style="width: 20px;>
        <div class="card-header">
        ${engineer.name} 
        <br/>
        <i class="fas fa-glasses "></i>Engineer</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.employeeID}</li>
        <li class="list-group-item">Email; <span id="email"><a href="mailto: ${engineer.email}">${engineer.email}</a></span></li>
        <li class="list-group-item>Github Username: <a target="_blank" href="https://github.com/${engineer.githubUser}">${engineer.githubUser}</a></li>

        </ul>
    </div>
        `;
        html.push(engineerHtml);
    }
    const generateIntern = intern =>{
        console.log(intern);
        let internHtml = `
        <div class="card" style="width: 20px;>
            <div class="card-header">
            ${intern.name} 
            <br/>
            <i class="fas fa-user-graduate "></i>Manager</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.employeeID}</li>
            <li class="list-group-item">Email; <span id="email"><a href="mailto: ${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item>Office Number: ${manager.officeNumber}</li>

            </ul>
    </div>
        `;
        html.push(internHtml);
    }
    for(let i = 0; i <team.length; i++){
        if(team[i].getRole() === "Manager"){
            generateManager(team[i]);
        }
        if(team[i].getRole() === "Engineer") {
            gerneratedEngineer(team[i]);
        }
        if(team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }
    return html.join('');
}
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" integrity="sha512-HqxHUkJM0SYcbvxUw5P60SzdOTy/QVwA1JJrvaXJv4q7lmbDZCmZaqz01UPOaQveoxfYRv1tHozWGPMcuTBuvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <script src="https:kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../lib/dist/style.css" />

  <title>The-A-Team-Generator</title>
  </head>
  <body>
    <header>
    <h1>The Squad</h1>

    </header>

    <main>${generateTeam(team)}</main>
</body>
</html>
    `;
}