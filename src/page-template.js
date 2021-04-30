const generateCards = groupInfo => {
  console.log("generateCards", groupInfo)

  for (let i=0; i<groupInfo.length; i++){
    console.log(groupInfo[i])
      if ((groupInfo[i].manager === "manager"));
        return generateManager(groupInfo[i]);
        
      if ((groupInfo[i].engineer === "engineer"));
        return generateEngineer(groupInfo[i]);
      
      if ((groupInfo[i].intern === "intern"));
        return generateIntern(groupInfo[i]);
  };


  function generateManager(manager){
    return `
      <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">${manager.name}</h4>
          <h5 class="card-text">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>
    </div>
    `
  }

  function generateEngineer(engineer){
    return `  
      <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">${engineer.name}</h4>
          <h5 class="card-text">Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank" class="card-link">${engineer.gitHub}</a></li>
        </ul>
      </div>
    </div>
    `
  }

  function generateIntern(intern){
    return `
      <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">${intern.name}</h4>
          <h5 class="card-text">Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>
    </div>
    `
  }

  return [manager.join(""), engineer.join(""), intern.join("")]

module.exports = pageData => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css" />
        <title>Our Team</title>
      </head>
      <body>
        <header>
          <h1 class="head">My Team</h1>
        </header>
        <div class="row row-cols-auto row-cols-md-3 g-4">
        ${generateCards(pageData).join("")}
      </body>
    </html>
  `
  }
}

module.exports = generateCards;