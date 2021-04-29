const generateCards = groupInfo => {
  
  const manager = groupInfo.manager.map(function(include) {
    let manSection = `
      <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">${include.name}</h4>
          <h5 class="card-text">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${include.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${include.email}" class="card-link">${include.email}</a></li>
          <li class="list-group-item">Office Number: ${include.officeNumber}</li>
        </ul>
      </div>
    </div>
    `
    return manSection;
  });

  const engineer = groupInfo.engineer.map(function(include) {
    let engSection = `
      <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">${include.name}</h4>
          <h5 class="card-text">Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${include.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${include.email}" class="card-link">${include.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${include.gitHub}" target="_blank" class="card-link">${include.gitHub}</a></li>
        </ul>
      </div>
    </div>
    `
    return engSection;
  });

  const intern = groupInfo.intern.map(function(include) {
    let intSection = `
      <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">${include.name}</h4>
          <h5 class="card-text">Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${include.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${include.email}" class="card-link">${include.email}</a></li>
          <li class="list-group-item">School: ${include.school}</li>
        </ul>
      </div>
    </div>
    `
    return intSection;
  });

  return [manager.join(""), engineer.join(""), intern.join("")]

};

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