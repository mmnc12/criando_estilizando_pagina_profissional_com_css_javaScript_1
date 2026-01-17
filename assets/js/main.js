
function updateProfileInfo(profileData) {
    console.log(profileData)
    const photo = document.querySelector('#profile-photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.querySelector('#profile-name');
    name.innerText = profileData.name;

    const job = document.querySelector('#profile-job');
    console.log(job)
    job.innerText = profileData.job;

    const location = document.querySelector('#profile-location')
    location.innerText = profileData.location;

    const phone = document.querySelector('#profile-phone');
    phone.innerText = profileData.phone;
    phone.href = `tel:${profileData.phone}`;

    const email = document.querySelector('#profile-email');
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`
}

function updateProfileSkillsHard(profileData) {
    const ul = document.querySelector('#profile-skills-hardSkills');

    if(!ul) {
        console.log("Lista de hard vazia!");
        return
    }

    ul.innerHTML = '';

    profileData.skills?.hardSkills.forEach((skill) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = skill.logo
        img.alt = skill.name;
        img.title = skill.name;

        li.appendChild(img);
        ul.appendChild(li);
    })
}
function updateProfileSkillsSoft(profileData) {
    const ul = document.querySelector('#profile-skills-softSkills');

    if(!ul) {
        console.error('Lista vazia!')
        return;
    }

    ul.innerHTML = '';

    profileData.skills?.softSkills.forEach((skill) => {
        const li = document.createElement('li');
        li.textContent = skill;
        ul.appendChild(li)
    })
}

function updateProfileLinguages(profileData) {
    const ul = document.querySelector('#linguage');

    if(!ul) {
        console.error('Lista de linguagens vazia!');
        return
    }

    ul.innerHTML = '';

    profileData.languages.forEach((linguage) => {
        const li = document.createElement('li');
        li.innerText = linguage;

        ul.appendChild(li);
    })
}

function updateProfilePortfolio(profileData) {
    const ul = document.querySelector('.portfolio');

    if(!ul) {
        console.error('Lista de portfolio vazia!');
        return;
    }

    ul.innerHTML = '';

    profileData.portfolio.forEach((portfolio) => {
        const li = document.createElement('li');
        const subTitle = document.createElement('h3');
        const a = document.createElement('a');

        subTitle.innerText = portfolio.name;
        a.href = portfolio.url;
        a.innerText = portfolio.name;

        li.append(subTitle, a);

        ul.appendChild(li);
    })
}

function updateProfileprofessionalExperience(profileData) {
    const ul = document.querySelector('#experiences');

    if(!ul) {
        console.error('Lista de experiencias vazia!');
        return;
    }

    ul.innerHTML = '';

    profileData.professionalExperience.forEach((experience) => {
        const li = document.createElement('li');

        const h3 = document.createElement('h3');
        h3.classList.add('title');
        h3.innerText = experience.name;

        const period = document.querySelector('p');
        period.classList.add('period');
        period.innerText = experience.period;

        const description = document.querySelector('p');
        description.classList.add('description');
        description.innerText = experience.description;

        li.append(h3, period, description);
        
        ul.appendChild(li)        
    })
}

(async () => {
    const profileData = await fetchProfileDate();
    updateProfileInfo(profileData);
    updateProfileSkillsSoft(profileData);
    updateProfileSkillsHard(profileData);
    updateProfileLinguages(profileData);
    updateProfilePortfolio(profileData);
    updateProfileprofessionalExperience(profileData);
})()