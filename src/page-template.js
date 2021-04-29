const cards = groupInfo => {
  
  const manager = groupInfo.manager.map(function(include) {
    let manSection = `
      <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">${include.name}</h4>
          <h5 class="card-text">Title: Lead Manager</h5>
          <i class="fas fa-briefcase"></i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${include.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${include.email}" class="card-link">${hire.email}</a></li>
          <li class="list-group-item">Office Number: ${include.officeNumber}</li>
        </ul>
      </div>
    </div>
      `
  })
}



module.exports = pageData => {
  return `

  `
}