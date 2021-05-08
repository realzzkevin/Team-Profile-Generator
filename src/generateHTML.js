
function renderManagerCard(manager){
    manager.getRole();
    
    if(manager.getRole()==="Manager"){
        let card =`<li class='card'>
                        <div class = 'card-header text-center'>
                            <h2>${manager.getName()}</h2>
                            <h2><span class ='fas fa-user-tie'></span>${manager.getRole()}</h2>
                        </div>
                        <div class='card-body'>
                            <ul class='list-group'>
                                <li class='list-group-item fas fa-id-badge'>ID:${manager.getId()}</li>
                                <li class='list-group-item fas fa-at'>Email: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a>  </li>
                                <li class='list-group-item fas fa-door-open'>office number: ${manager.getOfficeNumber()}</li>
                            </ul>
                        </div>
                    </li>\n`;
        return card;
    }

    return '';

}

function renderEngineerCard(engineer){
    if(engineer.getRole()==='Engineer'){
        let card = `<li class='card'>
                        <div class = 'card-header text-center'>
                            <h2>${engineer.getName()}</h2>
                            <h2><span class ='fas fa-user-cog'></span>${engineer.getRole()}</h2>
                        </div>
                        <div class='card-body'>
                            <ul class='list-group'>
                                <li class='list-group-item fas fa-id-badge'> ID: ${engineer.getId()}</li>
                                <li class='list-group-item fas fa-at'> Email: <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a>  </li>
                                <li class='list-group-item fab fa-github'> <a href='https://github.com/${engineer.getGithub()}'>${engineer.getGithub()} </a></li>
                            </ul>
                        </div>
                    </li>\n`;

    return card;
    }

    return '';
}

function renderInternCard(intern){
    if (intern.getRole()==='Intern'){
        let card =`<li class='card'>
                        <div class = 'card-header text-center'>
                            <h2>${intern.getName()}</h2>
                            <h2><span class='fas fa-user-graduate'></span>${intern.getRole()}</h2>
                        </div>
                        <div class='card-body'>
                            <ul class='list-group'>
                                <li class='list-group-item fas fa-id-badge'>ID: ${intern.getId()}</li>
                                <li class='list-group-item fas fa-at'>Email:<a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a>    </li>
                                <li class='list-group-item fas fa-university'>${intern.getSchool()}</li>
                            </ul>
                        </div>
                    </li>\n`;
        console.log(card);

        return card;

    }

    return '';
}

function generateHTML(team){
    let list = new String;
    if(team.length){
        team.forEach(member => {
            let role = member.getRole();
            switch (role) {
                case 'Manager':
                    list += renderManagerCard(member);
                    break;
                case 'Engineer':
                    list += renderEngineerCard(member);
                    break;
                case 'Intern':
                    list += renderInternCard(member);
                default:
                    return '';
                    break;
            }            
        });
        
        let html = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
                        
                        <title>My Team</title>
                    </head>
                    <body>
                        <header class="jumbotron jumbotron-fluid">
                            <div class='container text-center'>
                                <h1>My Team</h1>
                            </div>
                        </header>
                        <main class='container-fluid'>
                            <section class='row'>
                                <ul class ="card-deck">
                                    ${list}
                                </ul>
                            </section>
                        </main>
                        <script src="https://kit.fontawesome.com/009cfbe601.js" crossorigin="anonymous"></script>
                        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
                    </body>
                    </html>`;

        return html;
    }
    return '';
}

module.exports = generateHTML;