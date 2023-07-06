describe('exercicio', () => {

  beforeEach(() => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')

  })

  it('Textarea practice ', () => {
    cy.get('input[id="name"]').type('Teste');
    cy.get('input[id="phone"]').type('99999999');
    cy.get('input[id="email"]').type('mariateste@.com');
    cy.get('input[id="password"]').type('teste');
    cy.get('textarea[id="address"]').type('Rua Teste 33, apto. 3, Vila Teste, São Paulo Brasil');
    cy.contains('button', 'Submit').click();


  })
  it('Caixa de seleção e botão de radio  practice', () => {
    cy.get('input[id="female"]').click();
    cy.get('input[id="male"]').click();
    cy.get('input[id="monday"]').click();
    cy.get('input[id="tuesday"]').click();
    cy.get('input[id="wednesday"]').click();
    cy.get('input[id="thursday"]').click();
    cy.get('input[id="friday"]').click();
    cy.get('input[id="saturday"]').click();
    cy.get('input[id="sunday"]').click();
    
  })
  it('DropDown practice', () => {
    cy.get('select').select('Norway').should('be.visible');

  })
  it('CheckBox & Radio Button practice', () => {
    cy.get('label[for="2years"]').click();
    cy.get('label[for="selenium"]').click();
    cy.get('label[for="testng"]').click();
       
})
it('File input practice', () => {
  cy.get('input[id="inputGroupFile02"]').click();
     
})

})

  