const {validarsenha, confirmarSenha} = require('./sitemoto')

it('Testando se a senha esta certa ou nao', () => {
    expect(validarsenha("Anderson@10")).toBe(true);
});

it('senha sem numero', () => {
    expect(validarsenha("Anderson@")).toBe(false);
});

it('senha sem caracter especial', () => {
    expect(validarsenha("Anderson10")).toBe(false);
});

it('Falta a letra  maiuscula ', () => {
    expect(validarsenha("anderson@10")).toBe(false);
});

it('esta faltando caracter', () => {
    expect(validarsenha("ander")).toBe(false);
});

it('senha sem letra minuscula', () => {
    expect(validarsenha("ANDERSON@10")).toBe(false);
});

it('testando senhas iguais', () => {
    expect(confirmarSenha("Anderson@10", "Anderson@10")).toBe(true);
});

it('senha senhas erradas', () => {
    expect(confirmarSenha("Anderson@10", "anderson")).toBe(false);
});
