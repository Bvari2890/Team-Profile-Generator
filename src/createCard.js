function Card() {
    cardList = []
}

function createCard(addToEnd, classInfo) {
    const profileCard = `
    <div class="col-sm-6" style="max-width: 18rem;">
            <div class="profileCard">
                <div class="card h-100">
                    <div class="card-header text-white ${classInfo.getRole()}">
                        <h3>${classInfo.getName()}</h3>
                        <h5 class="card-title">${classInfo.getRole()}</h5>
                    </div>
                    <div class="card-body text-dark bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${classInfo.getId()} </li>
                            <li class="list-group-item">Email: <a href="mailto: ${classInfo.getEmail()}">${classInfo.getEmail()}</a> </li>
                            <li class="list-group-item">${addToEnd}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> `;

    return profileCard;
}

Card.prototype.getInfo = function (createdClass) {
    let role = createdClass.getRole();
    let cardHtml = '';
    switch (role) {
        case 'Manager':
            let officeNumber = createdClass.getOffice();
            addToEnd = `Office Number : ${officeNumber}`;
            cardHtml = createCard(addToEnd, createdClass);
            break;

        case 'Intern':
            let school = createdClass.getSchool();
            addToEnd = `School: ${school}`;
            cardHtml = createCard(addToEnd, createdClass);
            break;
        case 'Engineer':
            let github = createdClass.getGithub();
            addToEnd = `Github: <a href="${github}">${github}</a>`;
            cardHtml = createCard(addToEnd, createdClass);
            break;
    }
    return cardHtml;

}



module.exports = { Card };