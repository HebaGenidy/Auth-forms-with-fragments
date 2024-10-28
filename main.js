function createFragment1() {
    const fragment1 = document.createDocumentFragment();
    const content1 = document.createElement('div');

    const heading1 = document.createElement('h1');
    heading1.textContent = 'Welcome Here';

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Sign in';
    loginButton.id = 'signInButton';

    const registrationButton = document.createElement('button');
    registrationButton.textContent = 'Sign up';
    registrationButton.id = 'registrationButton';

    content1.appendChild(heading1);
    content1.appendChild(loginButton);
    content1.appendChild(registrationButton);

    fragment1.appendChild(content1);
    document.getElementById('page1').appendChild(fragment1);
}



function createFragment2() {
    const formFieldsSignIn = [
        {label: "First Name", type: "text", name: "firstName"},
        {label: "Last Name", type: "text", name: "lastName"},
        {label: "Email", type: "email", name: "email"},
        {label: "Password", type: "password", name: "password"},
    ];

    const fragment2 = document.createDocumentFragment();
    const formSignIn = document.createElement('div');
    formSignIn.className = 'form-container2'; 

    const headingSignIn = document.createElement('h1');
    headingSignIn.textContent = 'Sign In';
    formSignIn.appendChild(headingSignIn);

    formFieldsSignIn.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group2'; 

        const label = document.createElement('label');
        label.textContent = field.label;

        const input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;

        formGroup.appendChild(label);
        formGroup.appendChild(input);
        formSignIn.appendChild(formGroup);
    });

    const formActions = document.createElement('div');
    formActions.className = 'form-actions2'; 

    const backButtonSignIn = document.createElement('button');
    backButtonSignIn.textContent = 'Back';
    backButtonSignIn.id = 'backButtonSignIn';
    backButtonSignIn.type = 'button';

    const submitSignIn = document.createElement('button');
    submitSignIn.textContent = 'Submit';
    submitSignIn.id = 'submitSignIn';
    submitSignIn.type = 'submit';

    formActions.appendChild(backButtonSignIn);
    formActions.appendChild(submitSignIn);
    formSignIn.appendChild(formActions);

    fragment2.appendChild(formSignIn);
    document.getElementById('page2').appendChild(fragment2);
}



function createFragment3() {
    const formFieldsSignUp = [
        {label: "Email", type: "email", name: "email"},
        {label: "Password", type: "password", name: "password"},
    ];

    const fragment3 = document.createDocumentFragment();
    const formSignUp = document.createElement('div');
    formSignUp.className = 'form-container3'; 

    const headingSignUp = document.createElement('h1');
    headingSignUp.textContent = 'Sign Up';
    formSignUp.appendChild(headingSignUp);

    formFieldsSignUp.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group3'; 

        const label = document.createElement('label');
        label.textContent = field.label;

        const input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;

        formGroup.appendChild(label);
        formGroup.appendChild(input);
        formSignUp.appendChild(formGroup);
    });

    const formActionsSignUp = document.createElement('div');
    formActionsSignUp.className = 'form-actions3'; 

    const backButtonSignUp = document.createElement('button');
    backButtonSignUp.textContent = 'Back';
    backButtonSignUp.id = 'backButtonSignUp';
    backButtonSignUp.type = 'button';

    const submitSignUp = document.createElement('button');
    submitSignUp.textContent = 'Submit';
    submitSignUp.id = 'submitSignUp';
    submitSignUp.type = 'submit';

    formActionsSignUp.appendChild(backButtonSignUp);
    formActionsSignUp.appendChild(submitSignUp);
    formSignUp.appendChild(formActionsSignUp);

    fragment3.appendChild(formSignUp);
    document.getElementById('page3').appendChild(fragment3);
}



function createFragment4() {
    const fragment4 = document.createDocumentFragment();
    const successMessageContainer = document.createElement('div');
    successMessageContainer.className = 'SuccessMassage'; 

    const successMessage = document.createElement('h1');
    successMessage.textContent = 'Operation Successful!';
    successMessageContainer.appendChild(successMessage);

    const backButton = document.createElement('button');
    backButton.textContent = 'Back to Home';
    backButton.id = 'backToHomeButton';
    backButton.type = 'button';

    successMessageContainer.appendChild(backButton);
    fragment4.appendChild(successMessageContainer);
    document.getElementById('page4').appendChild(fragment4);
}



function addEventListeners() {
    document.getElementById('signInButton').addEventListener('click', () => showPage('page2'));
    document.getElementById('registrationButton').addEventListener('click', () => showPage('page3'));
    document.getElementById('backButtonSignIn').addEventListener('click', () => showPage('page1'));
    document.getElementById('backButtonSignUp').addEventListener('click', () => showPage('page1'));

    document.getElementById('submitSignIn').addEventListener('click', (event) => {
        event.preventDefault(); 
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page4').style.display = 'flex'; 
    });

    document.getElementById('submitSignUp').addEventListener('click', (event) => {
        event.preventDefault(); 
        document.getElementById('page3').style.display = 'none';
        document.getElementById('page4').style.display = 'flex';
    });

    
    document.getElementById('backToHomeButton').addEventListener('click', () => {
        document.getElementById('page4').style.display = 'none'; 
        showPage('page1'); 
    });
}



function showPage(pageId) {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'none';
    document.getElementById(pageId).style.display = 'flex'; 
}



document.addEventListener('DOMContentLoaded', () => {
    createFragment1();
    createFragment2();
    createFragment3();
    createFragment4();
    addEventListeners();
});
